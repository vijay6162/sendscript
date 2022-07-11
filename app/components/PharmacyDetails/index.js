import { Box, Heading, Image, Text } from "@chakra-ui/react";
import SquareButton from "../SquareButton";
import AppConst from "../../constants/AppConstants";
import { StarRating } from "../../../pages/SearchPharmacies/PharmacyItem";
import {
  FaStar,
  FaCircle,
  FaMapMarker,
  FaClock,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";
import { MdPrint } from "react-icons/md"

const PharmacyDetails = (props) => {
  const { item, onClickSend,onClickSendEmail,onClickSendFax } = props;
  return (
    <Box>
      <Box display="flex"  >
        <Heading
          fontFamily={"Poppins"}
          fontWeight="semibold"
          fontSize={17}
          color="#104076"
          margin={1}
          letterSpacing={0.5}
          width={item.pharmacyType == "register" ? "80%" : '62%'}
        >
          {item.title}
        </Heading>
        {item.pharmacyType == "register" && (
          <SquareButton
            buttonTitle={AppConst.ConfirmToSend}
            showRightIcon={true}
            iconComponent={null}
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
            width="25%"
            height="33px"
            onHandleClick={onClickSend}
          />
        )}
        {item.pharmacyType == "unregister" && (
          <Box display={"flex"} flexDirection="row" justifyContent={'space-evenly'}>
            <SquareButton
              buttonTitle={AppConst.Email}
              showRightIcon={false}
              iconComponent={ <FaEnvelope />}
              imageComponent={
               <FaEnvelope fontSize={22} />
              }
              backgroundColor="#50A2DB"
              buttonTextColor="#fff"
              width="50%"
              height="33px"
              margin={2}
              onHandleClick={onClickSendEmail}
            />
            <SquareButton
              buttonTitle={AppConst.Fax}
              showRightIcon={false}
              iconComponent={ <MdPrint />}
              imageComponent={
                <MdPrint fontSize={15} />
              }
              width="50%"
              height="33px"
              backgroundColor="#50A2DB"
              buttonTextColor="#fff"
              margin={2}
              onHandleClick={onClickSendFax}
            />
          </Box>
            
           
        )}
      </Box>

      <Box
        display="flex"
        flexDirection={"row"}
        justifyContent="flex-start"
        alignItems={"center"}
      >
        <StarRating />
        <Text
          color="#104076"
          fontFamily="Poppins"
          fontWeight="medium"
          fontSize={14}
          marginLeft={1}
        >
          {item.reviews} Reviews
        </Text>
      </Box>
      <Box
        marginTop={3}
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image src="/slider.jpg" width="98%" height="200px" borderRadius={20} />
      </Box>
      <Box display="flex" flexDirection={"row"} alignItems="center" margin={3}>
        <Box backgroundColor={"#00000029"} borderRadius={3} padding={1}>
          <Text fontFamily={"Poppins"} fontSize={11} color="#104076">
            &nbsp;{item.type}&nbsp;&nbsp;
          </Text>
        </Box>
        <Text
          fontFamily={"Poppins"}
          fontSize={12}
          color="#50A2DB"
          marginLeft={1}
          marginRight={1}
        >
          &nbsp;&nbsp; Closes in {item.close_time}&nbsp;&nbsp;
        </Text>
        <FaCircle color="#104076" fontSize={7} />
        <Text
          fontFamily={"Poppins"}
          fontWeight={"semibold"}
          fontSize={13}
          color="#104076"
          marginLeft={1}
        >
          {item.location}
        </Text>
      </Box>
      <Box margin={3}>
        <Box display={"flex"} flexDirection="row" alignItems="center">
          <FaPhone color="#50A2DB" fontSize={14} />
          <Text fontFamily={"Poppins"} fontSize={13} color="#104076">
            &nbsp; {item.phoneNumber}
          </Text>
        </Box>
      </Box>
      <Box margin={3}>
        <Box display={"flex"} flexDirection="row" alignItems="center">
          <FaClock color="#50A2DB" fontSize={14} />
          <Text fontFamily={"Poppins"} fontSize={13} color="#104076">
            &nbsp; {item.openHours}
          </Text>
        </Box>
      </Box>
      <Box margin={3}>
        <Box display={"flex"} flexDirection="row" alignItems="center">
          <FaMapMarker color="#50A2DB" fontSize={14} />
          <Text fontFamily={"Poppins"} fontSize={13} color="#104076">
            &nbsp;{item.address}
          </Text>
        </Box>
      </Box>
      <Box margin={3} borderRadius={15}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
          width="485"
          height="300"
          frameBorder="0"
          style={{ border: 0, borderRadius: "20px" }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </Box>
    </Box>
  );
};

export default PharmacyDetails;
