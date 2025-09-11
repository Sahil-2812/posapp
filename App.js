import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "./src/screens/Frontend/SplashScreen";
import LoginScreen from "./src/screens/Frontend/LoginScreen";
import OtpScreen from "./src/screens/Frontend/Otp";
import SignupScreen from "./src/screens/Frontend/Signup";
import Signup2 from "./src/screens/Frontend/Signup2";
import Home from "./src/screens/Frontend/Home";
import WaterRequest from "./src/screens/Frontend/WaterRequest";
import Submitted from "./src/screens/Frontend/Submitted";
import SelectWater from "./src/screens/Frontend/SelectWater";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Otp" component={OtpScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Signup2" component={Signup2} />
           <Stack.Screen name="Home" component={Home} />
           <Stack.Screen name="WaterRequest" component={WaterRequest} />
           {/* <Stack.Screen name="SelectWater" component={SelectWater} /> */}
            <Stack.Screen name="Submitted" component={Submitted} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
