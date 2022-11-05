import Role from '../routes/roles/model';
import User from '../routes/users/model';
import Center from '../routes/centers/model';

import roles from './json/roles';
import users from './json/users';
import centers from './json/centers';

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

    
}