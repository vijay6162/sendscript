import { Box, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

const SideBarFooter = () => {

  const router = useRouter();

  const goToProfileScreen = () => {
    router.push({
      pathname : '/UserProfile',
      menuItemId : 5
    })
  }

  const goToChangePassword = () => {
    router.push({
      pathname : '/ChangePassword',
      menuItemId : 6
    })
  }

  const goToLogin = () => {
    router.push({
      pathname : '/',
      
    })
  }

  return (
    <Box display={'flex'} flexDirection={"column"} justifyContent="center" alignItems={'center'}>
      <Box marginTop={8} onClick={goToProfileScreen}>
        <Image
          src="/menu8.png"
          height="40px"
          width="40px"
          alt="Profile image"
        />
      </Box>
      <Box marginTop={8} onClick={goToChangePassword}>
        <Image
          src="/menu7.png"
          height="20px"
          width="20px"
          alt="Settings image"
        />
      </Box>
        <Box marginTop={8} onClick={goToLogin}>
          <Image
            src="/menu6.png"
            height="20px"
            width="20px"
            alt="Logout image"
          />
        </Box>
    </Box>
  );
};

export default SideBarFooter;
