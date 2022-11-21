import React from "react"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export const Comments=()=>{
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="https://marketplace.canva.com/EAEeKH905XY/2/0/1600w/canva-yellow-and-black-gamer-grunge-twitch-profile-picture-Yf5RCMJroQI.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="username"
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              Ali Connors
            </Typography>
            {" — I'll be in your neighborhood doing errands this…"}
          </React.Fragment>
        }
      />
    </ListItem>
    
    <Divider variant="inset" component="li" />
   
  </List>
  )
}
export default Comments