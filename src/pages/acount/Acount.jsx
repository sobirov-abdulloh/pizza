import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Nastroyka from "../../components/Nastroyka/Nastroyka";
import "./Acount.css"
import Zakas from "../../components/Zakas/Zakas";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <div className="tabs">
          <h1>Мой аккаунт</h1>
          <Tabs
            className="Tabs"
            onChange={handleChange}
          >
            <Tab className="btn1" label="История заказов" {...a11yProps(0)} />
            <Tab className="btn2" label="Настройки" {...a11yProps(1)} />
          </Tabs>
        </div>
      </Box>
      <TabPanel value={value} index={0}>
        <Zakas/>  
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Nastroyka />
      </TabPanel>
    </Box>
  );
}
