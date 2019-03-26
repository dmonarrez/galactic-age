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

  time(planetAge, gender) {
    const avgMaleAge = this.today.getFullYear() - this.maleExpecancy.getFullYear();
    const avgFemaleAge = this.today.getFullYear() - this.femaleExpecancy.getFullYear();

    //for sure could have made all these "ifs" into more modular function but am shipping it because it works and i need to move on
    if(gender === 'F') {
      if(planetAge <= avgFemaleAge) {
        return 'you have an estimated ' + (avgFemaleAge - planetAge).toFixed(1) + ' years left based on gender average'
      } else {
        return 'you have surpassed your gender average age by ' + (planetAge - avgFemaleAge).toFixed(1) + ' years!'
      }
    } else if (gender === 'M') {
      if(planetAge <= avgMaleAge) {
        return 'you have an estimated ' + (avgMaleAge - planetAge).toFixed(1) + ' years left based on gender average'
      } else {
        return 'you have surpassed your gender average age by ' + (planetAge - avgMaleAge).toFixed(1) + ' years!'
      }
    }
  }












  test(line) {
    console.log(line);
    return line
  }

}
