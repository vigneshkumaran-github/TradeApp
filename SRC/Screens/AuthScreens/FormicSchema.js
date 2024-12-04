import * as yup from 'yup';

export const SigninSchema = yup.object().shape({
  email: yup.string().email('Please enter valid email').required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export const SignupSchema = yup.object().shape({
  fullname: yup
    .string()
    .min(4, ({min}) => `FullName must be at least ${min} characters`)
    .required('FullName is required'),
  email: yup.string().email('Please enter valid email').required('Email Address is Required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
});

export const PhoneNumberSchema = yup.object().shape({
  phonenumber: yup
    .string()
    .min(10, ({min}) => `Phone Number must be at least ${min} digits`)
    .required('PhoneNumber is required'),
});

export const EmailSchema = yup.object().shape({
    email: yup.string().email('Please enter valid email').required('Email Address is Required'),
  });
