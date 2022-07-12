import React, { useState } from "react";
import AppConst from "../../../app/constants/AppConstants";
import { hocLayout } from "../../../app/components/hocLayout";
import { Box, Text, Input,Image } from "@chakra-ui/react";
import SquareButton from "../../../app/components/SquareButton";
import { AddIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const EnterEmail = () => {
  const router = useRouter();
  const goToPrescriptionSent = () => {
    router.push({
      pathname: "/SearchPharmacies/PrescriptionSent/Email",
      query: { menuItemId: 2 },
    });
  };
  return (
    <Box>
      <Box
        display={"flex"}
        flexDirection="column"
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={"10%"}
      >
        <Box>
          <Text
            fontFamily={"Poppins"}
            fontSize={20}
            fontWeight="bold"
            color="#104076"
          >
            Enter Email
          </Text>
        </Box>
        <Box marginTop={3}>
          <Text
            fontFamily={"Poppins"}
            fontSize={13}
            fontWeight="medium"
            color="#104076"
          >
            Please enter Email to proceed
          </Text>
        </Box>
        <Box
          marginTop={4}
          width="100%"
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Input
            fontSize={14}
            borderColor="#50A2DB"
            width="38%"
            height="55px"
            backgroundColor={"#fff"}
            placeholder="Enter Email"
            fontFamily={"Poppins"}
          />
        </Box>
        <Box marginTop={6}>
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

const EnterEmailHoc = hocLayout(EnterEmail);

export default EnterEmailHoc;
