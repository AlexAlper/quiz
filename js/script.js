
let list = [
    {1: 'Первый человек в космосе?', 2: 4, 3: 'Армстронг', 4: 'Громов', 5: 'Гагарин'},
    {1: 'Самое быстрое млекопитающее?', 2:3, 3: 'Вилорог', 4: 'Гепард', 5: 'Ягуар'},
    {1: 'Лучший язык программирования?', 2: 2, 3: 'Js', 4: 'С#', 5: 'PHP'}
    
];



let ans = document.querySelector('.answer');
    question = document.querySelector('.question');
    nextBtn = document.querySelector('.next');
    endBtn = document.querySelector('.end');
    parentQuestion = document.getElementById('question');
    progresbar = document.getElementById('progressbar');
    startBlock = document.querySelector('.start-quiz');
    startBtn = document.querySelector('.start-btn');

    step = 100/list.length;
    count = 0;
    counter = 0;
    nextQuest = false;
    trueAnswer = 0;
    nextBtn.style.display = 'none';
    endBtn.style.display = 'none';
    checkbox = false;


startBtn.addEventListener('click', function(){
    document.body.removeChild(startBlock);
    constructorQuestions();
   
    answer = document.querySelectorAll('.well');
    answerOnQuestion();

});

function constructorQuestions(){
    //document.body.style.background = 'url(img/' + count + '.jpg)';
    for (var key in list[count]) {

        if(counter == 0){
            question.innerHTML = list[count][key];
        }
        if(counter > 1){
            let div = document.createElement('div');
            div.classList.add('well');
            div.id = counter;
            div.innerHTML = list[count][key];
            ans.appendChild(div);
        }
     
        counter++;
      }
      nextQuest = false;
}
   

let answer = document.querySelectorAll('.well');
answerOnQuestion();


function answerOnQuestion(){

answer.forEach(function(item) {

    item.addEventListener('click', function(e){
        console.log('lol');
        let target = e.target;
        if(!nextQuest){
        if(target.id == list[count][2]){  
            target.style.background = '#008000';
            console.log(target);
            trueAnswer++;
        } else {
            target.style.background = '#ff0000';
            console.log(target);  
        }
    if(count == list.length-1){
        endBtn.style.display = '';
    } else {
        nextBtn.style.display = '';
    }
     nextQuest = true;
     
       

        }
    })
}) 
}
 nextBtn.addEventListener('click', function(){
    count++;
    counter = 0;
    answer.forEach(function(item) {
        ans.removeChild(item);
    })


    constructorQuestions();
    answer = document.querySelectorAll('.well');
    answerOnQuestion();
    nextBtn.style.display = 'none';
    nextQuest = false;
    progresbar.style.width = step*count + "%";
 });

 endBtn.addEventListener('click', function(){
    answer.forEach(function(item) {
        ans.removeChild(item);
    });

    parentQuestion.removeChild(question);

    div = document.createElement('div');
    div.classList.add('well');
    div.id = counter;
    div.innerHTML = "Вы ответили правильно на " + trueAnswer + " вопросов из " + list.length;
    ans.appendChild(div);
    endBtn.style.display = 'none';
    progresbar.style.width = step*(count+1) + "%";
 })

 




