import {Schema, model} from 'mongoose';

const userSchema = new Schema ({
     firstname: {
         type: String,
         required: true
     },
     lastname: String,
     age: Number,
     img: String,
     leftcolor: String,
     rigthcolor: String
});

export default model('User', userSchema)
