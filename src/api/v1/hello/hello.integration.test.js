/* eslint-disable arrow-body-style */
const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../../config/express');

describe('POST /api/v1/hello', () => {
  let body;

  beforeEach(() => {
    body = {};
  });

  afterEach(() => { });

  it('should integrate api /hello', () => {
    return request(app)
      .get('/api/v1/hello')
      .send(body)
      .expect(httpStatus.OK)
      .then((res) => {
        expect(res.body).toHaveProperty('responseCode');
        expect(res.body).toHaveProperty('responseMessage');
        expect(res.body.responseCode).toBe(200);
        expect(res.body.responseMessage).not.toBe(undefined);
      });
  });
});
