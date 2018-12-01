import chaiHttp from 'chai-http';
import chai from 'chai';
import server from '../server/server';
// import Redflag from '../server/models/Redflag';
// import testData from '../server/mock-data/testData';

const { expect } = chai;

chai.use(chaiHttp);

const redflagId = '';
// redflagStatus = 'draft';

const newRedflag = {
    redflagId: '43bea7cb-afd0-4a51-8296-9c9c75e17aba',
    userId: '2',
    type: 'Incident',
    title: 'Abuse of power',
    address: '235 Ikorodu Road, Anthony',
    location: '6567899000 : 345667777',
    comment: 'On 24th Nov 2018, Gordons Gogo, a lecturer in the department of Computer Science, University of Sack was caught on camera receiving bribe from one of his student, Saga Tanka, a 300 level student.',
    status: 'draft',
};

describe('### Testing Root Route', () => {
    it('it should get the iReporter homepage route', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.message).to.be.eql('Welcome To iReporter');
                done(err);
            });
    });
});


describe('### Testing Redflag Routes', () => {
    // test for posting a Redflag
    it('should create a new Redflag', (done) => {
        chai.request(server)
            .post('/api/v1/redflags')
            .send(newRedflag)
            .end((err, res) => {
                expect(res.status).to.equal(201);
                expect(res.body.status).to.equal(201);
                expect(res.body.data[0].message).to.equal('New red-flag has been created');
                done(err);
            });
    });

    // test for getting all Redflags
    it('should get all Redflags', (done) => {
        chai.request(server)
            .get('/api/v1/redflags')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.status).to.equal(200);
                done(err);
            });
    });

    // test for getting a Redflag
    it('should return only one particular redflag', (done) => {
        chai.request(server)
            .get(`/api/v1/redflags/${redflagId}`)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.status).to.equal(200);
                done();
            });
    });

    it('should return 404 if redflag id doesn\'t exist', (done) => {
        chai.request(server)
            .get('/api/v1/redflags/10')
            .end((err, res) => {
                expect(res).to.have.status(404);
                expect(res.body.status).to.equal(404);
                return done();
            });
    });

    // // test for update a Redflag
    // it('should update one particular order', (done) => {
    //     chai.request(server)
    //         .put(`/api/v1/redflags/${redflagId}`)
    //         .send()
    //         .end((err, res) => {
    //             expect(res).to.have.status(200);
    //             done();
    //         });
    // });

    // // test for update a Redflag
    // it('should delete one particular order', (done) => {
    //     chai.request(server)
    //         .delete(`/api/v1/redflags/${redflagId}`)
    //         .send()
    //         .end((err, res) => {
    //             expect(res).to.have.status(204);
    //             done();
    //         });
    // });

    // it('should return 200 and an object for a successful request', (done) => {
    //     chai.request(server)
    //         .get(`/api/v1/redflags/${Redflag.id}`)
    //         .end((err, res) => {
    //             expect(res).to.have.status(200);
    //             expect(res.body.message).to.equal(`Red-flag  ${Redflag.id}  fetched`);
    //             expect(res.body.status).to.equal(1);
    //             return done();
    //         });
    // });

    // it('should get an redflag', (done) => {
    //     chai.request(server)
    //         .get(`/api/v1/redflags/${Redflag.id}`)
    //         .end((err, res) => {
    //             expect(res.status).to.equal(404);
    //             expect(res.body.status).to.equal(1);
    //             expect(res.body.message).to.equal(`Red-flag  ${Redflag.id}  fetched`);
    //             expect(res.body.data.id).to.be.eql(4);
    //             expect(res.body.data.userId).to.be.eql(2);
    //             expect(res.body.data.status).to.be.eql('draft');
    //             done(err);
    //         });
    // });
});
