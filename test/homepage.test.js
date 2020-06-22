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
    it('should output the command to be executed', function (done) {
        supertest(app).post('/gcn')
            .send({
                "dataset": "citeseer"
            })
            .expect(200, done);
    })

    it('JSON without dataset', function (done) {
        supertest(app).post('/gcn')
            .send({
                "name": 'Salone',
                "age": 20
            })
            .expect(200, done);
    })

    it('NO JSON', function (done) {
        supertest(app).post('/gcn')
            .send('hello world')
            .expect(200, done);
    })

})