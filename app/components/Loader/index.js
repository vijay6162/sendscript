import { Box } from "@chakra-ui/react";
import { ClipLoader }  from "react-spinners";

const Loader = (props) => {
    {
        if(props.loading){
            return (
                <Box position={'absolute'} backgroundColor={'#50A2DB'} zIndex={999999}  borderRadius={5} padding={4}  top={'45%'} left={'50%'}>
                    <ClipLoader loading={props.loading}   color={'#fff'} />      
                </Box>
                ) 
        } 
        return null
    }
    
}

export default Loader;