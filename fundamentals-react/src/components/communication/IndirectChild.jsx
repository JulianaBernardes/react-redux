import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const cb = props.whenClick
    return (
        <div>
            <div>Child</div>

            <button onClick={ _ => cb('John', 53, true)}>
                Provide Information
                </button>
        </div>
    )
}