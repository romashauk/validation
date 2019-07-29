import {
    SET_COUNTRY,
    SET_CARD_NUMBER,
    SET_ZIP_CODE,
    SET_POSTAL_CODE
} from './types';

export function setCountry(country) {
    return dispatch =>
        dispatch({
            type: SET_COUNTRY,
            country
        });
}

export function setCardNumber(cardNumber) {
    return dispatch =>
        dispatch({
            type: SET_CARD_NUMBER,
            cardNumber
        });
}
export function setZipCode(zipCode) {
    return dispatch =>
        dispatch({
            type: SET_ZIP_CODE,
            zipCode
        });
}
export function setPostalCode(postalCode) {
    return dispatch =>
        dispatch({
            type: SET_POSTAL_CODE,
            postalCode
        });
}
