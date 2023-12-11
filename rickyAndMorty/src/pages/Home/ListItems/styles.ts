import { styled } from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';

export const ListContainer = styled.View`
    flex: 1;
    background-color: #fafafa;
    padding-top: 20px;
`;

export const List = styled.FlatList`
    backgroundColor: '#f9c2ff';
    margin-left: 20px;
    margin-right: 20px;
`;

export const Separator = styled.View`
    width: 100%;
    height: 5px;
`

export const Container = styled.View`
    background-color: #fafafa;
    border-color: #000;
    border-width: 1px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 100px;
    flex: 1;
    flex-direction: row;
`;

export const ImageContainer = styled.View`
    flex: 0.3; 
`;

export const TextContainer = styled.View`
    text-align: right;
    background-color: #fafafa;
    position: relative;
    flex: 0.7;
    flex-direction: column;
    justify-content: space-between; 
    padding-left: 20px;
`;

export const TitleStyled = styled.Text`
    text-align: left;
    font-weight: bold;
    font-size: 15px;
`;

export const SubtitleStyled = styled.Text`
    text-align: left;
    font-weight: bold;
    font-size: 15px;
`;

export const TitleLocationStyled = styled.Text`
    text-align: left;
    font-weight: bold;
    font-size: 15px;
`;

export const SubtitleLocationStyled = styled.Text`
    text-align: left;
    font-weight: bold;
    font-size: 15px;
`;