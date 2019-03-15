import { GalacticAge } from "../src/backEnd.js";

describe('GalacticAge', function() {

  it('should count the number of vowels in a word', function() {
    //Test content will go here.
    const date = new GalacticAge('97', '01', 'M');
    expect(date.todaysDate().toEqual(2019,02,15));
  });

});
