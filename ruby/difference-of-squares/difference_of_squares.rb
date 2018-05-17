module BookKeeping
  VERSION = 4
end

class Squares

  def initialize(number)
    @numbers = (0..number)
  end

  def square_of_sum
    @numbers.inject(:+)
            .pow(2)
  end

  def sum_of_squares
    @numbers.map { |nr| nr.pow(2) }
            .inject(:+)
  end

  def difference
    square_of_sum - sum_of_squares
  end
end
