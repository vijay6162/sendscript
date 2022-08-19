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
        value={props.value}
        onChange={props.handleOnchangeValue}
        id={props.id}
      >
        <option value="">Select {props.label}</option>
        {props && props?.options?.length && props?.options?.map((item) => {
            return(
              <option value={item.title} key={`${item.title}${item.id}`}>{item.title}</option>
            )
          })
        }
      </Select>
      {
        props.errorText &&  <Text fontSize={"12px"} color={"red"} fontFamily={"Poppins"} marginLeft={2}>
          {props.errorText}
        </Text>
      }
    </Box>
  );
};

export default SelectPicker;
