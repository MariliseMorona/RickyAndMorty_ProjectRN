import React from "react";
import { Dimensions, Text } from 'react-native';
import { Container, ImageBackground, TitleAbout, TextContainer, Name } from "./styles";
import ItemText from "./ItemText";

const Details: React.FC = ({ route }) => {

    console.log(route)
    console.log(route.params)
    const { itemData } = route.params;

    return (
        <Container>
            <ImageBackground 
                source={{ uri: itemData.image }}
                style={{ width: Dimensions.get("screen").width, height: Dimensions.get("screen").width }}>
            </ImageBackground>
            <TextContainer>
            <Name>
                {itemData.name}
            </Name>
            <TitleAbout>
                About
            </TitleAbout>
            <ItemText
                textTitle={"Specie"}
                textSubtitle={itemData.species}>
            </ItemText>
            <ItemText
                textTitle={"Origin"}
                textSubtitle={itemData.name}>
            </ItemText>
            <ItemText
                textTitle={"Location"}
                textSubtitle={itemData.location.name}>
            </ItemText>
            </TextContainer>
            
        </Container>
    )
};

export default Details;