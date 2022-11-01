import Posts from '../routes/posts/model';
import configs from '../config/index'; 


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

    console.log('Cycle completed.')
    setTimeout( async() => await cycleEngine(), configs('enginecycle'));
};

const sendReminders = async() => {
    const posts = await Posts.find({
        // TODO see the posts that arent sent yet.|
    });

    for(let post of posts){
        
    }
}