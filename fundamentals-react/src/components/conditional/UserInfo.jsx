import React from 'react'
import If, { Else } from './If'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const user = props.user || {}
    return (
        <div>

            <If test={user && user.name}>
                Welcome <strong>{user.name}</strong>!
                <Else>
                    Welcome <strong>my friend</strong>!
                </Else>
            </If>
        </div>
    )
}