import React, { useState } from "react";
import { Flex, Box, Text, Image, Center, Heading } from "@chakra-ui/react";
import Styles from "../../styles/login.module.css";
import Link from "next/link";
import CustomButton from "../../app/components/Button";
import AppConst from "../../app/constants/AppConstants";
import TextInput from "../../app/components/TextInput";
import { Formik } from "formik";
import * as Yup from "yup";
import AppLoader from "../../app/components/Loader";
import swal from "sweetalert";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email address is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password should me minimum of 6 characters")
    .max(60, "Password should me maximum of 60 characters"),
});

const Login = () => {
  const [loader, setLoader] = useState(false);

  const handleloginSubmit = (postData) => {
    setLoader(true);
    console.log(postData);
    setLoader(false);
 
  };

  return (
    <Flex direction={"row"}>
      <Box className={Styles.ImageBox}>
        <Image
          src="/login-right-bg.png"
          alt="Login Image"
          height={"100vh"}
        ></Image>
      </Box>

      <Box className={Styles.LoginFormBox}>
        <AppLoader loading={loader} />
        <Box marginLeft="17%" marginTop="20%">
          <Heading
            color={"#104076"}
            fontSize={"28px"}
            fontFamily={"Poppins, Bold"}
            marginTop={3}
          >
            {AppConst.LoginHeading}
          </Heading>
          <Text
            color={"#104076"}
            fontSize={"18x"}
            letterSpacing={0.4}
            fontFamily={"Poppins, SemiBold"}
            marginTop={3}
          >
            {AppConst.LoginSubHeading}
          </Text>
        </Box>

        <Box display="flex" flexDirection={"column"} alignItems="center">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={loginSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleloginSubmit(values);
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <Box width="65%">
                <form onSubmit={handleSubmit}>
                  <TextInput
                    htmlFor="email"
                    inputId="email"
                    inputType="email"
                    placeHolder={AppConst.EmailPlaceHolder}
                    label={AppConst.EmailLabel}
                    value={values.email}
                    handleOnchangeValue={handleChange}
                    errorText={
                      errors.email && touched.email ? errors.email : null
                    }
                  />

                  <TextInput
                    htmlFor="password"
                    inputId="password"
                    inputType="password"
                    placeHolder={AppConst.PasswordPlaceHolder}
                    label={AppConst.PasswordLabel}
                    value={values.password}
                    handleOnchangeValue={handleChange}
                    errorText={
                      errors.password && touched.password ? errors.password : null
                    }
                  />
                  <Box
                    marginTop={3}
                    fontFamily={"Poppins"}
                    fontSize={"14px"}
                    color={"#104076"}
                  >
                    <Text textAlign={"right"}>
                      {AppConst.ForgotPasswordText}
                    </Text>
                  </Box>
                  <Box marginTop={7}>
                    <Center>
                      <CustomButton
                        buttonTitle={AppConst.LoginButtonText}
                        type={"submit"}
                        disable={isSubmitting}
                      />
                    </Center>
                  </Box>
                </form>
              </Box>
            )}
          </Formik>
        </Box>

        <Box marginTop={3}>
          <Center>
            <Text fontSize={"14px"} color={"#104076"} fontFamily={"Poppins"}>
              {AppConst.RegisterText1}
            </Text>
            <Link href="/auth/Register">
              <a>
                <Text
                  fontSize={"14px"}
                  color={"#104076"}
                  fontFamily={"Poppins"}
                  textDecorationLine={"underline"}
                >
                  &nbsp;{AppConst.RegisterText2}
                </Text>
              </a>
            </Link>
          </Center>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
