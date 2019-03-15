import { GalacticAge } from "../src/backEnd.js";

describe('GalacticAge', function() {

  it('should return the year', function() {
    //Test content will go here.
    const age = new GalacticAge('97', '01');
    expect(age.year).toEqual('97');
  });
});
