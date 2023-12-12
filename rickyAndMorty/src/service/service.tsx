import React, { useEffect, useState } from 'react';
import axios from "axios";

const baseUrl = 'https://rickandmortyapi.com/api';
const allCharacters = '/character';


const API = async () => {
    try {
        const response = await axios({
        method: 'get',
        url: `${baseUrl}${allCharacters}`,
        });
        return response.data;
    } catch (error) {
        console.error('Erro na chamada da API:', error);
        throw error;
    }
};

export default API;