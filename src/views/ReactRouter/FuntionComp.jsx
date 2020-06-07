import React from "react";
import qs from "querystring"
  const FunctionComp = (props) =>{
      console.log(props)
      const params = qs.parse(props.location.search)
      console.log(params)
      // const params = new URLSearchParams(props.location.search)
      // console.log(params.get('name'))
      // console.log(params.get('age'))
    return (
        <div>FunComp</div>
    )
}
export  default  FunctionComp
