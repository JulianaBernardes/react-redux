import React, { useState } from 'react'
import IndirectChild from './IndirectChild'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const [name, setName] = useState('?')
    const [age, setAge] = useState(0)
    const [developer, setDeveloper] = useState(false)
    
    function provideInfo(name, age, developer) {
        setName(name)
        setAge(age)
        setDeveloper(developer)
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