class RnaComplement

  def self.of_dna(strand : String)
    strand.tr("GCTA", "CGAU")
  end
end
