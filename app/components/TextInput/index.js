import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import Styles from "./TextInput.module.css";

const TextInput = (props) => {
  return (
    <FormControl marginTop="30px">
      <FormLabel
        htmlFor={props.htmlFor}
        fontSize={"14px"}
        color={"#104076"}
        fontFamily={"Poppins"}
      >
        {props.label}
      </FormLabel>
      <Input
        id={props.inputId}
        type={props.inputType}
        placeholder={props.placeHolder}
        className={Styles.input}
        size="md"
        value={props.value}
        backgroundColor={
          props.backgroundColor ? props.backgroundColor : undefined
        }
        onChange={props.handleOnchangeValue}
      />
      {
        props.errorText &&  <Text fontSize={"12px"} color={"red"} fontFamily={"Poppins"} marginLeft={2}>
          {props.errorText}
        </Text>
      }
      
    </FormControl>
  );
};

// props.handleOnchangeValue

export default TextInput;
