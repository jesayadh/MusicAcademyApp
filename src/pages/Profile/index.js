import React from 'react';
import { Text, View } from 'react-native';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/MaterialIcons';
import Icon6 from 'react-native-vector-icons/Foundation';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Profile = ({navigation}) => {
    const handleGoTo = (screen) => {
        navigation.navigate(screen);
    }
    return(
        <View style={{backgroundColor: 'pink', flex: 1}}>
            <View style={{backgroundColor:'white', flex:1}}>
                <View elevation={5} style={{backgroundColor:'white',shadowColor:"#000",shadowOffset:{width:0,height:2,},shadowOpacity:0.25,shadowRadius:3.84,}}>
                    <View style={{marginVertical:15, justifyContent:'center',alignItems:'center'}}>
                        <Text style={{marginTop:3,fontSize:20,marginLeft:10, color:"#000000"}}>My Account</Text>
                    </View>
                </View>
                <View style={{marginTop:20, alignItems:'center'}}>
                    <View style={{width:380,height:200,justifyContent:'center',alignItems:'center',borderWidth:5,borderColor:'black',borderRadius:10}}>
                        <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                            <Icon4 name="piano" size={100} color="black"/>
                            <Text style={{fontSize:24}}>Jesaya Danny Herlim</Text>
                            <Text style={{fontSize:18}}>+62812123123</Text>
                        </View>
                    </View>
                    <View style={{marginTop:10,width:380,height:190,borderWidth:5,borderColor:'black',borderRadius:10}}>
                        <View style={{marginHorizontal:20,marginTop:20,flexDirection:'row',width:330,height:40,borderBottomWidth:1,borderBottomColor:'black'}}>
                            <Icon1 name="money-bill-wave-alt" size={25}/>
                            <Text style={{fontSize:20,marginLeft:10}}>Balance</Text>
                            <View style={{width:190,left:0,alignItems:'flex-end',height:28}}>
                                <Text style={{fontSize:20,alignItems:'flex-end'}}>100.000</Text>
                            </View>
                            <Icon5 name="navigate-next" size={25}/>
                        </View>
                        <View style={{marginHorizontal:20,marginTop:15,flexDirection:'row',width:330,height:40,borderBottomWidth:1,borderBottomColor:'black'}}>
                            <Icon3 name="pluscircleo" size={25}/>
                            <Text style={{fontSize:20,marginLeft:10,marginRight:7}}>Top up</Text>
                            <View style={{width:200,left:0,alignItems:'flex-end',height:28}}>
                                <Text style={{fontSize:20,alignItems:'flex-end'}}></Text>
                            </View>
                            <Icon5 name="navigate-next" size={25}/>
                        </View>
                        <View style={{marginHorizontal:20,marginTop:15,flexDirection:'row',width:330,height:40}}>
                            <Icon6 name="clipboard-notes" size={30}/>
                            <Text style={{fontSize:20,marginLeft:10}}>Subscription</Text>
                            <View style={{width:160,left:0,alignItems:'flex-end',height:28}}>
                                <Text style={{fontSize:20,alignItems:'flex-end'}}></Text>
                            </View>
                            <Icon5 name="navigate-next" size={25}/>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{backgroundColor: 'white', height: 64, flexDirection:'row',borderTopColor:"#545454",borderTopWidth:0.5}}>
                <View style={{ flex:1, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity onPress={() => handleGoTo('Profile')}>
                        <Icon2 name="person" size={26} color="black"/>
                        <Text style={{fontSize:10, color:'black', marginTop:4}}>Profile</Text>
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
                        <Icon3 name="appstore1" size={26} color="#545454"/>
                        <Text style={{fontSize:10, color:'#545454', marginTop:4}}>Other</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Profile;