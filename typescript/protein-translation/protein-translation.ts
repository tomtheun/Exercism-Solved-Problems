class ProteinTranslation {

  static readonly mapping: { [string: string]: String } = {
    'AUG': 'Methionine',
    'UUU': 'Phenylalanine',
    'UUC': 'Phenylalanine',
    'UUA': 'Leucine',
    'UUG': 'Leucine',
    'UCU': 'Serine',
    'UCC': 'Serine',
    'UCA': 'Serine',
    'UCG': 'Serine',
    'UAU': 'Tyrosine',
    'UAC': 'Tyrosine',
    'UGU': 'Cysteine',
    'UGC': 'Cysteine',
    'UGG': 'Tryptophan',
    'UAA': 'STOP',
    'UAG': 'STOP',
    'UGA': 'STOP',
  }

  static proteins(rna: string) {
    const codons = rna.match(/.{3}/g);
    if (!codons) {
      throw new Error('Invalid RNA string');
    }

    const proteins = codons.map(codon => ProteinTranslation.mapping[codon]);
    const stopCodonIndex = proteins.indexOf('STOP');

    return stopCodonIndex !== -1 ? proteins.slice(0, stopCodonIndex) : proteins;
  }
}

export default ProteinTranslation
