
import { UserEntity } from "@/app/domain/entities/User.Entity"
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState }  from "react"
import { Text, View } from "react-native"
import { ApiDummy } from "@/app/infraestructure/dataSources/ApiDummy";
import { GetUserCU } from "@/app/applicationServices/usesCases/user/GetUser.CU";
import { UserServices } from "@/app/applicationServices/services/userServices";

const UserScreen:React.FC=()=>{
  const {id,q} = useLocalSearchParams(); 
  const [users, setUsers] = useState<Array<UserEntity>>([]);
  const getUserByIdCase = new GetUserCU(new UserServices(new ApiDummy<UserEntity>())); 
  // const getAllCase = new GetAllCU(new UserServices(new UserApiDT())); 


  useEffect(()=>{
    console.log("q ", q); 
    // let idT:string = id.toString(); 
    getUserByIdCase.execute("60d0fe4f5311236168a109ca").then(r=>{       
        console.log("El User", r ); 
    });  
  },[]);


    return (
       <View>      
        {/* <ListGenericComponent props={{data:users}} /> */}
       </View>      
    )
}

export default UserScreen; 