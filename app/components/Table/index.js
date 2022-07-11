
import  React, { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Text,
  Box,
  Image,
  Input,
  InputRightElement,
  InputGroup,
  Switch,
  FormControl,
} from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import AppConst from "../../../app/constants/AppConstants";
import { FaFilter, FaTrash } from "react-icons/fa";
import "next-pagination/dist/index.css";
import SquareButton from "../SquareButton";
import { AddIcon } from "@chakra-ui/icons";

// import Pagination from 'next-pagination';

const CustomTable = (props) => {

  const getStatusBadge = (status) => {
    if (status == "Cancelled") {
      return (
        <Badge backgroundColor="#DC3545">
          <Text
            color="#ffffff"
            fontFamily={"Poppins"}
            fontWeight="light"
            fontSize={"11px"}
            textTransform="none"
          >
            {status}
          </Text>
        </Badge>
      );
    } else if (status == "Dispensed") {
      return (
        <Badge backgroundColor="#28A745">
          <Text
            color="#ffffff"
            fontFamily={"Poppins"}
            fontWeight="light"
            fontSize={"11px"}
            textTransform="none"
          >
            {status}
          </Text>
        </Badge>
      );
    } else if (status == "Completed") {
      return (
        <Badge backgroundColor="#343A40">
          <Text
            color="#ffffff"
            fontFamily={"Poppins"}
            fontWeight="light"
            fontSize={"11px"}
            textTransform="none"
          >
            {status}
          </Text>
        </Badge>
      );
    } else if (status == "Sent Via Fax") {
      return (
        <Badge backgroundColor="#0054AE">
          <Text
            color="#ffffff"
            fontFamily={"Poppins"}
            fontWeight="light"
            fontSize={"11px"}
            textTransform="none"
          >
            {status}
          </Text>
        </Badge>
      );
    } else if (status == "Sent Via SS") {
      return (
        <Badge backgroundColor="#007BFF">
          <Text
            color="#ffffff"
            fontFamily={"Poppins"}
            fontWeight="light"
            fontSize={"11px"}
            textTransform="none"
          >
            {status}
          </Text>
        </Badge>
      );
    }
  };
  return (
    <Box
      bg="#FFFFFF"
      borderRadius={"16px"}
      boxShadow={"2px 2px 4px 4px #00000029"}
      borderWidth={"1px"}
      opacity={4}
    >
     
      {props.headerType == "search" && (
        <Box
          display={"flex"}
          flexDirection="row"
          justifyContent={"space-between"}
          alignItems={"center"}
          paddingTop={6}
          paddingLeft={6}
          paddingRight={6}
        >
          <Box>
            <Text
              color="#104076"
              fontFamily={"Poppins"}
              fontWeight="bold"
              fontSize={"15px"}
              textTransform="none"
              marginLeft={4}
            >
              {AppConst.DashboardTableName}
            </Text>
          </Box>

          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box marginRight={12}>
              <InputGroup>
                <Input
                  placeholder="Search"
                  height="30px"
                  fontFamily={"Poppins"}
                  fontSize={12}
                  width={"300px"}
                />
                <InputRightElement
                  children={
                    <SearchIcon
                      color="#C7C7C7"
                      fontSize={13}
                      marginBottom={2}
                    />
                  }
                />
              </InputGroup>
            </Box>
            <Box>
              <FormControl display="flex" alignItems="center">
                <FaFilter color="#C7C7C7" />
                <Text
                  fontFamily={"Poppins"}
                  fontSize={13}
                  fontWeight={"normal"}
                  color="#C7C7C7"
                  marginLeft={2}
                >
                  Filter
                </Text>
                <Switch id="email-alerts" marginLeft={2}  />
              </FormControl>
            </Box>
          </Box>
        </Box>
      )}

      {props.headerType == "withoutSearch" && (
        <Box
          display={"flex"}
          flexDirection="row"
          justifyContent={"space-between"}
          alignItems={"center"}
          padding={3}
          backgroundColor={props.tableHeadBackgroundColor}
          borderTopRightRadius={"16px"}
          borderTopLeftRadius={"16px"}
        >
          <Box>
            <Text
              color="#fff"
              fontFamily={"Poppins"}
              fontWeight="bold"
              fontSize={"15px"}
              textTransform="none"
              marginLeft={4}
            >
              {AppConst.DashboardTableName}
            </Text>
          </Box>

          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <SquareButton
              buttonTitle={AppConst.AddItem}
              showRightIcon={true}
              iconComponent={<AddIcon fontSize={"13px"} />}
              backgroundColor="#fff"
              buttonTextColor="#50A2DB" 
              onHandleClick={props.handleOpenNewPresciptionModal}
            />
          </Box>
        </Box>
      )}

      <TableContainer paddingTop={props.headerType == "withoutSearch" ? 0 : 3}>
        <Table variant={"unstyled"}>
          <Thead backgroundColor={"#F8F8F8"} height={10}>
            <Tr>
              {props.tableHeadData.map((item, index) => {
                return (
                  <Td
                    color={"#104076"}
                    fontSize={"14px"}
                    fontFamily="Poppins"
                    key={index}
                    textAlign={"center"}
                    paddingTop={"0px"}
                    paddingBottom={"0px"}
                    fontWeight="semibold"
                  >
                    {item}
                  </Td>
                );
              })}
            </Tr>
          </Thead>

          {props.tableData.map((item, index) => {
            return (
              <Tbody
                borderBottomWidth={0.9}
                borderColor="#D4D4D4"
                key={`${item.id}${index}`}
              >
                {props.from == "dashboard" && (
                  <Tr key={index}>
                    <Td
                      color="#6C6C6F"
                      fontFamily={"Poppins"}
                      fontSize={"13px"}
                      textAlign={"center"}
                    >
                      {item.PrescriptionID}
                    </Td>
                    <Td
                      color="#6C6C6F"
                      fontFamily={"Poppins"}
                      fontSize={"13px"}
                      textAlign={"center"}
                    >
                      {item.PatientName}
                    </Td>
                    <Td
                      color="#6C6C6F"
                      fontFamily={"Poppins"}
                      fontSize={"13px"}
                      textAlign={"center"}
                    >
                      {item.DateOfBirth}
                    </Td>
                    <Td
                      color="#6C6C6F"
                      fontFamily={"Poppins"}
                      fontSize={"13px"}
                      textAlign={"center"}
                    >
                      {item.DateOfPrescription}
                    </Td>
                    <Td
                      color="#6C6C6F"
                      fontFamily={"Poppins"}
                      fontSize={"13px"}
                      textAlign={"center"}
                    >
                      {getStatusBadge(item.Status)}
                    </Td>
                    <Td>
                      <Box
                        display={"flex"}
                        flexDirection={"row"}
                        justifyContent="space-evenly"
                      >
                        <Image
                          src="/action3.png"
                          width={"16px"}
                          objectFit="contain"
                          margin={2}
                        />
                        <Image
                          src="/action2.png"
                          width={"14px"}
                          objectFit="contain"
                          margin={2}
                        />
                        <Image
                          src="/action1.png"
                          width={"11px"}
                          objectFit="contain"
                          margin={2}
                        />
                        <Image
                          src="/action4.png"
                          width={"16px"}
                          objectFit="contain"
                          margin={2}
                        />
                      </Box>
                    </Td>
                  </Tr>
                )}


                {props.from == "clinicDashboard" && (
                  <Tr key={index}>
                    <Td
                      color="#6C6C6F"
                      fontFamily={"Poppins"}
                      fontSize={"13px"}
                      textAlign={"center"}
                    >
                      {item.PrescriptionID}
                    </Td>
                    <Td
                      color="#6C6C6F"
                      fontFamily={"Poppins"}
                      fontSize={"13px"}
                      textAlign={"center"}
                    >
                      {item.PatientName}
                    </Td>
                    <Td
                      color="#6C6C6F"
                      fontFamily={"Poppins"}
                      fontSize={"13px"}
                      textAlign={"center"}
                    >
                      {item.DateOfPrescription}
                    </Td>
                    <Td
                      color="#6C6C6F"
                      fontFamily={"Poppins"}
                      fontSize={"13px"}
                      textAlign={"center"}
                    >
                      {item.ClinicianName}
                    </Td>
                    <Td
                      color="#6C6C6F"
                      fontFamily={"Poppins"}
                      fontSize={"13px"}
                      textAlign={"center"}
                    >
                      {getStatusBadge(item.Status)}
                    </Td>
                    <Td>
                      <Box
                        display={"flex"}
                        flexDirection={"row"}
                        justifyContent="space-evenly"
                      >
                        <Image
                          src="/action3.png"
                          width={"16px"}
                          objectFit="contain"
                          margin={2}
                        />
                        <Image
                          src="/action2.png"
                          width={"14px"}
                          objectFit="contain"
                          margin={2}
                        />
                       
                      </Box>
                    </Td>
                  </Tr>
                )}

                {props.from == "newPrescription" && (
                  <>
                    <Tr key={index}>
                      <Td
                        color="#6C6C6F"
                        fontFamily={"Poppins"}
                        fontSize={"13px"}
                        textAlign={"center"}
                      >
                        {index+1}
                      </Td>
                      <Td
                        color="#6C6C6F"
                        fontFamily={"Poppins"}
                        fontSize={"13px"}
                        textAlign={"center"}
                      >
                        {item.MedicineName}
                      </Td>
                      <Td
                        color="#6C6C6F"
                        fontFamily={"Poppins"}
                        fontSize={"13px"}
                        textAlign={"center"}
                      >
                        {item.Dosage}
                      </Td>
                      <Td
                        color="#6C6C6F"
                        fontFamily={"Poppins"}
                        fontSize={"13px"}
                        textAlign={"center"}
                      >
                        {item.frequency}
                      </Td>
                      <Td
                        color="#6C6C6F"
                        fontFamily={"Poppins"}
                        fontSize={"13px"}
                        textAlign={"center"}
                      >
                        {item.dailyDosage}
                      </Td>
                      <Td
                        color="#6C6C6F"
                        fontFamily={"Poppins"}
                        fontSize={"13px"}
                        textAlign={"center"}
                      >
                        {item.duration}
                      </Td>
                      <Td
                        color="#6C6C6F"
                        fontFamily={"Poppins"}
                        fontSize={"13px"}
                        textAlign={"center"}
                      >
                        {item.quantity}
                      </Td>

                      <Td>
                        <Box
                          display={"flex"}
                          flexDirection={"row"}
                          justifyContent="space-evenly"
                          alignItems={'center'}
                        >
                          <Image
                            src="/action2.png"
                            width={"12px"}
                            objectFit="contain"
                            margin={2}
                          />
                          <FaTrash  color="#104076" fontSize={12}/>
                          
                        </Box>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td colSpan={5} paddingTop={1}>
                        <Text
                          fontFamily={"Poppins"}
                          fontWeight={"Regular"}
                          fontSize={14}
                          color={"#104076"}
                          marginLeft={8}
                        >
                          Method : {item.methodName}
                        </Text>
                        <Text
                          fontFamily={"Poppins"}
                          fontWeight={"Regular"}
                          fontSize={14}
                          color={"#104076"}
                          marginTop={4}
                          marginLeft={8}
                        >
                          Pharmacy Comments : {item.pharmacyComments}
                        </Text>
                      </Td>
                    </Tr>
                  
                  </>
                )}

                {props.from == "patients" && (
                  <>
                    <Tr key={index}>
                      <Td
                        color="#6C6C6F"
                        fontFamily={"Poppins"}
                        fontSize={"14px"}
                        textAlign={"center"}
                      >
                        {item.DateofPrescription}
                      </Td>
                      <Td
                        color="#6C6C6F"
                        fontFamily={"Poppins"}
                        fontSize={"14px"}
                        textAlign={"center"}
                      >
                        {item.DoctorName}
                      </Td>
                      <Td
                        color="#6C6C6F"
                        fontFamily={"Poppins"}
                        fontSize={"14px"}
                        textAlign={"center"}
                      >
                        {item.PharmacyName}
                      </Td>
                      <Td
                        color="#6C6C6F"
                        fontFamily={"Poppins"}
                        fontSize={"14px"}
                        textAlign={"center"}
                      >
                        {item.Address}
                      </Td>

                      <Td>
                        <Box
                          display={"flex"}
                          flexDirection={"row"}
                          justifyContent="space-evenly"
                        >
                          <Image
                            src="/paction2.png"
                            width={"15px"}
                            objectFit="contain"
                            margin={2}
                          />
                          <Image
                            src="/paction3.png"
                            width={"17px"}
                            objectFit="contain"
                            margin={2}
                          />
                          <Image
                            src="/paction4.png"
                            width={"20px"}
                            objectFit="contain"
                            margin={2}
                          />
                          <Image
                            src="/paction1.png"
                            width={"14px"}
                            objectFit="contain"
                            margin={2}
                          />
                        </Box>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td colSpan={6}>
                        <TableContainer>
                          <Table variant={"unstyled"}>
                            <Thead backgroundColor={"#F8F8F8"}>
                              <Tr>
                                <Td
                                  color={"#104076"}
                                  fontSize={"13px"}
                                  fontFamily="Poppins"
                                  textAlign={"center"}
                                  paddingTop={"4px"}
                                  paddingBottom={"4px"}
                                  fontWeight="semibold"
                                >
                                  S.no
                                </Td>
                                <Td
                                  color={"#104076"}
                                  fontSize={"13px"}
                                  fontFamily="Poppins"
                                  textAlign={"center"}
                                  paddingTop={"4px"}
                                  paddingBottom={"4px"}
                                  fontWeight="semibold"
                                >
                                  Medicine Name
                                </Td>
                                <Td
                                  color={"#104076"}
                                  fontSize={"13px"}
                                  fontFamily="Poppins"
                                  textAlign={"center"}
                                  paddingTop={"4px"}
                                  paddingBottom={"4px"}
                                  fontWeight="semibold"
                                >
                                  Dosage
                                </Td>
                                <Td
                                  color={"#104076"}
                                  fontSize={"13px"}
                                  fontFamily="Poppins"
                                  textAlign={"center"}
                                  paddingTop={"4px"}
                                  paddingBottom={"4px"}
                                  fontWeight="semibold"
                                >
                                  Daily Dosage
                                </Td>
                                <Td
                                  color={"#104076"}
                                  fontSize={"13px"}
                                  fontFamily="Poppins"
                                  textAlign={"center"}
                                  paddingTop={"4px"}
                                  paddingBottom={"4px"}
                                  fontWeight="semibold"
                                >
                                  Duration
                                </Td>
                              </Tr>
                            </Thead>
                            <Tbody>
                              {item.medicineData.map((item1, index) => {
                                return (
                                  <Tr key={`${item1.id}${index}`}>
                                    <Td
                                      color="#6C6C6F"
                                      fontFamily={"Poppins"}
                                      fontSize={"13px"}
                                      textAlign={"center"}
                                    >
                                      {index + 1}
                                    </Td>
                                    <Td
                                      color="#6C6C6F"
                                      fontFamily={"Poppins"}
                                      fontSize={"13px"}
                                      textAlign={"center"}
                                    >
                                      {item1.medicineName}
                                    </Td>
                                    <Td
                                      color="#6C6C6F"
                                      fontFamily={"Poppins"}
                                      fontSize={"13px"}
                                      textAlign={"center"}
                                    >
                                      {item1.dosage}
                                    </Td>
                                    <Td
                                      color="#6C6C6F"
                                      fontFamily={"Poppins"}
                                      fontSize={"13px"}
                                      textAlign={"center"}
                                    >
                                      {item1.DailyDosage}
                                    </Td>
                                    <Td
                                      color="#6C6C6F"
                                      fontFamily={"Poppins"}
                                      fontSize={"13px"}
                                      textAlign={"center"}
                                    >
                                      {item1.Duration}
                                    </Td>
                                  </Tr>
                                );
                              })}
                            </Tbody>
                          </Table>
                        </TableContainer>
                      </Td>
                    </Tr>
                  </>
                )}
              </Tbody>
            );
          })}
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CustomTable;
