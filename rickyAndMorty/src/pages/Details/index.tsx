import React from "react";
import { Dimensions, Text } from 'react-native';
import { Container, ImageBackground, TitleAbout, TextContainer, Name } from "./styles";
import ItemText from "./ItemText";

const Details: React.FC = ({ route }) => {

    const { itemData } = route.params;

    return (
        <Container>
            <ImageBackground 
                source={itemData.image}
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
                title={"Specie"}
                text={"specie"}>
            </ItemText>
            <ItemText
                title={"Origin"}
                text={itemData.state}>
            </ItemText>
            <ItemText
                title={"Location"}
                text={itemData.location}>
            </ItemText>
            </TextContainer>
            
        </Container>
    )
};

export default Details;