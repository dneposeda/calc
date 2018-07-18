'use strict';


function menuCalc(id){

    let doc = document,
        elem = doc.querySelector(id);

    let menuCalcBtn = () => {
    
        let menuCalcBtn = elem.querySelector('.hamburger__line');
        menuCalcBtn.classList.toggle('hamburger__line--active');

        let menuCalcBtnMenu = elem.querySelector('.theme');
        menuCalcBtnMenu.classList.toggle('theme--active');

    };
    
    /* События на клик, отображения меню калькулятора */
    this.init = () => {
        let hamburgerBtn = elem.querySelector('.hamburger');
        hamburgerBtn.addEventListener('click', menuCalcBtn);
    };
}

export default menuCalc;