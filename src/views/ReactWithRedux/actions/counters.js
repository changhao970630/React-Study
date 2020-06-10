export function increment(num) {
  return {
    type: "INCREMENT",
    num,
  };
}
export function decrement(num) {
  return {
    type: "DECREMENT",
    num,
  };
}
export function async(num) {
  return dispatch=>{
    setTimeout(()=>{
      dispatch({
        type: "ASYNC",
        num,
      })
    },1000)
  }
}
