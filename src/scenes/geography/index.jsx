import { Box, useTheme } from "@mui/material";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Geography = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="10px 20px">
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />

      <Box
        height="75vh"
        border={`1px solid ${colors.gray[100]}`}
        borderRadius="4px"
        mt={"20px"}
      >
        <GeographyChart />
      </Box>
    </Box>
  );
};

export default Geography;
