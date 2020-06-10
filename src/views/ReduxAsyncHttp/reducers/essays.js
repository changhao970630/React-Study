const essay = (state={},action)=>{
    switch (action.type) {
        case "PUBLIC":
            return action.res.data
        case "TEST":
            return state;
        default:
            return state;
    }
}
export default essay
