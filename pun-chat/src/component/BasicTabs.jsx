import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ChatListBox from "./ChatListBox";
import user0 from "../../public/profile.jpg";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
    className: "flex-[1] text-white",
  };
}

export default function BasicTabs() {
  const DummyUserData = [
    {
      id: 0,
      userName: "Umang Bhai",
      userStatus: "Online",
      userPhoto: user0,
    },
    {
      id: 1,
      userName: "Akshar Bhai",
      userStatus: "Online",
      userPhoto: user0,
    },
    {
      id: 2,
      userName: "Uday Bhai",
      userStatus: "Last seen at panipuri corner",
      userPhoto: user0,
    },
  ];

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          background: "#680982",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="inherit"
          TabIndicatorProps={{
            style: {
              backgroundColor: "#fda97a",
            },
          }}
        >
          <Tab
            label="Chats"
            {...a11yProps(0)}
            sx={{ color: value === 0 ? "#fda97a" : "white" }}
          />
          <Tab
            label="Groups"
            {...a11yProps(1)}
            sx={{ color: value === 1 ? "#fda97a" : "white" }}
          />
          <Tab
            label="Status"
            {...a11yProps(2)}
            sx={{ color: value === 2 ? "#fda97a" : "white" }}
          />
          <Tab
            label="Call"
            {...a11yProps(3)}
            sx={{ color: value === 3 ? "#fda97a" : "white" }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {DummyUserData.map((userDetail) => (
          <ChatListBox
            key={userDetail.id}
            profilePic={userDetail.userPhoto}
            name={userDetail.userName}
            status={userDetail.userStatus}
          />
        ))}
        {/* <ChatListBox name={"Umang Bhai"} time={"23:25"} /> */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ChatListBox name={"Baniya Chaap"} time={"23:25"} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        No Status
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        No Calls
      </CustomTabPanel>
    </Box>
  );
}
