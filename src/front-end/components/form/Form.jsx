import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import {
  StyledForm,
  StyledField,
  List,
  Label,
  UnderGoogleParagraph,
  BeforeGoogleParagraph,
  ToGoogle,
  Span,
} from './form.styled';
import { ToLogin } from 'front-end/pages/home/home.styled';
import googleLogo from '../../../assets/svgImage/google.svg';

const Form = ({ initialValues, validationSchema, handleSubmit }) => {
  return (
    <div>
      <div>
        <Formik
          initialValues={{ username: '', password: '' }}
          validate={values => {
            const errors = {};
            return errors;
          }}
          onSubmit={handleSubmit}
        >          
            <StyledForm>
              <BeforeGoogleParagraph>
                You can log in with your Google Account:
              </BeforeGoogleParagraph>
              <ToGoogle type="submit">
                <Span>
                  <img src={googleLogo} alt="Logo" width="17" height="18" />
                </Span>
                Google
              </ToGoogle>

              <UnderGoogleParagraph>
                Or log in using an email and password, after registering:
              </UnderGoogleParagraph>
              <List>
                <li>
                  <div>
                    <ErrorMessage name="name">asdasd</ErrorMessage>
                    <Label>Name:</Label>
                    <StyledField
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                    />
                  </div>
                </li>
                <li>
                  <div>
                    <ErrorMessage name="password"></ErrorMessage>
                    <Label>Password:</Label>
                    <StyledField
                      type="email"
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                </li>
              </List>
              <ToLogin type="submit">Log in</ToLogin>
            </StyledForm>   
        </Formik>
      </div>
    </div>
  );
};

export default Form;
