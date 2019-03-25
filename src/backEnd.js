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
    const venusAge = userAge / .62;
    return venusAge.toFixed(1);
  }

  ageOnMars (userAge) {
    const marsAge = userAge / 1.88;
    return marsAge.toFixed(1);
  }

  ageOnJupiter (userAge) {
    const jupiterAge = userAge / 11.86;
    return jupiterAge.toFixed(1);
  }

  time (age, gender) {
    let time = '';
    let genderAge = '';
    if (gender === "F") {
      genderAge  =   this.year - this.femaleExpecancy.getFullYear();
    } else if (gender === "M") {
      genderAge = this.year - this.maleExpecancy.getFullYear();
    }

    if (age <= genderAge) {
      console.log(age);
      time = genderAge - age;
      return "you have an estimated " + time + " years left based on gender average"
    } else if (age > genderAge) {
      console.log(age);
      time = age - genderAge;
      return "you have lived " + time + " years beyond your gender average"
    }

  }












  test(line) {
    console.log(line);
    return line
  }

}
