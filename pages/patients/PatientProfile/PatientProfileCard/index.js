import { Box, Text, Image } from "@chakra-ui/react";
const patientProfileCard = () => {
  return (
    <Box
      bg="#FFFFFF"
      borderRadius={"16px"}
      boxShadow={"2px 2px 4px 4px #00000029"}
      borderWidth={"1px"}
      opacity={5}
      padding={3}
     
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent="space-between"
        padding={2}
      >
        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
          <Image
            src={"/avatar.png"}
            width="65px"
            height="65px"
            objectFit={"contain"}
            alt=""
          />
          <Box>
            <Box display={"flex"} flexDirection={"row"} justifyContent={'space-between'}>
              <Text
                fontFamily={"Poppins"}
                fontWeight={"Bold"}
                fontSize={17}
                color={"#104076"}
                marginLeft={7}
              >
                Ben Alloy
              </Text>
              <Text
                fontFamily={"Poppins"}
                fontWeight={"Regular"}
                fontSize={14}
                color={"#104076"}
                
              >
                Date Of birth : 21 Aug 1987
              </Text>
            </Box>

            <Text
              fontFamily={"Poppins"}
              fontWeight={"Regular"}
              fontSize={14}
              color={"#104076"}
              marginLeft={7}
              marginTop={2}
            >
              Address : Flat No 201, John Doe paradise, 69 Harley Street,
              London, UK.
            </Text>
          </Box>
        </Box>

        <Text
          fontFamily={"Poppins"}
          fontWeight={"Regular"}
          fontSize={14}
          color={"#104076"}
          
        >
          Gender : Male
        </Text>
        <Box>
          <Text
            fontFamily={"Poppins"}
            fontWeight={"Regular"}
            fontSize={14}
            color={"#104076"}
          >
            Contact No : +44 91716 8112
          </Text>
          <Text
            fontFamily={"Poppins"}
            fontWeight={"Regular"}
            fontSize={14}
            color={"#104076"}
            marginTop={4}
          >
            Postcode : W1G 6AQ
          </Text>
        </Box>
      </Box>
    </Box>
  );
};
export default patientProfileCard;
