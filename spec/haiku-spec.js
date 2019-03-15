import { GalacticAge } from "../src/backEnd.js";

describe('GalacticAge', function() {

  it('should return the year', function() {
    //Test content will go here.
    const user = new GalacticAge('97', 'M');
    expect(user.test('test')).toEqual('test');
  });

  it('should get the age of the user based on the year they were born', function () {
    const user = new GalacticAge('97', 'M');
    expect(user.getUserAge(this.userBirthYear)).toEqual(22);
  });
});
