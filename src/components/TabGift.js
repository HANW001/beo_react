import React, { Component } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

class TabGift extends Component{

    render(){
        return (
            <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={this.props.image} />
                </ListItemAvatar>
                <ListItemText primary={this.props.name} />
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          );
    }
}





export default  TabGift