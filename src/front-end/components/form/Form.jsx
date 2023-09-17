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
          initialValues={initialValues}
          
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting }) => (
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
                    <Label>Email:</Label>
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
                    <ErrorMessage name="email"></ErrorMessage>
                    <Label>Password:</Label>
                    <StyledField
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                </li>
              </List>
              <ToLogin type="submit">Log in</ToLogin>
            </StyledForm>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Form;
