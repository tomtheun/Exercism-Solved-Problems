class TwelveDays {

  private static readonly ordinalNumbers = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'];
  private static readonly whatIGetToday = [
    'a Partridge in a Pear Tree',
    'two Turtle Doves',
    'three French Hens',
    'four Calling Birds',
    'five Gold Rings',
    'six Geese-a-Laying',
    'seven Swans-a-Swimming',
    'eight Maids-a-Milking',
    'nine Ladies Dancing',
    'ten Lords-a-Leaping',
    'eleven Pipers Piping',
    'twelve Drummers Drumming',
  ];

  static recite(fromDay: number, toDay: number) {
    let lyrics = '';

    for (let i = fromDay; i <= toDay; i++) {
      lyrics += this.verse(i);
    }

    return lyrics;
  }

  private static verse(day: number) {
    const ordinalNumber = TwelveDays.ordinalNumbers[day - 1];
    let verse = `On the ${ordinalNumber} day of Christmas my true love gave to me`;

    for (let i = day; i > 0; i--) {
      verse += ', ';

      if (day > 1 && i === 1) {
        verse += 'and ';
      }

      verse += TwelveDays.whatIGetToday[i - 1];
    }

    return verse + '.\n';
  }
}

export default TwelveDays
