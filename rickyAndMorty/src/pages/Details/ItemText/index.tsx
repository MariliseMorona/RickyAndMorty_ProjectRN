import React from "react";
import { Container, Title, SubTitle } from "./styles";

const ItemText: React.FC = ({ title, text }) => {

    return (
            <Container>
                <Title>
                    {title}:
                </Title>
                <SubTitle>
                    {text}
                </SubTitle>
            </Container>
    )
};

export default ItemText;