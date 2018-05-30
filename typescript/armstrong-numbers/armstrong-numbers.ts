export default class ArmstrongNumbers {

  static isArmstrongNumber(number: number) {
    const digits = number.toString().split('');

    const result = digits.map(digit => Math.pow(parseInt(digit), digits.length))
                         .reduce(this.add);

    return result === number;
  }

  static add(first: number, second: number) {
    return first + second;
  }
}
