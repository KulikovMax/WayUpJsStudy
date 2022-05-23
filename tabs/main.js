/* 
    Задание 2:

    Доделать tabs с урока

    1. Переписать код tabs с урока по видео
    2. Внутри третьей вкладки добавить функционал табов. Количество вкладок: 2. Контент внутри - на ваш вкус 

*/

const tabs = document.getElementById('tabs');
const content = document.querySelectorAll('.content');
const inner_tabs = document.getElementById('inner-tabs')
const inner_content = document.querySelectorAll('.inner-content') 

const changeClass = el => {
    for(let i = 0; i < tabs.children.length; i++){
        tabs.children[i].classList.remove('active')
    }
    el.classList.add('active');
}

const changeInnerTabClass = el => {
    for(let i = 0; i < inner_tabs.children.length; i++){
        inner_tabs.children[i].classList.remove('active')
    }
    el.classList.add('active');
}

tabs.addEventListener('click', e => {
    console.log(e.target)
    const curTab = e.target.dataset.btn;
    changeClass(e.target);
    for(let i = 0; i < content.length; i++){
        content[i].classList.remove('active');
        if(content[i].dataset.content === curTab) {
            content[i].classList.add('active');
        };
    };
})

inner_tabs.addEventListener('click', e => {
    curTab = e.target.dataset.inbtn
    console.log(curTab);
    console.log(inner_content)
    changeInnerTabClass(e.target);
    for(let i = 0; i < inner_content.length; i++){
        inner_content[i].classList.remove('active');
        console.log(inner_content[i])
        if(inner_content[i].dataset.incontent === curTab) {
            inner_content[i].classList.add('active');
        };
    };
})