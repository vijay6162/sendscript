import {
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react";
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
        backgroundColor={props.backgroundColor?props.backgroundColor:undefined}
      />
    </FormControl>
  );
};

export default TextInput;
