var expect  = require('chai').expect;
var request = require('request');
//var server = require('../server');

const comment = {
    "first_name": "Test",
    "last_name": "User",
    "title": "Unit Tester",
    "organization": "Test Organization USA",
    "description": "This is a test user for automated testing purposes."
}

describe('Test API Routes', function() {
    describe('Health Check', function() {
        it('GET /pulse', function(done) {
            this.slow(250);
            request('http://localhost:4000/api/pulse' , function(error, response, body) {
                expect(body).to.include('OK');
                done();
            });
        });
    });
    describe('Get All Comments', function() {
        it('GET /comment', function(done) {
            this.slow(250);
            request('http://localhost:4000/api/comment' , function(error, response, body) {
                expect(body).to.include('"_id":');
                done();
            });
        });
    });
    describe('Get A Single Comment By ID', function() {
        it('GET /comment/id', function(done) {
            this.slow(1000);
            request('http://localhost:4000/api/comment/605b6d6317d2223d00b6f502' , function(error, response, body) {
                expect(body).to.include('"_id":"605b6d6317d2223d00b6f502",');
                done();
            });
        });
    });
    describe('Generate A JSON Web Token', function() {
        it('GET /jwt', function(done) {
            this.slow(1000);
            request('http://localhost:4000/api/jwt' , function(error, response, body) {
                expect(body).to.not.null;
                done();
            });
        });
    });
    // describe('Create A New Comment', function() {
    //     it('POST /comment', function(done) {
    //     request('http://localhost:4000')
    //       .post('/api/comment')
    //       .send(comment)
    //       .expect(200)
    //       .expect('Content-Type', /json/)
    //       .end(function(err, res) {
    //         if (err) done(err);
    //         // res.body.should.have.property('message');
    //         // res.body.participant.should.have.property("comment submitted successfully");

    //          });
    //       done();
    //     });
    // });
    // it('POST /comment', function(done) {
    //     this.slow(1000);
    //     request('http://localhost:4000/api/comment/5f72a7b593f0060824868cb8' , function(error, response, body) {
    //         expect(body).to.include('"_id":"5f72a7b593f0060824868cb8",');
    //         done();
    //     });
    //});
});