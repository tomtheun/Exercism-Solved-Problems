class Isogram {
  static isIsogram(input: string) {
    const text = input.toLowerCase();

    for (let i = 0; i < text.length; i++) {
      const character = text.charAt(i);

      // We only care about a-z characters
      if (character.match(/[a-z]/)) {
        const idx = text.indexOf(character, i + 1);
        if (idx !== i && idx !== -1) {
          return false;
        }
      }
    }

    return true;
  }
}

export default Isogram
