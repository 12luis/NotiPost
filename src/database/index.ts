import mongoose from 'mongoose';
import configs from '../config/index'; 
import defaultDB from './init';


export const database = async(server) => {
    try {
        const connUrl = configs('cloud') ? configs('cnn') : configs('local');
        await mongoose.connect(connUrl);
        console.log('Database is connected');

        await defaultDB();
        console.log('Database is loaded');
    } catch (error) {
        console.log(error);
    }
}