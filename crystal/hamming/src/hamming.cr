class Hamming
  def self.compute(firstStrand : String, secondStrand : String)
    raise ArgumentError.new if firstStrand.size != secondStrand.size

    return firstStrand.each_char
               .zip(secondStrand.each_char)
               .reject { |tuple| tuple[0] == tuple[1] }
               .to_a
               .size
  end
end
