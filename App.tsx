import React from "react";
import MyStack from "./Stack";
import {Provider as AuthProvider} from "./src/context/AuthContext"
const App = () =>{
  return(
    <AuthProvider>
      <MyStack/>
    </AuthProvider>
  )
}

export default App;