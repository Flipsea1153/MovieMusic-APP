import { expect } from '@open-wc/testing';
import Music from './music.js';

describe('Music', () => {
  it('<app-music> is an instance of Music', async () => {
    const element = document.createElement('app-music');
    expect(element).to.be.instanceOf(Music);
  });
});
