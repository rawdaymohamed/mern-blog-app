import { Schema, model } from 'mongoose';
import Joi from 'joi'

export const UserSchemaValidate = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    img: Joi.string().optional(),
    savedPosts: Joi.array().items(Joi.string()).optional(),
});

//creating an interface 
interface IUser {
    username: string,
    email: string,
    img: string,
    savedPosts: string[],
};

const usersSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    img: {
        type: String,
    },
    savedPosts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post',
        default: [],
    }],
},
    { timestamps: true }
)

export const User = model<IUser>('User', usersSchema)