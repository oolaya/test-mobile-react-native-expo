import { UserEntity } from "@/app/domain/entities/User.Entity";
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ApiDummy } from "@/app/infraestructure/dataSources/ApiDummy";
import { GetUserCU } from "@/app/applicationServices/usesCases/user/GetUser.CU";
import { UserServices } from "@/app/applicationServices/services/userServices";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const LandingScreen: React.FC = () => {
  const { id, q } = useLocalSearchParams();
  const [users, setUsers] = useState<Array<UserEntity>>([]);
  const getUserByIdCase = new GetUserCU(
    new UserServices(new ApiDummy<UserEntity>())
  );
  const inset = useSafeAreaInsets();
  // const getAllCase = new GetAllCU(new UserServices(new UserApiDT()));

  useEffect(() => {
    console.log("q ", q);
    // let idT:string = id.toString();
    getUserByIdCase.execute("60d0fe4f5311236168a109ca").then((r) => {
      console.log("El User", r);
    });
  }, []);

  return (
    <View style={[stylesLanding.container, stylesLanding.content_flex]}>
      <Text>Este será el contenedor</Text>
     
      <View style={stylesLanding.view2}>
        <Text>View 2</Text>
      </View>
      <View style={stylesLanding.view3}>
        <Text>View 3</Text>
      </View>
    </View>
  );
};

export default LandingScreen;

const stylesLanding = StyleSheet.create({
  container: {
    
    alignItems: "center",
    height: "100%",
    backgroundColor: "red",
  },
  content_flex:{
    flex:1,
    flexDirection:'row',
  },
  view1:{
    width:"90%",
    height:"20%",
    backgroundColor:"blue"
  },
  view2:{
    width:100,
    height:'80%',
    backgroundColor:'green'
  }, 
  view3:{
     width:100,
    height:'80%',
    backgroundColor:'yellow'
  }

});
