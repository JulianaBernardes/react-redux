import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <div>
                <label htmlFor="inputStep">Step: </label>
                <input
                    id="inputStep"
                    type="number"
                    value={props.step}
                    onChange={e => props.setStep(+e.target.value)} />
            </div>

        </div>
    )
}