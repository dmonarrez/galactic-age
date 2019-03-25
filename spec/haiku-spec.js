import { GalacticAge } from "../src/backEnd.js";

describe('GalacticAge', function() {

  it('should return the year', function() {
    //Test content will go here.
    const user = new GalacticAge('1997', 'M');
    expect(user.test('test')).toEqual('test');
  });

  it('should get the age of the user based on the year they were born', function () {
    const user = new GalacticAge('1997', 'M');
    expect(user.getUserAge()).toEqual(22);
  });

  it('should calculate a users age on Mercury', function () {
    const user = new GalacticAge('1997', 'M');
    const userAge = user.getUserAge();
    expect(user.ageOnMercury(userAge)).toEqual('91.7');
  });

  it('should calculate a users age on Venus', function () {
    const user = new GalacticAge('1997', 'M');
    const userAge = user.getUserAge();
    expect(user.ageOnVenus(userAge)).toEqual('35.5');
  });

  it('should calculate a users age on Mars', function () {
    const user = new GalacticAge('1997', 'M');
    const userAge = user.getUserAge();
    expect(user.ageOnMars(userAge)).toEqual('11.7');
  });

  it('should calculate a users age on Jupiter', function () {
    const user = new GalacticAge('1997', 'M');
    const userAge = user.getUserAge();
    expect(user.ageOnJupiter(userAge)).toEqual('1.9');
  });

  it('should calculate how many years a user has left to live on each planet', function () {
    const user = new GalacticAge('1997', 'M');
    const userAge = user.getUserAge();
    const userAgeOnPlanet = user.ageOnJupiter(userAge);
    const userTime = user.time(userAgeOnPlanet, this.gender);
    expect(userTime).toEqual("you have an estimated 74.1 years left based on gender average");
  });
});
