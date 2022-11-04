import { StyleSheet ,AsyncStorage} from "react-native";

import React,{useState} from "react";


export function Auth(data=null,action=null) {
//   const [users,setUsers]=useState("")
//   const [usersapi,setUsersApi]=useState("")
  if(data){
        console.log(data)
        AsyncStorage.setItem('users',JSON.stringify(data.users))
        AsyncStorage.setItem('usersapi',JSON.stringify(data.api))
        return true
    }
    
    if(action){
        console.log('for logout')
        return false;
    }
   const _retrieveData =async () => {
        try {
          const user = await  AsyncStorage.getItem('users');
          const api = await  AsyncStorage.getItem('usersapi');
          if (user !== null) {
              console.log(api)
              setUsers(user)
              setUsersApi(api)
            }
        } catch (error) {
          // Error retrieving data
        }
      };
        _retrieveData()
    // return {user:users,userTocken:usersapi}
}