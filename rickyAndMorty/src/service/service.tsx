import React, { useEffect, useState } from 'react';
import axios from "axios";

const baseUrl = 'https://rickandmortyapi.com/api';
const allCharacters = '/character';

const API: React.FC = () => {

    const [data, setData] = useState<any>(null);

    useEffect(() => {
        axios({
            method: 'get',
            url: `${baseUrl}${allCharacters}`,
        }) .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error('Erro na chamada da API:', error);
        });
    }, []); 
 return null   
}
    
  
export default API;