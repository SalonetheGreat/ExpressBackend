var supertest = require('supertest');
var app = require('../app');

// describe('HOMEPAGE', function () {
//     it('Testcase for GET \'/\'', function (done) {
//         supertest(app).get('/')
//             .expect('I have received your GET@index.js')
//             .expect(200, done);
//     })

//     it('Testcase for POST \'/\'', function (done) {
//         supertest(app).post('/')
//             .send({
//                 name: 'Sha Long',
//                 Birthday: '0310',
//                 cmd: 'ls'
//             })
//             .expect(200, done);
//     })
// })

describe('GCN_PAGE', function () {
    it('citeseer JSON', function (done) {
        this.timeout(0);
        supertest(app).post('/gcn')
            .send({
                "dataset": "citeseer",
                "max_iter": 20
            })
            .expect('Content-Type', /json/)
            .expect(200, done);
    })

    // it('not valid JSON', function (done) {
    //     this.timeout(0);
    //     supertest(app).post('/gcn')
    //         .send({
    //             "name": "shalong"
    //         })
    //         .expect('Content-Type', /json/)
    //         .expect(200, done);
    // })
})
