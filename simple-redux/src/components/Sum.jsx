import React from 'react'

import Card from './Card'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const {min, max} = props
    return (

        <Card title="Numbers Sum" blue>
            <div>
                <span>
                    <span>Result:</span>
                    <strong>{ max + min}</strong>
                </span>
            </div>
        </Card>
    )
}