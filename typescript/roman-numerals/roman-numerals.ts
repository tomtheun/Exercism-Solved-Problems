class RomanNumerals {

  private static readonly ROMAN_NUMERALS: { [string: string]: number } = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }

  static roman(input: number) {
    let roman = '';
    let remainder = input;

    for (let i in this.ROMAN_NUMERALS) {
      const romanNumeral = this.ROMAN_NUMERALS[i];
      while (remainder >= romanNumeral) {
        roman += i;
        remainder -= romanNumeral;
      }
    }
    return roman;
  }
}

export default RomanNumerals
