import { GalacticAge } from "../src/backEnd.js";

describe('GalacticAge', function() {

  it('should count the number of vowels in a word', function() {
    //Test content will go here.
    let date = new GalacticAge(97, 01, "M");
    expect(date.todaysDate(date.userAge()).toEqual(97, 01, "M"));
  });

});
