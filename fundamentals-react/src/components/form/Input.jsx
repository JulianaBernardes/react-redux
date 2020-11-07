import React, { useState } from 'react'
import './Input.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const [value, setValue] = useState('Starter')

    function whenChange(e) {
        setValue(e.target.value)
    }

    return (
        <div className="Input">
            <h2>{value}</h2>

            <div style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <input value={value} onChange={whenChange} />
                <input value={value} readOnly />
                <input value={undefined} />
            </div>
        </div>
    )
}