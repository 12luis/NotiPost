import * as path from 'path';
import * as fs from 'fs';

import Role from '../routes/roles/model';
import User from '../routes/users/model';

export default async function () {

    const file = path.resolve(__dirname, './json/roles.json');
    const roles = JSON.parse(fs.readFileSync(file, 'utf-8'));
    await Role.deleteMany({});
    await Role.insertMany(roles);

    const countUsers = await User.countDocuments();
    if(countUsers === 0){
        const file = path.resolve(__dirname, './json/users.json');
        const users = JSON.parse(fs.readFileSync(file, 'utf-8'));
        await User.insertMany(users);
    }
}