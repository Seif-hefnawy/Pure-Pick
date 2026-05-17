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
  message: "Passwords do not match",
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


export const ChangePasswordSchema = z.object({
  currentPassword: z.string().min(1, {
    message: "Current password is required",
  }),
  newPassword: z.string().min(8, {
    message: "Minimum 8 characters required",
  }),
  confirmPassword: z.string().min(1, {
    message: "Please confirm your new password",
  }),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});