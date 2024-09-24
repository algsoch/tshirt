const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server/server');
const expect = chai.expect;

chai.use(chaiHttp);

describe('POST /saveDesign', function () {
  it('should save the design and return status 200', function (done) {
    chai.request(server)
      .post('/saveDesign')
      .send({ user: 'test', imageUrl: 'image.png' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
