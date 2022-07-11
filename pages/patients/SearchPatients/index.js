import React from "react";
import AppConst from "../../../app/constants/AppConstants";
import { hocLayout } from "../../../app/components/hocLayout";
import { SearchIcon } from "@chakra-ui/icons";
import { Divider } from "@chakra-ui/react";
import { useRouter } from "next/router";
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
import {
  Box,
  Image,
  Input,
  InputRightElement,
  InputGroup,
  Heading,
  Text,
} from "@chakra-ui/react";

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
    <Box>
      <Box
        backgroundColor={"#fff"}
        borderWidth={2}
        borderColor={"#50A2DB"}
        borderTopWidth={0}
        borderBottomLeftRadius={5}
        borderBottomRightRadius={5}
        padding={1}
      >
        <Box maxHeight={300} overflowY="scroll">
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
        <Divider
          orientation="horizontal"
          colorScheme="#50A2DB"
          height={5}
          borderBottomWidth={"2px"}
        />

        <Box
          display={"flex"}
          flexDirection={"row"}
          marginLeft={4}
          marginTop={3}
          marginBottom={2}
          alignItems={"center"}
        >
          <Image
            src="/adp.png"
            height={"15px"}
            width={"15px"}
            objectFit="contain"
            alt=""
          />
          <Text
            fontFamily={"Poppins"}
            fontSize={"14px"}
            color="#50A2DB"
            float={"left"}
            marginLeft={4}
            fontWeight={"Regular"}
          >
            Add New Patient
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

const SearchPatients = () => {
  return (
    <Box display={"flex"} flexDirection="column">
      <Box display={"flex"} alignItems="center" marginTop={3}>
        <Heading fontFamily={"Poppins"} fontWeight="semibold" fontSize={"23px"}>
          {AppConst.SearchPatientHeading}
        </Heading>
      </Box>

      <Box
        display={"flex"}
        flexDirection="row"
        alignItems="center"
        justifyContent={"flex-start"}
      >
        <Box marginTop={6}>
          <InputGroup>
            <Input
              placeholder="Search Patients"
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
    </Box>
  );
};

const SearchPatientsHoc = hocLayout(SearchPatients);

export default SearchPatientsHoc;
