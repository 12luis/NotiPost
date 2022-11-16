import configs from '../config/index'; 
import User from '../routes/users/model';
import Post from '../routes/posts/model';
import Subscription from '../routes/subscription/model';
import { sendMail } from '../mail/reminder/reminder'


export const engine = async() => {
    try {
        console.log('Engine init.')
        await cycleEngine();
    } catch (error) {
        console.log(error);
    }
}

const cycleEngine = async() => {    
    await sendReminders();
    await closePosts();

    console.log('Cycle completed.')
    setTimeout( async() => await cycleEngine(), configs('enginecycle'));
};

const sendReminders = async() => {
    try {
        const posts = await Post.find({}).where({
            moment: true,
            notified: false,
            notifyAt: { $lt: new Date() },
            deleted: { $ne: true }
        });
        for(let post of posts){
            const subscribers:any = await Subscription.find({}).where({
                groupId: post.groupId,
                deleted: { $ne: true }
            });
            for(let subscriber of subscribers){
                const user:any = await User.findById(subscriber.userId);
                await sendMail(user, post);
            }
            await Post.updateOne({_id: post._id}, { notified: true, active:false })
        }
    } catch (error) {
        console.log(error);
    }
}

const closePosts = async() => {
    try {
        const posts = await Post.find({}).where({
            moment: true,
            finishAt: { $lt: new Date() },
            deleted: { $ne: true }
        });
        for(let post of posts){
            await Post.updateOne({_id: post._id}, { active: false, deleted: true});
        }
    } catch (error) {
        console.log(error)
    }
}