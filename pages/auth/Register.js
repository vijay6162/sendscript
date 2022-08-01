import {
  Flex,
  Box,
  Image,
  Heading,
  SimpleGrid,
  Checkbox,
  Text,
  Center,
} from "@chakra-ui/react";
import Styles from "../../styles/registerStyles.js";
import SelectPicker from "../../app/components/SelectPicker";
import TextInput from "../../app/components/TextInput";
import CustomButton from "../../app/components/Button";
import AppConst from "../../app/constants/AppConstants";
import { useRouter } from "next/router";
import { Formik } from "formik";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import AppLoader from "../../app/components/Loader";
import swal from "sweetalert";
import ReCAPTCHA from "react-google-recaptcha";
import { useDispatch, useSelector } from "react-redux";
import {
  requestRegisterUser,
  responseRegisterUser,
  registerSelector,
} from "../../app/redux/slicers/RegisterSlicer";
import {
  requestToDoList,
  toDoSelector
} from "../../app/redux/slicers/ToDoSlicer";
import { FETCH_TODO_LIST } from '../../app/redux/sagas/ToDoSaga/actions'

const registerSchema = Yup.object().shape({
  userTitle: Yup.string().required("Please select an option"),
  firstName: Yup.string()
    .min(2, "First name should consist minimum of 2 characters")
    .max(50, "First name should consist maximum of 50 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Last name should consist minimum of 2 characters")
    .max(50, "Last name should consist maximum of 50 characters")
    .required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email address is required"),
  mobileNumber: Yup.string()

    .min(10, "Please enter 10 digit mobile number")
    .max(10, "Please enter 10 digit mobile number")
    .required("Mobile number is required"),
  gmcOrPrescriberNum: Yup.string().required(
    "GMC or Prescriber Number is required"
  ),
  speciality: Yup.string().required("Speciality is required"),
  clinicName: Yup.string().required("Clinic name is required"),
  streetName: Yup.string().required("Street name is required"),
  cityName: Yup.string().required("City name is required"),
  postalCode: Yup.string()
    .required("Postal code is required")
    .min(6, "Please enter 6 digit postal code")
    .max(6, "Please enter 6 digit postal code"),
  countryName: Yup.string().required("Please select your country"),
});

const countryList = [
  {
    id: 1,
    title: "Country 1",
  },
  {
    id: 2,
    title: "Country 2",
  },
  {
    id: 3,
    title: "Country 3",
  },
  {
    id: 4,
    title: "Country 4",
  },
  {
    id: 5,
    title: "Country 5",
  },
  {
    id: 6,
    title: "Country 6",
  },
  {
    id: 7,
    title: "Country 7",
  },
];

const userTitleList = [
  {
    id: 1,
    title: "Mr",
  },
  {
    id: 2,
    title: "Mrs",
  },
];

const Register = () => {

  const router = useRouter();
  const dispatch = useDispatch();
  const { registerLoader, registerResponse, registerError } =
    useSelector(registerSelector);

  const {todoresponse,todoloading} = useSelector(toDoSelector);

  console.log(todoresponse)
  
  const handleRegisterSubmit = async (postData) => {
    dispatch(requestRegisterUser(postData));
    setTimeout(() => {
      responseRegisterUser(postData)
    },3000)
  };


  const onClickButton = () => {
    dispatch(requestToDoList())
    dispatch({type : FETCH_TODO_LIST});
  }

  const onCaptchaChange = (value) => {
    console.log("Captcha value:", value);
  };

  return (
    <Flex direction={"row"}>
      <button onClick={onClickButton}>Click</button>
      <Box style={Styles.ImageBox}>
        <Image
          src="/register-right-bg.png"
          height={"100vh"}
          float="right"
          alt="Register Image"
        ></Image>
      </Box>

      <Box style={Styles.RegisterFormBox} maxHeight="100vh" overflow={"scroll"}>
        <AppLoader loading={registerLoader || todoloading} />
        <Box>
          <Box marginLeft="10%" marginTop="4%">
            <Heading
              color={"#104076"}
              fontSize={"28px"}
              fontFamily={"Poppins, Bold"}
              marginTop={3}
            >
              {AppConst.RegisterHeading}
            </Heading>
          </Box>

          <Box display="flex" flexDirection={"column"} alignItems="center">
            <Formik
              initialValues={{
                userTitle: "",
                firstName: "",
                lastName: "",
                email: "",
                mobileNumber: "",
                userProfile: "",
                gmcOrPrescriberNum: "",
                speciality: "",
                clinicName: "",
                streetName: "",
                cityName: "",
                postalCode: "",
                countryName: "",
                isUserAgreeConsent: false,
                userProfile: "D",
                password: "123456",
              }}
              validationSchema={registerSchema}
              onSubmit={(values, { setSubmitting }) => {
                handleRegisterSubmit(values);
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
                <Box width={"80%"}>
                  <form onSubmit={handleSubmit}>
                    <SimpleGrid columns={1}>
                      <SelectPicker
                        id={"userTitle"}
                        label={AppConst.TitleLabel}
                        value={values.userTitle}
                        handleOnchangeValue={handleChange}
                        options={userTitleList}
                        errorText={
                          errors.userTitle && touched.userTitle
                            ? errors.userTitle
                            : null
                        }
                      />
                    </SimpleGrid>
                    <SimpleGrid columns={2} spacing={10}>
                      <TextInput
                        htmlFor="firstName"
                        inputId="firstName"
                        inputType="text"
                        placeHolder={AppConst.FirstNamePlaceHolder}
                        label={AppConst.FirstNameLabel}
                        value={values.firstName}
                        handleOnchangeValue={handleChange}
                        errorText={
                          errors.firstName && touched.firstName
                            ? errors.firstName
                            : null
                        }
                      />
                      <TextInput
                        htmlFor="lastName"
                        inputId="lastName"
                        inputType="text"
                        placeHolder={AppConst.LastNamePlaceHolder}
                        label={AppConst.LastNameLabel}
                        value={values.lastName}
                        handleOnchangeValue={handleChange}
                        errorText={
                          errors.lastName && touched.lastName
                            ? errors.lastName
                            : null
                        }
                      />
                    </SimpleGrid>

                    <SimpleGrid columns={2} spacing={10}>
                      <>
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
                      </>
                      <TextInput
                        htmlFor="mobileNumber"
                        inputId="mobileNumber"
                        inputType="tel"
                        placeHolder={AppConst.MobileNumberPlaceHolder}
                        label={AppConst.MobileNumberLabel}
                        value={values.mobileNumber}
                        handleOnchangeValue={handleChange}
                        errorText={
                          errors.mobileNumber && touched.mobileNumber
                            ? errors.mobileNumber
                            : null
                        }
                      />
                    </SimpleGrid>

                    <SimpleGrid columns={1}>
                      <TextInput
                        htmlFor="gmcOrPrescriberNum"
                        inputId="gmcOrPrescriberNum"
                        inputType="text"
                        placeHolder={AppConst.GMCLabelPlaceHolder}
                        label={AppConst.GMCLabel}
                        value={values.gmcOrPrescriberNum}
                        handleOnchangeValue={handleChange}
                        errorText={
                          errors.gmcOrPrescriberNum &&
                          touched.gmcOrPrescriberNum
                            ? errors.gmcOrPrescriberNum
                            : null
                        }
                      />
                    </SimpleGrid>

                    <SimpleGrid columns={1}>
                      <TextInput
                        htmlFor="speciality"
                        inputId="speciality"
                        inputType="text"
                        placeHolder={AppConst.SpecialityPlaceHolder}
                        label={AppConst.SpecialityLabel}
                        value={values.speciality}
                        handleOnchangeValue={handleChange}
                        errorText={
                          errors.speciality && touched.speciality
                            ? errors.speciality
                            : null
                        }
                      />
                    </SimpleGrid>
                    <SimpleGrid columns={1}>
                      <TextInput
                        htmlFor="clinicName"
                        inputId="clinicName"
                        inputType="text"
                        placeHolder={AppConst.ClinicNamePlaceHolder}
                        label={AppConst.ClinicNameLabel}
                        value={values.clinicName}
                        handleOnchangeValue={handleChange}
                        errorText={
                          errors.clinicName && touched.clinicName
                            ? errors.clinicName
                            : null
                        }
                      />
                    </SimpleGrid>
                    <SimpleGrid columns={1}>
                      <TextInput
                        htmlFor="streetName"
                        inputId="streetName"
                        inputType="text"
                        placeHolder={AppConst.StreetPlaceHolder}
                        label={AppConst.StreetLabel}
                        value={values.streetName}
                        handleOnchangeValue={handleChange}
                        errorText={
                          errors.streetName && touched.streetName
                            ? errors.streetName
                            : null
                        }
                      />
                    </SimpleGrid>
                    <SimpleGrid columns={1}>
                      <TextInput
                        htmlFor="cityName"
                        inputId="cityName"
                        inputType="text"
                        placeHolder={AppConst.CityPlaceHolder}
                        label={AppConst.CityLabel}
                        value={values.cityName}
                        handleOnchangeValue={handleChange}
                        errorText={
                          errors.cityName && touched.cityName
                            ? errors.cityName
                            : null
                        }
                      />
                    </SimpleGrid>
                    <SimpleGrid columns={1}>
                      <TextInput
                        htmlFor="postalCode"
                        inputId="postalCode"
                        inputType="text"
                        placeHolder={AppConst.PostalCodePlaceHolder}
                        label={AppConst.PostalCodeLabel}
                        value={values.postalCode}
                        handleOnchangeValue={handleChange}
                        errorText={
                          errors.postalCode && touched.postalCode
                            ? errors.postalCode
                            : null
                        }
                      />
                    </SimpleGrid>
                    <SimpleGrid columns={1}>
                      <SelectPicker
                        id={"countryName"}
                        options={countryList}
                        label={AppConst.CountryLabel}
                        value={values.countryName}
                        handleOnchangeValue={handleChange}
                        errorText={
                          errors.countryName && touched.countryName
                            ? errors.countryName
                            : null
                        }
                      />
                    </SimpleGrid>
                    <SimpleGrid columns={1} marginTop="6">
                      <Checkbox
                        size="lg"
                        value={values.isUserAgreeConsent}
                        id="isUserAgreeConsent"
                        onChange={handleChange}
                      >
                        <Text color="#62ACDF" fontFamily="Poppins">
                          {AppConst.ConsentText}
                        </Text>
                      </Checkbox>
                      <Text
                        fontSize={13}
                        color="#104076"
                        fontFamily="Poppins"
                        marginTop={2}
                      >
                        {AppConst.ConsentSubText}
                      </Text>
                    </SimpleGrid>
                    <SimpleGrid columns={1} marginTop="6">
                      <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={onCaptchaChange}
                      />
                    </SimpleGrid>
                    <Box marginTop={7} marginBottom={7}>
                      <Center>
                        <CustomButton
                          buttonTitle={AppConst.RegisterButtonText}
                          type={"submit"}
                          disable={!values.isUserAgreeConsent || isSubmitting}
                        />
                      </Center>
                    </Box>
                  </form>
                </Box>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Register;
