let count = 0;
const answers = [
    "Нет",
    "Подумай еще раз",
    "Уверенна....?",
    "ПОДУМАЙ",
    "АЛООООООООО",
    "ЖОНСЧИНААААА",
    "чИтО зА дЭлАААА?",
    "ты вАпсЧе нИ тудА жмАть",
    "Я ЩАС ОБИЖУСЬ",
    "не ну я ж был хорошим алкашем ДАВАЙ ВСТАВАААААААЙ",
    "Штраф 100500 цемиков",
    "ЗА ТАКОЕ КОЛИЧЕСТВО НЕПРАВИЛЬНЫХ ОТВЕТОВ БАН БУДИТ"
]
function updateMessage() {
    const message = document.getElementById('message');
    message.innerHTML = 'Спасибо, что стала моей валентинкой, моя сладкая❤️❤️❤️';
    
    const image = document.getElementById('image');
    image.src = 'kittykiss-little-kitty.gif';
    const buttons = document.getElementById('buttons');
    buttons.style.display = 'none';
}

function moveButton() {
    const button = document.getElementById('noButton');
    button.style.position = 'relative';
    button.style.left = `calc(${(Math.random() * 50).toFixed(0)}vw - ${(Math.random() * 50).toFixed(0)}vw)`;
    button.style.top = `calc(${(Math.random() * 25).toFixed(0)}vh - ${(Math.random() * 50).toFixed(0)}vh)`;
    button.innerHTML = answers[count];
    count++;

    if(count >= answers.length)
        count = 0;

}

