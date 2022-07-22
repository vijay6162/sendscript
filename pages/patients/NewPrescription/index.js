import React, { useState } from "react";
import AppConst from "../../../app/constants/AppConstants";
import { hocLayout } from "../../../app/components/hocLayout";
import { AddIcon } from "@chakra-ui/icons";
import SquareButton from "../../../app/components/SquareButton";

import { Box, Heading, Image, Text } from "@chakra-ui/react";
import PatientProfileCard from "../PatientProfile/PatientProfileCard";
import { useRouter } from "next/router";
import CustomTable from "../../../app/components/Table";
import { FaPhone, FaClock, FaMapMarker, FaTimes } from "react-icons/fa";
import CustomModal from "../../../app/components/Modal";
import AddPrescriptionItem from "./AddPrescriptionItem";
const tableHeadData = [
  "S.No",
  "Medicine Name",
  "Dosage",
  "Frequency",
  "Daily Dosage",
  "Duration",
  "Quantity",
  "Action",
];

const tableData = [
  {
    id: 1,
    MedicineName: "Amaxcillin",
    Dosage: "500mg",
    frequency: "Dr Vijay",
    dailyDosage: "3 per day",
    duration: "7 days",
    quantity: "21 Qty",
    methodName: "Oral",
    pharmacyComments: "To Dispense with Probiotic",
  },
  {
    id: 2,
    MedicineName: "Amaxcillin",
    Dosage: "500mg",
    frequency: "Dr Vijay",
    dailyDosage: "3 per day",
    duration: "7 days",
    quantity: "21 Qty",
    methodName: "Oral",
    pharmacyComments: "To Dispense with Probiotic",
  },
  {
    id: 3,
    MedicineName: "Amaxcillin",
    Dosage: "500mg",
    frequency: "Dr Vijay",
    dailyDosage: "3 per day",
    duration: "7 days",
    quantity: "21 Qty",
    methodName: "Oral",
    pharmacyComments: "To Dispense with Probiotic",
  },
  {
    id: 4,
    MedicineName: "Amaxcillin",
    Dosage: "500mg",
    frequency: "Dr Vijay",
    dailyDosage: "3 per day",
    duration: "7 days",
    quantity: "21 Qty",
    methodName: "Oral",
    pharmacyComments: "To Dispense with Probiotic",
  },
];

const NewPrescription = () => {
  const router = useRouter();

  const [showModal, setShowModalValue] = useState(false);
  const [footerCards, setShowFooterCards] = useState(false);

  const openNewPresciptionModal = () => {
    setShowModalValue(true);
  };

  const closeNewPresciptionModal = () => {
    setShowModalValue(false);
  };

  const handleNext = () => {
    setShowFooterCards(true);
  };

  const handleSearchPharmacyClick = () => {
    router.push({
      pathname: "/SearchPharmacies",
      query: { menuItemId: 2 },
    });
  };

  return (
    <>
      <CustomModal
        isOpen={showModal}
        onOpen={openNewPresciptionModal}
        onClose={closeNewPresciptionModal}
        
      >
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
            {AppConst.AddItem}
          </Heading>
        
        </Box>
        <AddPrescriptionItem  closeNewPresciptionModal = {closeNewPresciptionModal} />
      </CustomModal>
      <Box display={"flex"} flexDirection="column">
        <Box
          display={"flex"}
          alignItems="center"
          marginTop={3}
          justifyContent="space-between"
        >
          <Heading
            fontFamily={"Poppins"}
            fontWeight="semibold"
            fontSize={"23px"}
          >
            {AppConst.NewPrescription}
          </Heading>
          {!footerCards && (
            <Box display={"flex"} flexDirection={"row"}>
              <Box marginRight={6}>
                <SquareButton
                  buttonTitle={AppConst.Save}
                  showRightIcon={false}
                  iconComponent={<AddIcon fontSize={"10px"} />}
                  imageComponent={
                    <Image
                      src={"/save.png"}
                      width={"16px"}
                      objectFit="contain"
                      alt=""
                    />
                  }
                  backgroundColor="#50A2DB"
                  buttonTextColor="#fff"
                />
              </Box>
              <Box>
                <SquareButton
                  buttonTitle={AppConst.Next}
                  showRightIcon={false}
                  iconComponent={<AddIcon fontSize={"10px"} />}
                  imageComponent={
                    <Image
                      src={"/next.png"}
                      width={"16px"}
                      objectFit="contain"
                      alt=""
                    />
                  }
                  backgroundColor="#50A2DB"
                  buttonTextColor="#fff"
                  onHandleClick={handleNext}
                />
              </Box>
            </Box>
          )}
          {footerCards && (
            <Box display={"flex"} flexDirection={"row"}>
              <Box marginRight={6}>
                <SquareButton
                  buttonTitle={AppConst.SearchPharmacy}
                  showRightIcon={false}
                  iconComponent={<AddIcon fontSize={"10px"} />}
                  imageComponent={
                    <Image
                      src={"/search.png"}
                      width={"16px"}
                      objectFit="contain"
                      alt=""
                    />
                  }
                  backgroundColor="#50A2DB"
                  buttonTextColor="#fff"
                  onHandleClick={handleSearchPharmacyClick}
                />
              </Box>
            </Box>
          )}
        </Box>

        <Box>
          <Box marginTop={6} width={"100%"}>
            <PatientProfileCard />
          </Box>
        </Box>
        <Box marginTop={6}>
          <CustomTable
            headerType={"withoutSearch"}
            tableHeadData={tableHeadData}
            tableHeadBackgroundColor="#50A2DB"
            tableData={tableData}
            from="newPrescription"
            showPagination={true}
            handleOpenNewPresciptionModal={openNewPresciptionModal}
          />
        </Box>

        {footerCards && (
          <Box display={"flex"} flexDirection={"row"} marginTop={6}>
            <Box
              bg="#FFFFFF"
              borderRadius={"16px"}
              boxShadow={"2px 2px 4px 4px #00000029"}
              borderWidth={"1px"}
              opacity={5}
              padding={3}
              width={"28%"}
            >
              <Text fontFamily="Poppins" fontSize={11} color="#50A2DB">
                Clinic Details
              </Text>
              <Text
                fontFamily={"Poppins"}
                fontWeight={"Bold"}
                fontSize={17}
                color={"#104076"}
                marginTop={1}
              >
                London Elite Health
              </Text>
              <Box display={"flex"} flexDirection="row" marginTop={1}>
                <Box display={"flex"} flexDirection="row" alignItems="center">
                  <FaPhone color="#50A2DB" fontSize={9} />
                  <Text fontFamily={"Poppins"} fontSize={10} color="#104076">
                    &nbsp; +44 20 7222 1589
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
                    &nbsp; Opens 24 Hours
                  </Text>
                </Box>
              </Box>
              <Box marginTop={2}>
                <Box display={"flex"} flexDirection="row" alignItems="center">
                  <FaMapMarker color="#50A2DB" fontSize={9} />
                  <Text fontFamily={"Poppins"} fontSize={10} color="#104076">
                    &nbsp;33 Strutton Ground, London SW1P 2HY, United Kingdom
                  </Text>
                </Box>
              </Box>
            </Box>
            <Box
              bg="#FFFFFF"
              borderRadius={"16px"}
              boxShadow={"2px 2px 4px 4px #00000029"}
              borderWidth={"1px"}
              opacity={5}
              padding={3}
              marginLeft={5}
              width={"71%"}
            >
              <Text fontFamily="Poppins" fontSize={11} color="#50A2DB">
                Doctor Details
              </Text>
              <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
                <Image
                  src={"/avatar.png"}
                  width="65px"
                  height="65px"
                  objectFit={"contain"}
                  marginTop={2}
                  alt=""
                />
                <Box marginLeft={4}>
                  <Text
                    fontFamily={"Poppins"}
                    fontWeight={"Bold"}
                    fontSize={17}
                    color={"#104076"}
                    marginTop={1}
                  >
                    Dr. Govind Bankani
                  </Text>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={10}
                    color="#104076"
                    marginTop={1}
                  >
                    GMC No: 6128120
                  </Text>
                  <Text
                    fontFamily={"Poppins"}
                    fontSize={10}
                    color="#104076"
                    marginTop={1}
                  >
                    MBBS, NMRC, General Physician
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

const NewPrescriptionHoc = hocLayout(NewPrescription);

export default NewPrescriptionHoc;
