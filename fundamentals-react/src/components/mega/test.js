function generateNumberNotContained(min, max, array) {
    const random = parseInt(Math.random() * (max + 1 - min)) + min
    return array.includes(random) ?
        generateNumberNotContained(min, max, array) : 
        random
}

function generateNumbers(amount) {
    const numbers = Array(amount)
        .fill(0)
        .reduce((nums) => {
            const newNumber = generateNumberNotContained(1, 60, nums)
            console.log([...nums, newNumber]);
            return [...nums, newNumber]
        }, [])
        .sort((n1, n2) => n1 - n2)
    return numbers

};

console.log(generateNumbers(7));