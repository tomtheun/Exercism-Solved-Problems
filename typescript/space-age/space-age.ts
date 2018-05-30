export default class SpaceAge {

  readonly secondsInDay = 86400;

  seconds: number

  constructor(seconds: number) {
    this.seconds = seconds;
  }

  private precieseAgeOnEarth() {
    return this.seconds / this.secondsInDay / 365.25;
  }

  private calc(orbitalModifier: number) {
    return Math.round(this.precieseAgeOnEarth() / orbitalModifier * 100) / 100;
  }

  onEarth() {
    return this.calc(1);
  }

  onMercury() {
    return this.calc(0.2408467);
  }

  onVenus() {
    return this.calc(0.61519726);
  }

  onMars() {
    return this.calc(1.8808158);
  }

  onJupiter() {
    return this.calc(11.862615);
  }

  onSaturn() {
    return this.calc(29.447498);
  }

  onUranus() {
    return this.calc(84.016846);
  }

  onNeptune() {
    return this.calc(164.79132);
  }
}
