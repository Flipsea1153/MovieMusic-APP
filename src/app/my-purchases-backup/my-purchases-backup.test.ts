import { expect } from '@open-wc/testing';
import MyPurchasesBackup from './my-purchases-backup.js';

describe('MyPurchasesBackup', () => {
  it('<app-my-purchases-backup> is an instance of MyPurchasesBackup', async () => {
    const element = document.createElement('app-my-purchases-backup');
    expect(element).to.be.instanceOf(MyPurchasesBackup);
  });
});
