import { Button } from "@chakra-ui/react";

const CustomButton = (props) => {
  const { onHandleClick, buttonTitle,fontWeight,fontSize,imageIcon,imageComponent } = props;
  return (
    <Button
      backgroundColor={"#50A2DB"}
      color={"#fff"}
      size="md"
      fontFamily={"Poppins"}
      width="28%"
      borderRadius={"55px"}
      onClick={onHandleClick}
      fontWeight={fontWeight ? fontWeight : undefined}
      fontSize={fontSize ? fontSize : undefined}
      _hover={{backgroundColor:'#50A2DB'}}
    >
      &nbsp;{buttonTitle} &nbsp; {
        imageIcon && imageComponent
      } 
    </Button>
  );
};

export default CustomButton;
