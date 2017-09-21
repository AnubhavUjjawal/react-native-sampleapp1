import React from "react";
import { Text, View } from "react-native";

const Header = (props) => {

    const { textStyle, viewStyle } = styles;
    return (
        <View style= { viewStyle }>
            <Text style= { textStyle }>{ props.HeaderText }</Text>
        </View>
    );

};

//maybe shadow is deprecated in RN latest version
const styles = {
    textStyle:{
        fontSize: 28
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
};

export default Header;