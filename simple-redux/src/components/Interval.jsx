import './Interval.css'
import React from 'react'

import Card from './Card'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (

        <Card title="Numbers Interval" red>
            <div className="Interval">
                <span>
                    <strong>Minimum:</strong>
                    <input type="number" value={0} readOnly />
                </span>
                <span>
                    <strong>Maximum:</strong>
                    <input type="number" value={10} readOnly />
                </span>
            </div>
        </Card>
    )
}