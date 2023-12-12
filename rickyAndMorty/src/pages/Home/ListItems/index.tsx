import React from "react";
import { TouchableOpacity } from 'react-native';
import { Container, TextContainer, ImageContainer, TitleStyled, SubtitleStyled, SubtitleLocationStyled, TitleLocationStyled, ListContainer, List, Separator } from './styles';
import { Image } from "react-native";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, AllCharacters } from "../../../routes/types";

interface ListItemsProps {
    navigation: StackNavigationProp<RootStackParamList, 'Details'>;
    data: AllCharacters;
  }

const ListItems: React.FC<ListItemsProps> = ({ navigation, data }) => {
    
    const RenderItem: React.FC<{ item: Characters }> = ({ item }) => {
        if (!item) {
            console.log("Item is undefined or null");
            return null;
        }

        return(
            <TouchableOpacity onPress={() => navigation.navigate("Details", { itemData: item })}>
            <Container>
                <ImageContainer>
                    <Image
                        source={{ uri: item.image }}
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
                        {item.gender}
                    </SubtitleStyled>                
                    <TitleLocationStyled>
                        Last known location: 
                    </TitleLocationStyled>
                    <SubtitleLocationStyled>
                        {item.location.name}
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
                data={data.results}
                renderItem={({ item }) => <RenderItem item={item} />}
                keyExtractor={(item, index) => index.toString()}
            />
        </ListContainer>
    )
    
}

export default ListItems;