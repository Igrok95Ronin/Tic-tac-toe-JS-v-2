"use strict";
window.addEventListener('DOMContentLoaded', function () {
  
    const
        BOX = document.querySelectorAll('.box__inner'),
        EXECUTIONDELAY1000 = 1000,
        EXECUTIONDELAY500 = 500;
    
    let
        player = "X",
        flag = false,
        flagDraw = false;

    //Пробегаем по всем ячейкум
    BOX.forEach(elem => {
        elem.addEventListener('click', clickOnACell)
    })

    
    //Основная функция дейсвия по клику
    function clickOnACell(e) {
        if(e.target.innerHTML != ''){
            e.preventDefault()
        } else {
            players(e)
        }
        victoryConditions()
        setTimeout(draw(), EXECUTIONDELAY1000)
    }


    //Выбор игрока
    function players(e) {
        if(e.target.innerHTML === ''){
            e.target.innerHTML = player
        }
        if(flag == false){
            player = "O"
            flag = true
        } else {
            player = "X"
            flag = false
        }

    }

    //Выигрышные комбинации
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    //Условия победы
    function victoryConditions() {
        for( let i = 0; i < winningCombinations.length; i++) {
            let wc = winningCombinations[i]

            if(
                BOX[wc[0]].innerHTML == BOX[wc[1]].innerHTML &&
                BOX[wc[1]].innerHTML == BOX[wc[2]].innerHTML &&
                BOX[wc[0]].innerHTML != ''
            ) {
                if(flag != false) {
                    flagDraw = true
                    setTimeout(() =>{
                        alert('Выграли X');
                    },EXECUTIONDELAY500)
                    removeClick()
                } else {
                    flagDraw = true
                    setTimeout(() => {
                        alert('Выграли O')
                    }, EXECUTIONDELAY500)
                    removeClick()
                }
                resetAfterVictory()
            }
        }
    }

    //Удаляем клик
    function removeClick() {
        BOX.forEach(elem => {
            elem.removeEventListener('click', clickOnACell)
        })
    } 
    
    //Добавить клик
    function addClick() {
        BOX.forEach(elem => {
            elem.addEventListener('click', clickOnACell)
        })
    }

    //Сброс после победы
    function resetAfterVictory() {
        setTimeout(() => {
            BOX.forEach(elem => {
                elem.textContent = ""
            })

            addClick()
            player = 'X'
            flag = false
            flagDraw = false;
        }, EXECUTIONDELAY1000)
    }

    //Ничья
    function draw() {
        if (
            BOX[0].innerHTML != '' && BOX[1].innerHTML != '' &&
            BOX[2].innerHTML != '' && BOX[3].innerHTML != '' &&
            BOX[4].innerHTML != '' && BOX[5].innerHTML != '' &&
            BOX[6].innerHTML != '' && BOX[7].innerHTML != '' &&
            BOX[8].innerHTML != '' && flagDraw == false
        ) {
            setTimeout(() => {
                alert('Ничья')
            }, EXECUTIONDELAY1000)
            resetAfterVictory()
        }
    }

});
//# sourceMappingURL=app.js.map
