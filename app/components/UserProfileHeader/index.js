import { Box, Image,Text } from "@chakra-ui/react";
const UserProfileHeader = (props) => {
  return (
    <>
      <Image src={props.type == 'pharmacy' ? "../pharmacy_bg.png": "../profile_banner.png"} />
      <Box position={"absolute"} top={'12%'} left={'12%'}>
        <Box borderRadius={170/2} backgroundColor={"#fff"} padding={4} width={'22%'}>
            <Box>
                <Image src="../avatar.png" width={'130px'} />   
                
            </Box>
        </Box>
        <Box width="30%">
          <Text fontFamily={"Poppins"} fontWeight={'bold'} fontSize={15} color={'#104076'}  marginTop={2} textAlign={'justify'}>Dr. Govind Bankani</Text> 
          <Text fontFamily={"Poppins"} fontSize={13} color={'#104076'} marginTop={2} textAlign={'justify'}>Cardiologist</Text> 
          <Text fontFamily={"Poppins"} fontSize={10} color={'#104076'} marginTop={2} textAlign={'justify'}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </Text>
        </Box>
        
      </Box>
    </>
  );
};

export default UserProfileHeader;
