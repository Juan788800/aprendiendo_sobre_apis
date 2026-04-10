import { destroy } from "../helpers/index.js"

export const deleteComments = (id) =>{
    destroy(`comments/${id}`);
}