// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import Tabs from '@mui/material/Tabs';
// import { makeStyles } from '@mui/styles';

// export default function LabTabs() {
//   const [value, setValue] = React.useState('1');

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   const useStyles = makeStyles(theme => ({
//     indicator: {
//       backgroundColor: "#EC5800",
//     //   height: "10px",
//     //   top: "45px"
//     }
//   }));
//   const classes = useStyles();

//   return (
//     <Box sx={{ width: '100%', typography: 'body1' }}>
//       <TabContext value={value}>
//         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//           <TabList onChange={handleChange} >
//           <Tabs
//         value={value}
//         onChange={handleChange}
//         TabIndicatorProps={{ className: classes.indicator }}
        
//       >
//             <Tab label="Item One" value="1" />
//             <Tab label="Item Two" value="2" />
//             <Tab label="Item Three" value="3" />
//             </Tabs>
         
//           </TabList>
//         </Box>
//         <TabPanel value="1">Item One</TabPanel>
//         <TabPanel value="2">Item Two</TabPanel>
//         <TabPanel value="3">Item Three</TabPanel>
//       </TabContext>
//     </Box>
//   );
// }


import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const useStyles = makeStyles(theme => ({
    indicator: {
      backgroundColor: "#EC5800",
    //   height: "10px",
    //   top: "45px"
    }
  }));
  const classes = useStyles();
  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ className: classes.indicator }}
      >
        <Tab value="one" label="Item One" />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
      </Tabs>
      <TabPanel value="one">Item One</TabPanel>
        <TabPanel value="two">Item Two</TabPanel>
        <TabPanel value="three">Item Three</TabPanel>
    </Box>
  );
}
