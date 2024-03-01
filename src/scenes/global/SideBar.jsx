import { Sidebar, Menu, MenuItem, sidebarClasses } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalenderTodayOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from "react-router-dom";

const Item = ({ title, to, selected, setSelected, icon }) => {
  return (
    <MenuItem
      active={selected === title}
      component={<Link to={to} />}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      {title}
    </MenuItem>
  );
};

const SideBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
    // sx={{
    //   "& .pro-sidebar-inner": {
    //     background: `${colors.primary[400]} !important`,
    //   },
    //   "& .pro-icon-wrapper": {
    //     backgroundColor: "transparent !important",
    //   },
    //   "& .pro-inner-item": {
    //     padding: "5px 35px 5px 20px !important",
    //   },
    //   "& .pro-inner-item:hover": {
    //     color: "#868dfb !important",
    //   },
    //   "& .pro-menu-item.active": {
    //     color: "#6870fa !important",
    //   },
    // }}
    >
      <Sidebar
        collapsed={isCollapsed}
        // breakPoint="sm"
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: `${colors.primary[400]}`,
            // width: "220px",
            height: "100vh",
            borderRight: "none",
          },
        }}
      >
        <Menu
          menuItemStyles={{
            button: {
              backgroundColor: "transparent !important",
              ":hover": {
                color: "#868dfb !important",
              },
              ":active": {
                color: "#6870fa !important",
              },
            },
          }}
        >
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.gray[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.gray[100]}>
                  ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {!isCollapsed && (
            <Box mb="25px">
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <img
                  alt="profile-user"
                  width="80px"
                  height="80px"
                  src={`data:image/jpeg;base64,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`}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                    // background: "red",
                  }}
                />
                <Box textAlign="center">
                  <Typography
                    variant="h3"
                    fontWeight="bold"
                    style={{ margin: "5px 0 0 0" }}
                  >
                    Jeelan Shaik
                  </Typography>
                  <Typography variant="h5">React Admin</Typography>
                </Box>
              </Box>
            </Box>
          )}
          <Box mt="20px">
            <Item
              title={"DashBoard"}
              to={"/"}
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography variant="h5" ml={"20px"}>
              Data
            </Typography>
            <Item
              title={"Team Management"}
              to={"/team"}
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Contacts Information"}
              to={"/contacts"}
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Invoices Balances"}
              to={"/invoices"}
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography variant="h5" ml={"20px"}>
              Pages
            </Typography>
            <Item
              title={"Profile Form"}
              to={"/form"}
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"FAQ Page"}
              to={"/faq"}
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography variant="h5" ml={"20px"}>
              Charts
            </Typography>
            <Item
              title={"Bar Chart"}
              to={"/bar"}
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Pie Chart"}
              to={"/pie"}
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Line Chart"}
              to={"/line"}
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Geography Chart"}
              to={"/geography"}
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
