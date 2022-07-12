import { Button,Text } from "@chakra-ui/react";

const CustomButton = (props) => {
  const { onHandleClick, buttonTitle,fontWeight,fontSize,imageIcon,imageComponent,width } = props;
  return (
    <Button
      backgroundColor={"#50A2DB"}
      color={"#fff"}
      size="md"
      fontFamily={"Poppins"}
      width= {width ? width : "28%"}
      borderRadius={"55px"}
      onClick={onHandleClick}
      
      
      _hover={{backgroundColor:'#50A2DB'}}
    >
      &nbsp;<Text fontWeight={fontWeight ? fontWeight : undefined} fontSize={fontSize ? fontSize : undefined}>{buttonTitle}</Text> &nbsp; {
        imageIcon && imageComponent
      } 
    </Button>
  );
};

export default CustomButton;
