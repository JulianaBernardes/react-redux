import React from 'react'


import First from './components/basics/First'
import WithParameter from './components/basics/WithParameter'
import Fragments from './components/basics/Fragments'
import Random from './components/basics/Random'

export default function App (props) {
    return (
        <div id="app">
        <h1>React fundamentals</h1>
        <Random min={10} max={60} />
        <Fragments />
        <WithParameter
            title="Student situation"
            student="Paulo" grade={8.7}
        />
        <First></First>
    </div>
    )
}
    
