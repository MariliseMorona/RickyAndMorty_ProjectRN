export type RootStackParamList = {
    Portal: undefined;
    Home: undefined;
    Details: { itemData: Characters };
};

export type AllCharacters = {
    info: Info;
    results: Characters;
};

export type Info = {
    count: number;
    pages: number;
    next: string;
    prev: string;
};

export type Characters = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    image: string;
    location: {
      name: string;
      url: string;
    };
    episode:[
        string
    ];
    url: string;
    created: string;
};
