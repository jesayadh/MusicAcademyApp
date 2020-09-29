import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { colors } from '../../utils';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/Octicons';
import Icon6 from 'react-native-vector-icons/Foundation';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const Detail = ({navigation}) => {
    const handleGoTo = (screen) => {
        navigation.navigate(screen);
    }
    const image = {uri:"https://image.freepik.com/free-vector/musical-show-concert-set_74855-3725.jpg"}
    return(
        <View style={{backgroundColor: 'white', flex: 1}}>
            <View style={{backgroundColor:'white', flex:1}}>
                <View elevation={5} style={{backgroundColor:'white',shadowColor:"#000",shadowOffset:{width:0,height:2,},shadowOpacity:0.25,shadowRadius:3.84,}}>
                    <View style={{marginVertical:15, justifyContent:'center',alignItems:'center'}}>
                        <Text style={{marginTop:3,fontSize:20,marginLeft:10, color:"#000000"}}>Course</Text>
                    </View>
                </View>
                <ScrollView>
                <View style={{marginTop:20, alignItems:'center'}}>
                    <View style={{width:380,height:200,justifyContent:'center',alignItems:'center',borderWidth:5,borderColor:'black',borderRadius:10}}>
                        <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                            <Icon4 name="piano" size={100} color="black"/>
                            <Text style={{fontSize:24}}>Piano</Text>
                        </View>
                    </View>
                    <View style={{width:380,height:70,borderWidth:5,borderColor:'black',borderRadius:10,flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
                        <View style={{width:100,height:40,borderRightWidth:1,borderRightColor:'black',alignItems:'center'}}>
                            <Icon5 name="primitive-dot"/>
                            <Text style={{fontSize:20,fontWeight:'bold'}}>Beginner</Text>
                        </View>
                        <View style={{width:130,height:40,borderRightWidth:1,borderRightColor:'black',alignItems:'center'}}>
                            <Icon1 name="lock" color="#545454"/>
                            <Text style={{fontSize:20, color:'#545454'}}>Intermediate</Text>
                        </View>
                        <View style={{width:130,height:40,alignItems:'center'}}>
                            <Icon1 name="lock" color="#545454"/>
                            <Text style={{fontSize:20, color:'#545454'}}>Professional</Text>
                        </View>
                    </View>
                    <View style={{marginTop:15,width:380,height:120,borderWidth:5,borderColor:'black',borderRadius:10,flexDirection:'row',justifyContent:'center'}}>
                        <View style={{width:160,height:110,backgroundColor:"#000"}}>
                            <Image source={require('../../assets/image/piano.jpg')} style={{width:160,height:110}} ></Image>
                        </View>
                        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{fontSize:30}}>Introduction</Text>
                        </View>
                    </View>
                    <View style={{marginTop:15,width:380,height:120,borderWidth:5,borderColor:'black',borderRadius:10,flexDirection:'row',justifyContent:'center'}}>
                        <View style={{width:160,height:110,backgroundColor:"#000"}}>
                            <Image source={require('../../assets/image/piano.jpg')} style={{width:160,height:110}} ></Image>
                        </View>
                        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{fontSize:30}}>Major Scale</Text>
                        </View>
                    </View>
                    <View style={{marginTop:15,width:380,height:120,borderWidth:5,borderColor:'black',borderRadius:10,flexDirection:'row',justifyContent:'center'}}>
                        <View style={{width:160,height:110,backgroundColor:"#000"}}>
                            <Image source={require('../../assets/image/piano.jpg')} style={{width:160,height:110}} ></Image>
                        </View>
                        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{fontSize:20}}>Minor Harmonic Scale</Text>
                        </View>
                    </View>
                    <View style={{marginTop:15,width:380,height:120,borderWidth:5,borderColor:'black',borderRadius:10,flexDirection:'row',justifyContent:'center'}}>
                        <View style={{width:160,height:110,backgroundColor:"#000"}}>
                            <Image source={require('../../assets/image/piano.jpg')} style={{width:160,height:110}} ></Image>
                        </View>
                        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{fontSize:20}}>Minor Melodic Scale</Text>
                        </View>
                    </View>
                    <View style={{marginTop:15,marginBottom:15,width:380,height:120,borderWidth:5,borderColor:'black',borderRadius:10,flexDirection:'row',justifyContent:'center'}}>
                        <View style={{width:160,height:110,backgroundColor:"#000"}}>
                            <Image source={require('../../assets/image/piano.jpg')} style={{width:160,height:110}} ></Image>
                        </View>
                        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                            <Text style={{fontSize:20}}>Minor Dorian Scale</Text>
                        </View>
                    </View>
                </View>
                </ScrollView>
            </View>
        </View>
    );
}

export default Detail;