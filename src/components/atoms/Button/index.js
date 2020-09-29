import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../../utils';

const Button = ({title, onPress}) => {
    return(
        <TouchableOpacity style={styles.wrapper.component} onPress={onPress}>
            <Text style={styles.text.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = {
    wrapper:{
        component: {
            backgroundColor: colors.default, 
            borderRadius:10, 
            paddingVertical:13,
            paddingHorizontal:30
        },
    },
    text: {
        title: {
            fontSize:12, 
            fontWeight:'bold', 
            color:'white', 
            textTransform:'uppercase', 
            textAlign:'center'
        },
    },
};

export default Button;