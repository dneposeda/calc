'use strict';

let calcrur = function (number){

    let nums = Math.ceil(number);
    let secretNum = 2;
    nums += secretNum;
    nums *= secretNum;
    nums++;

    return nums;     
}

module.exports = calcrur;