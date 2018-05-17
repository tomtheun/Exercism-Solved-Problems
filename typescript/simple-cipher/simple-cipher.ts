class SimpleCipher {

  constructor(key?: string) {
    if (key) {
      var regex = /^[a-z]+$/g
      if (!regex.test(key)) {
        throw 'Bad key'
      }
    } else {
      this.key = [...Array(100)].map(_ => {
          return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
      }).join('')
    }
  }

    foo = {
      'A': 'D',
      'B': 'E',
      'C': 'F',
      'D': 'G',
      'E': 'H',
      'F': 'I',
      'G': 'J',
      'H': 'K',
      'I': 'L',
      'J': 'M',
      'K': 'N',
      'L': 'O',
      'M': 'P',
      'N': 'Q',
      'O': 'R',
      'P': 'S',
      'Q': 'T',
      'R': 'U',
      'S': 'V',
      'T': 'W',
      'U': 'X',
      'V': 'Y',
      'W': 'Z',
      'X': 'A',
      'Y': 'B',
      'Z': 'C',
    }

    shiftBy = 3
    key: string

    encode(text: string) {
        return text.split('')
            .map(letter => {
              return String.fromCharCode(letter.charCodeAt(0) + this.shiftBy);
            })
            .join('');

        // iamapandabear
        // ldpdsdqgdehdu
    }

    decode(text: string) {
        if (text) {}
    }
}

export default SimpleCipher
