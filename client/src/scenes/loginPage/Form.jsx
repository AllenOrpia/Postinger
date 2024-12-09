import React from "react";
import { useState } from "react";
import { Button, TextField, useMediaQuery, Typography, Box } from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLogin } from "state";
import Dropzone from "react-dropzone/.";

// SCHEMAS
const registerSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
  location: yup.string().required("required"),
  occupation: yup.string().required("required"),
  picture: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesRegister = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  location: "",
  occupation: "",
  picture: "",
};

const initialValuesLogin = {
  email: "",
  password: "",
};

const Form = () => {
  const [pageType, setPageType] = useState("login");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";

  const handleFormSubmit = async (values, onSubmitProps) => {


    return (
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
        validationSchema={isLogin ? loginSchema : registerSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          resetForm
        }) => (
          <form onSubmit={handleSubmit}>
            <Box className="grid gap-8 grid-cols- grid-cols-subgrid"
              sx={{
                "& > div": {gridColumn: isNonMobile ? undefined : "span 4"}
              }}
            >
              
              {
                isRegister && (
                  <>
                    <TextField 
                      label="First Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstName}
                      name="firstName"
                      error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                      helperText={touched.firstName && errors.firstName}
                      sx={{ gridColumn: "span 2"}}
                    />
                    <TextField 
                      label="Last Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.lastName}
                      name="lastName"
                      error={Boolean(touched.lastName) && Boolean(errors.lastName)}
                      helperText={touched.lastName && errors.lastName}
                      sx={{ gridColumn: "span 2"}}
                    />
                    <TextField 
                      label="First Name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.firstName}
                      name="firstName"
                      error={Boolean(touched.firstName) && Boolean(errors.firstName)}
                      helperText={touched.firstName && errors.firstName}
                      sx={{ gridColumn: "span 2"}}
                    />
                  
                  </>
                )
              }
            </Box>
          </form>
        )}

      </Formik>
    );
  };

  
};

export default Form;