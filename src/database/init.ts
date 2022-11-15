import Role from '../routes/roles/model';
import User from '../routes/users/model';
import Center from '../routes/centers/model';
import Degree from '../routes/degrees/model';
import Subject from '../routes/subjects/model';
import Group from '../routes/groups/model';
import Subscription from '../routes/subscription/model';
import Post from '../routes/posts/model';
import Comment from '../routes/comments/model';

import roles from './json/roles';
import users from './json/users';
import centers from './json/centers';
import degrees from './json/degrees';
import subjects from './json/subjects';
import groups from './json/groups';
import subscriptions from './json/subscriptions';
import posts from './json/posts';
import comments from './json/comments';

export default async function () {

    await Role.deleteMany({});
    await Role.insertMany(roles);

    const countUsers = await User.countDocuments();
    if(countUsers === 0){
        await User.insertMany(users);
    }

    const countCenters = await Center.countDocuments();
    if(countCenters === 0){
        await Center.insertMany(centers);
    }

    const countDegrees = await Degree.countDocuments();
    if(countDegrees === 0){
        await Degree.insertMany(degrees);
    }

    const countSubjects = await Subject.countDocuments();
    if(countSubjects === 0){
        await Subject.insertMany(subjects);
    }

    const countGroups = await Group.countDocuments();
    if(countGroups === 0){
        await Group.insertMany(groups);
    }

    const countSubscriptions = await Subscription.countDocuments();
    if(countSubscriptions === 0) {
        await Subscription.insertMany(subscriptions);
    }

    const countPosts = await Post.countDocuments();
    if(countPosts === 0){
        await Post.insertMany(posts);
    }

    const countComments = await Comment.countDocuments();
    if(countComments === 0){
        await Comment.insertMany(comments);
    }
}