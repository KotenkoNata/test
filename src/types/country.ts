import {Region} from "./regions";

type Currency = {
    code: string,
    name: string,
    symbol: string,
}

type language = {
    iso639_1: string,
    iso639_2: string,
    name: string,
    nativeName: string
}

export type Country = {
    name: string,
    nativeName: string,
    capital: string,
    flag: string,
    flags: {
        png: string,
        svg: string,
    },
    region: Region,
    subregion: string,
    population: number,
    topLevelDomain: string[],
    borders: string[],
    currencies: Currency[],
    languages: language[],
}

type Info = {
    title: string,
    description: string,
}

export type CountryInfo = {
    img: string,
    name: string,
    info: Info[],
}