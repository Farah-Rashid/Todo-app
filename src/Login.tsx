import React from 'react';
import { Form, FormFieldSchema } from '@medly-components/forms';
import { ButtonWrapper, LoginWrapper, TextWrapper } from './App.styled';
import { useNavigate } from 'react-router';
import { Text } from '@medly-components/core';
import { NavLink } from 'react-router-dom';

type Data = {
  email: string;
  password: string;
}
interface FormData extends Record<string, string> {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const schema: FormFieldSchema = { email: { type: 'email', label: 'Email', required: true }, password: { type: 'password', label: 'Password', required: true } };
  const navigator = useNavigate();
  const validationCheck = (values: Data) => {
    console.log(values)
    const verifyPassword = localStorage.getItem(values.email)
    if (verifyPassword === values.password) {
      navigator('/login/todo', { state: { id: values.email } });
    }
    else {
      alert(" Login error ,check your email id and password")
    }
  }

  return (

    <LoginWrapper>
      <TextWrapper textVariant="h2">Enter your login details. </TextWrapper>
      <Form fullWidth fieldSchema={schema} isLoading={false} onSubmit={(values) => validationCheck(values as Data)} actionLabel="Login" />
      <ButtonWrapper><NavLink to={"/"} >Create an account. </NavLink></ButtonWrapper>

    </LoginWrapper>

  )
}
export default Login;