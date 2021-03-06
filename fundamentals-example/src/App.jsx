import './App.css'
import React from 'react'

import First from './components/First'
import WithParameters from './components/WithParameters'
import WithChildren from './components/WithChildren'
import Card from './components/Layout/Card'
import Repetition from './components/Repetition'
import Conditional from './components/Conditional'
import ConditionalWithIf from './components/ConditionalWithIf'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) =>
    <div className="App">
        <Card title="#06 - Conditional v2">
            <ConditionalWithIf number={11}></ConditionalWithIf>
        </Card>

        <Card title="#05 - Conditional v1">
            <Conditional number={10}></Conditional>
        </Card>

        <Card title="#04 - Repetition">
            <Repetition></Repetition>
        </Card>

        <Card title="#03 - Component with Children">
            <WithChildren>
                <ul>
                    <li>Paulo</li>
                    <li>Junior</li>
                    <li>Juliana</li>
                    <li>Ana</li>
                </ul>
            </WithChildren>
        </Card>

        <Card title="#02 - Component with Parameter">
            <WithParameters
                title="This is the title"
                subtitle="This is the subtitle">
            </WithParameters>
        </Card>

        <Card title="#01 - First Component">
            <First />
        </Card>


    </div>