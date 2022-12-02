import {getItemCountByName} from "../dao/itemDao";

export const isNameUnique = async(name: string) => {
    if(await getItemCountByName(name) as unknown === 0){
        return true;
    }else return false;
}