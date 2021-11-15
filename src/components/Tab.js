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
//          TabIndicatorProps={{ className: classes.indicator }}

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

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from '@mui/lab/TabContext';
import { makeStyles } from "@mui/styles";
import TabGift from "../components/TabGift";

const customers = [{
  'id':1,
  'image': 'https://placeimg.com/64/64/1',
  'name':'홍길동',
  'birthday': '931216',
},
{
  'id':2,
  'image': 'https://placeimg.com/64/64/2',
  'name':'김한울',
  'birthday': '678765',
},
{
  'id':3,
  'image': 'https://placeimg.com/64/64/3',
  'name':'이순신',
  'birthday': '456245',
},
]

export default function ColorTabs() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const useStyles = makeStyles((theme) => ({
    indicator: {
      backgroundColor: "#EC5800",
      //   height: "10px",
      //   top: "45px"
    },
  }));
  const classes = useStyles();

 
  return (
    <Box sx={{ width: "100%" }}>
      <TabContext value={value}>
      <Tabs
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ className: classes.indicator }}
      >
        <Tab className='tab-title' value="one" label="내가 찜한 선물" />
        <Tab className='tab-title' value="two" label="내가 받은 제안서" />
 
      </Tabs>
      <TabPanel value="one"><div>
          {customers.map(c =>{
              var a = <TabGift name={c.name} image = {c.image}/>
               return a;
          })}
      </div></TabPanel>
      <TabPanel value="two">Item Two</TabPanel>

      </TabContext>
    </Box>
  );
}

