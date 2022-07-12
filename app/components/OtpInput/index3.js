import dynamic from "next/dynamic";
const PinInput = dynamic(() => import("react-pin-input"), { ssr: false });

const OtpInput = () => {
    return(
        <>
          {
            typeof window !== "undefined" && <PinInput 
                    length={4} 
                    initialValue=""
                    secret 
                    onChange={(value, index) => {}} 
                    type="numeric" 
                    inputMode="number"
                    inputStyle={styles.inputStyle}
                    inputFocusStyle={styles.inputFocusStyle}
                    onComplete={(value, index) => {}}
                    autoSelect={true}
                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
          } 
        </>
        
    )
}

const styles = {
   
    inputStyle : {
        borderColor : '#50A2DB',
        backgroundColor : '#fff',
        margin : 20,
        borderWidth : 1,
        borderRadius : 3
    },
    inputFocusStyle : {
        borderColor : '#50A2DB',
        borderWidth : 3
    }
}

export default OtpInput;