import React from "react";
import { Box, Image } from "@chakra-ui/react";
import SideBar from "../../components/Sidebar";
import Header from "../../components/Header";
export function hocLayout(WrappedComponent, headerStatus = true,userType) {
  return () => {
    return (
      <>
        <Box
          bottom={0}
          left={0}
          opacity={0.5}
          position={"absolute"}
          pointerEvents={'none'}
         
        >
          <Image src={"/watermark.png"} width={'50%'} objectFit={'contain'}  />
        </Box>
        <Box display={"flex"} flexDirection={"row"} bg="#F7F7F7">
          <Box width="10%" bg="#50A2DB">
            <SideBar />
          </Box>
          <Box
            height={"auto"}
            bg="#F7F7F7"
            padding={headerStatus ? 8 : 0}
            width="100%"
          >
            {headerStatus && <Header userType={userType} />}
            <Box>
              <WrappedComponent />
            </Box>
          </Box>
        </Box>
      </>
    );
  };
}
