import React from 'react'
import './App.css'

import UserInfo from './components/conditional/UserInfo'
import EvenOrOdd from './components/conditional/EvenOrOdd'
import ProductsTable from './components/repeat/ProductsTable'
import StudentsList from './components/repeat/StudentsList'
import Family from './components/basics/Family'
import FamilyMember from './components/basics/FamilyMember'
import Card from './components/layout/Card'
import First from './components/basics/First'
import WithParameter from './components/basics/WithParameter'
import Fragments from './components/basics/Fragments'
import Random from './components/basics/Random'

export default function App(props) {
    return (
        <div className="App">
            <h1>React fundamentals</h1>

            <div className="Cards">

                <Card title="#08 - Conditional Rendering" color="#982395">
                    <UserInfo user={{name: 'Paulo'}}></UserInfo>
                    <UserInfo user={{}}></UserInfo>
                    
                    <EvenOrOdd number={20}></EvenOrOdd>
                </Card>

                <Card title="#07 - Repetition Chalenge" color="#3A9AD9">
                    <ProductsTable></ProductsTable>
                </Card>

                <Card title="#06 - Repetition" color="#FF4C65">
                    <StudentsList></StudentsList>
                </Card>

                <Card title="#05 - Component with children" color="#00C8F8">
                    <Family surname="Pereira">
                        <FamilyMember name="Pedro"/>
                        <FamilyMember name="Ana"/>
                        <FamilyMember name="Gustavo"/>
                    </Family>
                </Card>

                <Card title="#04 - Random challenge" color="#FA6900">
                    <Random min={10} max={60} />
                </Card>

                <Card title="#03 -Fragment" color="#E94C6F">
                    <Fragments />
                </Card>

                <Card title="#02 - With Parameter" color="#E8B71A">
                    <WithParameter
                        title="Student situation"
                        student="Paulo" grade={8.7}
                    />
                </Card>

                <Card title="#01 - First component" color="#588C73">
                    <First></First>
                </Card>

            </div>

        </div>
    )
}

