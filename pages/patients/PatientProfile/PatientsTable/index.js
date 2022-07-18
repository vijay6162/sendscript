import {
  Box
} from "@chakra-ui/react";
import CustomTable from "../../../../app/components/Table";
const tableHeadData = [
  "Date of Prescription",
  "Doctor Name",
  "Pharmacy Name",
  "Address",
  "Actions",
];

const tableData = [
  {
    id: 1,
    DateofPrescription: "20 Sep 2021",
    DoctorName: "Dr.Drashnika",
    PharmacyName: "Elite Health",
    Address: "69 Harley St, London W1G 8QW, United Kingdom",
    medicineData : [
      {
        id : 1,
        medicineName : 'Medicine Name',
        dosage : '500mg',
        DailyDosage : "3 per Day",
        Duration : '7days'
      },
      {
        id : 2,
        medicineName : 'Medicine Name',
        dosage : '500mg',
        DailyDosage : "3 per Day",
        Duration : '7days'
      },
      {
        id : 3,
        medicineName : 'Medicine Name',
        dosage : '500mg',
        DailyDosage : "3 per Day",
        Duration : '7days'
      },
    ]
    
  },
  {
    id: 2,
    DateofPrescription: "20 Sep 2021",
    DoctorName: "Dr.Drashnika",
    PharmacyName: "Elite Health",
    Address: "69 Harley St, London W1G 8QW, United Kingdom",
    medicineData : [
      {
        id : 4,
        medicineName : 'Medicine Name',
        dosage : '500mg',
        DailyDosage : "3 per Day",
        Duration : '7days'
      },
      {
        id : 5,
        medicineName : 'Medicine Name',
        dosage : '500mg',
        DailyDosage : "3 per Day",
        Duration : '7days'
      },
      {
        id : 6,
        medicineName : 'Medicine Name',
        dosage : '500mg',
        DailyDosage : "3 per Day",
        Duration : '7days'
      },
    ]
    
  },
  {
    id: 3,
    DateofPrescription: "20 Sep 2021",
    DoctorName: "Dr.Drashnika",
    PharmacyName: "Elite Health",
    Address: "69 Harley St, London W1G 8QW, United Kingdom",
    medicineData : [
      {
        id : 7,
        medicineName : 'Medicine Name',
        dosage : '500mg',
        DailyDosage : "3 per Day",
        Duration : '7days'
      },
      {
        id : 8,
        medicineName : 'Medicine Name',
        dosage : '500mg',
        DailyDosage : "3 per Day",
        Duration : '7days'
      },
      {
        id : 9,
        medicineName : 'Medicine Name',
        dosage : '500mg',
        DailyDosage : "3 per Day",
        Duration : '7days'
      },
    ]
    
  },
];

const PatientsTable = () => {
  return (
    <Box marginTop={6}>
      <CustomTable tableHeadData={tableHeadData} tableHeadBackgroundColor="#fff" headerType={'search'}  tableData={tableData} from="patients" showPagination={true} />
    </Box>
  );
};

export default PatientsTable;
