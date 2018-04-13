var web3;
if (typeof window.web3 !== "undefined" && typeof window.web3.currentProvider !== "undefined") {
    web3 = new Web3(window.web3.currentProvider);
}

console.log(web3);

var abiJSON = [{ "anonymous": false, "inputs": [{ "indexed": false, "name": "required", "type": "uint256" }], "name": "RequirementChange", "type": "event" }, { "constant": false, "inputs": [{ "name": "owner", "type": "address" }], "name": "addOwner", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_required", "type": "uint256" }], "name": "changeRequirement", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "transactionId", "type": "uint256" }], "name": "confirmTransaction", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "transactionId", "type": "uint256" }], "name": "executeTransaction", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "owner", "type": "address" }], "name": "removeOwner", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "owner", "type": "address" }, { "name": "newOwner", "type": "address" }], "name": "replaceOwner", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "transactionId", "type": "uint256" }], "name": "revokeConfirmation", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "transactionId", "type": "uint256" }], "name": "Execution", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "transactionId", "type": "uint256" }], "name": "Submission", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "sender", "type": "address" }, { "indexed": true, "name": "transactionId", "type": "uint256" }], "name": "Revocation", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "sender", "type": "address" }, { "indexed": true, "name": "transactionId", "type": "uint256" }], "name": "Confirmation", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }], "name": "OwnerRemoval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }], "name": "OwnerAddition", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "sender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Deposit", "type": "event" }, { "constant": false, "inputs": [{ "name": "destination", "type": "address" }, { "name": "value", "type": "uint256" }, { "name": "data", "type": "bytes" }], "name": "submitTransaction", "outputs": [{ "name": "transactionId", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "transactionId", "type": "uint256" }], "name": "ExecutionFailure", "type": "event" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "inputs": [{ "name": "_owners", "type": "address[]" }, { "name": "_required", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }, { "name": "", "type": "address" }], "name": "confirmations", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "transactionId", "type": "uint256" }], "name": "getConfirmationCount", "outputs": [{ "name": "count", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "transactionId", "type": "uint256" }], "name": "getConfirmations", "outputs": [{ "name": "_confirmations", "type": "address[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getOwners", "outputs": [{ "name": "", "type": "address[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "pending", "type": "bool" }, { "name": "executed", "type": "bool" }], "name": "getTransactionCount", "outputs": [{ "name": "count", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "from", "type": "uint256" }, { "name": "to", "type": "uint256" }, { "name": "pending", "type": "bool" }, { "name": "executed", "type": "bool" }], "name": "getTransactionIds", "outputs": [{ "name": "_transactionIds", "type": "uint256[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "transactionId", "type": "uint256" }], "name": "isConfirmed", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "isOwner", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "MAX_OWNER_COUNT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "owners", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "required", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "transactionCount", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "transactions", "outputs": [{ "name": "destination", "type": "address" }, { "name": "value", "type": "uint256" }, { "name": "data", "type": "bytes" }, { "name": "executed", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }];
var byteCode = "0x606060405234156200001057600080fd5b6040516200243a3803806200243a83398101604052808051820191906020018051906020019091905050600082518260328211158015620000515750818111155b80156200005f575060008114155b80156200006d575060008214155b15156200007957600080fd5b600092505b8451831015620001b4576002600086858151811015156200009b57fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161580156200012a5750600085848151811015156200010757fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1614155b15156200013657600080fd5b60016002600087868151811015156200014b57fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555082806001019350506200007e565b8460039080519060200190620001cc929190620001df565b50836004819055505050505050620002b4565b8280548282559060005260206000209081019282156200025b579160200282015b828111156200025a5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509160200191906001019062000200565b5b5090506200026a91906200026e565b5090565b620002b191905b80821115620002ad57600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555060010162000275565b5090565b90565b61217680620002c46000396000f30060606040526004361061011d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063025e7c2714610177578063173825d9146101da57806320ea8d86146102135780632f54bf6e146102365780633411c81c1461028757806354741525146102e15780637065cb4814610325578063784547a71461035e5780638b51d13f146103995780639ace38c2146103d0578063a0e67e2b146104b1578063a8abe69a1461051b578063b5dc40c3146105b2578063b77bf6001461062a578063ba51a6df14610653578063c01a8c8414610676578063c642747414610699578063d74f8edd14610732578063dc8452cd1461075b578063e20056e614610784578063ee22610b146107dc575b6000341115610175573373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c346040518082815260200191505060405180910390a25b005b341561018257600080fd5b61019860048080359060200190919050506107ff565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101e557600080fd5b610211600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061083e565b005b341561021e57600080fd5b6102346004808035906020019091905050610ada565b005b341561024157600080fd5b61026d600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610c82565b604051808215151515815260200191505060405180910390f35b341561029257600080fd5b6102c7600480803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610ca2565b604051808215151515815260200191505060405180910390f35b34156102ec57600080fd5b61030f600480803515159060200190919080351515906020019091905050610cd1565b6040518082815260200191505060405180910390f35b341561033057600080fd5b61035c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610d63565b005b341561036957600080fd5b61037f6004808035906020019091905050610f65565b604051808215151515815260200191505060405180910390f35b34156103a457600080fd5b6103ba600480803590602001909190505061104b565b6040518082815260200191505060405180910390f35b34156103db57600080fd5b6103f16004808035906020019091905050611117565b604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200183151515158152602001828103825284818151815260200191508051906020019080838360005b83811015610473578082015181840152602081019050610458565b50505050905090810190601f1680156104a05780820380516001836020036101000a031916815260200191505b509550505050505060405180910390f35b34156104bc57600080fd5b6104c461120c565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156105075780820151818401526020810190506104ec565b505050509050019250505060405180910390f35b341561052657600080fd5b61055b6004808035906020019091908035906020019091908035151590602001909190803515159060200190919050506112a0565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561059e578082015181840152602081019050610583565b505050509050019250505060405180910390f35b34156105bd57600080fd5b6105d360048080359060200190919050506113fc565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156106165780820151818401526020810190506105fb565b505050509050019250505060405180910390f35b341561063557600080fd5b61063d611626565b6040518082815260200191505060405180910390f35b341561065e57600080fd5b610674600480803590602001909190505061162c565b005b341561068157600080fd5b61069760048080359060200190919050506116e6565b005b34156106a457600080fd5b61071c600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506118c3565b6040518082815260200191505060405180910390f35b341561073d57600080fd5b6107456118e2565b6040518082815260200191505060405180910390f35b341561076657600080fd5b61076e6118e7565b6040518082815260200191505060405180910390f35b341561078f57600080fd5b6107da600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506118ed565b005b34156107e757600080fd5b6107fd6004808035906020019091905050611c04565b005b60038181548110151561080e57fe5b90600052602060002090016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60003073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561087a57600080fd5b81600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615156108d357600080fd5b6000600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600091505b600160038054905003821015610a5b578273ffffffffffffffffffffffffffffffffffffffff1660038381548110151561096657fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610a4e5760036001600380549050038154811015156109c557fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600383815481101515610a0057fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610a5b565b8180600101925050610930565b6001600381818054905003915081610a739190612025565b506003805490506004541115610a9257610a9160038054905061162c565b5b8273ffffffffffffffffffffffffffffffffffffffff167f8001553a916ef2f495d26a907cc54d96ed840d7bda71e73194bf5a9df7a76b9060405160405180910390a2505050565b33600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515610b3357600080fd5b81336001600083815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515610b9e57600080fd5b8360008082815260200190815260200160002060030160009054906101000a900460ff16151515610bce57600080fd5b60006001600087815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550843373ffffffffffffffffffffffffffffffffffffffff167ff6a317157440607f36269043eb55f1287a5a19ba2216afeab88cd46cbcfb88e960405160405180910390a35050505050565b60026020528060005260406000206000915054906101000a900460ff1681565b60016020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b600080600090505b600554811015610d5c57838015610d10575060008082815260200190815260200160002060030160009054906101000a900460ff16155b80610d435750828015610d42575060008082815260200190815260200160002060030160009054906101000a900460ff165b5b15610d4f576001820191505b8080600101915050610cd9565b5092915050565b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610d9d57600080fd5b80600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151515610df757600080fd5b8160008173ffffffffffffffffffffffffffffffffffffffff1614151515610e1e57600080fd5b60016003805490500160045460328211158015610e3b5750818111155b8015610e48575060008114155b8015610e55575060008214155b1515610e6057600080fd5b6001600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060038054806001018281610ecc9190612051565b9160005260206000209001600087909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550508473ffffffffffffffffffffffffffffffffffffffff167ff39e6e1eb0edcf53c221607b54b00cd28f3196fed0a24994dc308b8f611b682d60405160405180910390a25050505050565b6000806000809150600090505b60038054905081101561104357600160008581526020019081526020016000206000600383815481101515610fa357fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615611023576001820191505b6004548214156110365760019250611044565b8080600101915050610f72565b5b5050919050565b600080600090505b6003805490508110156111115760016000848152602001908152602001600020600060038381548110151561108457fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615611104576001820191505b8080600101915050611053565b50919050565b60006020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690806001015490806002018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156111ef5780601f106111c4576101008083540402835291602001916111ef565b820191906000526020600020905b8154815290600101906020018083116111d257829003601f168201915b5050505050908060030160009054906101000a900460ff16905084565b61121461207d565b600380548060200260200160405190810160405280929190818152602001828054801561129657602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001906001019080831161124c575b5050505050905090565b6112a8612091565b6112b0612091565b6000806005546040518059106112c35750595b9080825280602002602001820160405250925060009150600090505b60055481101561137f57858015611316575060008082815260200190815260200160002060030160009054906101000a900460ff16155b806113495750848015611348575060008082815260200190815260200160002060030160009054906101000a900460ff165b5b156113725780838381518110151561135d57fe5b90602001906020020181815250506001820191505b80806001019150506112df565b87870360405180591061138f5750595b908082528060200260200182016040525093508790505b868110156113f15782818151811015156113bc57fe5b90602001906020020151848983038151811015156113d657fe5b906020019060200201818152505080806001019150506113a6565b505050949350505050565b61140461207d565b61140c61207d565b6000806003805490506040518059106114225750595b9080825280602002602001820160405250925060009150600090505b6003805490508110156115815760016000868152602001908152602001600020600060038381548110151561146f57fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615611574576003818154811015156114f757fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16838381518110151561153157fe5b9060200190602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250506001820191505b808060010191505061143e565b8160405180591061158f5750595b90808252806020026020018201604052509350600090505b8181101561161e5782818151811015156115bd57fe5b9060200190602002015184828151811015156115d557fe5b9060200190602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505080806001019150506115a7565b505050919050565b60055481565b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561166657600080fd5b600380549050816032821115801561167e5750818111155b801561168b575060008114155b8015611698575060008214155b15156116a357600080fd5b826004819055507fa3f1ee9126a074d9326c682f561767f710e927faa811f7a99829d49dc421797a836040518082815260200191505060405180910390a1505050565b33600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151561173f57600080fd5b81600080600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415151561179b57600080fd5b82336001600083815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615151561180757600080fd5b600180600087815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550843373ffffffffffffffffffffffffffffffffffffffff167f4a504a94899432a9846e1aa406dceb1bcfd538bb839071d49d1e5e23f5be30ef60405160405180910390a36118bc85611c04565b5050505050565b60006118d0848484611eac565b90506118db816116e6565b9392505050565b603281565b60045481565b60003073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561192957600080fd5b82600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151561198257600080fd5b82600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515156119dc57600080fd5b600092505b600380549050831015611ac7578473ffffffffffffffffffffffffffffffffffffffff16600384815481101515611a1457fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611aba5783600384815481101515611a6c57fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611ac7565b82806001019350506119e1565b6000600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508473ffffffffffffffffffffffffffffffffffffffff167f8001553a916ef2f495d26a907cc54d96ed840d7bda71e73194bf5a9df7a76b9060405160405180910390a28373ffffffffffffffffffffffffffffffffffffffff167ff39e6e1eb0edcf53c221607b54b00cd28f3196fed0a24994dc308b8f611b682d60405160405180910390a25050505050565b600033600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515611c5f57600080fd5b82336001600083815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515611cca57600080fd5b8460008082815260200190815260200160002060030160009054906101000a900460ff16151515611cfa57600080fd5b611d0386610f65565b15611ea457600080878152602001908152602001600020945060018560030160006101000a81548160ff021916908315150217905550611e218560000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16866001015487600201805460018160011615610100020316600290049050886002018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611e175780601f10611dec57610100808354040283529160200191611e17565b820191906000526020600020905b815481529060010190602001808311611dfa57829003601f168201915b5050505050611ffe565b15611e5857857f33e13ecb54c3076d8e8bb8c2881800a4d972b792045ffae98fdf46df365fed7560405160405180910390a2611ea3565b857f526441bb6c1aba3c9a4a6ca1d6545da9c2333c8c48343ef398eb858d72b7923660405160405180910390a260008560030160006101000a81548160ff0219169083151502179055505b5b505050505050565b60008360008173ffffffffffffffffffffffffffffffffffffffff1614151515611ed557600080fd5b60055491506080604051908101604052808673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020016000151581525060008084815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550602082015181600101556040820151816002019080519060200190611f949291906120a5565b5060608201518160030160006101000a81548160ff0219169083151502179055509050506001600560008282540192505081905550817fc0ba8fe4b176c1714197d43b9cc6bcf797a4a7461c5fe8d0ef6e184ae7601e5160405160405180910390a2509392505050565b6000806040516020840160008287838a8c6187965a03f19250505080915050949350505050565b81548183558181151161204c5781836000526020600020918201910161204b9190612125565b5b505050565b815481835581811511612078578183600052602060002091820191016120779190612125565b5b505050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106120e657805160ff1916838001178555612114565b82800160010185558215612114579182015b828111156121135782518255916020019190600101906120f8565b5b5090506121219190612125565b5090565b61214791905b8082111561214357600081600090555060010161212b565b5090565b905600a165627a7a723058206dee1985556d2ff49718ff2d04163412f07236f7d1deaca9c8167c8656137e5e0029";

var MyContract = web3.eth.contract(abiJSON);

function createContract() {

    var myAddress = web3.eth.accounts[0];
    var ca1 = document.getElementById('ca1').value;
    var ca2 = document.getElementById('ca2').value;

    if (!ca1 || !ca2) {
       alert("please enter at least 2 addresses");
       return;
    }
    else{
      if(!isAddress(ca1)){
        alert('address one is invalid format');
      }

      if(!isAddress(ca2)){
        alert('address second is invalid format');
      }
    }

    if (!myAddress) {
        alert("unlock metamask!");
        return;
    }

    var owners = [myAddress, ca1, ca2];

    MyContract.new(owners, 2, {
        from: myAddress,
        data: byteCode,
        gas: 4000000
    }, function (err, myContract) {
        console.log(err, myContract)
        if (!err) {
            // NOTE: The callback will fire twice!
            // Once the contract has the transactionHash property set and once its deployed on an address.
            // e.g. check tx hash on the first call (transaction send)
            if (!myContract.address) {
                console.log(myContract.transactionHash) // The hash of the transaction, which deploys the contract
                // check address on the second call (contract deployed)
            } else {
                document.getElementById('address').innerHTML = myContract.address;
                console.log(myContract.address) // the contract address
            }
        }
    });
}

function submitTransaction() {
      var ca = document.getElementById('st_ca').value;
      var da = document.getElementById('st_da').value;
      var atm = document.getElementById('st_atm').value;

      var myAddress = web3.eth.accounts[0];

      if (!ca || !da || !atm) {
         alert("please enter valid data!");
         return;
      }
      if (!myAddress) {
         alert("unlock the metamask");
         return;
      }

      document.getElementById('cst_info').innerHTML = "please wait for tx to confirm:";

      var _tokenContract = web3.eth.contract(abiJSON).at(ca);

      _tokenContract.submitTransaction.sendTransaction(da, atm, "", {
          from: myAddress,
          gas: 400000
        }, function (err, result) {
          if (err != null) {
            alert(err);
	    } else {
	    var myEvent = _tokenContract.Submission({},{fromBlock: 0, toBlock: 'latest'});
	    myEvent.watch(function(error, result) {
		if (err) {
                   return;
                }
                var id = result.args.transactionId.c[0];
	        console.log(error, result);
	        document.getElementById('cst_info').innerHTML = "last submitted tx id is (it might take sometime to get latest submitted tx id please wait): " + id;
	    });
	    }
       });
}

function confirmTransaction() {
      var ct_ca = document.getElementById('ct_ca').value;
      var myAddress = web3.eth.accounts[0];
      var tID = document.getElementById('tID').value;

      if (!ct_ca || !tID) {
         alert("please enter valid data!");
         return;
      }
      if (!myAddress) {
         alert("unlock the metamask");
         return;
      }

      var _tokenContract = web3.eth.contract(abiJSON).at(ct_ca);
      _tokenContract.confirmTransaction.sendTransaction(tID, {
          from: myAddress,
          gas: 400000
        }, function (err, result) {
          if (err != null) {
            alert(err);
          } else {
          }
      });
}
// var accounts = new Accounts('ws://localhost:8546');
function createAccount() {
   var myAddress = web3.eth.accounts;
   console.log(myAddress,"-------")
   var defaultAccount = web3.eth.defaultAccount;
console.log(defaultAccount);
var balance = web3.eth.getBalance("0x4b7e34384b6656ccbb8a99594a599cf4dbe6350d",function(error, result){
    if(!error)
        console.log(JSON.stringify(result));
    else
        console.error(error);
});
var balance = web3.eth.accounts.sign("0x4b7e34384b6656ccbb8a99594a599cf4dbe6350d",function(error, result){
    if(!error)
        console.log(JSON.stringify(result));
    else
        console.error(error);
});
}
var isAddress = function (address) {
    if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
        // check if it has the basic requirements of an address
        return false;
    } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
        // If it's all small caps or all all caps, return true
        return true;
    } else {
        // Otherwise check each case
        return isChecksumAddress(address);
    }
};

/**
 * Checks if the given string is a checksummed address
 *
 * @method isChecksumAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
*/
var isChecksumAddress = function (address) {
    // Check each case
    address = address.replace('0x','');
    var addressHash = sha3(address.toLowerCase());
    for (var i = 0; i < 40; i++ ) {
        // the nth letter should be uppercase if the nth digit of casemap is 1
        if ((parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i]) || (parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i])) {
            return false;
        }
    }
    return true;
};
