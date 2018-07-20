'use strict';

export default class MenuCalc {
    
    constructor(id){
        this.elem = document.querySelector(id);
    }

    init(){

        // Иницилизация события на клик, меню калькулятора
        let hamburgerBtn = this.elem.querySelector('.hamburger');
        hamburgerBtn.addEventListener('click', this.changeMenuBtn.bind(this));
    }
    
    changeMenuBtn(){

        // Смена стилей иконки меню "гамбургера" (смена: линий <-> крестик)
        let menuCalcBtn = this.elem.querySelector('.hamburger__line');
        menuCalcBtn.classList.toggle('hamburger__line--active');

        // Смена стилей скрытого меню, выдвижение
        let menuCalcBtnMenu = this.elem.querySelector('.theme');
        menuCalcBtnMenu.classList.toggle('theme--active');
    }
}
