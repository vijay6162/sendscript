import React, { useState } from "react";
import { hocLayout } from "../../../app/components/hocLayout";
import UserProfileHeader from "../../../app/components/UserProfileHeader";
import { useRouter } from "next/router";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  Image,
  Heading,
  Input,
  InputRightElement,
  InputGroup,
  Divider,
} from "@chakra-ui/react";
import { FaPen, FaTimes } from "react-icons/fa";
import SquareButton from "../../../app/components/SquareButton";
import AppConst from "../../../app/constants/AppConstants";
import CustomModal from "../../../app/components/Modal";

const headerStatus = false;

const UserProfile = () => {
  const router = useRouter();

  const [showSearchModal, setShowSearchModal] = useState(false);

  const [showPharmacistDetails, setshowPharmacistDetails] = useState(false);

  const goToAddPharmacy = () => {
    setShowSearchModal(true);
  };

  const closeSearchModal = () => {
    setShowSearchModal(false);
  };

  const handleNextButton = () => {
    setshowPharmacistDetails(true);
  };

  const GeneralDetails = () => {
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
            Pharmacy Details
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
          justifyContent={"space-around"}
          margin={5}
        >
          <Text
            fontFamily={"Poppins"}
            fontWeight={"medium"}
            fontSize={12}
            color={"#104076"}
            width={"33%"}
          >
            Pharmacy Name : NGC Pharmacy
          </Text>
          <Text
            fontFamily={"Poppins"}
            fontWeight={"medium"}
            fontSize={12}
            color={"#104076"}
            width={"33%"}
          >
            Email : govindhbankani@gmail.com
          </Text>
          <Text
            fontFamily={"Poppins"}
            fontWeight={"medium"}
            fontSize={12}
            color={"#104076"}
            width={"33%"}
          >
            Phone Number : +44 12345678
          </Text>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"flex-start"}
          justifyContent={"space-around"}
          margin={5}
        >
          <Text
            fontFamily={"Poppins"}
            fontWeight={"medium"}
            fontSize={12}
            color={"#104076"}
            width={"33%"}
          >
            Address : 69 Harley St, London W1G 8QW, United Kingdom
          </Text>
          <Text
            fontFamily={"Poppins"}
            fontWeight={"medium"}
            fontSize={12}
            color={"#104076"}
            width={"33%"}
          >
            Fax Number : +44 12345678
          </Text>
          <Text
            fontFamily={"Poppins"}
            fontWeight={"medium"}
            fontSize={12}
            color={"#104076"}
            width={"33%"}
          >
            GPHC Owner Number : 0203 713 8000
          </Text>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"row"}
          alignItems={"flex-start"}
          margin={5}
        >
          <Text
            fontFamily={"Poppins"}
            fontWeight={"medium"}
            fontSize={12}
            color={"#104076"}
            width={"33%"}
          >
            Superintendent Name : John Doe
          </Text>
          <Text
            fontFamily={"Poppins"}
            fontWeight={"medium"}
            fontSize={12}
            color={"#104076"}
            width={"33%"}
          >
            Superintendent GPHC No : 223 713 8000
          </Text>
        </Box>
      </Box>
    );
  };

  const PharmacistCard = () => {
    return (
      <Box
        bg="#FFFFFF"
        borderRadius={"16px"}
        boxShadow={"2px 2px 4px 4px #00000029"}
        borderWidth={"1px"}
        opacity={5}
        margin={5}
        width={"50%"}
      >
        <Box display={"flex"} flexDirection={"row"} justifyContent={"flex-end"}>
          <Box
            borderWidth={1}
            borderColor={"#104076"}
            borderRadius={10}
            width={"10%"}
            marginTop={3}
            marginRight={3}
            position={"absolute"}
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
          alignItems={"center"}
          justifyContent={"flex-start"}
        >
          <Box margin={4}>
            <Image src={"../avatar.png"} />
          </Box>
          <Box margin={4}>
            <Text
              fontFamily={"Poppins"}
              fontWeight={"medium"}
              color="#104076"
              fontSize={16}
            >
              Smith John
            </Text>
            <Text
              fontFamily={"Poppins"}
              fontWeight={"medium"}
              color="#104076"
              fontSize={11}
            >
              12 Aug 1987
            </Text>
            <Text
              fontFamily={"Poppins"}
              fontWeight={"medium"}
              color="#104076"
              opacity={"60%"}
              fontSize={12}
            >
              1LEH123456
            </Text>
            <Text
              fontFamily={"Poppins"}
              fontWeight={"medium"}
              color="#104076"
              fontSize={12}
            >
              Joined Since : Aug 2020
            </Text>
          </Box>
        </Box>
      </Box>
    );
  };

  const patients = [
    {
      id: 1,
      name: "Ben Alloy",
      dob: "(21 Aug 1987)",
    },
    {
      id: 2,
      name: "Ben Alloy",
      dob: "(21 Aug 1987)",
    },
    {
      id: 3,
      name: "Ben Alloy",
      dob: "(21 Aug 1987)",
    },
    {
      id: 4,
      name: "Ben Alloy",
      dob: "(21 Aug 1987)",
    },
    {
      id: 5,
      name: "Ben Alloy",
      dob: "(21 Aug 1987)",
    },
    {
      id: 6,
      name: "Ben Alloy",
      dob: "(21 Aug 1987)",
    },
    {
      id: 7,
      name: "Ben Alloy",
      dob: "(21 Aug 1987)",
    },
    {
      id: 8,
      name: "Ben Alloy",
      dob: "(21 Aug 1987)",
    },
    {
      id: 9,
      name: "Ben Alloy",
      dob: "(21 Aug 1987)",
    },
  ];

  const SearchItem = ({ name, dob }) => {
    const router = useRouter();

    const handleSelectPatient = () => {
      router.push({
        pathname: "/patients/PatientProfile",
        query: {
          menuItemId: 2,
        },
      });
    };

    return (
      <Box
        display={"flex"}
        flexDirection={"row"}
        margin={4}
        alignItems="center"
        justifyContent="space-between"
        onClick={handleSelectPatient}
      >
        <Box display={"flex"} flexDirection={"row"}>
          <Image
            src="/menu8.png"
            height={35}
            width={35}
            objectFit="contain"
            alt=""
          />
          <Text
            fontFamily={"Poppins"}
            fontSize={"13px"}
            color="#104076"
            float={"left"}
            marginLeft={4}
            marginTop={2}
            fontWeight={"Regular"}
          >
            {`${name} ${dob}`}
          </Text>
        </Box>
        <Image
          src="/enter.png"
          height={"12px"}
          width={"12px"}
          objectFit="contain"
          alt=""
        />
      </Box>
    );
  };

  const SuggestionBox = () => {
    return (
      <Box
        backgroundColor={"#fff"}
        borderWidth={2}
        borderColor={"#50A2DB"}
        borderTopWidth={0}
        borderBottomLeftRadius={5}
        borderBottomRightRadius={5}
        padding={1}
      >
        <Box maxHeight={250} overflowY="scroll">
          {patients &&
            patients.map((item) => {
              return (
                <SearchItem
                  key={item.id}
                  name={item.name}
                  dob={item.dob}
                  marginTop={4}
                />
              );
            })}
        </Box>
      </Box>
    );
  };

  return (
    <>
      <CustomModal
        isOpen={showSearchModal}
        onClose={closeSearchModal}
        width={showPharmacistDetails ? "50%" : '60%'}
        height={showPharmacistDetails ? "40%" : '65%'}
        top={"20%"}
      >
        {!showPharmacistDetails && (
          <Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems="center"
              justifyContent="space-between"
            >
              <Heading
                fontFamily={"Poppins"}
                fontWeight="semibold"
                fontSize={"23px"}
                color="#104076"
              >
                {AppConst.SearchPharmacist}
              </Heading>
              <FaTimes
                color={"#104076"}
                fontSize={20}
                borderWidth={1}
                onClick={closeSearchModal}
              />
            </Box>
            <Box
              display={"flex"}
              flexDirection="row"
              alignItems="center"
              justifyContent={"center"}
              marginTop={8}
            >
              <Box>
                <InputGroup>
                  <Input
                    placeholder="Search GPHC number"
                    height="40px"
                    fontFamily={"Poppins"}
                    fontSize={12}
                    width={"450px"}
                    backgroundColor="#fff"
                    borderWidth={2}
                    borderColor={"#50A2DB"}
                    borderBottomLeftRadius={0}
                    borderBottomRightRadius={0}
                  />
                  <InputRightElement>
                    <SearchIcon color="#50A2DB" fontSize={20} />
                  </InputRightElement>
                </InputGroup>
                <SuggestionBox />
              </Box>
            </Box>
            <Box display={"flex"} justifyContent={"flex-end"} marginTop={8}>
              <SquareButton
                buttonTitle={AppConst.Next}
                showRightIcon={false}
                onHandleClick={handleNextButton}
                iconComponent={null}
                backgroundColor="#50A2DB"
                buttonTextColor="#fff"
                width={"20%"}
              />
            </Box>
          </Box>
        )}
        {showPharmacistDetails && (
          <Box>
            <Box
              display={"flex"}
              flexDirection={"row"}
              alignItems="center"
              justifyContent="space-between"
            >
              <Heading
                fontFamily={"Poppins"}
                fontWeight="semibold"
                fontSize={"23px"}
                color="#104076"
              >
                {AppConst.SearchPharmacist}
              </Heading>
              <FaTimes
                color={"#104076"}
                fontSize={20}
                borderWidth={1}
                onClick={closeSearchModal}
              />
            </Box>

            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
              marginTop={"4%"}
            >
              <Box
                backgroundColor={"#50A2DB"}
                width={"40%"}
                height={"1px"}
                marginTop={3}
              />
              <Text fontFamily={"Poppins"} color={"#50A2DB"} fontSize={17}>
                &nbsp; Found Details &nbsp;
              </Text>
              <Box
                backgroundColor={"#50A2DB"}
                width={"40%"}
                height={"1px"}
                marginTop={3}
              />
            </Box>
            <Box margin={"1%"}>
                <Text fontFamily={'Poppins'} fontWeight={'medium'} color="#104076" fontSize={17}>Name : Stephen Mark</Text>
                <Text fontFamily={'Poppins'}  color="#104076" fontSize={11}>Date of birth : 01 Mar 1985</Text>
                <Text fontFamily={'Poppins'}  color="#104076" fontSize={13} opacity={'60%'}>GPHC Number : LEH123478</Text>
                <Text fontFamily={'Poppins'}  color="#104076" fontSize={13} opacity={'60%'}>Registered on : 13 Aug 2020</Text>
            </Box>
            <Box display={"flex"} justifyContent={"flex-end"} marginTop={8}>
              <SquareButton
                buttonTitle={AppConst.Next}
                showRightIcon={false}
                onHandleClick={goToAddPharmacy}
                iconComponent={null}
                backgroundColor="#50A2DB"
                buttonTextColor="#fff"
                width={"20%"}
              />
            </Box>
          </Box>
        )}
      </CustomModal>

      <Box>
        <UserProfileHeader type="pharmacy" />
        <Box
          margin={4}
          padding={3}
          position="absolute"
          left={"27%"}
          width="70%"
        >
          <GeneralDetails />
          <Box display={"flex"} justifyContent={"flex-end"} marginRight={4}>
            <SquareButton
              buttonTitle={AppConst.AddPharmacist}
              showRightIcon={false}
              onHandleClick={goToAddPharmacy}
              iconComponent={null}
              backgroundColor="#50A2DB"
              buttonTextColor="#fff"
            />
          </Box>
          <Box display={"flex"} flexDirection={"row"}>
            <PharmacistCard />
            <PharmacistCard />
          </Box>
        </Box>
      </Box>
    </>
  );
};

const UserProfileHoc = hocLayout(UserProfile, headerStatus);

export default UserProfileHoc;
