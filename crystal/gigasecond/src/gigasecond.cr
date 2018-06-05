class Gigasecond
  def self.from(input : Time)
    input.add_span(1E9.to_i, 0)
  end
end
