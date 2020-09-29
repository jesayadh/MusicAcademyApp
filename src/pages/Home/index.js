import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { colors } from '../../utils';
import ActionButton from '../WelcomeAuth/ActionButton';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({navigation}) => {
    const handleGoTo = (screen) => {
        navigation.navigate(screen);
    }
    const image = {uri:"https://image.freepik.com/free-vector/musical-show-concert-set_74855-3725.jpg"}
    return(
        <View style={{backgroundColor: 'pink', flex: 1}}>
            <View style={{backgroundColor:'white', flex:1}}>
                <View elevation={5} style={{alignItems:'center',backgroundColor:'white',shadowColor:"#000",shadowOffset:{width:0,height:2,},shadowOpacity:0.25,shadowRadius:3.84,}}>
                    <View style={{marginVertical:15, flexDirection:'row'}}>
                        <Icon1 name="music" size={35} color="#000000"/>
                        <Text style={{marginTop:3,fontSize:20,marginLeft:10, color:"#000000"}}>MusicAcademy</Text>
                    </View>
                </View>
                <View style={{marginTop:5, alignItems:'center'}}>
                    <View style={{width:400,height:280,justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../../assets/image/home.jpg')} style={{width:400,height:280,borderRadius:10}}/>
                    </View>
                </View>
                <View style={{marginHorizontal: 10, marginVertical:10}}>
                    <Text style={{marginHorizontal:12,fontSize:20,fontWeight:'bold',color:'black'}}>Hai Jesaya, mau belajar apa?</Text>
                    <View style={{flexDirection: 'row',flexWrap:'wrap', marginHorizontal:16,marginTop:18}}>
                        <View style={{justifyContent:'space-between',flexDirection:'row', width:'100%', marginBottom:18}}>
                            <TouchableOpacity onPress={() => handleGoTo('Detail')}>
                            <View>
                                <View style={{width:58,height:58,borderWidth:1,borderColor:'#EFEFEF',borderRadius:18, justifyContent:'center',alignItems:'center'}}>
                                    <Icon4 name="piano" size={40} color="#000000"/>
                                </View>
                                <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>Piano</Text>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleGoTo('Detail')}>
                                <View>
                                    <View style={{width:58,height:58,borderWidth:1,borderColor:'#EFEFEF',borderRadius:18, justifyContent:'center',alignItems:'center'}}>
                                        <Icon4 name="guitar-electric" size={40} color="#000000"/>
                                    </View>
                                    <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>Gitar</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleGoTo('Detail')}>
                                <View>
                                    <View style={{width:58,height:58,borderWidth:1,borderColor:'#EFEFEF',borderRadius:18, justifyContent:'center',alignItems:'center'}}>
                                        <Icon1 name="drum" size={40} color="#000000"/>
                                    </View>
                                    <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>Drum</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleGoTo('Detail')}>
                                <View>
                                    <View style={{width:58,height:58,borderWidth:1,borderColor:'#EFEFEF',borderRadius:18, justifyContent:'center',alignItems:'center'}}>
                                        <Icon4 name="guitar-electric" size={40} color="#000000"/>
                                    </View>
                                    <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>Bass</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{justifyContent:'space-between',flexDirection:'row', width:'100%', marginBottom:18}}>
                            <TouchableOpacity onPress={() => handleGoTo('Detail')}>
                                <View>
                                    <View style={{width:58,height:58,borderWidth:1,borderColor:'#EFEFEF',borderRadius:18, justifyContent:'center',alignItems:'center'}}>
                                        <Icon4 name="saxophone" size={40} color="#000000"/>
                                    </View>
                                    <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>Saxophone</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleGoTo('Detail')}>
                                <View>
                                    <View style={{width:58,height:58,borderWidth:1,borderColor:'#EFEFEF',borderRadius:18, justifyContent:'center',alignItems:'center'}}>
                                        <Icon4 name="violin" size={40} color="#000000"/>
                                    </View>
                                    <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>Biola</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleGoTo('Detail')}>
                                <View>
                                    <View style={{width:58,height:58,borderWidth:1,borderColor:'#EFEFEF',borderRadius:18, justifyContent:'center',alignItems:'center'}}>
                                        <Icon1 name="microphone" size={40} color="#000000"/>
                                    </View>
                                    <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>Vocal</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleGoTo('Detail')}>
                                <View>
                                    <View style={{width:58,height:58,borderWidth:1,borderColor:'#EFEFEF',borderRadius:18, justifyContent:'center',alignItems:'center'}}>
                                        <Icon1 name="drum-steelpan" size={40} color="#000000"/>
                                    </View>
                                    <Text style={{fontSize:11, fontWeight:'bold', textAlign:'center', marginTop:6}}>Perkusi</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{backgroundColor: 'white', height: 64, flexDirection:'row',borderTopColor:"#545454",borderTopWidth:0.5}}>
                <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => handleGoTo('Profile')}>
                        <Icon2 name="person" size={26} color="#545454"/>
                        <Text style={{fontSize:10, color:'#545454', marginTop:4}}>Profile</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => handleGoTo('Home')}>
                        <Icon1 name="warehouse" size={26} color="black"/>
                        <Text style={{fontSize:10, color:'black', marginTop:4}}>Home</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => handleGoTo('Other')}>
                        <Icon3 name="appstore1" size={26} color="#545454"/>
                        <Text style={{fontSize:10, color:'#545454', marginTop:4}}>Other</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = {
    wrapper: {
        page:{
            alignItems:'center', 
            justifyContent:'center', 
            flex:1, 
            backgroundColor:'white'
        },
        illustration:{
            width:219, 
            height: 117, 
            backgroundColor:colors.default, 
            marginBottom:10,
        }
    },
    text: {
        welcome: {
            fontSize: 18, 
            fontWeight:'bold', 
            color:colors.default, 
            marginBottom:76,
        }
    }
}

export default Home;