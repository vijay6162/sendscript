import React, { useState } from "react";
import AppConst from "../../../app/constants/AppConstants";
import { hocLayout } from "../../../app/components/hocLayout";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import SquareButton from "../../../app/components/SquareButton";
import { AddIcon } from "@chakra-ui/icons";

const PriscriptionSent = () => {
  return (
    <Box>
      <Box
        display={"flex"}
        flexDirection="column"
        justifyContent={"center"}
        alignItems={"center"}
        marginTop = {'15%'}
      >
        <Image src="/fax.png" alt="image" width="100px" height={'100px'} />
        <Box display="flex" flexDirection={"row"} margin={3}>
          <Text fontFamily={"Poppins"} fontSize={14} color="#104076">
            Prescription has been send by fax
          </Text>
          <Text fontFamily={"Poppins"} fontSize={14} color="#50A2DB">
            &nbsp; &ldquo;Please contact to confirm acceptance&ldquo;
          </Text>
        </Box>
        <Box margin={3}>
            <SquareButton
                buttonTitle={AppConst.PrintDocument}
                showRightIcon={false}
                iconComponent={<AddIcon fontSize={"10px"} />}
                imageComponent={
                  null
                }
                backgroundColor="#50A2DB"
                buttonTextColor="#fff"
                width="100%"
            />
        </Box>
        
      </Box>
    </Box>
  );
};

const PriscriptionSentHoc = hocLayout(PriscriptionSent);

export default PriscriptionSentHoc;
