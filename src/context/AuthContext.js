import createDataContext from "./createDataContext";
import trackerApi from '../api/tracker'
import AsyncStorage from "@react-native-async-storage/async-storage"
import { navigate } from "../../RootNavigation";
const authReducer = (state,action) =>{
 switch(action.type){
    case "add_error":
       return {...state,errorMessage:action.payload}
    case "signup":
        return {errorMessage:"",token:action.payload}
    case "signin":
        return {errorMessage:"",token:action.payload}
     case "clear_error_message":
        return {...state,errorMessage:""}
    default:
        return state
 }
}

const signup = dispatch =>{
    return async ({email,password}) =>{
      //make api request to signup with that email na dpassword
      // if we signup ,modify our state and say we are authenicated
      //if signup fail we need to reflect an error message somewhere
      try{
        const response = await trackerApi.post('/signup',{email,password})
         await AsyncStorage.setItem("token",response.data.token)
          dispatch({type:"signup",payload:response.data.token})
          navigate("home")
        }catch(err){
         dispatch({type:"add_error",payload:"Something went wrong  with sign up"})
      }
    }
}

const signin = (dispatch) =>{
    return async ({email,password}) =>{
        //try to signin
        //handle success by updating state
        //handle failure by showing error message(somehow)
        try{
            const response = await trackerApi.post('/signin',{email,password})
             await AsyncStorage.setItem("token",response.data.token)
              dispatch({type:"signin",payload:response.data.token})
              navigate("home")
            }catch(err){
             dispatch({type:"add_error",payload:"Something went wrong  with sign in"})
          }
    }
}

const clearErrorMessage = dispatch => () =>{
    dispatch({type:"clear_error_message"})
}

const tryLocalSignin = dispatch => async() =>{
    const token = await AsyncStorage.getItem("token")
    if(token){
        dispatch({type:"signin",payload:token})
        navigate('home')
    }else{
        navigate("Signup")   
    }
}
const signout = (dispatch) =>{
    return () =>{
        //somehow sign out
    }
}
export const {Provider,Context} = createDataContext(
    authReducer,
    {signin,signout,signup,clearErrorMessage,tryLocalSignin},
    {token:null,errorMessage:""}
)