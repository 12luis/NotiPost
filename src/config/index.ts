import yml from 'yaml';
import fs from 'fs';

export default function (){
    const file = fs.readFileSync(__dirname+'/server.yaml', 'utf-8');
    return yml.parse(file);
}