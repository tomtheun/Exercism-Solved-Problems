module BookKeeping
  VERSION = 1
end

class Sieve
  def initialize(limit)
    @limit = limit
  end

  def primes
    primes = (0..@limit).to_a
    primes[0] = primes[1] = nil

    primes.each { |number|
      next unless number

      (number * number).step(@limit, number) { |multiple|
        primes[multiple] = nil
      }
    }

    primes.compact
  end
end
