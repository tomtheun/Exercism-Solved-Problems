class Transcriptor {

  static readonly mapping: {[string: string]: String} = {
      'G': 'C',
      'C': 'G',
      'T': 'A',
      'A': 'U',
    }

    toRna(input: string) {
      if (!new RegExp(/^(G|C|T|A)+$/i).test(input)) {
        throw new Error('Invalid input DNA.');
      }

      return input.split('')
                  .map(nucleotide => Transcriptor.mapping[nucleotide])
                  .join('');
    }
}

export default Transcriptor
