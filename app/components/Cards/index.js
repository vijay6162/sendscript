import { Box, Text, CircularProgress } from "@chakra-ui/react";

const Cards = (props) => {
  return (
    <Box
      bg="#FFFFFF"
      borderRadius={"16px"}
      boxShadow={"2px 2px 4px 4px #00000029"}
      borderWidth={"1px"}
      opacity={5}
      padding={3}
      width={"215px"}
      marginLeft = {5}
    >
      <Box
        display={"flex"}
        flexDirection="row"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box>
          <Text
            fontSize={"12px"}
            fontFamily={"Poppins"}
            fontWeight="bold"
            color="#104076"
          >
            {" "}
            {props.title}
          </Text>
          <Text fontSize={"35px"} color={props.color}>
            {props.value}
          </Text>
        </Box>
        <Box>
          <CircularProgress
            value={props.progressValue}
            marginTop={"4"}
            size="50px"
            color={props.color}
            thickness={"15px"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Cards;
