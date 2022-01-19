import {createStackNavigator} from "@react-navigation/stack"
import {useState} from 'react'
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import Tabs from "./navigation/tabs"
import { PlantDetails } from "./screens";
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'

const getFonts = ()=> Font.loadAsync({
  'roboto-black': require('./assets/fonts/Roboto-Black.ttf'),
  'roboto-black-italic': require('./assets/fonts/Roboto-BlackItalic.ttf'),
  'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  'roboto-boldItalic': require('./assets/fonts/Roboto-BoldItalic.ttf'),
  'roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'),
  'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
  'roboto-thin': require('./assets/fonts/Roboto-Thin.ttf')
})

const Stack = createStackNavigator()

export default function App() {

  const [fontsLoaded, setFontsloaded] = useState(false)

  if(fontsLoaded){
    return (
      <NavigationContainer>
       <Stack.Navigator 
       screenOptions={{
         headerShown: false
       }}
       initialRouteName={"Home"}
       >
         <Stack.Screen name="Home" component={Tabs} />
         <Stack.Screen name="PlantDetail" component={PlantDetails} options={{headerShown: false}} />
       </Stack.Navigator>
      </NavigationContainer>
     );
  }else{
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={()=> setFontsloaded(true)}
        onError={()=>console.log('error')}
      />
    )
  }
  
}


