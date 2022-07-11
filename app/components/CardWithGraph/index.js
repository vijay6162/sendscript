import { Box, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { TriangleDownIcon } from "@chakra-ui/icons";
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const CardWithGraph = (props) => {
  const chartData = {
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100, 60, 70, 80],
      },
    ],
    options: {
      chart: {
        padding : 0,
        type: "area",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        show: false,
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: false,
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      grid: {
        show: false,
      },
      fill: {
        colors: ['#006600', '#ccffcc'],
        
      },
      stroke:{
        colors:['#0d6625']
       }, 
    },
  };

  return (
    <Box
      bg="#FFFFFF"
      borderRadius={"16px"}
      boxShadow={"2px 2px 4px 4px #00000029"}
      borderWidth={"1px"}
      opacity={4}
      width={'385px'}
      marginLeft = {6}
    >
      <Box>
        <Box
          display={"flex"}
          flexDirection="row"
          justifyContent={"space-between"}
          margin={5}
        >
          <Text fontSize={"12px"} fontFamily={"Poppins"} color="#104076" fontWeight="bold">
            {" "}
            {props.title}
          </Text>
          <Text fontSize={"10px"} fontFamily={"Poppins"} color="#50A2DB" fontWeight="bold">
            {" "}
            {props.durationTitle} <TriangleDownIcon />
          </Text>
        </Box>

        <ApexCharts
          options={chartData.options}
          series={chartData.series}
          type="area"
          height={'83%'}
        />
      </Box>
    </Box>
  );
};

export default CardWithGraph;
