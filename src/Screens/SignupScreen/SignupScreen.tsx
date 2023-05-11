import { View, Text ,Image, StyleSheet, TouchableOpacity, Button} from 'react-native'
import React,{useState,useContext,useEffect} from 'react'
import { ImageAssets } from '../../../assets/Images/ImageAssets'
import { TextInput } from 'react-native-gesture-handler'
import {Context as AuthContext} from "../../context/AuthContext"
import {responsiveFontSize,responsiveWidth,responsiveHeight} from "react-native-responsive-dimensions"
import { navigate } from '../../../RootNavigation'
const SignupScreen = () => {
  const {state,signup} = useContext(AuthContext)
  const [email,setemail] = useState("")
  const [password,setpassword] = useState("");
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={ImageAssets.LoginImage}/>
      <View  style={styles.container2}>
      <Text style={styles.text_heading} >Sign Up</Text>
      <Text style={styles.text_subheading}>Create your account</Text>
      <View style={styles.container2_2}>
        <TouchableOpacity>
         <Image style={styles.Image_social} source={ImageAssets.Google}/>
        </TouchableOpacity>
        <TouchableOpacity>
         <Image style={styles.Image_social} source={ImageAssets.Insta}/>
        </TouchableOpacity>
        <TouchableOpacity>
         <Image style={styles.Image_social} source={ImageAssets.Facebook}/>
        </TouchableOpacity>
      </View>
      </View>
      <View>
        <TextInput
          value={email}
          onChangeText={setemail}
          style={styles.border}
          placeholder='Email'
          autoCapitalize='none'
          autoCorrect={false}
        />
        <TextInput
          value={password}
          onChangeText={setpassword}
          style={styles.border}
          placeholder='Password'
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
        />
        <TouchableOpacity>
        {state.errorMessage?<Text style={styles.errormessage}>{state.errorMessage}</Text>:null}
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>{signup({email,password})}} style={styles.button}>
          <Text style={styles.button_text}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>{navigate("Signin")}}>
          <Text style={styles.text_signup}>Already have an account? Signin</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  errormessage:{
    fontSize:responsiveFontSize(1.8),
    color:"red",
    fontFamily:"Rubik",
    fontWeight:"bold",
    textAlign:"center"
  },
  button:{
     width:responsiveWidth(80),
     height:responsiveHeight(7),
     elevation:8,
     borderRadius:10,
     backgroundColor:"#E3562A",
     justifyContent:"center",
     alignItems:"center",
     marginTop:10
  },
  button_text:{
    fontSize:16,
    fontWeight:"700",
    fontFamily:"Rubik",
    color:"#FFFFFF"
  },
  container:{
    width:'100%',
    height:'100%',
    paddingVertical:0,
    paddingHorizontal:16,
    gap:16,
    alignItems:"center",
    flex:1
  },
  container2:{
    width:responsiveWidth(70),
    height:responsiveHeight(15),
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    gap:9
  },
  container2_2:{
    width:144,
    height:40,
    gap:12,
    display:"flex",
    flexDirection:"row"
  },
  Image:{
    width:responsiveWidth(50),
    height:responsiveHeight(30),
    marginTop:20
  },
  Image_social:{
    width:40,
    height:40,
  
  },
  text_heading:{
    fontSize:responsiveFontSize(3),
    fontFamily:"Rubik",
    fontWeight:"700",
    color:"#3C3A36",
    
  },
  text_subheading:{
    fontSize:responsiveFontSize(2),
    fontWeight:"400",
    color:"#78746D"
  },
  text_forgotpassword:{
      fontSize:responsiveFontSize(1.7),
      textAlign:"center",
      fontWeight:"700",
      fontFamily:"Rubik"
  },
  text_signup:{
    fontFamily:"Rubik",
    fontWeight:"700",
    fontSize:responsiveFontSize(1.8),
    color:"#78746D",
    textAlign:"center",
    marginTop:10
  },
  border:{
    height:responsiveHeight(7),
    margin:12,
    borderWidth:1,
    padding:10,
    borderRadius:12,
    fontFamily:"Rubik",
    borderColor:"#BEBAB3",
    fontSize:responsiveFontSize(2.5)
   }
})

export default SignupScreen