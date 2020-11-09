import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    function generateRandom(amount) {

        const array = Array(amount)

        for (let i = 0; i < array.length; i++) {
            const randomNumber = parseInt(Math.random() * (59)) + 1
             
            // array.push(randomNumber)
        }

        console.log(array);

        return array
    }
    generateRandom(7)

    return (
        <div>Mega</div>,
        <div></div>
    )
}