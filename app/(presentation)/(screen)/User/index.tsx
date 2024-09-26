import { UserServices } from "@/app/applicationService/services/userServices";
import { GetUserCU } from "@/app/applicationService/usesCases/GetUser.CU";
import { UserEntity } from "@/app/domain/entities/User.Entity"
import { UserApiDT } from "@/app/infraestructure/dataSources/UserApiDT";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState }  from "react"
import { Text, View } from "react-native"

const UserScreen:React.FC=()=>{
  const {id,q} = useLocalSearchParams(); 
  const [user, setUser] = useState<UserEntity|undefined>({email:{email:""},id:"",name:""});
  const getUserByIdCase = new GetUserCU(new UserServices(new UserApiDT())); 


  useEffect(()=>{
    console.log("q ", q); 
    let idT:string = id.toString(); 
    getUserByIdCase.execute(idT).then(r=>{
        console.log("Data ", r);
        setUser(r.data)
    });  
  },[]);


    return (
       <View>
        <Text>{user?.email.email} </Text>
        <Text>{user?.name} </Text>
        <Text>{user?.id} </Text>
       </View>      
    )
}

export default UserScreen; 