import React, { useState } from "react";
import AppConst from "../../../app/constants/AppConstants";
import { hocLayout } from "../../../app/components/hocLayout";
import { Box, Text, Input, Center,Image } from "@chakra-ui/react";
import CustomButton from "../../../app/components/Button";
import { useRouter } from "next/router";

const EnterEmail = () => {
  const router = useRouter();

  return (
    <Box>
      <Box
        display={"flex"}
        flexDirection="column"
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={"10%"}
      >
        <Box width={120} height={120} borderRadius={120/2} backgroundColor="#e6eff4" >
            <Image src="/check.png" alt="image" width={"50px"} marginTop={'50%'} marginLeft={'30%'}/>
        </Box>
        <Box marginTop={5}>
          <Text
            fontFamily={"Poppins"}
            fontSize={25}
            fontWeight="bold"
            color="#104076"
          >
            Verify your email address
          </Text>
        </Box>
        <Box marginTop={3}>
          <Text
            fontFamily={"Poppins"}
            fontSize={13}
            fontWeight="semibold"
            color="#104076"
          >
            Check your email & click the link to activate your account
          </Text>
        </Box>
        <Box display="flex" flexDirection={"row"} margin={3}>
          <Text fontFamily={"Poppins"} fontSize={14} color="#104076">
            Email Id :
          </Text>
          <Text fontFamily={"Poppins"} fontSize={14} color="#50A2DB">
            &nbsp; &ldquo;user@sendscript.com&ldquo;
          </Text>
        </Box>

        <Box margin={3} width="50%">
          <Center>
            <CustomButton buttonTitle={"Click to verify"} fontWeight="normal" fontSize={13} />
          </Center>
        </Box>
      </Box>
    </Box>
  );
};

const EnterEmailHoc = hocLayout(EnterEmail);

export default EnterEmailHoc;
