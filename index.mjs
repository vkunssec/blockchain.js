import Blockchain from './blockchain.mjs';

var blockchain = new Blockchain();

blockchain.addBlock({ amount: 2 });
blockchain.addBlock({ amount: 3 });
blockchain.addBlock({ amount: 4 });
blockchain.addBlock({ amount: 5 });

console.log(blockchain.isValid());

blockchain.blocks[2].data.amount = 30000; 

console.log(blockchain.isValid());

console.log(blockchain);
