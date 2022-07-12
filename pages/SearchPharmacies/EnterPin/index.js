import React, { useState } from "react";
import AppConst from "../../../app/constants/AppConstants";
import { hocLayout } from "../../../app/components/hocLayout";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import SquareButton from "../../../app/components/SquareButton";
import { AddIcon } from "@chakra-ui/icons";
import OtpInput from '../../../app/components/OtpInput';
import { useRouter } from "next/router";

const EnterPin = () => {
  const router = useRouter();
  const goToPrescriptionSent = () => {
    router.push({
      pathname : '/SearchPharmacies/PrescriptionSent',
      query : { menuItemId : 2}
    })
  }
  return (
    <Box>
      <Box
        display={"flex"}
        flexDirection="column"
        justifyContent={"center"}
        alignItems={"center"}
        marginTop = {'10%'}
      >
        <Box>
          <Text fontFamily={"Poppins"} fontSize={20} fontWeight="bold" color="#104076">
             4 Digit pin needed
          </Text>
        </Box>
        <Box  marginTop={2}>
          <Text fontFamily={"Poppins"} fontSize={13} fontWeight="medium" color="#104076">
            Please enter 4 digit pin to proceed
          </Text>
        </Box>
        <Box marginTop={2}>
          <OtpInput />
        </Box>
        <Box marginTop={3}>
            <SquareButton
                buttonTitle={AppConst.SendScript}
                showRightIcon={false}
                iconComponent={<AddIcon fontSize={"10px"} />}
                imageComponent={<Image src={'/send_script_btn.png'} alt="image" height={'20px'} width={'20px'} />}
                backgroundColor="#50A2DB"
                buttonTextColor="#fff"
                width="100%"
                onHandleClick={goToPrescriptionSent}
            />
        </Box>
        
      </Box>
    </Box>
  );
};

const EnterPinHox = hocLayout(EnterPin);

export default EnterPinHox;
