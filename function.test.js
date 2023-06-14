const { stringLength , reverseString, capitalizeString} = require('./functions');
const Calculator = require('./calculator');
const calculator = new Calculator();

it('should return the correct length of a string', () => {
    expect(stringLength('Hello')).toBe(5);
    expect(stringLength('H')).toBe(1);
    expect(stringLength('1234567890')).toBe(10);
  });

  it('should throw an error if the string is empty', () => {
    expect(() => compileAndroidCode('')).toThrow();
  });

  it('should throw an error if the string is longer than 10 characters', () => {
    expect(() => stringLength('This string is too long')).toThrow('String must not exceed 10 characters');
  });

  it('Should return reversed string', () => {
    expect(reverseString('ABC')).toBe('CBA');
    expect(reverseString('ABC123')).toBe('321CBA');
    expect(reverseString('kamran asif')).toBe('fisa narmak');
    expect(reverseString('U s m a n')).toBe('n a m s U');
  })
  describe('Capitalize String', () => {
    test('Is String first charactor capitalized', () =>{
        expect(capitalizeString('kamran')).toBe('Kamran');
        expect(capitalizeString('kamran asif')).toBe('Kamran asif');
    })
  })
  describe('Calculator', () => {
    test('Is Addition Method works correct',() => {
        expect(calculator.add(2,4)).toBe(6);
        expect(calculator.add(5,5)).toBe(10);
        expect(calculator.add(-2,4)).toBe(2);
        expect(calculator.add(0,4)).toBe(4);
    });
    test('Is Subtract Method works correct',() => {
        expect(calculator.subtract(2,4)).toBe(-2);
        expect(calculator.subtract(5,5)).toBe(0);
        expect(calculator.subtract(-2,4)).toBe(-6);
        expect(calculator.subtract(0,4)).toBe(-4);
    });
    test('Is Multiply Method works correct',() => {
        expect(calculator.multiply(2,4)).toBe(8);
        expect(calculator.multiply(5,5)).toBe(25);
        expect(calculator.multiply(-2,4)).toBe(-8);
        expect(calculator.multiply(0,4)).toBe(0);
    });
    test('Is Divide Method works correct',() => {
        expect(calculator.divide(2,4)).toBe(0.5);
        expect(calculator.divide(5,5)).toBe(1);
        expect(calculator.divide(4,4)).toBe(1);
        expect(calculator.divide(0,4)).toBe(0);
    });
  })