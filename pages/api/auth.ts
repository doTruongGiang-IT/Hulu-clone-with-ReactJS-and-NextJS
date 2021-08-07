import { NextApiRequest, NextApiResponse } from 'next';
import { SignInFormat, SignUpFormat, User } from '../../utils/models';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    let signInFormData: SignInFormat;
    let signUpFormData: SignUpFormat;
    let errors = [];

    const data = req.body.data;
    const users = req.body.users;
    if(data.type === "Sign in") {
        signInFormData = data;
        errors = await validateSignInForm(signInFormData, users);
    }else {
        signUpFormData = data;
        errors = await validateSignUpForm(signUpFormData, users);
    };
    if(errors.length > 0) {
        res.status(400);
        res.json({errors});
        return;
    };
    res.status(201);
    res.json({message: "Success"});
};

async function validateSignInForm(signInFormData: SignInFormat, users: Array<User>): Promise<Array<string>> {
    const errors = [];
    let index = users.findIndex(user => {
        return user.email === signInFormData.email && user.password === signInFormData.password;
    });
    if(index === -1) {
        errors.push("Your email or password is wrong. Please try again");
    };
    return errors;
};  

async function validateSignUpForm(signUpFormData: SignUpFormat, users: Array<User>): Promise<Array<string>> {
    const errors = [];
    let index = users.findIndex(user => {
        return user.email === signUpFormData.email
    });
    if(index !== -1) {
        errors.push("Email already used");
    };
    return errors;
};  