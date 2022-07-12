import React, { useState } from "react";
import {
  Box,
  Heading,
  Image,
  Text,
  Center,
  SimpleGrid,
} from "@chakra-ui/react";
import Cards from "../../../app/components/Cards";
import LargeCards from "../../../app/components/LargeCards";
import SquareButton from "../../../app/components/SquareButton";
import { AddIcon } from "@chakra-ui/icons";
import CustomTable from "../../../app/components/Table";
import AppConst from "../../../app/constants/AppConstants";
import { hocLayout } from "../../../app/components/hocLayout";
import CustomModal from "../../../app/components/Modal";
import { FaTimes } from "react-icons/fa";
import { useRouter } from 'next/router';

const tableHeadData = [
  "Prescription ID",
  "Patient Name",
  "Date of Prescription",
  "Clinician Name",
  "Status",
  "Actions",
];

const tableData = [
  {
    id: 1,
    PrescriptionID: "SS01238",
    PatientName: "Ben Alloy",
    DateOfPrescription: "10 Aug 2010 16 : 55 PM",
    ClinicianName: "Dr. Govind Bankani",
    Status: "Dispensed",
  },
  {
    id: 2,
    PrescriptionID: "SS01238",
    PatientName: "Ben Alloy",
    DateOfPrescription: "10 Aug 2010 16 : 55 PM",
    ClinicianName: "Dr. Govind Bankani",
    Status: "Completed",
  },
  {
    id: 3,
    PrescriptionID: "SS01238",
    PatientName: "Ben Alloy",
    DateOfPrescription: "10 Aug 2010 16 : 55 PM",
    ClinicianName: "Dr. Govind Bankani",
    Status: "Sent Via Fax",
  },
  {
    id: 4,
    PrescriptionID: "SS01238",
    PatientName: "Ben Alloy",
    DateOfPrescription: "10 Aug 2010 16 : 55 PM",
    ClinicianName: "Dr. Govind Bankani",
    Status: "Sent Via SS",
  },

  {
    id: 5,
    PrescriptionID: "SS01238",
    PatientName: "Ben Alloy",
    DateOfPrescription: "10 Aug 2010 16 : 55 PM",
    ClinicianName: "Dr. Govind Bankani",
    Status: "Cancelled",
  },
  {
    id: 6,
    PrescriptionID: "SS01238",
    PatientName: "Ben Alloy",
    DateOfPrescription: "10 Aug 2010 16 : 55 PM",
    ClinicianName: "Dr. Govind Bankani",
    Status: "Sent Via Fax",
  },
];

const ClinicProfileCard = () => {

  

  return (
    <Box
      borderWidth={1}
      borderColor={"#D5D5D5"}
      padding={2}
      borderRadius={12}
      marginTop={2}
    >
      <Box display="flex" flexDirection={"row"}>
        <Image src={"/avatar.png"} width={"80px"} objectFit="contain" />
        <Box margin={4}>
          <Text
            fontFamily={"Poppins"}
            fontWeight={"semibold"}
            fontSize={14}
            color={"#104076"}
          >
            Dr. Govind Bankani
          </Text>
          <Text
            fontFamily={"Poppins"}
            fontWeight={"regular"}
            fontSize={9}
            color={"#104076"}
          >
            General Physician
          </Text>
          <Text
            fontFamily={"Poppins"}
            fontWeight={"regular"}
            fontSize={13}
            color={"#104076"}
          >
            LEH123456
          </Text>
          <Text
            fontFamily={"Poppins"}
            fontWeight={"regular"}
            fontSize={12}
            color={"#104076"}
          >
            Mon, Wed & Fri (10am - 3pm)
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

const Dashboard = () => {

  const router = useRouter();

  const [showClinicAddModal, setShowClinicAddModal] = useState(false);

  const openClinicAddModal = () => {
    setShowClinicAddModal(true);
  };

  const closeClinicAddModal = () => {
    setShowClinicAddModal(false);
  };

  const registerClinic = () => {
    router.push({
      pathname : '/clinics/auth/RegisterStep2'
    })
  }

  return (
    <>
      <CustomModal isOpen={showClinicAddModal} onClose={closeClinicAddModal} width={'50%'} height={'50%'} top={'20%'}>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems="center"
          marginTop={3}
          justifyContent="space-between"
        >
          <Heading
            fontFamily={"Poppins"}
            fontWeight="semibold"
            fontSize={"23px"}
            color="#104076"
          >
            {AppConst.AddClinicians}
          </Heading>
          <FaTimes
            color={"#104076"}
            fontSize={20}
            borderWidth={1}
            onClick={closeClinicAddModal}
          />
        </Box>

        <Box
          display={"flex"}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          marginTop={"6%"}
        >
          <Text fontFamily={"Poppins"} color={"#50A2DB"} fontSize={13}>
            Sharing this link the clinician can register themselves
          </Text>
          <Text fontFamily={"Poppins"} color={"#50A2DB"} fontSize={13}>
            Share registration link (in the blue box)
          </Text>
          <Box margin={"3%"}>
            <SquareButton
              buttonTitle={AppConst.ShareLink}
              showRightIcon={false}
              iconComponent={<AddIcon fontSize={"10px"} color="#104076" />}
              backgroundColor="#50A2DB"
              buttonTextColor="#fff"
              onHandleClick={closeClinicAddModal}
            />
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
          <Box
            backgroundColor={"#50A2DB"}
            width={"40%"}
            height={"1px"}
            margin={2}
          />
          <Text fontFamily={"Poppins"} color={"#50A2DB"} fontSize={13}>
            &nbsp; Or &nbsp;
          </Text>
          <Box
            backgroundColor={"#50A2DB"}
            width={"40%"}
            height={"1px"}
            margin={2}
          />
        </Box>

        <Box margin={"3%"}>
          <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
            <SquareButton
              buttonTitle={AppConst.RegsiterClinic}
              showRightIcon={false}
              iconComponent={<AddIcon fontSize={"10px"} color="#104076" />}
              backgroundColor="#50A2DB"
              buttonTextColor="#fff"
              onHandleClick={registerClinic}
            />
          </Box>
        </Box>
      </CustomModal>

      <Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems="center"
          marginTop={3}
          justifyContent="space-between"
        >
          <Heading
            fontFamily={"Poppins"}
            fontWeight="semibold"
            fontSize={"23px"}
          >
            {AppConst.DashboardHeading}
          </Heading>
        </Box>

        <Box
          display={"flex"}
          flexDirection="row"
          justifyContent={"space-between"}
          alignItems="center"
          marginTop={6}
        >
          <Box>
            <LargeCards
              title={AppConst.DashboardCardText1}
              value="300"
              progressValue={60}
              color="#50A2DB"
            />
          </Box>
          <Box display={"flex"} flexDirection="row">
            <Box>
              <Box>
                <Cards
                  title={AppConst.DashboardCardText2}
                  value="102"
                  progressValue={30}
                  color="#F0A102"
                />
              </Box>

              <Box marginTop={6}>
                <Cards
                  title={AppConst.DashboardCardText6}
                  value="70"
                  progressValue={70}
                  color="#DC3545"
                />
              </Box>
            </Box>
            <Box>
              <Cards
                title={AppConst.DashboardCardText3}
                value="123"
                progressValue={60}
                color="#28A745"
              />
            </Box>
            <Box>
              <Cards
                title={AppConst.DashboardCardText4}
                value="340"
                progressValue={90}
                color="#6C63FF"
              />
            </Box>
          </Box>

          <Box
            bg="#FFFFFF"
            borderRadius={"16px"}
            boxShadow={"2px 2px 4px 4px #00000029"}
            borderWidth={"1px"}
            opacity={4}
            width={"385px"}
            marginLeft={6}
          >
            <Center>
              <Image
                src={"/dashboard_logo.png"}
                height={170}
                objectFit={"contain"}
                margin={0}
              />
            </Center>
            <Center>
              <Box width={"70%"} margin={3}>
                <Text
                  fontFamily={"Poppins"}
                  fontWeight={"semibold"}
                  fontSize={12}
                  color="#104076"
                  textAlign={"center"}
                >
                  Elite Health, 69 Harley St, London W1G 8QW, United Kingdom
                </Text>
              </Box>
            </Center>
          </Box>
        </Box>
        <Box marginTop={6}>
          <Box display={"flex"} flexDirection={"row"}>
            <Box width={"70%"}>
              <CustomTable
                tableHeadData={tableHeadData}
                tableData={tableData}
                from="clinicDashboard"
                showPagination={false}
                tableHeadBackgroundColor="#fff"
                headerType={"search"}
              />
            </Box>
            <Box>
              <Box
                bg="#FFFFFF"
                borderRadius={"16px"}
                boxShadow={"2px 2px 4px 4px #00000029"}
                borderWidth={"1px"}
                opacity={4}
                width={"385px"}
                marginLeft={6}
              >
                <Box
                  display={"flex"}
                  flexDirection="row"
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  paddingTop={6}
                  paddingLeft={6}
                  paddingRight={6}
                >
                  <Text
                    color="#104076"
                    fontFamily={"Poppins"}
                    fontWeight="bold"
                    fontSize={"15px"}
                    textTransform="none"
                  >
                    {AppConst.YourClinicians}
                  </Text>
                  <SquareButton
                    buttonTitle={AppConst.AddClinicians}
                    showRightIcon={true}
                    iconComponent={
                      <AddIcon fontSize={"10px"} color="#104076" />
                    }
                    backgroundColor="#fff"
                    buttonTextColor="##104076"
                    borderColor="#104076"
                    height={30}
                    borderRadius={20}
                    onHandleClick={openClinicAddModal}
                  />
                </Box>
                <Box padding={6}>
                  <ClinicProfileCard />
                  <ClinicProfileCard />
                  <ClinicProfileCard />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

const DashboardHoc = hocLayout(Dashboard);

export default DashboardHoc;
