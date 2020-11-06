import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <span>{props.text} </span>
            <span><strong>{props.age }</strong></span>
            <span>{props.webDeveloper ? ' True' : ' False'}!</span>
        </div>
    )
}