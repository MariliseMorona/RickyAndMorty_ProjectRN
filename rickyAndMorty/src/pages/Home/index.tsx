import react from 'react';
import { ButtonContainer, Container, FooterContainer, ListContainer, SubtitleStyled, TitleStyled } from './styles';

function Home( ){
    return(
        <Container>
            <FooterContainer>
                <TitleStyled>
                    Characters
                </TitleStyled>
                <SubtitleStyled>
                    Search for Ricky & Morty character by name and using filters.
                </SubtitleStyled>
                <ButtonContainer>
                    
                </ButtonContainer>
            </FooterContainer>
            <ListContainer>

            </ListContainer>
        </Container>
    )
}

export default Home;