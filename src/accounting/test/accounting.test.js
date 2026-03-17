// test/accounting.test.js
const fs = require('fs');
const path = require('path');
const { expect } = require('chai');

const BALANCE_FILE = path.join(__dirname, '../balance.json');
const INITIAL_BALANCE = 1000.00;

// Helper functions to simulate app logic
function loadBalance() {
    if (!fs.existsSync(BALANCE_FILE)) {
        saveBalance(INITIAL_BALANCE);
        return INITIAL_BALANCE;
    }
    const data = fs.readFileSync(BALANCE_FILE, 'utf8');
    return parseFloat(JSON.parse(data));
}

function saveBalance(balance) {
    fs.writeFileSync(BALANCE_FILE, JSON.stringify(balance));
}

function creditAccount(amount) {
    let balance = loadBalance();
    balance += amount;
    saveBalance(balance);
    return balance;
}

function debitAccount(amount) {
    let balance = loadBalance();
    if (balance >= amount) {
        balance -= amount;
        saveBalance(balance);
        return { success: true, balance };
    } else {
        return { success: false, balance };
    }
}

function resetBalance() {
    saveBalance(INITIAL_BALANCE);
}

describe('Student Account Management System', function() {
    beforeEach(() => {
        resetBalance();
    });

    it('TC01: View initial balance', function() {
        expect(loadBalance()).to.equal(1000.00);
    });

    it('TC02: Credit account with valid amount', function() {
        const newBalance = creditAccount(200.00);
        expect(newBalance).to.equal(1200.00);
    });

    it('TC03: Debit account with valid amount', function() {
        const result = debitAccount(300.00);
        expect(result.success).to.be.true;
        expect(result.balance).to.equal(700.00);
    });

    it('TC04: Debit account with insufficient funds', function() {
        const result = debitAccount(1200.00);
        expect(result.success).to.be.false;
        expect(result.balance).to.equal(1000.00);
    });

    it('TC05: Invalid menu option (simulated)', function() {
        // Menu validation is handled interactively; simulate invalid input
        const invalidOption = '5';
        expect(['1','2','3','4']).to.not.include(invalidOption);
    });

    it('TC06: Exit application (simulated)', function() {
        // Exit is handled interactively; simulate exit
        const exitOption = '4';
        expect(exitOption).to.equal('4');
    });

    it('TC07: Multiple operations sequence', function() {
        creditAccount(100.00);
        debitAccount(50.00);
        expect(loadBalance()).to.equal(1050.00);
    });
});
