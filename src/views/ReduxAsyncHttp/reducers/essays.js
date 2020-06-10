const essay = (state={},action)=>{
    switch (action.type) {
        case "PUBLIC":
            console.log(action.res.data)
            return action.res.data
        case "TEST":
            return state;
        default:
            return state;
    }
}
export default essay
