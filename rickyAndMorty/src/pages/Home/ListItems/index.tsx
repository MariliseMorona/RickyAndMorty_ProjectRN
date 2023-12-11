import React from "react";
import { TouchableOpacity } from 'react-native';
import { Container, TextContainer, ImageContainer, TitleStyled, SubtitleStyled, SubtitleLocationStyled, TitleLocationStyled, ListContainer, List, Separator } from './styles';
import { Image } from "react-native";
import imageVert from '../../../assets/rickyAndMortyEsampleCharacterVertical.jpg';
import imageHori from '../../../assets/rickyAndMortyEsampleCharacterHorizontal.jpg';


/*const Data = [
    {
        name: "Quantum Rick",
        state: "Unknown",
        location: "Rick's Memories",
        image: imageVert
    },
    {
        name: "Wasp Rick",
        state: "Alive",
        location: "Earth (Replacement Dimension)",
        image: imageHori
    },
    {
        name: "Too Cute Jerry",
        state: "Dead - Robot",
        location: "Earth (Replacement Dimension)",
        image: imageVert
    },
    {
        name: "Defiance Squanch",
        state: "Dead - Robot",
        location: "Earth (Replacement Dimension)",
        image: imageHori
    },
    {
        name: "Quantum Rick",
        state: "Unknown",
        location: "Rick's Memories",
        image: imageVert
    },
    {
        name: "Wasp Rick",
        state: "Alive",
        location: "Earth (Replacement Dimension)",
        image: imageHori
    },
    {
        name: "Too Cute Jerry",
        state: "Dead - Robot",
        location: "Earth (Replacement Dimension)",
        image: imageVert
    },
    {
        name: "Defiance Squanch",
        state: "Dead - Robot",
        location: "Earth (Replacement Dimension)",
        image: imageHori
    }
];*/

const ListItems: React.FC = ({ navigation, data }) => {
    const RenderItem = ({ item }) => {
        return(
            <TouchableOpacity onPress={() => navigation.navigate("Details", { itemData: item })}>
            <Container>
                <ImageContainer>
                    <Image
                        source={item.image}
                        style={{ width: 100, height: 100 }}
                        borderBottomLeftRadius={10}
                        borderBottomRightRadius={10}
                        borderTopLeftRadius={10}
                        borderTopRightRadius={10}
                    />
                </ImageContainer>
                <TextContainer>
                    <TitleStyled>
                        {item.name}
                    </TitleStyled>
                    <SubtitleStyled>
                        {item.state}
                    </SubtitleStyled>                
                    <TitleLocationStyled>
                        Last known location: 
                    </TitleLocationStyled>
                    <SubtitleLocationStyled>
                        {item.location}
                    </SubtitleLocationStyled>
                </TextContainer>
            </Container>
         </TouchableOpacity>
        )
    }

    return (
        <ListContainer>
            <List
                ItemSeparatorComponent={(item) =><Separator/>}
                data={data}
                renderItem={(item) => <RenderItem {...item} />}
                keyExtractor={(item, index) => index.toString()}
            />
        </ListContainer>
    )
    
}

export default ListItems;