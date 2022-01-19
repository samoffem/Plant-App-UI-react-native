import React from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {COLORS, icons} from '../constants'
import { Home } from '../screens';

const Tab = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: {
        height: "10%"
    }
}

const CameraButton = ()=>{

    return (
        <View 
        style={{
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.primary
        }}>

            <Image source={icons.camera} resizeMode="contain" style={{width: 23, height: 23, tintColor: '#fff'}} />
        
        </View>
    )
}

const Tabs = ()=>{

    return (
        <Tab.Navigator
            tabBarOptions={tabOptions}
            screenOptions={({route})=>({
                tabBarIcon: ({focused})=>{
                    const tintColor = focused ? COLORS.primary : COLORS.gray

                    switch(route.name){
                        case "Home":
                            return (
                                <Image source={icons.flash} resizeMode="contain" 
                                style={{tintColor: tintColor, width: 30, height: 30}}  
                                />
                            )
                        case "Box":
                            return (
                                <Image source={icons.cube} resizeMode="contain" 
                                style={{tintColor: tintColor , width: 30, height: 30}}  
                                />
                            )
                        case "Camera":
                            return (
                                <CameraButton />
                            )
                        case "Search":
                            return (
                                <Image source={icons.search} resizeMode="contain" 
                                style={{tintColor: tintColor, width: 30, height: 30}}  
                                />
                            )
                        case "Favorite":
                            return (
                                <Image source={icons.heart} resizeMode="contain" 
                                style={{tintColor: tintColor, width: 30, height: 30}}  
                                />
                            )
                    }
                   
                },
                headerShown: false
            })}
        > 
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Box" component={Home} />
                <Tab.Screen name="Camera" component={Home} />
                <Tab.Screen name="Search" component={Home} />
                <Tab.Screen name="Favorite" component={Home} />  
        </Tab.Navigator>
    )
}

export default Tabs