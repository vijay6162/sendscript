import { Box, Image, Heading, Text, Badge } from "@chakra-ui/react";
import {
  FaStar,
  FaCircle,
  FaMapMarker,
  FaClock,
  FaPhone,
} from "react-icons/fa";



export  const StarRating = () => {
  return (
    <>
        <Box display={"flex"} flexDirection="row">
          <Box
            margin={1}
            padding={1}
            backgroundColor={"#50A2DB"}
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            borderRadius={4}
          >
            <FaStar size={14} color="#fff" />
          </Box>
          <Box
            margin={1}
            padding={1}
            backgroundColor={"#50A2DB"}
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            borderRadius={4}
          >
            <FaStar size={14} color="#fff" />
          </Box>
          <Box
            margin={1}
            padding={1}
            backgroundColor={"#50A2DB"}
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            borderRadius={4}
          >
            <FaStar size={14} color="#fff" />
          </Box>
          <Box
            margin={1}
            padding={1}
            backgroundColor={"#50A2DB"}
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            borderRadius={4}
          >
            <FaStar size={14} color="#fff" />
          </Box>
          <Box
            margin={1}
            padding={1}
            backgroundColor={"#50A2DB"}
            display={"flex"}
            justifyContent="center"
            alignItems={"center"}
            borderRadius={4}
          >
            <FaStar size={14} color="#fff" />
          </Box>
        </Box>
    </>
  );
};


const PharmacyItem = (props) => {
  
  const { item } = props;

  return (
    <Box display="flex" flexDirection={"row"} marginTop={3}>
      <Box marginRight={3}>
        <Image
          src={item?.image}
          height="130px"
          width="130px"
          borderRadius={10}
          alt="image"
          
        />
      </Box>
      <Box margin={1}>
        <Heading
          fontFamily={"Poppins"}
          fontWeight="semibold"
          fontSize={17}
          color="#104076"
          margin={1}
          letterSpacing={0.5}
        >
          {item.title}
        </Heading>
        <Box
          display="flex"
          flexDirection={"row"}
          justifyContent="flex-start"
          alignItems={"center"}
        >
          <StarRating />
          <Text
            color="#104076"
            fontFamily="Poppins"
            fontWeight="medium"
            fontSize={14}
            marginLeft={1}
          >
            {item.reviews} Reviews
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection={"row"}
          alignItems="center"
          margin={1}
        >
          <Box backgroundColor={"#00000029"} borderRadius={3} padding={1}>
            <Text fontFamily={"Poppins"} fontSize={7} color="#104076">
              &nbsp;{item.type}&nbsp;
            </Text>
          </Box>
          <Text
            fontFamily={"Poppins"}
            fontSize={9}
            color="#50A2DB"
            marginLeft={1}
            marginRight={1}
          >
            Closes in {item.close_time}
          </Text>
          <FaCircle color="#104076" fontSize={7} />
          <Text
            fontFamily={"Poppins"}
            fontWeight={"semibold"}
            fontSize={11}
            color="#104076"
            marginLeft={1}
          >
            {item.location}
          </Text>
        </Box>
        <Box display={"flex"} flexDirection="row" marginLeft={1} marginTop={2}>
          <Box display={"flex"} flexDirection="row" alignItems="center">
            <FaPhone color="#50A2DB" fontSize={9} />
            <Text fontFamily={"Poppins"} fontSize={10} color="#104076">
              &nbsp; {item.phoneNumber}
            </Text>
          </Box>
          <Box
            display={"flex"}
            flexDirection="row"
            alignItems="center"
            marginLeft={6}
          >
            <FaClock color="#50A2DB" fontSize={9} />
            <Text fontFamily={"Poppins"} fontSize={10} color="#104076">
              &nbsp; {item.openHours}
            </Text>
          </Box>
        </Box>
        <Box marginLeft={1} marginTop={2}>
          <Box display={"flex"} flexDirection="row" alignItems="center">
            <FaMapMarker color="#50A2DB" fontSize={9} />
            <Text fontFamily={"Poppins"} fontSize={10} color="#104076">
              &nbsp;{item.address}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PharmacyItem;
