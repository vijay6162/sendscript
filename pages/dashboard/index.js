import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Cards from "../../app/components/Cards";
import LargeCards from "../../app/components/LargeCards";
import CardWithGraph from "../../app/components/CardWithGraph";
import SquareButton from "../../app/components/SquareButton";
import { AddIcon } from "@chakra-ui/icons";
import CustomTable from "../../app/components/Table";
import AppConst from "../../app/constants/AppConstants";
import { hocLayout } from "../../app/components/hocLayout";

const tableHeadData = [
  "Prescription ID",
  "Patient Name",
  "Date of Birth",
  "Date of Prescription",
  "Status",
  "Actions",
];

const tableData = [
  {
    id: 1,
    PrescriptionID: "SS01238",
    PatientName: "Ben Alloy",
    DateOfBirth: "10 Aug 2010",
    DateOfPrescription: "10 Aug 2010 16 : 55 PM",
    Status: "Dispensed",
  },
  {
    id: 2,
    PrescriptionID: "SS01238",
    PatientName: "Ben Alloy",
    DateOfBirth: "10 Aug 2010",
    DateOfPrescription: "10 Aug 2010 16 : 55 PM",
    Status: "Completed",
  },
  {
    id: 3,
    PrescriptionID: "SS01238",
    PatientName: "Ben Alloy",
    DateOfBirth: "10 Aug 2010",
    DateOfPrescription: "10 Aug 2010 16 : 55 PM",
    Status: "Sent Via Fax",
  },
  {
    id: 4,
    PrescriptionID: "SS01238",
    PatientName: "Ben Alloy",
    DateOfBirth: "10 Aug 2010",
    DateOfPrescription: "10 Aug 2010 16 : 55 PM",
    Status: "Sent Via SS",
  },
  {
    id: 5,
    PrescriptionID: "SS01238",
    PatientName: "Ben Alloy",
    DateOfBirth: "10 Aug 2010",
    DateOfPrescription: "10 Aug 2010 16 : 55 PM",
    Status: "Cancelled",
  },
  {
    id: 6,
    PrescriptionID: "SS01238",
    PatientName: "Ben Alloy",
    DateOfBirth: "10 Aug 2010",
    DateOfPrescription: "10 Aug 2010 16 : 55 PM",
    Status: "Sent Via Fax",
  },
];
const Dashboard = () => {
  return (
    <Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems="center"
        marginTop={3}
        justifyContent="space-between"
      >
        <Heading
          fontFamily={"Poppins"}
          fontWeight="semibold"
          fontSize={"23px"}
          
        >
          {AppConst.DashboardHeading}
        </Heading>
        <SquareButton
          buttonTitle={AppConst.DashboardSearchPatient}
          showRightIcon={true}
          iconComponent={<AddIcon fontSize={"10px"} />}
          backgroundColor="#50A2DB"
          buttonTextColor="#fff"
        />
      </Box>

      <Box
        display={"flex"}
        flexDirection="row"
        justifyContent={'space-between'}
        alignItems="center"
        marginTop = {6}
      >
        <Box>
          <LargeCards
            title={AppConst.DashboardCardText1}
            value="300"
            progressValue={60}
            color="#50A2DB"
          />
        </Box>
        <Box display={"flex"} flexDirection="row">
          <Box>
            <Box>
              <Cards
                title={AppConst.DashboardCardText2}
                value="102"
                progressValue={30}
                color="#F0A102"
              />
            </Box>

            <Box marginTop={6}>
              <Cards
                title={AppConst.DashboardCardText6}
                value="70"
                progressValue={70}
                color="#DC3545"
              />
            </Box>
          </Box>
          <Box>
            <Cards
              title={AppConst.DashboardCardText3}
              value="123"
              progressValue={60}
              color="#28A745"
            />
          </Box>
          <Box>
            <Cards
              title={AppConst.DashboardCardText4}
              value="340"
              progressValue={90}
              color="#6C63FF"
            />
          </Box>
        </Box>

        <Box>
          <CardWithGraph
            title={AppConst.DashboardCardText5}
            durationTitle="Last 6 months"
            value="300"
            progressValue={60}
            color="#50A2DB"
          />
        </Box>
      </Box>
      <Box marginTop={6}>
        <CustomTable tableHeadData={tableHeadData} tableData={tableData} from="dashboard" showPagination={false} tableHeadBackgroundColor="#fff" headerType={'search'}/>
      </Box>
    </Box>
  );
};

const DashboardHoc = hocLayout(Dashboard);

export default DashboardHoc;
