import React from 'react'
import {createStore,applyMiddleware} from "redux"
import Essay from "./essay";
import {Provider} from "react-redux"
import thunk from "redux-thunk";
import essay from "./reducers/essays"
const store = createStore(essay,{},applyMiddleware(thunk))
const App = ()=>{
    return (
        <div className='wrap'>
            App-ReduxAsyncHttp
            <Provider store={store}>
                <Essay></Essay>
            </Provider>

        </div>
    )
}
export  default  App
