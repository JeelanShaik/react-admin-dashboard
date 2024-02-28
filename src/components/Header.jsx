import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import React from "react";

const Header = ({ title, subTitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Typography
        variant="h2"
        fontWeight="Bold"
        color={colors.gray[100]}
        mb="5px"
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
