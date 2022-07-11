import React, { useState } from "react";
import { hocLayout } from "../../app/components/hocLayout";
import UserProfileHeader from "../../app/components/UserProfileHeader";
import { useRouter } from "next/router";
import { Box, Text, Input, Image, Divider } from "@chakra-ui/react";
import { FaPen, FaPhone, FaMapMarker } from "react-icons/fa";
const headerStatus = false;
const UserProfile = () => {
  const router = useRouter();

  const Treatments = [
    "General Cardiologist",
    "Echocardiology",
    "Adult Congenital Cardiology",
  ];

  const TreatmentsCard = (props) => {
    return (
      <Box padding={1.5} backgroundColor={"#EAEAEA"} margin={3} borderRadius={12}>
        <Text fontFamily={"Poppins"} fontSize={11} color={"#104076"}>
          {props.value}
        </Text>
      </Box>
    );
  };

  const TratmentsItem = () => {
    return (
      <Box
        bg="#FFFFFF"
        borderRadius={"16px"}
        boxShadow={"2px 2px 4px 4px #00000029"}
        borderWidth={"1px"}
        opacity={5}
        padding={2.5}
        margin={5}
      >
        <Box display={"flex"} flexDirection={"row"}>
          <Text
            fontFamily={"Poppins"}
            fontSize={14}
            color={"#104076"}
            fontWeight={"semibold"}
            width={"90%"}
          >
            Treatments
          </Text>
          <Box
            borderWidth={1}
            borderColor={"#104076"}
            borderRadius={10}
            width={"10%"}
          >
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <FaPen color={"#104076"} fontSize={8} />
              <Text
                fontFamily={"Poppins"}
                fontSize={10}
                color={"#104076"}
                fontWeight={"semibold"}
                padding={1}
              >
                Edit
              </Text>
            </Box>
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"row"}>
          {Treatments &&
            Treatments.map((item, index) => {
              return <TreatmentsCard value={item} key={index} />;
            })}
        </Box>
      </Box>
    );
  };

  const GeneralDetails = () => {
    return (
      <Box
        bg="#FFFFFF"
        borderRadius={"16px"}
        boxShadow={"2px 2px 4px 4px #00000029"}
        borderWidth={"1px"}
        opacity={5}
        padding={2.5}
        margin={5}
      >
        <Box display={"flex"} flexDirection={"row"} margintop={3}>
          <Text
            fontFamily={"Poppins"}
            fontSize={14}
            color={"#104076"}
            fontWeight={"semibold"}
            width={"90%"}
          >
            General Details
          </Text>
          <Box
            borderWidth={1}
            borderColor={"#104076"}
            borderRadius={10}
            width={"10%"}
          >
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <FaPen color={"#104076"} fontSize={8} />
              <Text
                fontFamily={"Poppins"}
                fontSize={10}
                color={"#104076"}
                fontWeight={"semibold"}
                padding={1}
              >
                Edit
              </Text>
            </Box>
          </Box>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"flex-start"}
          margin={3}
        >
          <Text
            fontFamily={"Poppins"}
            fontWeight={"medium"}
            fontSize={12}
            color={"#104076"}
            width={"55%"}
          >
            Email : govindhbankani@gmail.com
          </Text>
          <Text
            fontFamily={"Poppins"}
            fontWeight={"medium"}
            fontSize={12}
            color={"#104076"}
          >
            Phone Number : +44 12345678
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"flex-start"}
          margin={3}
        >
          <Text
            fontFamily={"Poppins"}
            fontWeight={"medium"}
            fontSize={12}
            color={"#104076"}
          >
            Clinic Name : London Elite
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"flex-start"}
          margin={3}
        >
          <Text
            fontFamily={"Poppins"}
            fontWeight={"medium"}
            fontSize={12}
            color={"#104076"}
          >
            Address : 69 Harley St, London W1G 8QW, United Kingdom
          </Text>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"flex-start"}
          margin={3}
        >
          <Text
            fontFamily={"Poppins"}
            fontWeight={"medium"}
            fontSize={12}
            color={"#104076"}
            width={"50%"}
          >
            Country : United Kingdom
          </Text>
          <Text
            fontFamily={"Poppins"}
            fontWeight={"medium"}
            fontSize={12}
            color={"#104076"}
          >
            Postal Code : 138000
          </Text>
        </Box>
      </Box>
    );
  };

  const HospitalCard = () => {
    return (
      <Box
        bg="#FFFFFF"
        borderRadius={"16px"}
        boxShadow={"2px 2px 4px 4px #00000029"}
        borderWidth={"1px"}
        opacity={5}
        padding={3}
        margin={5}
      >
        <Box display={"flex"} flexDirection={"row"} margintop={3}>
          <Text
            fontFamily={"Poppins"}
            fontSize={14}
            color={"#104076"}
            fontWeight={"semibold"}
            width={"90%"}
          >
            General Details
          </Text>
          <Box
            borderWidth={1}
            borderColor={"#104076"}
            borderRadius={10}
            width={"10%"}
          >
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <FaPen color={"#104076"} fontSize={8} />
              <Text
                fontFamily={"Poppins"}
                fontSize={10}
                color={"#104076"}
                fontWeight={"semibold"}
                padding={1}
              >
                Edit
              </Text>
            </Box>
          </Box>
        </Box>
        <Box>
          <Text
            fontFamily={"Poppins"}
            fontWeight={"bold"}
            fontSize={18}
            color={"#104076"}
            marginTop={5}
          >
            London Elite Health
          </Text>
          <Box
            display={"flex"}
            flexDirection="row"
            alignItems="center"
            marginTop={3}
          >
            <FaPhone color="#50A2DB" fontSize={12} />
            <Text fontFamily={"Poppins"} fontSize={12} color="#104076">
              &nbsp; +44 20 7222 1589
            </Text>
          </Box>
          <Box
            display={"flex"}
            flexDirection="row"
            alignItems="center"
            marginTop={3}
          >
            <FaMapMarker color="#50A2DB" fontSize={12} />
            <Text fontFamily={"Poppins"} fontSize={12} color="#104076">
              &nbsp;33 Strutton Ground, London SW1P 2HY, United Kingdom
            </Text>
          </Box>
        </Box>
        <Box margin={4} />
        <Divider />
        <Box margin={4} />
        <Box>
          <Text
            fontFamily={"Poppins"}
            fontWeight={"bold"}
            fontSize={18}
            color={"#104076"}
            marginTop={5}
          >
            Central London Hospital
          </Text>
          <Box
            display={"flex"}
            flexDirection="row"
            alignItems="center"
            marginTop={3}
          >
            <FaPhone color="#50A2DB" fontSize={12} />
            <Text fontFamily={"Poppins"} fontSize={11} color="#104076">
              &nbsp; +44 20 7222 1589
            </Text>
          </Box>
          <Box
            display={"flex"}
            flexDirection="row"
            alignItems="center"
            marginTop={3}
          >
            <FaMapMarker color="#50A2DB" fontSize={12} />
            <Text fontFamily={"Poppins"} fontSize={11} color="#104076">
              &nbsp;33 Strutton Ground, London SW1P 2HY, United Kingdom
            </Text>
          </Box>
        </Box>
        <Box margin={5} />
      </Box>
    );
  };

  return (
    <Box>
      <UserProfileHeader />

      <Box
        margin={4}
        padding={3}
        width={"70%"}
        position="absolute"
        left={"27%"}
      >
        <Box display={"flex"} flexDirection={"row"}>
          <Box width={"70%"}>
            <TratmentsItem />
            <GeneralDetails />
          </Box>
          <Box width={"60%"}>
            <HospitalCard />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const UserProfileHoc = hocLayout(UserProfile, headerStatus);

export default UserProfileHoc;
