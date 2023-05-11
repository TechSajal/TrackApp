import { View, Text,Image,StyleSheet} from 'react-native'
import React from 'react'
import { ImageAssets } from '../../../assets/Images/ImageAssets'
import {useState,useContext,useEffect} from 'react'
import {Context as AuthContext} from "../../context/AuthContext"
import {responsiveFontSize,responsiveWidth,responsiveHeight} from "react-native-responsive-dimensions"
const SplashScreen = () => {
    const {tryLocalSignin} = useContext(AuthContext)
    useEffect(()=>{
        tryLocalSignin()
      },[])
    return (
    <View style={styles.container} >
      <Image style={styles.image} source={ImageAssets.SplashScreen} />
      <Text style={styles.text}>Primathon Tech</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        paddingVertical:0,
        paddingHorizontal:16,
        gap:16,
        alignItems:"center",
        flex:1
      },
    image:{
       width:responsiveWidth(40),
       height:responsiveHeight(30),
       marginTop:200
    },
    text:{
        fontFamily:"Rubik-Italic-VariableFont_wght",
        fontSize:45,
        fontWeight:"bold",
        color:"#3C3A36"
    }
})
 
export default SplashScreen