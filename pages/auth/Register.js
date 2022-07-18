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
import { useRouter } from 'next/router'


const Register = () => {
  const router = useRouter();
  const handleRegisterSubmit = () => {
    router.push('/dashboard')
  }
  return (
    <Flex direction={"row"}>
      <Box style={Styles.ImageBox}>
        <Image
          src="/register-right-bg.png"
          height={"100vh"}
          float="right"
          alt="Register Image"
        ></Image>
      </Box>
      <Box style={Styles.RegisterFormBox} maxHeight="100vh" overflow={"scroll"}>
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
            <Box width={"80%"}>
              <SimpleGrid columns={1}>
                <SelectPicker label={AppConst.TitleLabel} />
              </SimpleGrid>

              <SimpleGrid columns={2} spacing={10}>
                <TextInput
                  htmlFor="firstName"
                  inputId="firstName"
                  inputType="text"
                  placeHolder={AppConst.FirstNamePlaceHolder}
                  label={AppConst.FirstNameLabel}
                />
                <TextInput
                  htmlFor="lastName"
                  inputId="lastName"
                  inputType="text"
                  placeHolder={AppConst.LastNamePlaceHolder}
                  label={AppConst.LastNameLabel}
                />
              </SimpleGrid>

              <SimpleGrid columns={2} spacing={10}>
                <TextInput
                  htmlFor="email"
                  inputId="email"
                  inputType="email"
                  placeHolder={AppConst.EmailPlaceHolder}
                  label={AppConst.EmailLabel}
                />
                <TextInput
                  htmlFor="mobileNumber"
                  inputId="mobileNumber"
                  inputType="tel"
                  placeHolder={AppConst.MobileNumberPlaceHolder}
                  label={AppConst.MobileNumberLabel}
                />
              </SimpleGrid>

              <SimpleGrid columns={1}>
                <TextInput
                  htmlFor="gmc"
                  inputId="gmc"
                  inputType="text"
                  placeHolder={AppConst.GMCLabelPlaceHolder}
                  label={AppConst.GMCLabel}
                />
              </SimpleGrid>
              <SimpleGrid columns={1}>
                <TextInput
                  htmlFor="speciality"
                  inputId="speciality"
                  inputType="text"
                  placeHolder={AppConst.SpecialityPlaceHolder}
                  label={AppConst.SpecialityLabel}
                />
              </SimpleGrid>
              <SimpleGrid columns={1}>
                <TextInput
                  htmlFor="clinicName"
                  inputId="clinicName"
                  inputType="text"
                  placeHolder={AppConst.ClinicNamePlaceHolder}
                  label={AppConst.ClinicNameLabel}
                />
              </SimpleGrid>
              <SimpleGrid columns={1}>
                <TextInput
                  htmlFor="Street"
                  inputId="street"
                  inputType="text"
                  placeHolder={AppConst.StreetPlaceHolder}
                  label={AppConst.StreetLabel}
                />
              </SimpleGrid>
              <SimpleGrid columns={1}>
                <TextInput
                  htmlFor="City"
                  inputId="city"
                  inputType="text"
                  placeHolder={AppConst.CityPlaceHolder}
                  label={AppConst.CityLabel}
                />
              </SimpleGrid>
              <SimpleGrid columns={1}>
                <TextInput
                  htmlFor="PostalCode"
                  inputId="postalCode"
                  inputType="text"
                  placeHolder={AppConst.PostalCodePlaceHolder}
                  label={AppConst.PostalCodeLabel}
                />
              </SimpleGrid>
              <SimpleGrid columns={1}>
                <SelectPicker label={AppConst.CountryLabel} />
              </SimpleGrid>
              <SimpleGrid columns={1} marginTop="6">
                <Checkbox size="lg" defaultChecked>
                  <Text color="#62ACDF" fontFamily="Poppins">{AppConst.ConsentText}</Text>
                </Checkbox>
                <Text fontSize={13} color="#104076" fontFamily="Poppins" marginTop={2}>
                  {AppConst.ConsentSubText}
                </Text>
              </SimpleGrid>
            </Box>
          </Box>
          <Box marginTop={7} marginBottom={7}>
            <Center>
              <CustomButton onHandleClick={handleRegisterSubmit}  buttonTitle={AppConst.RegisterButtonText} />
            </Center>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Register;
