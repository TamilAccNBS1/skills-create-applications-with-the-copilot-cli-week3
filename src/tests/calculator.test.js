const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('Calculator Functions', () => {
  
  describe('Addition', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add a positive and negative number', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('should add zero to a number', () => {
      expect(add(5, 0)).toBe(5);
    });

    test('should add two zeros', () => {
      expect(add(0, 0)).toBe(0);
    });

    test('should add decimal numbers', () => {
      expect(add(2.5, 3.5)).toBe(6);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract two negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('should subtract a larger number from a smaller number', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    test('should subtract zero from a number', () => {
      expect(subtract(7, 0)).toBe(7);
    });

    test('should subtract a number from zero', () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    test('should subtract decimal numbers', () => {
      expect(subtract(10.5, 4.5)).toBe(6);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-5, -3)).toBe(15);
    });

    test('should multiply a positive and negative number', () => {
      expect(multiply(10, -2)).toBe(-20);
    });

    test('should multiply by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test('should multiply by one', () => {
      expect(multiply(7, 1)).toBe(7);
    });

    test('should multiply decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });
  });

  describe('Division', () => {
    test('should divide two positive numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-10, -2)).toBe(5);
    });

    test('should divide a positive by a negative number', () => {
      expect(divide(10, -2)).toBe(-5);
    });

    test('should divide by one', () => {
      expect(divide(7, 1)).toBe(7);
    });

    test('should divide zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should divide decimal numbers', () => {
      expect(divide(10, 4)).toBe(2.5);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw error when dividing by zero with negative number', () => {
      expect(() => divide(-5, 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw error when dividing zero by zero', () => {
      expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
    });
  });

  describe('Integration Tests with Example Operations', () => {
    test('should handle the first example: 2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should handle the second example: 10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should handle the third example: 45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should handle the fourth example: 20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });
  });

  describe('Modulo', () => {
    test('should find remainder of two positive numbers', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should find remainder with larger divisor', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('should find remainder with no remainder', () => {
      expect(modulo(20, 5)).toBe(0);
    });

    test('should handle modulo with negative numbers', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    test('should handle modulo with negative divisor', () => {
      expect(modulo(10, -3)).toBe(1);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed');
    });

    test('should throw error when modulo zero by zero', () => {
      expect(() => modulo(0, 0)).toThrow('Modulo by zero is not allowed');
    });
  });

  describe('Power/Exponentiation', () => {
    test('should raise number to positive power', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should handle the example: 2 ^ 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should raise number to power of 2', () => {
      expect(power(5, 2)).toBe(25);
    });

    test('should raise number to power of 0', () => {
      expect(power(10, 0)).toBe(1);
    });

    test('should raise number to power of 1', () => {
      expect(power(7, 1)).toBe(7);
    });

    test('should handle negative exponents', () => {
      expect(power(2, -1)).toBe(0.5);
    });

    test('should handle decimal bases', () => {
      expect(power(2.5, 2)).toBe(6.25);
    });

    test('should raise negative number to even power', () => {
      expect(power(-2, 2)).toBe(4);
    });

    test('should raise negative number to odd power', () => {
      expect(power(-2, 3)).toBe(-8);
    });

    test('should handle zero to the power of positive number', () => {
      expect(power(0, 5)).toBe(0);
    });
  });

  describe('Square Root', () => {
    test('should find square root of perfect square', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should handle the example: √16 = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should find square root of 25', () => {
      expect(squareRoot(25)).toBe(5);
    });

    test('should find square root of 2', () => {
      expect(squareRoot(2)).toBeCloseTo(1.41421356, 8);
    });

    test('should handle square root of 0', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should handle square root of 1', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should handle square root of decimal numbers', () => {
      expect(squareRoot(0.25)).toBe(0.5);
    });

    test('should handle square root of large numbers', () => {
      expect(squareRoot(10000)).toBe(100);
    });

    test('should throw error for negative numbers', () => {
      expect(() => squareRoot(-4)).toThrow('Square root of negative numbers is not allowed');
    });

    test('should throw error for any negative number', () => {
      expect(() => squareRoot(-1)).toThrow('Square root of negative numbers is not allowed');
    });

    test('should throw error for negative decimal', () => {
      expect(() => squareRoot(-0.5)).toThrow('Square root of negative numbers is not allowed');
    });
  });

  describe('Integration Tests with Extended Operations', () => {
    test('should handle modulo example: 5 % 2 = 1', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should handle power example: 2 ^ 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should handle square root example: √16 = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should combine basic and advanced operations', () => {
      const result = add(power(2, 3), modulo(10, 3));
      expect(result).toBe(9);
    });
  });

});
