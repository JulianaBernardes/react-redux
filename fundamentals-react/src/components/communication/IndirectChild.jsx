import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const cb = props.whenClick
    const min = 50
    const max = 70
    const generateAge = () => parseInt(Math.random() * (max-min) + min)
    const generateDeveloper = () => Math.random() > 0.5
    return (
        <div>
            <div>Child</div>

            <button onClick={ _ => cb('John', generateAge, generateDeveloper)}>
                Provide Information
                </button>
        </div>
    )
}