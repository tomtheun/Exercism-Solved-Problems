module BookKeeping
  VERSION = 4
end

class Complement

  MAPPING = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U',
  }

  def self.of_dna(strand)
    return '' unless MAPPING[strand]

    strand.chars
          .map { |c| MAPPING[c.to_sym] }
          .join
  end
end
