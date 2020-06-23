var supertest = require('supertest');
var app = require('../app');

// describe('homepage', function () {
//     it('Testcase for GET \'/\'', function (done) {
//         supertest(app).get('/')
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

describe('gcn_page', function () {
    it('citeseer JSON', function (done) {
        this.timeout(0);
        supertest(app).post('/gcn')
            .send({
                "dataset": "citeseer"
            })
            .expect(200, done);
    })
})