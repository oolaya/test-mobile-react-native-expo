import { Text } from "react-native";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import React, { useEffect } from "react";
import { UserEntity } from "@/app/domain/entities/User.Entity";

export default function ListGenericComponent(props:any){
    let users:Array<UserEntity>=props.props.data; 
     
  
    
    return (<>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    {
                    
                      users.map((u:UserEntity,i:number)=>{
                          return (
                            <>

                <ListItem alignItems="flex-start">
                    
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary={u.firstName}
                    secondary={
                        <React.Fragment>
                        <Typography
                            component="span"
                            variant="body2"
                            sx={{ color: 'text.primary', display: 'inline' }}
                        >
                           {u.id}
                        </Typography>
                        {u.id}
                        </React.Fragment>
                    }
                    />
        </ListItem>
      <Divider variant="inset" component="li" />
    


                            </>
                          ); 
                        })
                    }
                    
      </List>  
    </>);
}