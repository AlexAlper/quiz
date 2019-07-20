
let list = [
    {1: 'Первый человек в космосе?', 2: 5,  3: 'Армстронг', 4: 'Громов', 5: 'Гагарин'},
    {1: 'Самое быстрое млекопитающее?', 2:4, 3: 'Вилорог', 4: 'Гепард', 5: 'Ягуар'},
    {1: 'Лучший язык программирования?', 2: 3, 3: 'Js', 4: 'С#', 5: 'PHP'},
    {1: 'Четные числа', 2: 34, 3: '2', 4:'6', 5:'7', 6:'9' }
    
];



let ans = document.querySelector('.answer');
    question = document.querySelector('.question');
    nextBtn = document.querySelector('.next');
    endBtn = document.querySelector('.end');
    parentQuestion = document.getElementById('question');
    progresbar = document.getElementById('progressbar');
    startBlock = document.querySelector('.start-quiz');
    startBtn = document.querySelector('.start-btn');
    checkbox = document.querySelector('.form-check-input');
    countAnswer = 0;
    tmpTrueAnswer = 0;
    arr = [];
    touchElem = 0;

    step = 100/list.length;
    count = 0;
    counter = 0;
    nextQuest = false;
    trueAnswer = 0;
    nextBtn.style.display = 'none';
    endBtn.style.display = 'none';
    checkboxValue = false;
    


startBtn.addEventListener('click', function(){
    checkboxValue = checkbox.checked;
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
      countAnswer = list[count][2].toString().length;
       arr = list[count][2].toString().split('');
}
   

let answer = document.querySelectorAll('.well');
answerOnQuestion();


function answerOnQuestion(){

answer.forEach(function(item) {

    item.addEventListener('click', function(e){
        let target = e.target;
        console.log(touchElem + ' ' + target.id);
        if(!nextQuest && touchElem != target.id){
            if(checkboxValue){
        for(let elem = 0; elem < arr.length; elem++){
            if(target.id == arr[elem]-1){ 
                target.style.background = '#008000';
                tmpTrueAnswer++;
                touchElem = arr[elem]-1;
                break;
            } else {
                target.style.background = '#ff0000';
                console.log(target);  
            }
        }
       
        //console.log(countAnswer);
        countAnswer--;
    if(countAnswer == 0){
        nextQuest = true;
        touchElem = 0;
        if(tmpTrueAnswer == list[count][2].toString().length){
            trueAnswer++;
            tmpTrueAnswer = 0;
        }
        if(count == list.length-1){
            endBtn.style.display = '';
        } else {
            nextBtn.style.display = '';
        }
    }

        } else {
            
        for(let elem = 0; elem < arr.length; elem++){
            if(target.id == arr[elem]-1){ 
                target.style.background = '#0000ff';
                tmpTrueAnswer++;
                touchElem = arr[elem]-1;
                break;
            } else {
                target.style.background = '#0000ff';
                console.log(target);  
            }
        }
       
        //console.log(countAnswer);
        countAnswer--;
    if(countAnswer == 0){
        nextQuest = true;
        touchElem = 0;
        if(tmpTrueAnswer == list[count][2].toString().length){
            trueAnswer++;
            tmpTrueAnswer = 0;
        }
        if(count == list.length-1){
            endBtn.style.display = '';
        } else {
            nextBtn.style.display = '';
        }
    }
         
        }}
    });
});
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

 




