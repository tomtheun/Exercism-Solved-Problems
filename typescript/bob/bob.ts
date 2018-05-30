class Bob {
    hey(input: string) {
      if (input.match('[A-Z]') && input.toUpperCase() === input) {
        // Shouting
        return 'Whoa, chill out!';
      } else if (input.endsWith('?')) {
        // Question
        return 'Sure.';
      } else if (input.replace(/ /g, '') === '') {
        // Silence
        return 'Fine. Be that way!';
      } else {
        // Other
        return 'Whatever.';
      }
    }
}

export default Bob
