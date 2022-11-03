import Role from '../routes/roles/model';
import User from '../routes/users/model';

import roles from './json/roles';
import users from './json/users';

export default async function () {

    await Role.deleteMany({});
    await Role.insertMany(roles);

    const countUsers = await User.countDocuments();
    if(countUsers === 0){
        await User.insertMany(users);
    }
}