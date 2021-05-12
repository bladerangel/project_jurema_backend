import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import AppModule from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/states (GET)', () => {
    const states = {
      states: [
        { name: 'São Paulo', abbreviation: 'SP' },
        { name: 'Rio de Janeiro', abbreviation: 'RJ' },
        { name: 'Pernambuco', abbreviation: 'PE' },
        { name: 'Bahia', abbreviation: 'BA' },
      ],
    };
    return request(app.getHttpServer())
      .get('/states')
      .expect(200)
      .expect(states);
  });

  it('/population/sp (GET)', () => {
    const populationByState = { abbreviation: 'SP', population: 12.33 };
    return request(app.getHttpServer())
      .get('/population/sp')
      .expect(200)
      .expect(populationByState);
  });
});
