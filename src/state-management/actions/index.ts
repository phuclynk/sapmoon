import { store } from '../store';

export { ADD_ONE, MINUS_ONE, ADD_ONE_ASYNC, MINUS_ONE_ASYNC } from './counter-action';

export const action = (type: string) => store.dispatch({type});
