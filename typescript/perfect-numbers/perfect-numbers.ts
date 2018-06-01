export default class PerfectNumbers {

  static classify(input: number) {
    if (input < 1) {
      throw new Error('Classification is only possible for natural numbers.');
    }

    let sum = 0;

    for (let i = 1; i < input; i++) {
      if (input % i === 0) {
        sum += i;
      }
    }

    if (sum > input) {
      return 'abundant';
    } else if (sum < input) {
      return 'deficient';
    } else {
      return 'perfect';
    }
  }
}
