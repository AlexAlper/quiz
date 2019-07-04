let answer = document.querySelectorAll('.well');
    ans = document.getElementById('one');




answer.forEach(function(item) {
    item.addEventListener('click', function(e){
        let target = e.target;
        target.style.background = '#008000';
        console.log(target);
    })
}) 
