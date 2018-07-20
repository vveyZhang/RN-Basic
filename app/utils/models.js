import { default as ALL } from '../models';

function getModels() {
    return Object.keys(ALL).map(key => ALL[key]);
}
const models = getModels()

export default models;