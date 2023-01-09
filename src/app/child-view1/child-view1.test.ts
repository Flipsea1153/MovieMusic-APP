import { expect } from '@open-wc/testing';
import ChildView1 from './child-view1.js';

describe('ChildView1', () => {
  it('<app-child-view1> is an instance of ChildView1', async () => {
    const element = document.createElement('app-child-view1');
    expect(element).to.be.instanceOf(ChildView1);
  });
});
