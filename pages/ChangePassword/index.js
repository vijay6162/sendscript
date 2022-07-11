import React, { useState } from "react";
import { hocLayout } from "../../app/components/hocLayout";
import UserProfileHeader from "../../app/components/UserProfileHeader";
import { useRouter } from 'next/router';
import { Box, Text, Input,Image,Center } from "@chakra-ui/react";
import TextInput from '../../app/components/TextInput';
import AppConst from '../../app/constants/AppConstants';
import CustomButton from '../../app/components/Button';
const headerStatus = false;
const ChangePassword = () => {
  const router = useRouter();

  return (
    <Box>
        <UserProfileHeader />
        <Box display={"flex"} justifyContent={'center'} alignItems={'center'} >
          <Box width={'30%'} marginTop={50}>
            <TextInput
                htmlFor="current_password"
                inputId="current_password"
                inputType="password"
                placeHolder={"Enter your Password"}
                label='Enter Current Password'
                backgroundColor={'#fff'}
              />
               <TextInput
                htmlFor="new_password"
                inputId="new_password"
                inputType="password"
                placeHolder={'Enter New Password'}
                label={'Enter New Password'}
                backgroundColor={'#fff'}
              />
               <TextInput
                htmlFor="cnf_new_password"
                inputId="cnf_new_password"
                inputType="password"
                placeHolder={'Confirm New Password'}
                label={'Confirm New Password'}
                backgroundColor={'#fff'}
              />
              
              <Box marginTop={7}>
                <Center>
                  <CustomButton
                    buttonTitle={AppConst.Save}
                
                  />
                </Center>
              </Box>
          </Box>
         
        </Box>
    </Box>
  );
};

const ChangePasswordHoc = hocLayout(ChangePassword,headerStatus);

export default ChangePasswordHoc;
