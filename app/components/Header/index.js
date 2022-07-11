import { Box, Text } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";

const Header = () => {
  return (
    <Box
      display={"flex"}
      justifyContent="space-between"
      style={{ width: "100%" }}
    >
      <Box display={"flex"}>
        <Text fontFamily={"Poppins"} fontWeight="medium" color="#104076">
          Good Morning
        </Text>
        <Text
          fontFamily={"Poppins"}
          fontWeight="semibold"
          color="#104076"
          marginLeft="2"
          float={"left"}
        >
           Govind Bankani
        </Text>
      </Box>
      <Box>
        <BellIcon color="#50A2DB" fontSize={"26px"} />
      </Box>
    </Box>
  );
};

export default Header;
