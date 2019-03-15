//Haiku constructor
export class GalacticAge {
  constructor (year, month, gender) {
    this.year = year;
    this.month = month;
    this.userGender = gender;

    this.userAge = new Date(this.year, this.month);
    this.maleExpectancy = new Date(43, 00);
    this.femaleExpectancy = new Date(41, 00);
  }

  todaysDate () {
    const d = new Date();
    console.log(d);
  }

}
