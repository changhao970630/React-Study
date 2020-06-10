import {getPublicEssay} from "../../../http/api"

export const publicEssayAction = ()=>{
    return dispatch=>{
        getPublicEssay().then(res=>{
            dispatch({
                type:'PUBLIC',
                res
            })
        })
    }
}
