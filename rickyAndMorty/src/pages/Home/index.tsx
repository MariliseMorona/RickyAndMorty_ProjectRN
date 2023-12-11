import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ButtonContainer, Container, FooterContainer, SubtitleStyled, TitleStyled } from './styles';
import ListItems from './ListItems';
import API from '../../service/service';


const Home: React.FC = ({ navigation }) => {
    const [apiData, setApiData] = React.useState<any>(null);
    React.useEffect(() => {
        // Fetch data when the component mounts
        const fetchData = async () => {
          const result = await API();
          setApiData(result);
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
            data = {apiData}/>
        </Container>
    )
}

export default Home;