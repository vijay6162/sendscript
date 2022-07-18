import React , { useEffect } from 'react';
import { Flex, Box, Text, Image, Center, Heading } from "@chakra-ui/react";
import Styles from "../../../styles/login.module.css";
import Link from "next/link";
import CustomButton from "../../../app/components/Button";
import AppConst from "../../../app/constants/AppConstants";
import TextInput from "../../../app/components/TextInput";

const Login = () => {

  return (
    <Flex direction={"row"}>
      <Box className={Styles.ImageBox} width="50%">
        <Image src="/pharmacy_login.png" width="100%" alt="Login Image" height={'100vh'}></Image>
      </Box>

      <Box className={Styles.LoginFormBox}>
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
          <Box width="65%">
            <TextInput
              htmlFor="email"
              inputId="email"
              inputType="email"
              placeHolder={AppConst.EmailPlaceHolder}
              label={AppConst.EmailLabel}
            />

            <TextInput
              htmlFor="password"
              inputId="password"
              inputType="password"
              placeHolder={AppConst.PasswordPlaceHolder}
              label={AppConst.PasswordLabel}
            />
          </Box>
        </Box>

        <Box
          marginTop={3}
          fontFamily={"Poppins"}
          fontSize={"14px"}
          color={"#104076"}
          width="82%"
        >
          <Text textAlign={"right"}>{AppConst.ForgotPasswordText}</Text>
        </Box>

        <Box marginTop={7}>
          <Center>
            <CustomButton
              buttonTitle={AppConst.LoginButtonText}
           
            />
          </Center>
        </Box>
        <Box marginTop={3}>
          <Center>
            
              <Text fontSize={"14px"} color={"#104076"} fontFamily={"Poppins"}>
                {AppConst.RegisterText1} 
              </Text>
              <Link href="/pharmacy/auth/Register">
              <Text fontSize={"14px"} color={"#104076"} fontFamily={"Poppins"} textDecorationLine={'underline'}>
                &nbsp;{AppConst.RegisterText2}
              </Text>
            </Link>
          </Center>
        </Box>
      </Box>
    </Flex>
  );
};

export default Login;
