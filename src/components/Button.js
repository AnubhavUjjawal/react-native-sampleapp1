import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
    const { textStyle, buttonStyle } = styles;
    return (
            <TouchableOpacity onPress={props.onPress} style={buttonStyle}>
                <Text style={textStyle}>
                    {props.buttonText}
                </Text>
            </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 16,
        fontWeight: '600',
        color: '#007aff',
        alignSelf: 'center'
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 10,
        marginRight: 10
    }
};
export default Button;
