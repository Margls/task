import { constants } from "../actions/action";
let listID=2;
let cardID=4;
const initialState=[
    {
        title:"The Tattoo",
        id:`list-${0}`,
        cards:[
            {id:`card-${0}`,
             text:"‘I know you think you don’t want it,’ said Gary’s girlfriend, Claire, ‘but just think.  "
            },
            {
                id:`card-${1}`,
                text:"Text messaging, or texting, is the act of composing and sending"
            }
        ]
    },
    {
        title:"The Very Hungry Dragon",
        id:`list-${1}`,
        cards:[
            {id:`card-${2}`,
             text:"She flew down and took the roof off the cart "
            },
            {
                id:`card-${3}`,
                text:"The people with the cart saw her and ran away."
            }
        ]
    }

]

const listReducer = (state=initialState, action) =>{
    switch(action.type){
        case constants.ADD_LIST:{
            const newList={
                title: action.payload,
                cards:[],
                id:`list-${listID}`
            }
            listID++;
            return [...state, newList]
        }
        case constants.ADD_CARD:{
            const newCard={
                text:action.payload.text,
                id:`card-${cardID}`
            }
            cardID++;
            const copyState= state.map(list => {
                if( list.id === action.payload.listID){
                    return{
                        ...list,
                        cards:[...list.cards, newCard]
                    }
                }else{
                    return list;
                }
            });
            return copyState;
            
        }
        default: return state
    }
}
export default listReducer;