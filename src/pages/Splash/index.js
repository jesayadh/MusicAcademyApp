import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../utils';

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('WelcomeAuth');
        }, 3000);
    })
    return(
        <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'center'}}>
            <Icon1 name="music" size={100} color="#000000"/>
            <Text style={styles.text2}>MusicAcademy</Text>
        </View>
    );
}


const styles = {
    text2: {
        fontSize: 30, 
        fontWeight:'bold', 
        color:colors.default, 
        marginBottom:10,
    }
}
export default Splash;