import { Button } from "@chakra-ui/react";

const SquareButton = (props) => {
  const { onHandleClick, buttonTitle,backgroundColor,buttonTextColor,width,height,margin,borderColor,borderRadius } = props;
  return (
    <Button
      backgroundColor={backgroundColor}
      color={buttonTextColor}
      fontWeight={"light"}
      fontFamily={"Poppins"}
      borderRadius={borderRadius?borderRadius:'6px'}
      onClick={onHandleClick}
      fontSize={"13px"}
      width={width ? width : undefined}
      height={height ? height : undefined}
      margin = {margin ? margin : undefined}
      _hover={{backgroundColor}}
      borderWidth={1}
      borderColor={borderColor}
    >
     {!props.showRightIcon && props.imageComponent}  &nbsp; {buttonTitle} &nbsp; {props.showRightIcon && props.iconComponent}
    </Button>
  );
};

export default SquareButton;
