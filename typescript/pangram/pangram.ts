export default class Pangram {

  readonly input: string;

  constructor(input: string) {
    this.input = input;
  }

  isPangram() {
    return new Set(
      this.input
        .split('')
        .map(x => x.toLowerCase())
        .filter(x => x.match(/[a-z]/))
        .sort()
    ).size === 26;
  }
}


// new Set('the quick brown fish jumps over the lazy dog'.split('').map(x => x.toLowerCase()).filter(x => x.match(/[a-z]/)).sort())
