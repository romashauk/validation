import {
    SET_COUNTRY,
    SET_CARD_NUMBER,
    SET_ZIP_CODE,
    SET_POSTAL_CODE
} from './types';

const initialState = {
    cardNumber: '',
    country: '',
    postalCode: '',
    zipCode: ''
};

const actionsHandlers = {
    [SET_COUNTRY]: (state, action) => {
        return {
            ...state,
            country: action.country
        };
    },
    [SET_CARD_NUMBER]: (state, action) => {
        return {
            ...state,
            cardNumber: action.cardNumber
        };
    },
    [SET_ZIP_CODE]: (state, action) => {
        return {
            ...state,
            zipCode: action.zipCode
        };
    },
    [SET_POSTAL_CODE]: (state, action) => {
        return {
            ...state,
            postalCode: action.postalCode
        };
    }
};

const reducer = (state = initialState, action) => {
    const handler = actionsHandlers[action.type];
    return handler ? handler(state, action) : state;
};
export default reducer;
