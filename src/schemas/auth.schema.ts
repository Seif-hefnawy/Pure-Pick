import z, {  object } from "zod";

export const RegisterSchema = z.object({
    name:z.string()
    .nonempty('Name is Required')
    .min(3,'minlength is 3 characters')
    .max(10,'maxlength is 10 characters'),


    email : z.string()
    .nonempty('Email is Required')
    .email('invalid email'),

    password:z.string()
    .nonempty('Password is Required')
    .min(7,'minlength is 7 characters')
    .max(10,'maxlength is 10 characters'),

    rePassword:z.string()
    .nonempty('ٌRepassword is Required')
    .min(7,'minlength is 7 characters')
    .max(10,'maxlength is 10 characters'),


    phone: z.string()
    .nonempty('Phone Number Is Required')
    .regex(/^01[0125][0-9]{8}$/,'Invalid Egyptian phone number')

}).refine((data) => data.password === data.rePassword, {
  path: ['rePassword'], 
  message: "Passwords do not match", // غيرنا error لـ message ✅
});


export type RegisterSchemaType = z.infer< typeof RegisterSchema >

///////////////////////////////////////////////////////////////////////////////////




export const LoginSchema = z.object({
    


    email : z.string()
    .nonempty('Email is Required')
    .email('invalid email'),

    password:z.string()
    .nonempty('Password is Required')
    .min(7,'minlength is 7 characters')
    .max(10,'maxlength is 10 characters'),

    

})


export type LoginSchemaType = z.infer< typeof LoginSchema >

///////////////////////////////////////////////////////////////////////////////////


