import { expect } from '@open-wc/testing';
import ChildView2 from './child-view2.js';

describe('ChildView2', () => {
  it('<app-child-view2> is an instance of ChildView2', async () => {
    const element = document.createElement('app-child-view2');
    expect(element).to.be.instanceOf(ChildView2);
  });
});
