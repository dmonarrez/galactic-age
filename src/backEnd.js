//Haiku constructor
export class GalacticAge {
  constructor (year, gender) {
    this.year = Number(year);
    this.gender = gender;

    this.userBirthYear = new Date(this.year, 00);
    this.maleExpecancy = new Date(43, 00);
    this.femaleExpecancy = new Date(41, 00);
    this.today = new Date();
  }

  getUserAge(birthYear) {
    const age = this.today.getFullYear() - birthYear.getFullYear();
    return age;
  }

  // ageOnMercury (userAge) {
  //
  // }












  test(line) {
    console.log(line);
    return line
  }

}
