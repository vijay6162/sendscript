import { Text, Image, Box } from "@chakra-ui/react";
import CustomMenuStyles from "./CustomMenuStyles.js";
const CustomMenuItem = (props) => {
  return (
    <Box>
      <Box display={"flex"} flexDirection="column" alignItems={"center"}>
        <Box
          style={
            props.isActive ? CustomMenuStyles.active : CustomMenuStyles.inActive
          }
        >
          <Image src={props.image} alt={props.title} width="30px" height="30px" />
        </Box>
        <Text color="#ffffff" fontSize={"14px"} fontWeight={"light"} margin="1">
          {props.title}
        </Text>
      </Box>
    </Box>
  );
};

export default CustomMenuItem;
