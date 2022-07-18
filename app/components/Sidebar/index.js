import React, { useEffect ,useState } from "react";
import { Box } from "@chakra-ui/react";
import Logo from "../Logo";
import CustomMenuItem from "./CustomMenuItem";
import SideBarFooter from './SidebarFooter';
import { MenuConstants } from "../../constants/AppConstants";
const { Dashboard, Patient, Medicine, Pharmacist } = MenuConstants;
import { useRouter } from "next/router";


const SideBar = () => {

  const router = useRouter();

  const pathName = router.pathname;

  const defaultMenuList = [
    {
      id: 1,
      title: Dashboard,
      image: "/amenu1.png",
      isActive: true,
      link: "/dashboard",
    },
    {
      id: 2,
      title: Patient,
      image: "/inmenu2.png",
      isActive: false,
      link: "/patients/SearchPatients",
    },
    {
      id: 3,
      title: Medicine,
      image: "/inmenu3.png",
      isActive: false,
      link: "",
    },
    {
      id: 4,
      title: Pharmacist,
      image: "/inmenu4.png",
      isActive: false,
      link: "",
    },
  ];

  const [menuList,setMenuList] = useState(defaultMenuList);

  

  function updateMenuListArray() {
    const { menuItemId } = router.query;
    const selectedMenuItemId = menuItemId ? menuItemId : defaultMenuList[0].id;
    const newMenuList = menuList.map((item) => {
      if (selectedMenuItemId == item.id) {
        return { ...item, isActive: true, image: `/amenu${item.id}.png` };
      } else {
        return { ...item, isActive: false, image: `/inmenu${item.id}.png` };
      }
    });
    
    setMenuList(newMenuList);
  }

  useEffect(()=>{
    updateMenuListArray()
 },[]);

  
  
 const handleMenuClick = async(selecteditem) => {
  router.push({
    pathname: selecteditem.link,
    query: { menuItemId: selecteditem.id }
  });
};
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      height={"100vh"}
    >
      <Box marginTop="5">
        <Logo />
      </Box>

      <Box marginTop="30">
        {menuList &&
          menuList.map((item, index) => {
            return (
              <Box
                marginTop={1}
                key={item.id}
                onClick={() => handleMenuClick(item)}
              >
                <CustomMenuItem
                  key={index}
                  title={item.title}
                  image={item.image}
                  isActive={item.isActive}
                  link={item.link}
                />
              </Box>
            );
          })}
      </Box>
      <Box marginTop="30" position={"absolute"} bottom={6}>
        <SideBarFooter />
      </Box>
    </Box>
  );
};

export default SideBar;
