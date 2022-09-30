import { Button, Text } from '@medly-components/core';
import { Form, FormFieldSchema } from '@medly-components/forms'
import { GroupAddIcon } from '@medly-components/icons';
import React from 'react'
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import { ButtonWrapper, LoginWrapper, TextWrapper } from './App.styled'

type Data = {
  email: string;
  password: string;
}

const Signup = () => {
  const navigator = useNavigate();

  const schema: FormFieldSchema = { email: { type: 'email', label: 'Email', required: true }, password: { type: 'password', label: 'Password', required: true } };
  const validationCheck = (values: Data) => {
    localStorage.setItem(values.email, values.password)
    navigator('login')
  }
  return (
    <LoginWrapper>
      <TextWrapper textVariant="h2"> Enter your details. <GroupAddIcon /></TextWrapper>
      <Form fullWidth fieldSchema={schema} isLoading={false} onSubmit={values => validationCheck(values as Data)} actionLabel="SignUp" />
      <ButtonWrapper><NavLink to={"login"} >Already Registered. </NavLink></ButtonWrapper>

    </LoginWrapper>


  )
}

export default Signup;