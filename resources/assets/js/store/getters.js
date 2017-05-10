export const numbers = (state) => state.numbers
 
export const sum = (state) => state.numbers.reduce((a, b) => a + b, 0)
