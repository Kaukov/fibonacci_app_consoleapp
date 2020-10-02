const { fibonacciTable } = require('fibonacci_app_lib')

/**
 * fibonacciTableString
 * Gets the output from fibonacciTable() and parses it into a table string
 * appropriate for outputting to stdout
 *
 * @param {number|string} num The n-th Fibonacci number to build the multiplication table for
 *
 * @returns {string}
 */
const fibonacciTableString = (num) => {
    const table = fibonacciTable(num)

    // If fibonacciTable() returns a string, it means we have an error string returned,
    // so just return the string
    if (typeof table === 'string') {
        return table
    }

    // Get the output array from fibonacciTable() and reduce it to a table string
    // appropriate for output to stdout
    return table.reduce((fibTStr, fibTArr) => {
        // Reduces each Fibonacci table row to a padded string
        const newString = fibTArr.reduce((str, arrItem) => {
            const itemToConcat = arrItem === null ? ' ' : arrItem

            return str.concat(itemToConcat).concat('\t')
        }, '')

        return fibTStr.concat(newString).concat('\n')
    }, '')
}

// Export the function so we can include it where needed
module.exports = fibonacciTableString
