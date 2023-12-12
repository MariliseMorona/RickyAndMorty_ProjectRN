import React from "react";
import { Container, TextTitle, TextSubTitle } from './styles'

const ItemText: React.FC = ({ textTitle,  textSubtitle}) => {

    return (
            <Container>
                <TextTitle>
                    {textTitle}
                </TextTitle>
                <TextSubTitle>
                    {textSubtitle}
                </TextSubTitle>
            </Container>
    )
};

export default ItemText;