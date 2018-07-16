import { default as ALL } from '../models';
import AppModel from '../models/app'
function getModels() {
    return Object.keys(ALL).map(key => ALL[key]);
}

const models=getModels()

export default models ;