'use strict';
require('mockingoose').default;
const mongoose = require('mongoose');
const database = require('../database');
jest.mock('mongoose');

describe('Database test', () => {
  test('mongoose first failed test', async () => {
    let count = 0;
    let consoleOutput = []
    const mockedLog = output => consoleOutput.push(output)
    console.log = mockedLog;
    jest.setTimeout(15000);
    mongoose.connect.mockImplementation( args => {
      if (count < 1) {
        count++;
        throw new Error('failed to connect to server xx on first connect');
      }
      else {
        return;
      }
      
    });
    await database({});
    expect(consoleOutput).toContain('Retrying first connect...');
    expect(consoleOutput).toContain('Connected to database');
  });
});
