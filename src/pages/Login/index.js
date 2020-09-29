import React from 'react';
import { Text, View} from 'react-native';
import { Button, Input } from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import { setForm } from '../../redux';

const Login = ({navigation}) => {
    const {form} = useSelector((state) => state.LoginReducer);
    const dispatch = useDispatch();

    const handleGoTo = (screen) => {
        navigation.navigate(screen);
    }

    const onInputChange = (value, inputType) => {
        dispatch(setForm(inputType, value));
    }

    return(
        <View style={styles.wrapper}>
                <Text style={{fontSize:30}}>Login</Text>
                <View style={{marginTop:10}}/>
                <Input placeholder="email" value={form.email} onChangeText={(value) => onInputChange(value, 'email')}/>
                <View style={{marginTop:10}}/>
                <Input placeholder="password" value={form.password} onChangeText={(value) => onInputChange(value, 'password')} secureTextEntry={true}/>
                <View style={{marginTop:10}}/>
                <Button title="Login" onPress={() => handleGoTo('Home')}/>
        </View>
    );
}

const styles = {
    wrapper:{
        padding: 20,
        width:'100%',
        height:'100%',
        justifyContent:'center',
        alignSelf:'center'
    },
    iconBack: {
        width: 25, 
        height: 25, 
        backgroundColor: 'blue'
    },
    illustration:{
        width: 106, 
        height: 115, 
        backgroundColor: 'purple', 
        marginTop:8,
    }
};

export default Login;