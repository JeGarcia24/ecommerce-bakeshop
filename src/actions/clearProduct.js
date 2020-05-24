import { CLEAR_PRODUCT } from './types';

export const clearProduct = (name) => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_PRODUCT,
            payload: name
        });
    }
}