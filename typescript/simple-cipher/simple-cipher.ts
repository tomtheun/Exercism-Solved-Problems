class SimpleCipher {

  key: string

  constructor(key?: string) {
    if (key !== undefined) {
      const regex = /^[a-z]+$/g
      if (!regex.test(key)) {
        throw 'Bad key'
      }

      this.key = key;
    } else {
      this.key = [...Array(100)].map(_ => {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      }).join('');
    }
  }

  encode(text: string) {
    const that = this;
    let i = 0;

    return text.split('')
      .map(letter => {
        const key = that.key[i++ % that.key.length];
        const letterCharCode = letter.charCodeAt(0);
        const keyCharCode = key.charCodeAt(0);

        let shift = keyCharCode + (letterCharCode - 97);
        if (shift > 122) {
          shift = shift - 123 + 97;
        }

        return String.fromCharCode(shift);
      })
      .join('');
    }

    decode(text: string) {
      const that = this;
      let i = 0;

      return text.split('')
        .map(letter => {
          const key = that.key[i++ % that.key.length];
          const letterCharCode = letter.charCodeAt(0);
          const keyCharCode = key.charCodeAt(0);

          let shift = 97 - (keyCharCode - letterCharCode);
          if (shift < 97) {
            shift = 123 - (97 -shift);
          }

          return String.fromCharCode(shift);
        })
        .join('');
    }
}

export default SimpleCipher
