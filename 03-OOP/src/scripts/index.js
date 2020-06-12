import { Account, AccountController } from './account.js';

const newacct1 = new AccountController();
const account = new Account();

console.log(idDeposit, "here i am");

idCreateAcct.addEventListener("click", (() => {
    newacct1.addNewAcct(idNewAcct.value, Number(idOpenBalance.value));
    // 
    console.log(newacct1.acctArry);
}));

document.body.addEventListener("click", (e) => {
    const push = e.target.textContent;


    if (push === 'Deposit') {
        let deposit = newacct1.depositToAcct(idNewAcct.value, Number(idOpenBalance.value));
        if (deposit === false) {
            alert("This account does not exist");
        }
        else (idDisplay.value = deposit);


    } else if (push === 'Withdraw') {
        let withdraw = newacct1.withdrawFrAcct(idNewAcct.value, Number(idOpenBalance.value));
        if (withdraw === false) {
            alert("This account does not exist");
        }
        else (idDisplay.value = withdraw);


    } else if (push === 'Delete Account') {
        let del = newacct1.deleteAcct(idNewAcct.value);
        if (del === true) {
            alert("this account is deleted");
        }
        else {
            alert("This account does not exist");
        }

        console.log("You have deleted this account", idNewAcct.value);

    } else if (push === 'Lookup Account') {
        let lookup = newacct1.balanceOnAcct(idNewAcct2.value);
        if (lookup === false) {
            alert("This account does not exist");
        }
        else {
            document.getElementById("idDisplay").value = newacct1.balanceOnAcct(idNewAcct2.value);
            console.log(newacct1.balanceOnAcct(idNewAcct2.value));

        }

    }
    const total = () => {
        let totalAcct = newacct1.totalBalance();
        console.log(total("here i am"));
        document.getElementById("idTotal").textContent = "$" + totalAcct;
    }




});













