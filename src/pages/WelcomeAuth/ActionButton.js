import React from 'react';
import { Text, View } from 'react-native';
import { colors } from '../../utils';
import { Button } from '../../components'

const ActionButton = ({title,onPress}) => {
    return(
        <View style={styles.wrapper}>
            <Button title={title} onPress={onPress} />
        </View>
    )
}

const styles = {
    wrapper: {
        marginTop:10,
        marginBottom:10,
        Width:225, 
    }
};

export default ActionButton;