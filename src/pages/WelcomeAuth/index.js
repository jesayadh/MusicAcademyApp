import React from 'react';
import { Text, View } from 'react-native';
import { colors } from '../../utils';
import ActionButton from './ActionButton';
import Icon1 from 'react-native-vector-icons/FontAwesome5';

const WelcomeAuth = ({navigation}) => {
    const handleGoTo = (screen) => {
        navigation.navigate(screen);
    }
    return(
        <View style={styles.wrapper.page}>
            <Icon1 name="music" size={100} color="#000000"/>
            <Text style={styles.text2}>MusicAcademy</Text>
            <ActionButton title="Login" onPress={() => handleGoTo('Login')}/>
            <Text style={{marginHorizontal:100}}>or</Text>
            <ActionButton title="Register" onPress={() => handleGoTo('Register')}/>
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
        }
    },
    text1: {
            fontSize: 25, 
            fontWeight:'bold', 
            color:colors.default,
    },
    text2: {
            fontSize: 30, 
            fontWeight:'bold', 
            color:colors.default, 
            marginBottom:10,
    }
}

export default WelcomeAuth;