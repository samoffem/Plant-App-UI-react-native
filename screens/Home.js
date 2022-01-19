import React,{useState} from "react";

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import { FlatList } from "react-native-gesture-handler";
import { COLORS, FONTS, icons, images, SIZES } from "../constants";

const Home = ()=>{

    const [newPlants, setNewPlants] = useState([
        {
           id: 0,
           name: 'Plant 1',
           img: images.plant1,
           favorite: false
        },
        {
           id: 1,
           name: 'Plant 2',
           img: images.plant2,
           favorite: false
        },
        {
           id: 2,
           name: 'Plant 2',
           img: images.plant3,
           favorite: true
        },
        {
           id: 3,
           name: 'Plant 3',
           img: images.plant4,
           favorite: false
        },
    ])

    const renderNewPlants = (item, index)=>{

        return(
            <View style={{ alignItems: "center", justifyContent: "center", marginHorizontal: SIZES.base}}>
                <Image 
                source={item.img}
                resizeMode="cover"
                style={{
                    width: SIZES.width * 0.23,
                    height: "82%",
                    borderRadius: 15
                }}

                />

                <View 
                    style={{
                        position: "absolute",
                        bottom: "17%",
                        right: 0,
                        backgroundColor: COLORS.primary,
                        paddingHorizontal: SIZES.base,
                        borderTopLeftRadius: 10,
                        borderBottomLeftRadius: 10
                    }}
                >
                    <Text style={{color: COLORS.white, ...FONTS.body4}}>{item.name}</Text>
                </View>

                <TouchableOpacity
                    style={{
                        position: "absolute",
                        top: "15%",
                        left: 7,
                    }}
                    onPress={()=>console.log("Favorites on pressed")}
                >
                    <Image 
                        source={item.favorite? icons.heart_red : icons.heart_green_outline}
                        resizeMode="contain"
                        style={{
                            width: 20,
                            height: 20
                        }}
                    />
                
                </TouchableOpacity>
            </View>
        )
    }
    return(
        <View style={styles.container}>

            {/* New Plants */}
            <View style={{height: '30%', backgroundColor: COLORS.white, }}>
                <View
                    style={{
                        flex: 1,
                        borderBottomLeftRadius: 30,
                        borderBottomRightRadius: 30,
                        backgroundColor: COLORS.primary,
                    }}
                >

                    <View style={{marginTop: SIZES.padding * 2,  marginHorizontal: SIZES.padding, }}>
                        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                            <Text style={{color: COLORS.white, ...FONTS.h2}}>New Plant</Text>
                            <TouchableOpacity
                            onPress={()=> console.log("Om Pressed")}
                            >

                                <Image source={icons.focus} resizeMode="contain" style={{width:23, height: 23}} />
                            
                            </TouchableOpacity>
                        </View>

                        <View style={{marginTop: SIZES.base}}>

                            <FlatList 
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={newPlants}
                                keyExtractor={item=> item.id.toString()}
                                renderItem={({item, index})=> renderNewPlants(item, index)}
                            />

                        </View>
                    </View>

                    
                
                </View>
            </View>

            {/* Today's Share */}
            <View style={{height: '50%', backgroundColor: COLORS.lightGray}}>
                    <View
                        style={{
                            flex: 1,
                            borderBottomLeftRadius: 50,
                            borderBottomRightRadius: 50,
                            backgroundColor: COLORS.white
                        }}
                    >
                        <View style={{marginTop: SIZES.font, marginHorizontal: SIZES.padding}}>
                            <View style={{flexDirection: "row", alignItems: "center", justifyContent: 'space-between'}}>
                                <Text style={{...FONTS.h2, color: COLORS.secondary}}>Today's Share</Text>

                                <TouchableOpacity
                                    onPress={()=> console.log("See all on pressed")}
                                >
                                    <Text style={{...FONTS.body3, color: COLORS.gray, color: COLORS.secondary}}>See All</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{flexDirection: "row", height: "88%", marginTop: SIZES.base }}>
                                <View style={{flex: 1}}>
                                    <TouchableOpacity 
                                    style={{flex: 1}}
                                    >
                                        <Image source={images.plant5} resizeMode="cover" style={{width: "100%", height: "100%", borderRadius: 20}}  />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{flex: 1, marginTop: SIZES.base}}>
                                        <Image source={images.plant6} resizeMode="cover" style={{width: "100%", height: "100%", borderRadius: 20}}  />
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex: 1.3}}>
                                    <TouchableOpacity 
                                    style={{
                                        flex: 1,
                                        marginLeft: SIZES.font
                                    }}
                                    onPress={()=> console.log('Plant onPress')}
                                    >

                                    <Image source={images.plant1} resizeMode="cover" style={{width: "100%", height: "100%", borderRadius: 20}}  />
                                    </TouchableOpacity>
                                </View>
                            
                            </View>
                        </View>

                    </View>
            </View>

            {/* Added Friend */}
            <View style={{height: '20%', backgroundColor: COLORS.lightGray}}>
            
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Home