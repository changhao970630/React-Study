import React from "react";
import {connect} from 'react-redux'
import {publicEssayAction} from "./actions/essay"
import {Button} from 'antd'

const Essay = (props) => {
    const {publicEssay} = props
    const activePublic = () => {
        publicEssay()
    }
    return (
        <div>
            <h3> Essay</h3>
            <Button type='primary' onClick={activePublic}>Public</Button>
            <ul>
                {
                    Object.keys(props.state).length > 0 ?
                        props.state.map((el, index) => {
                            return (
                                <li key={index}>{el.title}</li>
                            )
                        })
                        : null
                }
            </ul>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        publicEssay: () => {
            dispatch(publicEssayAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Essay)
