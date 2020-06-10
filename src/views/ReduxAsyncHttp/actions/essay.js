import {getPublicEssay} from "../../../http/api"

export const publicEssay = ()=>{
    return dispatch=>{
        getPublicEssay().then(res=>{
            dispatch({
                type:'PUBLIC',
                res
            })
        })
    }
}
