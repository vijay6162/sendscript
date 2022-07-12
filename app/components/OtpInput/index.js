import React from "react";
import { PinInput } from "react-input-pin-code";

const OtpInput = () => {
  const [values, setValues] = React.useState([" ", " ", " ", " "]);

  return (
    <PinInput
      values={values}
      onChange={(value, index, values) => setValues(values)}
      size={'lg'}
      borderColor="#50A2DB"
      focusBorderColor="#50A2DB"
      validBorderColor={'#50A2DB'}
      containerStyle={styles.containerStyle}
      inputStyle={styles.inputStyle}
    />
  );
};

const styles = {
  containerStyle : {
    margin: 20,
  }, 
  inputStyle: {
    borderColor: "#50A2DB",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 3,
    margin : 10
  }
};

export default OtpInput;
