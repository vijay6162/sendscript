import { Textarea, FormControl, FormLabel } from "@chakra-ui/react";
import styles from "./styles";
const customTextArea = (props) => {
  return (
    <FormControl marginTop="20px">
      <FormLabel
        htmlFor={props.htmlFor}
        fontSize={"14px"}
        color={"#104076"}
        fontFamily={"Poppins"}
      >
        {props.label}
      </FormLabel>
      <Textarea placeholder={props.placeHolder} size="sm"  style={styles.textArea}/>
    </FormControl>
  );
};

export default customTextArea;
