const expect = require('chai').expect;
const sinon = require('sinon');

const starWarsControllers = require('../controllers/starWarsControllers');

describe('star wars Controller', function() {
  it('test case ', function() {
    const req = {
      query:{}
    };
    const res={}
    expect(starWarsControllers.getAllData.bind( req , res,() => {})).not.to.throw(
      'Something went wrong, could not user all data.'
      );
    });
});
