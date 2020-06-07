import React from "react";
import {Redirect} from 'react-router-dom'

const ShopCar = () => {
    const isLogin = false
    return (
        <div>
            {
                isLogin ?
                    <div>shop</div> :
                    <Redirect to='/home'></Redirect>
            }
        </div>
    )
}
export  default  ShopCar
