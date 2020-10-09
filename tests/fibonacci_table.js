const { expect } = require('chai')
const fibonacciTableString = require('../src/app')

describe('Bad String Requests', () => {
    it('should return error message for the 0th number', () => {
        const table = fibonacciTableString(0)

        expect(table).to.be.a('string')
        expect(table).to.equal('Invalid number or number less than 1 provided!')
    })

    it('should return error message for a negative number', () => {
        const table = fibonacciTableString(-10)

        expect(table).to.be.a('string')
        expect(table).to.equal('Invalid number or number less than 1 provided!')
    })

    it('should return error message for a exceeding the max int value', () => {
        const table = fibonacciTableString(Number.MAX_SAFE_INTEGER + 2)

        expect(table).to.be.a('string')
        expect(table).to.equal('Very high number provided. Please provide a lower value!')
    })

    it('should return error message for wrong data type', () => {
        const table = fibonacciTableString('kjdsfaksdf')

        expect(table).to.be.a('string')
        expect(table).to.equal('Invalid number or number less than 1 provided!')
    })
})

describe('Valid String Requests', () => {
    it('should return the table for the 1st number', () => {
        const table = fibonacciTableString(1)

        expect(table).to.be.a('string')
        expect(table).to.equal(' \t0\t\n0\t0\t\n')
    })

    it('should return the table for the 2nd number', () => {
        const table = fibonacciTableString(2)

        expect(table).to.be.a('string')
        expect(table).to.equal(' \t0\t1\t\n0\t0\t0\t\n1\t0\t1\t\n')
    })

    it('should return the table for the 3rd number', () => {
        const table = fibonacciTableString(3)

        expect(table).to.be.a('string')
        expect(table).to.equal(' \t0\t1\t1\t\n0\t0\t0\t0\t\n1\t0\t1\t1\t\n1\t0\t1\t1\t\n')
    })
})
