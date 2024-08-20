import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Searchpage from './App/Searchpage';
import SignUp from './App/SignUp';
import SignIn from './App/SignIn';
import ListedPGView from './App/ListedPGView';
import MyWallet from './App/MyWallet';
import ListNewPG from './App/ListNewPG';
import { getAuth } from "firebase/auth";
import { Auth } from "firebase/auth";
import PGView from "./App/PGView";
import Seepg from "./App/Seepg"
import Seepg2 from './App/Seepg2';
import Pgdetail from './App/Pgdetail';


export default function App(){
  
  const [isLogin,setIsLogin]=useState(false);
  const Stack = createNativeStackNavigator();
  getAuth().onAuthStateChanged(user=>{
    if(user !== null){
      setIsLogin(true)
    }
  })
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {(!isLogin) ?
        <Stack.Screen
          name="SignUp"
          component={SignUp}
        /> : null}
        {(!isLogin) ?
        <Stack.Screen
          name="SignIn"
          component={SignIn}
        />
         : null}
       <Stack.Screen
          name="Searchpage"
          component={Searchpage}
        />
        <Stack.Screen
          name="ListedPGView"
          component={ListedPGView}
        />
        <Stack.Screen
          name="MyWallet"
          component={MyWallet}
        />
        <Stack.Screen
          name="ListNewPG"
          component={ListNewPG}
        />
        <Stack.Screen
          name="PGView"
          component={PGView}
        />
        <Stack.Screen
          name="Seepg"
          component={Seepg}
        />
        <Stack.Screen
          name="Seepg2"
          component={Seepg2}
        />
         <Stack.Screen
          name="Pgdetail"
          component={Pgdetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}