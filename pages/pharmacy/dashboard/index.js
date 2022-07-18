import React, { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import Cards from "../../../app/components/Cards";
import CustomTable from "../../../app/components/Table";
import AppConst from "../../../app/constants/AppConstants";
import { hocLayout } from "../../../app/components/hocLayout";
import { useRouter } from "next/router";

const DashboardTable = () => {
  const tableHeadData = [
    "Date of Prescription",
    "Patient Name",
    "Date of Birth",
    "Contact No",
    "Doctor Name",
    "Action",
    "Status",
  ];

  const tableData = [
    {
      id: 1,
      DateofPrescription: "20 Sep 2021",
      PatientName: "Ben Alloy",
      DateOfBirth: "10 Aug 2010",
      ContactNo: "+44 91716 8112",
      DoctorName: "Dr.Drashnika",
      Status: "To Do",

      medicineData: [
        {
          id: 1,
          medicineName: "Medicine Name",
          dosage: "500mg",
          DailyDosage: "3 per Day",
          Duration: "7days",
        },
        {
          id: 2,
          medicineName: "Medicine Name",
          dosage: "500mg",
          DailyDosage: "3 per Day",
          Duration: "7days",
        },
        {
          id: 3,
          medicineName: "Medicine Name",
          dosage: "500mg",
          DailyDosage: "3 per Day",
          Duration: "7days",
        },
      ],
    },
    {
      id: 2,
      DateofPrescription: "20 Sep 2021",
      PatientName: "Ben Alloy",
      DateOfBirth: "10 Aug 2010",
      ContactNo: "+44 91716 8112",
      DoctorName: "Dr.Drashnika",
      Status: "To Do",

      medicineData: [
        {
          id: 1,
          medicineName: "Medicine Name",
          dosage: "500mg",
          DailyDosage: "3 per Day",
          Duration: "7days",
        },
        {
          id: 2,
          medicineName: "Medicine Name",
          dosage: "500mg",
          DailyDosage: "3 per Day",
          Duration: "7days",
        },
        {
          id: 3,
          medicineName: "Medicine Name",
          dosage: "500mg",
          DailyDosage: "3 per Day",
          Duration: "7days",
        },
      ],
    },
    {
      id: 3,
      DateofPrescription: "20 Sep 2021",
      PatientName: "Ben Alloy",
      DateOfBirth: "10 Aug 2010",
      ContactNo: "+44 91716 8112",
      DoctorName: "Dr.Drashnika",
      Status: "To Do",

      medicineData: [
        {
          id: 1,
          medicineName: "Medicine Name",
          dosage: "500mg",
          DailyDosage: "3 per Day",
          Duration: "7days",
        },
        {
          id: 2,
          medicineName: "Medicine Name",
          dosage: "500mg",
          DailyDosage: "3 per Day",
          Duration: "7days",
        },
        {
          id: 3,
          medicineName: "Medicine Name",
          dosage: "500mg",
          DailyDosage: "3 per Day",
          Duration: "7days",
        },
      ],
    },
    {
      id: 4,
      DateofPrescription: "20 Sep 2021",
      PatientName: "Ben Alloy",
      DateOfBirth: "10 Aug 2010",
      ContactNo: "+44 91716 8112",
      DoctorName: "Dr.Drashnika",
      Status: "To Do",

      medicineData: [
        {
          id: 1,
          medicineName: "Medicine Name",
          dosage: "500mg",
          DailyDosage: "3 per Day",
          Duration: "7days",
        },
        {
          id: 2,
          medicineName: "Medicine Name",
          dosage: "500mg",
          DailyDosage: "3 per Day",
          Duration: "7days",
        },
        {
          id: 3,
          medicineName: "Medicine Name",
          dosage: "500mg",
          DailyDosage: "3 per Day",
          Duration: "7days",
        },
      ],
    },
    
  ];

  return (
    <Box marginTop={6}>
      <CustomTable
        tableHeadData={tableHeadData}
        tableHeadBackgroundColor="#fff"
        headerType={"search"}
        tableData={tableData}
        from="pharmacy_dashboard"
        showPagination={true}
      />
    </Box>
  );
};

const Dashboard = () => {
  const router = useRouter();

  return (
    <>
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
        </Box>

        <Box marginTop={6}>
          <Box
            display={"flex"}
            flexDirection="row"
            justifyContent={"space-between"}
            alignItems="center"
          >
            <Cards
              title={AppConst.DashboardCardText2}
              value="102"
              progressValue={30}
              color="#F0A102"
            />
            <Cards
              title={AppConst.DashboardCardText6}
              value="70"
              progressValue={70}
              color="#DC3545"
            />
            <Cards
              title={AppConst.DashboardCardText3}
              value="123"
              progressValue={60}
              color="#28A745"
            />
            <Cards
              title={AppConst.DashboardCardText4}
              value="340"
              progressValue={90}
              color="#6C63FF"
            />
          </Box>
        </Box>
        <Box marginTop={6}>
          <DashboardTable />
        </Box>
      </Box>
    </>
  );
};

const DashboardHoc = hocLayout(Dashboard);

export default DashboardHoc;
