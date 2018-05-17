class Hamming
  def self.compute(firstStrand, secondStrand)
    if firstStrand.size != secondStrand.size
      raise ArgumentError.new
    end

    # Initial approach
    # i = 0
    # (0...firstStrand.size).each { |x|
    #   if firstStrand[x] != secondStrand[x]
    #     i = i+1
    #   end
    # }
    #
    # i

    # More functional approach
    firstStrand.chars.zip(secondStrand.chars)
                     .select { |a, b| a != b }
                     .size
  end
end
