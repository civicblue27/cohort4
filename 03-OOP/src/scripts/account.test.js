import { AccountController } from './account';
import { Account } from './account';

const account = new Account();
const newacct1 = new AccountController();


test('add funds?', () => {
    expect(newacct1).toBeInstanceOf(AccountController);
    expect(newacct1.acctArry.length).toBe(0);
    newacct1.addNewAcct("car", 48)
    expect(newacct1.acctArry.length).toBe(1);
    expect(newacct1.acctArry).toEqual([{ name: 'car', balance: 48 }]);
    newacct1.addNewAcct("vacay", 65);
    expect(newacct1.acctArry).toEqual([{ name: 'car', balance: 48 }, { name: 'vacay', balance: 65 }]);
});

test('delete account work?', () => {
    newacct1.addNewAcct("car", 100);
    newacct1.addNewAcct("vacay", 200);
    expect(newacct1.acctArry.length).toBe(2);
    acct1.deleteAcct("car");
    expect(newacct1.acctArry.length).toBe(1);
    acct1.deleteAcct("vacay");
    expect(newacct1.acctArry.length).toBe(0);
});

test('account total balance?', () => {
    newacct1.addNewAcct("car", 7500);
    newacct1.addNewAcct("vacay", 1435);
    expect(newacct1.totalBalance()).toBe(8935);
});

test('account largest balance work?', () => {
    newacct1.addNewAcct("car", 500);
    newacct1.addNewAcct("vacay", 55);
    expect(newacct1.largestAcctBal()).toBe(500);
    newacct1.addNewAcct("vacay", 5010);
    expect(newacct1.largestAcctBal()).toBe(55);
});

test('account smallest balance work?', () => {
    newacct1.addNewAcct("car", 1000);
    newacct1.addNewAcct("vacay", 150);
    expect(newacct1.smallestAcctBal()).toBe(150);
    newacct1.addNewAcct("coffee", 10);
    expect(newacct1.smallestAcctBal()).toBe(10);
});

test('Does the deposit work?', () => {
    newacct1.addNewAcct("car", 0);
    newacct1.depositToAcct("car", 500);
    expect(newacct1.acctArry[0].currentBalance()).toBe(500);
    newacct1.depositAccount("car", 165);
    expect(newacct1.acctArry[0].currentBalance()).toBe(165);
});

test('Does the balance work?', () => {
    newacct1.addNewAcct("car", 0);
    newacct1.balanceOnAcct("car");
    expect(newacct1.acctArry[0].currentBalance()).toBe(0);
});

test('Does the withdrawl work?', () => {
    newacct1.addNewAcct("car", 1000);
    newacct1.withdrawFrAcct("car", 5);
    expect(newacct1.acctArry[0].currentBalance()).toBe(995);
});

