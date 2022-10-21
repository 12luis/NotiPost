import mongoose from 'mongoose';

export const database = async(server) => {
    try {
        const mongoConnection = (server.config.environments.cloud) ?
            server.config.environments.cnn :
            server.config.environments.local;
        await mongoose.connect(mongoConnection);
        console.log('Database is connected');
    } catch (error) {
        console.log(error);
    }
}