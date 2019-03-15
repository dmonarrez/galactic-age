import { GalacticAge } from "../src/backEnd.js";

describe('GalacticAge', function() {

  it('should count the number of vowels in a word', function() {
    //Test content will go here.
    const haiku = new Haiku('tiim', 'he', 'did');
    expect(haiku.findVowels(haiku.first)).toEqual(2);
  });

});
