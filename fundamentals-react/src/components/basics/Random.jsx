import React from 'react'

export default function Random(props) {
    // destructuring
    const { min, max } = props;

    const random = parseInt(Math.random() * (max - min)) + min;
    return (
        <div>
            <h2>Random number</h2>
            <p><strong>Minimum value:</strong> {min}</p>
            <p><strong>Maximum value:</strong> {max}</p>
            <p><strong>Chosen value:</strong> {random}</p>
        </div>
    )
}
