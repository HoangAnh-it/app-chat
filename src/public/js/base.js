const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const userId = $('.client-id')?.dataset.user_id;
console.log('Your id =>', userId);

const btnBack = $('.btn-back');
if (btnBack) {
    btnBack.onclick = function () {
        history.back();
    }    
}
