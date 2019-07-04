
let list = [
    {1: 'Первый человек в космосе?', 2: 4, 3: 'Армстронг', 4: 'Громов', 5: 'Гагарин'},
    {1: 'Лучший язык программирования?', 2: 2, 3: 'Js', 4: 'С#', 5: 'PHP'}
];


let ans = document.querySelector('.answer');
    question = document.querySelector('.question');
    nextBtn = document.querySelector('.next');
    count = 0;
    counter = 0;
    nextQuest = true;
    trueAnswer = 0;
    nextBtn.style.display = 'none';

constructorQuestions();

function constructorQuestions(){
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

answer.forEach(function(item) {
    item.addEventListener('click', function(e){
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
    
     nextQuest = true;
     nextBtn.style.display = '';
       

        }
    })
}) 

 nextBtn.addEventListener('click', function(){
    count++;
    counter = 0;
    answer.forEach(function(item) {
        ans.removeChild(item);
    })


    constructorQuestions();
    answer = document.querySelectorAll('.well');
    console.log(answer);
 });




