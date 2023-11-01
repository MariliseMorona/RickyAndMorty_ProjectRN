import react from 'react';
import { Container, CenterContainer, ImageContainer, SubtitleStyled, TextContainer, TitleStyled, ButtonContainer, FooterContainer, TextDevelopedStyled, TextPoweredStyled, TextButtonStyled } from './styles';

function Portal() {
    return(
        <Container>
            <CenterContainer>
                <ImageContainer source={require('../../assets/portal.png')}></ImageContainer>
                <TextContainer>
                    <TitleStyled>Welcome!</TitleStyled>
                    <SubtitleStyled>In this app you will have access to about hunder of characters, images, locations and episodes about the TV show Ricky and Morty.</SubtitleStyled>
                </TextContainer>
                <ButtonContainer>
                    <TextButtonStyled>
                        See characters
                    </TextButtonStyled>
                </ButtonContainer>
            </CenterContainer>
            <FooterContainer>
                <TextDevelopedStyled>Developed by @marilise.morona</TextDevelopedStyled>
                <TextPoweredStyled>Powered by rickyandmortyapi.com</TextPoweredStyled>
            </FooterContainer>
            
        </Container>
    )
}

export default Portal;