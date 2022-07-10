import { constants } from "./action"


export const addCard = (listID,text) =>{
    return { type: constants.ADD_CARD,
        payload:{text, listID}}
}