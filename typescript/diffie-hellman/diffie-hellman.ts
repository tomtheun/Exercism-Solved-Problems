export default class DiffieHellman {

  private readonly p: number;
  private readonly g: number;

  constructor(p: number, g: number) {
    if (!this.isPrime(p) || !this.isPrime(g)) {
      throw new Error('Arguments must be prime numbers');
    }

    this.p = p;
    this.g = g;
  }

  getPublicKeyFromPrivateKey(privateKey: number) {
    if (privateKey < 2) {
      throw new Error('Private key must higher than 1');
    }

    if (privateKey >= this.p) {
      throw new Error('Private key must be lower than `p`');
    }

    return Math.pow(this.g, privateKey) % this.p;
  }

  getSharedSecret(privateKey: number, publicKey: number) {
    return Math.pow(publicKey, privateKey) % this.p;
  }

  private isPrime(n: number) {
    if (n <= 1) {
      return false;
    } else if (n <= 3) {
      return true;
    } else if (n % 2 === 0 || n % 3 === 0) {
      return false;
    }

    let i = 5;
    while (i * i <= n) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }

    return true;
  }
}
