import React from 'react';
import { View, Text, Image, Linking } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {
    const { title, artist, url, image, thumbnail_image } = album;
    const { 
        thumbnailStyle,
        thumbnailViewStyle,
        viewStyle,
        cardSectionStyle,
        titleStyle,
        imageStyle
    } = styles;
    //console.log(title, artist, url, image);

    return (
        <Card>
            <CardSection style={cardSectionStyle}>
                <View style={thumbnailViewStyle}>
                    <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={viewStyle}>
                    <Text style={titleStyle}>
                        {title}
                    </Text>
                    <Text>
                        {artist}
                    </Text>
                </View>    
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>
            <CardSection>
                <Button buttonText='Buy Now' onPress={() => Linking.openURL(url)} />
            </CardSection>
        </Card>
    );
};

const styles = {
    thumbnailStyle: {
        margin: 5,
        height: 50,
        width: 50,
        borderRadius: 1.5
    },
    thumbnailViewStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        margin: 3
    },
    viewStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        margin: 7
    },
    cardSectionStyle: {
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    titleStyle: {
        fontSize: 18
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
    }
};

export default AlbumDetail;
