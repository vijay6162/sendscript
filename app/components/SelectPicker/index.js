import { Select, Box, Text } from "@chakra-ui/react";
import * as Styles from "./selectPickerStyles";
const SelectPicker = (props) => {
  return (
    <Box marginTop="20px">
      <Text fontSize={"14px"} color={"#104076"} fontFamily={"Poppins"}>
        {props.label}
      </Text>
      <Select
        placeholder={props.placeHolder}
        style={Styles.SelectPickerStyles}
        size={"md"}
        
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </Box>
  );
};

export default SelectPicker;
