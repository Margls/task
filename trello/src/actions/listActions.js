import { constants } from "./action"


export const addList = (title) =>{
    return { type: constants.ADD_LIST,
        payload:title}
}