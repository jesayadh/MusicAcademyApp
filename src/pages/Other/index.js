import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import { colors } from '../../utils';
import ActionButton from '../WelcomeAuth/ActionButton';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/MaterialIcons';
import Icon6 from 'react-native-vector-icons/Foundation';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Other = ({navigation}) => {
    const handleGoTo = (screen) => {
        navigation.navigate(screen);
    }
    const image = {uri:"https://image.freepik.com/free-vector/musical-show-concert-set_74855-3725.jpg"}
    return(
        <View style={{backgroundColor: 'pink', flex: 1}}>
            <View style={{backgroundColor:'white', flex:1}}>
                <View elevation={5} style={{backgroundColor:'white',shadowColor:"#000",shadowOffset:{width:0,height:2,},shadowOpacity:0.25,shadowRadius:3.84,}}>
                    <View style={{marginVertical:15, justifyContent:'center',alignItems:'center'}}>
                        <Text style={{marginTop:3,fontSize:20,marginLeft:10, color:"#000000"}}>Other</Text>
                    </View>
                </View>
                <View style={{marginTop:20, alignItems:'center'}}>
                    <View style={{width:380,height:175,borderWidth:1,borderColor:'black',borderRadius:10, alignItems:'center'}}>
                        <View style={{marginTop:15,flexDirection:'row',width:380,height:40,borderBottomWidth:1,borderBottomColor:'black', justifyContent:'center'}}>
                            <Icon3 name="setting" size={25}/>
                            <Text style={{fontSize:20,marginLeft:10}}>Settings</Text>
                            <View style={{width:195,left:0,alignItems:'flex-end',height:28}}>
                            </View>
                            <Icon5 name="navigate-next" size={25}/>
                        </View>
                        <View style={{marginTop:15,flexDirection:'row',width:380,height:40,borderBottomWidth:1,borderBottomColor:'black', justifyContent:'center'}}>
                            <Icon4 name="help-circle-outline" size={25}/>
                            <Text style={{fontSize:20,marginLeft:10,marginRight:7}}>Help</Text>
                            <View style={{width:220,left:0,alignItems:'flex-end',height:28}}>
                                <Text style={{fontSize:20,alignItems:'flex-end'}}></Text>
                            </View>
                            <Icon5 name="navigate-next" size={25}/>
                        </View>
                        <TouchableOpacity onPress={() => handleGoTo('Login')}>
                            <View style={{marginTop:15,flexDirection:'row',width:380,height:40, justifyContent:'center'}}>
                                <Icon2 name="exit" size={30} style={{color:"red"}}/>
                                <Text style={{fontSize:22,marginLeft:10,color:"red"}}>Logout</Text>
                                <View style={{width:200,left:0,alignItems:'flex-end',height:28}}>
                                </View>
                                <Icon5 name="navigate-next" size={25} style={{color:"red"}}/>
                            </View>
                        </TouchableOpacity>
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
                        <Icon1 name="warehouse" size={26} color="#545454"/>
                        <Text style={{fontSize:10, color:'#545454', marginTop:4}}>Home</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => handleGoTo('Other')}>
                        <Icon3 name="appstore1" size={26} color="#000"/>
                        <Text style={{fontSize:10, color:'#000', marginTop:4}}>Other</Text>
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

export default Other;