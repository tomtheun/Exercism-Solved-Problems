export default class RunLengthEncoding {

  static encode(input: string) {
    let flattend: Array<[string, number]> = [];

    input.split('')
         .forEach(character => {
           const entry = flattend[flattend.length - 1];
           if (entry && entry[0] === character) {
             entry[1] = entry[1] + 1;
           } else {
             flattend.push([character, 1]);
           }
         });

    return flattend.map(x => {
      return x[1] === 1 ? x[0] : x[1] + x[0];
    }).join('');
  }

  static decode(input: string) {
    let count = 1;
    let output = '';
    input.split(/(\d+|.)/)
         .filter(x => x)
         .forEach(character => {
           const number = parseInt(character);
           if (number) {
             count = number;
           } else {
            output += Array(count).fill(character)
                                  .join('');
            count = 1;
           }
         });

      return output;
  }
}
