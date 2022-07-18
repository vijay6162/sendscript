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
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  const handleRegisterSubmit = () => {
    router.push("/pharmacy/dashboard");
  };
  return (
    <Flex direction={"row"}>
      <Box style={Styles.ImageBox} width={"50%"} backgroundColor="#bfdde9">
        <Image
          src="/pharmacy_register.png"
          height={"100vh"}
          width={"100%"}
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
              {AppConst.PharmacyRegistration}
            </Heading>
          </Box>

          <Box display="flex" flexDirection={"column"} alignItems="center">
            <Box width={"80%"}>
              <SimpleGrid columns={1} spacing={10}>
                <TextInput
                  htmlFor="PharmacyName"
                  inputId="PharmacyName"
                  inputType="text"
                  placeHolder={AppConst.PharmacyNamePlaceholder}
                  label={AppConst.PharmacyNameLabel}
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
                  htmlFor="address"
                  inputId="address"
                  inputType="text"
                  placeHolder={AppConst.AddressPlaceholder}
                  label={AppConst.Addresslabel}
                />
              </SimpleGrid>
              <SimpleGrid columns={1} spacing={10}>
                <TextInput
                  htmlFor="fax"
                  inputId="fax"
                  inputType="text"
                  placeHolder={AppConst.FaxPlaceHolder}
                  label={AppConst.Fax}
                />
              </SimpleGrid>
              <SimpleGrid columns={1} spacing={10}>
                <TextInput
                  htmlFor="gphc"
                  inputId="gphc"
                  inputType="text"
                  placeHolder={AppConst.GphcPlaceholder}
                  label={AppConst.GphcLabel}
                />
              </SimpleGrid>
              <SimpleGrid columns={1} spacing={10}>
                <TextInput
                  htmlFor="SON"
                  inputId="SON"
                  inputType="text"
                  placeHolder={AppConst.SuperIntendentPlaceholder}
                  label={AppConst.SuperIntendentLabel}
                />
              </SimpleGrid>
              <SimpleGrid columns={1} spacing={10}>
                <TextInput
                  htmlFor="SONGPHC"
                  inputId="SONGPHC"
                  inputType="text"
                  placeHolder={AppConst.SuperIntendentGPHCPlaceholderNo}
                  label={AppConst.SuperIntendentGPHCLabel}
                />
              </SimpleGrid>
              <SimpleGrid columns={1} marginTop="6">
                <Checkbox size="lg" defaultChecked>
                  <Text color="#62ACDF" fontFamily="Poppins">{AppConst.ConsentText}</Text>
                </Checkbox>
                <Text fontSize={13} color="#104076" fontFamily="Poppins" marginTop={2}>
                  {AppConst.ConsentSubText}
                </Text>
              </SimpleGrid>
              <SimpleGrid columns={1} spacing={10}>
                <Box marginTop={7}>
                  <CustomButton
                    onHandleClick={handleRegisterSubmit}
                    buttonTitle={AppConst.Submit}
                    fontWeight={"normal"}
                    fontSize={14}
                  />
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
