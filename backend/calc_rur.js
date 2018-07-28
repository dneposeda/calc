'use strict';

let calcrur = function (number){

    let delay = Math.ceil(Math.random() * 3000);

    if (delay > 2000) {

        let nums = Math.ceil(number);
        let secretNum = 2;
        nums += secretNum;
        nums *= secretNum;
        nums++;
    
        return nums; 

    } else {
        
        let nums = 'error';
        return nums;

    }
      
}

module.exports = calcrur;