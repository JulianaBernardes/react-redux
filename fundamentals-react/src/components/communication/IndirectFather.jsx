import React from 'react'
import IndirectChild from './IndirectChild'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    let name = '?'
    let age = 0
    let developer = false

    // name age isDev?
    function provideInfo(nameParam, ageParam, developerParam) {
        name = nameParam
        age = ageParam
        developer = developerParam
        
        console.log(nameParam, ageParam, developerParam);
    }

    return (
        <div>
            <div>
                <span>{name} </span>
                <span><strong>{age}</strong> </span>
                <span>{developer ? 'True' : 'False'}</span>
            </div>
            <IndirectChild whenClick={provideInfo}></IndirectChild>
        </div>
    )
}