import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ButtonContainer, Container, FooterContainer, SubtitleStyled, TitleStyled } from './styles';
import ListItems from './ListItems';
import API from '../../service/service';


const Home: React.FC = ({ navigation }) => {
    const [characters, setCharacters] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const apiData = await API();
            setCharacters(apiData);
        } catch (error) {
            console.log("Deu ruim", error)
        }
        };

        fetchData();
    }, []);

    return(
        <Container>
            <FooterContainer>
                <TitleStyled>
                    Characters
                </TitleStyled>
                <SubtitleStyled>
                    Search for Ricky & Morty character by name and using filters.
                </SubtitleStyled>
                <TouchableOpacity>
                    <ButtonContainer>
                        <MaterialCommunityIcons name="magnify" size={24} color="#000" />
                    </ButtonContainer>
                </TouchableOpacity>
            </FooterContainer>
            <ListItems 
            navigation={navigation} 
            data = {characters}/>
        </Container>
    )
}

export default Home;