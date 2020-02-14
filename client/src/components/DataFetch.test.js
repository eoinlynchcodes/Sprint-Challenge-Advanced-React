import * as functions from './DataFetch';

it('sanity check', () => {
    expect(5).toBe(5)
})

describe('this is to check if DataFetch.js is connected.', () => {
    describe('sanity test on made up function', () => {
        it('adds numbers', () => {
            expect(functions.sum(4, 6)).toBe(10)
        })
    })
 })