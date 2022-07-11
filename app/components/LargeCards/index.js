import { Box, Text, CircularProgress,CircularProgressLabel } from "@chakra-ui/react";
import CircleIcon from "./CircleIcon";
import AppConst from "../../constants/AppConstants";
const LargeCards = (props) => {
  return (
    <Box
      bg="#FFFFFF"
      borderRadius={"16px"}
      boxShadow={"2px 2px 4px 4px #00000029"}
      borderWidth={"1px"}
      opacity={4}
      width={"205px"}
      padding={6}
      
    >
      <Box>
        <Text fontSize={"12px"} fontFamily={"Poppins"} color="#104076" fontWeight="bold">
          {" "}
          {props.title}
        </Text>
        <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <CircularProgress
            value={props.progressValue}
            marginTop={"4"}
            size="110px"
            color={props.color}
            thickness={"9px"}
          >
          <CircularProgressLabel fontFamily={"Poppins"} color="#50A2DB">300</CircularProgressLabel>
          </CircularProgress>
        </Box>
        <Box
          display={"flex"}
          flexDirection="row"
          alignItems={"center"}
          justifyContent={"space-around"}
          marginTop={"4"}
        >
            <Box>
            <Text fontSize={"9px"} fontFamily="Poppins" width="70px" fontWeight={"bold"}>
             <CircleIcon  boxSize={"2"} color="#D1D1D1"/>
             &nbsp;{AppConst.DashboardCardSubText1}
            </Text>
            </Box>

            <Box>
            <Text fontSize={"9px"} fontFamily="Poppins" width="70px" fontWeight={"bold"}>
             <CircleIcon  boxSize={"2"} color="#50A2DB"/>
             &nbsp;{AppConst.DashboardCardSubText2}
            </Text>
            </Box>

          
        </Box>
      </Box>
    </Box>
  );
};

export default LargeCards;
