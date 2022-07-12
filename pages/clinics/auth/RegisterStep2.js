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
    router.push("/clinics/dashboard");
  };
  return (
    <Flex direction={"row"}>
      <Box style={Styles.ImageBox} width={"50%"} backgroundColor="#bfdde9">
        <Image
          src="/clinic_register.png"
          height={"100vh"}
          width={"100%"}
          float="left"
          alt="Register Image"
        ></Image>
      </Box>
      <Box style={Styles.RegisterFormBox} maxHeight="100vh" overflow={"scroll"}>
        <Box>
          <Box paddingLeft="10%" paddingTop="4%">
            <Heading
              color={"#104076"}
              fontSize={"28px"}
              fontFamily={"Poppins, Bold"}
              marginTop={3}
            >
              {AppConst.ClinicHeading}
            </Heading>
          </Box>

          <Box display="flex" flexDirection={"column"} alignItems="center">
            <Box width={"80%"}>
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
                  htmlFor="Address Line 1"
                  inputId="Address Line 1"
                  inputType="text"
                  placeHolder={AppConst.Address1Placeholder}
                  label={AppConst.Address1label}
                />
              </SimpleGrid>
              <SimpleGrid columns={1}>
                <TextInput
                  htmlFor="Address Line 2"
                  inputId="Address Line 2"
                  inputType="text"
                  placeHolder={AppConst.Address2Placeholder}
                  label={AppConst.Address2label}
                />
              </SimpleGrid>
              <SimpleGrid columns={1}>
                <TextInput
                  htmlFor="Town/City"
                  inputId="Town/City"
                  inputType="text"
                  placeHolder={AppConst.TownCityPlaceholder}
                  label={AppConst.TownCityLabel}
                />
              </SimpleGrid>
              <SimpleGrid columns={1}>
                <TextInput
                  htmlFor="PostalCode"
                  inputId="PostalCode"
                  inputType="text"
                  placeHolder={AppConst.PostalCodePlaceHolder}
                  label={AppConst.PostalCodeLabel}
                />
              </SimpleGrid>

              <SimpleGrid columns={1}>
                <TextInput
                  htmlFor="ClinicTelephoneNumber"
                  inputId="ClinicTelephoneNumber"
                  inputType="text"
                  placeHolder={AppConst.ClinicTelephoneNumberPlaceholder}
                  label={AppConst.ClinicTelephoneNumberLabel}
                />
              </SimpleGrid>

              <SimpleGrid columns={1}>
                <TextInput
                  htmlFor="ClinicEmailAddress"
                  inputId="ClinicEmailAddress"
                  inputType="text"
                  placeHolder={AppConst.ClinicEmailAddressPlaceholder}
                  label={AppConst.ClinicEmailAddressLabel}
                />
              </SimpleGrid>

              <SimpleGrid columns={1}>
                <Box marginTop={4}>
                  <Text
                    fontFamily={"Poppins"}
                    margin={2}
                    color={"#104076"}
                    fontSize={14}
                  >
                    Choose clinic logo
                  </Text>
                  <Box display={"flex"} flexDirection={"row"}>
                    <CustomButton
                      buttonTitle={AppConst.ChooseFile}
                      imageIcon={false}
                      width={200}
                      fontWeight={"normal"}
                      fontSize={14}
                    />
                     <Text
                    fontFamily={"Poppins"}
                    marginTop={2}
                    marginLeft={"14px"}
                    color={"#104076"}
                    fontSize={14}
                  >
                    No file chosen
                  </Text>
                  </Box>
                 
                </Box>
              </SimpleGrid>

              <SimpleGrid columns={1}>
                <TextInput
                  htmlFor="ClinicWebsite"
                  inputId="ClinicWebsite"
                  inputType="text"
                  placeHolder={AppConst.ClinicWebsitePlaceHolder}
                  label={AppConst.ClinicWebsiteLabel}
                />
              </SimpleGrid>

              <SimpleGrid columns={1}>
                <TextInput
                  htmlFor="CqcRegisterNumber"
                  inputId="CqcRegisterNumber"
                  inputType="text"
                  placeHolder={AppConst.CqcRegisterNumberPlaceholder}
                  label={AppConst.CqcRegisterNumberLabel}
                />
              </SimpleGrid>

              <SimpleGrid columns={1}>
                <TextInput
                  htmlFor="RegisteredManagerName"
                  inputId="RegisteredManagerName"
                  inputType="text"
                  placeHolder={AppConst.RegisteredManagerNamePlaceHolder}
                  label={AppConst.RegisteredManagerNameLabel}
                />
              </SimpleGrid>

              <SimpleGrid columns={1}>
                <TextInput
                  htmlFor="NominatedIndividualName"
                  inputId="NominatedIndividualName"
                  inputType="text"
                  placeHolder={AppConst.NominatedIndividualNamePlaceHolder}
                  label={AppConst.NominatedIndividualNameLabel}
                />
              </SimpleGrid>

              <SimpleGrid columns={1}>
                <TextInput
                  htmlFor="NominatedIndividualEmail"
                  inputId="NominatedIndividualEmail"
                  inputType="text"
                  placeHolder={AppConst.NominatedIndividualEmailPlaceHolder}
                  label={AppConst.NominatedIndividualEmailLabel}
                />
              </SimpleGrid>


              <SimpleGrid columns={1}>
                <SelectPicker label={AppConst.AreaType} />
              </SimpleGrid>


              <SimpleGrid columns={1} marginTop="6">
                <Checkbox size="lg" defaultChecked>
                  {AppConst.ConsentText}
                </Checkbox>
                <Text fontSize={13} fontFamily="Poppins" marginTop={2}>
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
