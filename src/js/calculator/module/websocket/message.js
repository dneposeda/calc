'use strict';

export default class webMessage {

  constructor(id){
    this.socket = new WebSocket("ws://localhost:3001");
    this.elem = document.querySelector(id);
    this.display = this.elem.querySelector('.display');
  }

  init(){

    /**
     * По событию клик на ₽, запускается функция
     * отправки рассчета в backend
     */
    let btnRur = this.elem.querySelector('.rur');
    btnRur.addEventListener('click', this.calcRur.bind(this));

    // Принимаем ответ от backend
    this.socket.onmessage = event => {
      this.showMessage(event.data); 
    };
  }

  calcRur(){

    // Отправляю введеную цифру на рассчет в backend
    this.socket.send(this.display.value);
  }

  showMessage(data){

    
    if(data != 'error'){

      // Принятый результат вывожу на дисплей
      this.display.value = data;
    } else {
      this.display.value = 'error';
    }
    
  }
}

