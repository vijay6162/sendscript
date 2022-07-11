import React from "react";
import AppConst from "../../../app/constants/AppConstants";
import { hocLayout } from "../../../app/components/hocLayout";
import { AddIcon } from "@chakra-ui/icons";
import SquareButton from "../../../app/components/SquareButton";

import {
  Box,
  Heading
} from "@chakra-ui/react";
import PatientProfileCard from "./PatientProfileCard";
import PatientsTable from "./PatientsTable";
import { useRouter } from 'next/router';

const PatientProfile = () => {
  const router = useRouter();
  const goToNewPrescription = () => {
    
    router.push({
      pathname: "/patients/NewPrescription",
      query: { menuItemId: 2 },
    });
  };


  return (
    <Box display={"flex"} flexDirection="column">
      <Box display={"flex"} alignItems="center" marginTop={3} justifyContent="space-between">
        <Heading fontFamily={"Poppins"} fontWeight="semibold" fontSize={"23px"}>
          {AppConst.PatientProfile}
        </Heading>
        <SquareButton
          buttonTitle={AppConst.NewPrescription}
          showRightIcon={true}
          onHandleClick={goToNewPrescription}
          iconComponent={<AddIcon fontSize={"10px"} />}
          backgroundColor="#50A2DB"
          buttonTextColor="#fff"
        />
      </Box>

      <Box
        display={"flex"}
        flexDirection="row"
        alignItems="center"
        justifyContent={"flex-start"}
      >
        <Box marginTop={6} width={'100%'}>
            <PatientProfileCard />
            
            <PatientsTable />
        </Box>
      </Box>
    </Box>
  );
};

const PatientProfileHoc = hocLayout(PatientProfile);

export default PatientProfileHoc;