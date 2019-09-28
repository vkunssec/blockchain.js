const crypt = require('crypto');

class Block {

    constructor(index = 0, previousHash = null, data = {amount: 1}, difficulty = 1) {
        this.index = index;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = new Date();
        this.difficulty = difficulty;
        this.nonce = 0;
        this.mine();
    }

    generateHash() {
        return crypt.createHash('sha256').update(this.index + this.previousHash + JSON.stringify(this.data) + this.timestamp + this.nonce).digest('hex');
    }

    mine() {
        this.hash = this.generateHash();
        while (!(/^0*$/.test(this.hash.substring(0, this.difficulty)))) {
            this.nonce++;
            this.hash = this.generateHash();
        }
    }

}

module.exports = Block;
