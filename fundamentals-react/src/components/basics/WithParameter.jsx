import React from 'react'

export default function WithParameter(props) {
    const status = props.grade >= 7 ? 'Approved' : 'Failed'

    const integerGrade = Math.ceil(props.grade)
    return (
        <div>
            <h2>{props.title}</h2>
            <p><strong>{props.student } </strong> 
             has a grade of 
             <strong> {integerGrade} </strong>
             and is
             <strong> {status}</strong>
             </p>
        </div>
    )
}