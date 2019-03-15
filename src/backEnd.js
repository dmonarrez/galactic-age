//Haiku constructor
export class GalacticAge {
  constructor (year, gender) {
    this.year = Number(year);
    this.gender = gender;

    this.userBirthYear = new Date(this.year, "00");
    this.maleExpecancy = new Date(43, "00");
    this.femaleExpecancy = new Date(41, "00");
    this.today = new Date();
  }

  getUserAge() {
    const age = this.today.getFullYear() - this.year;
    return age;
  }

  ageOnMercury (userAge) {
    const mercuryAge = userAge / .24;
    return mercuryAge.toFixed(1);
  }

  ageOnVenus (userAge) {
    const mercuryAge = userAge / .62;
    return mercuryAge.toFixed(1);
  }

  ageOnMars (userAge) {
    const mercuryAge = userAge / 1.88;
    return mercuryAge.toFixed(1);
  }












  test(line) {
    console.log(line);
    return line
  }

}
