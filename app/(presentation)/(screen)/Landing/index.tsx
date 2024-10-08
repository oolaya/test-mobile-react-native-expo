import { UserServices } from "@/app/applicationService/services/userServices";
import { GetUserCU } from "@/app/applicationService/usesCases/user/GetUser.CU";
import { UserEntity } from "@/app/domain/entities/User.Entity"
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState }  from "react"
import { Text, View } from "react-native"
import { ApiDummy } from "@/app/infraestructure/dataSources/ApiDummy";
import CommentsForm from "../../components/Forms/CommentsForm";
import CameraP from "../../components/peripherals/Camera.p";

const LandingScreen:React.FC=()=>{
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
 const handleSubmitApi=(formSend:any)=>{
   console.log("Paso el formulario ", formSend );
   alert("ya rettorno los datos y estoy en el padre")
 }

    return (
       <View>      
        <Text>Aqui van los post generales</Text>
        <CommentsForm
        handleSubmitApi={handleSubmitApi}
        />

        <CameraP></CameraP>
       </View>      
    )
}

export default LandingScreen; 