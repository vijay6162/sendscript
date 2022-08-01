import React, { useLayoutEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import RestrictMobileVersion from "../app/components/RestrictMobileVersion";
import { Provider } from "react-redux";
import store from '../app/redux/store';

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
    if (typeof window !== "undefined") {
      checkLayout();
    }

    return () => window.removeEventListener("resize", checkLayout);
  }, []);

  return (
    <Provider store={store}>
      <ChakraProvider>
        {!showMobileWarning ? (
          <Component {...pageProps} />
        ) : (
          <RestrictMobileVersion />
        )}
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
