import { IGetTextByLanguage } from "src/App/models/Interfaces/IGetTextByLanguage/IGetTextByLanguage";

export const GetTextByLanguage: IGetTextByLanguage = {
    en: () => "Hello World!",
    es: () => "¡Hola mundo!",
    pt: () => "Olá Mundo!",
}