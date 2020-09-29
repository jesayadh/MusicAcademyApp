import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { colors } from '../../utils';
import { Button, Input } from '../../components'
import { useDispatch, useSelector } from 'react-redux';
import { setForm } from '../../redux';

const Register = ({navigation}) => {
    const {form} = useSelector((state) => state.RegisterReducer);
    const dispatch = useDispatch();

    const handleGoTo = (screen) => {
        navigation.navigate(screen);
    }
    const onInputChange = (value, inputType) => {
        dispatch(setForm(inputType, value));
    }

    return(
        <View style={styles.wrapper}>
                <Text style={{fontSize:30}}>Register</Text>
                <View style={{marginTop:10}}/>
                <Input placeholder="nama lengkap" value={form.fullName} onChangeText={(value) => onInputChange(value, 'fullName')}/>
                <View style={{marginTop:10}}/>
                <Input placeholder="email" value={form.email} onChangeText={(value) => onInputChange(value, 'email')}/>
                <View style={{marginTop:10}}/>
                <Input placeholder="password" value={form.password} onChangeText={(value) => onInputChange(value, 'password')} secureTextEntry={true}/>
                <View style={{marginTop:10}}/>
                <Button title="Register" onPress={() => handleGoTo('Home')}/>
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
    }
};

export default Register;