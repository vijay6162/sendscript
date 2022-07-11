import {
  Flex,
  Box,
  Image,
  Heading,
  SimpleGrid,
  Text,
  Center,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import TextInput from "../../../../app/components/TextInput";
import AppConst from "../../../../app/constants/AppConstants";
import CustomTextArea from "../../../../app/components/TextArea";
const addPrescriptionItem = () => {
  return (
    <Box marginLeft={10} marginRight={10}>
      <SimpleGrid columns={2} spacing={10}>
        <TextInput
          htmlFor="drugToPrescribe"
          inputId="drugToPrescribe"
          inputType="text"
          placeHolder={"Drug to prescribe"}
          label={"Drug to prescribe"}
        />
      </SimpleGrid>
      <SimpleGrid columns={2} spacing={10}>
        <TextInput
          htmlFor="dosage"
          inputId="dosage"
          inputType="text"
          placeHolder={"Dosage"}
          label={"Dosage"}
        />
        <TextInput
          htmlFor="frequency"
          inputId="frequency"
          inputType="text"
          placeHolder={"Frequency"}
          label={"Frequency"}
        />
      </SimpleGrid>
      <SimpleGrid columns={2} spacing={10} >
        <TextInput
          htmlFor="method"
          inputId="method"
          inputType="text"
          placeHolder={"Method"}
          label={"Method"}
        />
        <Box display={"flex"} justifyContent={"flex-start"} alignItems={'center'} >
         
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width="70%"
            marginTop={10}
          >
            <Text fontSize={"14px"} color={"#104076"} fontFamily={"Poppins"}>
              Type
            </Text>
            <Checkbox defaultChecked>Acute</Checkbox>

            <Checkbox>Repeat</Checkbox>
          </Box>
        </Box>
      </SimpleGrid>
      <SimpleGrid columns={2} spacing={10}>
        <TextInput
          htmlFor="duration"
          inputId="duration"
          inputType="text"
          placeHolder={"Duration"}
          label={"Duration"}
        />
        <TextInput
          htmlFor="review"
          inputId="review"
          inputType="text"
          placeHolder={"Review"}
          label={"Review"}
        />
      </SimpleGrid>
      <SimpleGrid columns={2} spacing={10}>
        <CustomTextArea placeHolder={"Comments"} label={"Comments"} />
        <CustomTextArea
          placeHolder={"Comments For Pharmacy"}
          label={"Comments For Pharmacy"}
        />
      </SimpleGrid>
    </Box>
  );
};

export default addPrescriptionItem;
