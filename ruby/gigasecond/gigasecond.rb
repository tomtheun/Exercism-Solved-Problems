module BookKeeping
  VERSION = 6
end

class Gigasecond
  GIGASECOND_IN_SECONDS = 1000000000

  def self.from(time)
    Time.at(time.to_i + GIGASECOND_IN_SECONDS)
  end
end
