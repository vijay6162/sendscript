import SquareButton from "../../../app/components/SquareButton";
import { Box, Heading, Image, Text, SimpleGrid, Input } from "@chakra-ui/react";
import styles from "./styles";
import AppConst from "../../../app/constants/AppConstants";
import { AddIcon } from "@chakra-ui/icons";

const SearchForm = () => {

  return (
    <Box display="flex" flexDirection="row">
      <SimpleGrid columns={2} spacing={3}>
        <Input
          placeholder="Enter Patient Post Code"
          size="md"
          backgroundColor={"#fff"}
          borderColor="#50A2DB"
          borderRadius={8}
          width={'250px'}
          fontFamily="Poppins"
          fontSize={12}
        />
        <SquareButton
            buttonTitle={AppConst.Search}
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
            width="50%"
        />
      </SimpleGrid>
    </Box>
  );
};

export default SearchForm;
