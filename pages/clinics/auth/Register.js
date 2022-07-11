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
import Styles from "../../../styles/registerStyles.js";
import SelectPicker from "../../../app/components/SelectPicker";
import TextInput from "../../../app/components/TextInput";
import CustomButton from "../../../app/components/Button";
import AppConst from "../../../app/constants/AppConstants";
import { useRouter } from 'next/router'


const Register = () => {
  const router = useRouter();
  const handleRegisterSubmit = () => {
    router.push('/clinics/dashboard')
  }
  return (
    <Flex direction={"row"}>
      <Box style={Styles.ImageBox} width={'50%'} backgroundColor='#bfdde9'>
        <Image
          src="/clinic_register.png"
          height={"100vh"}
          width={'100%'}
          float="left"
          alt="Register Image"
        ></Image>
      </Box>
      <Box style={Styles.RegisterFormBox} maxHeight="100vh" overflow={"scroll"}>
        <Box>
          <Box paddingLeft="10%" paddingTop="10%">
            <Heading
              color={"#104076"}
              fontSize={"28px"}
              fontFamily={"Poppins, Bold"}
              marginTop={3}
            >
              {AppConst.ClinicHeading}
            </Heading>
          </Box>

          <Box display="flex" flexDirection={"column"} alignItems="center" >
            <Box width={"80%"} >
              <SimpleGrid columns={1}>
                <SelectPicker label={AppConst.TitleLabel} />
              </SimpleGrid>

              <SimpleGrid columns={2} spacing={10}>
                <TextInput
                  htmlFor="firstName"
                  inputId="firstName"
                  inputType="text"
                  placeHolder={AppConst.ContactFirstNamePlaceHolder}
                  label={AppConst.ContactFirstNameLabel}
                />
                <TextInput
                  htmlFor="lastName"
                  inputId="lastName"
                  inputType="text"
                  placeHolder={AppConst.ContactLastNamePlaceHolder}
                  label={AppConst.ContactLastNameLabel}
                />
              </SimpleGrid>

              <SimpleGrid columns={2} spacing={10}>
                <TextInput
                  htmlFor="email"
                  inputId="email"
                  inputType="text"
                  placeHolder={AppConst.EmailPlaceHolder}
                  label={AppConst.EmailLabel}
                />
                <TextInput
                  htmlFor="phoneNumber"
                  inputId="phoneNumber"
                  inputType="text"
                  placeHolder={AppConst.MobileNumberPlaceHolder}
                  label={AppConst.MobileNumberLabel}
                />
              </SimpleGrid>
              <SimpleGrid columns={1} spacing={10}>
                <TextInput
                  htmlFor="password"
                  inputId="password"
                  inputType="text"
                  placeHolder={AppConst.PasswordPlaceHolder}
                  label={AppConst.PasswordLabel}
                />
                
              </SimpleGrid>
              <SimpleGrid columns={1} spacing={10}>
                <TextInput
                  htmlFor="confirmPassword"
                  inputId="confirmPassword"
                  inputType="text"
                  placeHolder={AppConst.ConfirmPassword}
                  label={AppConst.ConfirmPassword}
                />
                
              </SimpleGrid>
              <SimpleGrid columns={1} spacing={10}>
                <Box marginTop={7}>
                  <CustomButton onHandleClick={handleRegisterSubmit}  buttonTitle={AppConst.Next}  imageIcon={true}  imageComponent={<Image src={'/next.png'}  width={'15px'}  />}/>
                </Box>
             </SimpleGrid>
           </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Register;
