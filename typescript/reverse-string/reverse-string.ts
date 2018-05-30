class ReverseString {
    static reverse(input: string) {
      return input.split('')
                  .reverse()
                  .join('');
    }
}

export default ReverseString
