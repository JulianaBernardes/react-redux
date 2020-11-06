import React from 'react'
import DirectChild from './DirectChild'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    return (
        <div>
            <DirectChild text="Paulo" age={20} webDeveloper={true}></DirectChild>
            <DirectChild text="Juliana" age={18} webDeveloper={true}></DirectChild>
        </div>
    )
}