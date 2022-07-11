import React, { useLayoutEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import RestrictMobileVersion from "../app/components/RestrictMobileVersion";


function MyApp({ Component, pageProps }) {
  const [showMobileWarning, setshowMobileWarning] = useState(false);

  useLayoutEffect(() => {
    function checkLayout() {
      if (window.innerWidth <= 1200) {
        setshowMobileWarning(true);
      } else {
        setshowMobileWarning(false);
      }
    }
    window.addEventListener("resize", checkLayout);
    checkLayout();
    return () => window.removeEventListener("resize", checkLayout);
  }, []);

  return (
    <ChakraProvider>
      {!showMobileWarning ? (
        <Component {...pageProps} />
      ) : (
        <RestrictMobileVersion />
      )}
    </ChakraProvider>
  );
}

export default MyApp;
