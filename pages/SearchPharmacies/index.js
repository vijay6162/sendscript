import React, { useState } from "react";
import AppConst from "../../app/constants/AppConstants";
import { hocLayout } from "../../app/components/hocLayout";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import  { useRouter } from "next/router";
import SearchForm from "./SearchForm";
import PharmacyItem from "../../app/components/PharmacyItem";
import PharmacyDetails from '../../app/components/PharmacyDetails';

const data = [
  {
    id: "1",
    title: "NVS Pharmacy",
    stars: 4,
    reviews: 3,
    type: "Drugstore",
    close_time: "1 min",
    location: "Marylebone",
    phoneNumber: "+44 20 7222 1589",
    openHours: "Opens 24 Hours",
    address: "33 Strutton Ground, London SW1P 2HY, United Kingdom",
    image: "/pharmacy.jpg",
    pharmacyType : 'register'
  },
  {
    id: "2",
    title: "Superdrug",
    stars: 4,
    reviews: 4,
    type: "Drugstore",
    close_time: "1 min",
    location: "Marylebone",
    phoneNumber: "+44 20 7222 1589",
    openHours: "Opens 7am - 9pm Everyday",
    address: "33 Strutton Ground, London SW1P 2HY, United Kingdom",
    image: "/pharmacy.jpg",
    pharmacyType : 'unregister'
  },
  {
    id: "3",
    title: "Boots",
    stars: 4,
    reviews: 5,
    type: "Drugstore",
    close_time: "1 min",
    location: "Marylebone",
    phoneNumber: "+44 20 7222 1589",
    openHours: "Opens 24 Hours",
    address: "33 Strutton Ground, London SW1P 2HY, United Kingdom",
    image: "/pharmacy.jpg",
    pharmacyType : 'register'
  },
  {
    id: "4",
    title: "Gould Pharmacy",
    stars: 4,
    reviews: 6,
    type: "Drugstore",
    close_time: "1 min",
    location: "Marylebone",
    phoneNumber: "+44 20 7222 1589",
    openHours: "Opens 24 Hours",
    address: "33 Strutton Ground, London SW1P 2HY, United Kingdom",
    image: "/pharmacy.jpg",
    pharmacyType : 'unregister'
  },
];


const data1 = [
  {
    id: "1",
    title: "24 Hrs Pharmacy Hrly St",
    stars: 4,
    reviews: 7,
    type: "Drugstore",
    close_time: "1 min",
    location: "Marylebone",
    phoneNumber: "+44 20 7222 1589",
    openHours: "Opens 24 Hours",
    address: "33 Strutton Ground, London SW1P 2HY, United Kingdom",
    image: "/pharmacy.jpg",
    pharmacyType : 'unregister'
  },
  {
    id: "2",
    title: "Johnbell & Croyden",
    stars: 4,
    reviews: 8,
    type: "Drugstore",
    close_time: "1 min",
    location: "Marylebone",
    phoneNumber: "+44 20 7222 1589",
    openHours: "Opens 7am - 9pm Everyday",
    address: "33 Strutton Ground, London SW1P 2HY, United Kingdom",
    image: "/pharmacy.jpg",
    pharmacyType : 'unregister'
  },
  {
    id: "3",
    title: "Welbeck Pharmacy",
    stars: 4,
    reviews: 9,
    type: "Drugstore",
    close_time: "1 min",
    location: "Marylebone",
    phoneNumber: "+44 20 7222 1589",
    openHours: "Opens 24 Hours",
    address: "33 Strutton Ground, London SW1P 2HY, United Kingdom",
    image: "/pharmacy.jpg",
    pharmacyType : 'unregister'
  },
  {
    id: "4",
    title: "Lloyds Pharmacy",
    stars: 4,
    reviews: 10,
    type: "Drugstore",
    close_time: "1 min",
    location: "Marylebone",
    phoneNumber: "+44 20 7222 1589",
    openHours: "Opens 24 Hours",
    address: "33 Strutton Ground, London SW1P 2HY, United Kingdom",
    image: "/pharmacy.jpg",
    pharmacyType : 'unregister'
  },
];


const SearchPharmacy = () => {

  const [pharmacyItem,setpharmacyItem] = useState({});
  const [showPharmacyDetails,setShowPharmacyDetails] = useState(false);
  const router = useRouter()

  const Card = (props) => {
    return (
      <Box
        bg="#FFFFFF"
        borderRadius={"16px"}
        boxShadow={"2px 2px 4px 4px #00000029"}
        borderWidth={"1px"}
        opacity={5}
        padding={3}
        width={props.width}
        marginLeft={props.marginLeft}
        marginTop={5}
      >
        {props.children}
      </Box>
    );
  };


  const viewPharmacyDetails = (item) => {
    setpharmacyItem(item);
    setShowPharmacyDetails(true)
  }

  const handleSend = () => {
    router.push({
      pathname : '/SearchPharmacies/EnterPin',
      query : { menuItemId : 2}
    })
  }

  const onClickSendEmail = () => {
    router.push({
      pathname : '/SearchPharmacies/EnterEmail',
      query : { menuItemId : 2}
    })
  }

  const onClickSendFax = () => {
    router.push({
      pathname : '/SearchPharmacies/SendFax',
      query : { menuItemId : 2}
    })
  }


  return (
    <>
    
   
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
            {AppConst.Pharmacies}
          </Heading>
        </Box>

        <Box marginTop={5}>
          <SearchForm />
        </Box>
        <Box width="100%">
          <Box display={"flex"} flexDirection="row">
            <Card width="58%" marginLeft="0">
              <Heading
                fontFamily={"Poppins"}
                fontWeight="semibold"
                fontSize={"15px"}
                color="#104076"
              >
                {AppConst.RegisteredPharmacies}
              </Heading>

              {data &&
                data.map((item, index) => {
                  return  <Box key={index} onClick={() => viewPharmacyDetails(item)}>
                      <PharmacyItem  item={item} />
                  </Box>
                  
                })}
            </Card>
            {
              !showPharmacyDetails &&   <Card width="40%" marginLeft="7">
                <Heading
                  fontFamily={"Poppins"}
                  fontWeight="semibold"
                  fontSize={"15px"}
                  color="#104076"
                >
                  {AppConst.UnRegisteredPharmacies}
                </Heading>

                {data1 &&
                  data1.map((item, index) => {
                    return <PharmacyItem key={index} item={item} />;
                  })}
              </Card>
            }

            {
              showPharmacyDetails &&   <Card width="40%" marginLeft="7">
                 <PharmacyDetails item={pharmacyItem} onClickSend = {handleSend}  onClickSendEmail = {onClickSendEmail} onClickSendFax={onClickSendFax}/>
              </Card>
            }
           
          </Box>
        </Box>
      </Box>
    </>
  );
};

const SearchPharmacyHoc = hocLayout(SearchPharmacy);

export default SearchPharmacyHoc;
