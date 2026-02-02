const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const message = document.getElementById('message');
const message2 = document.getElementById('message2');
const question = document.getElementById('question');
const cat1 = document.getElementById('cat1');
const cat2 = document.getElementById('cat2');
const cat3 = document.getElementById('cat3');
const cat4 = document.getElementById('cat4');

// Moving No Button
noBtn.addEventListener('mouseover', () => {
    // Calculate random coordinates
    const x = Math.floor(Math.random() * (window.innerWidth - 100));
    const y = Math.floor(Math.random() * (window.innerHeight - 50));

    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';

    message.classList.remove('hidden');
    cat2.classList.remove('hidden');
    cat1.classList.add('hidden');

});

// Hover Yes Button - SHOW cat4
yesBtn.addEventListener('mouseover', () => {
    cat4.classList.remove('hidden');
    message2.classList.remove('hidden');
});

// Leave Yes Button - HIDE cat4
yesBtn.addEventListener('mouseout', () => {
    cat4.classList.add('hidden');
    message2.classList.add('hidden');
});

// Yes Button
document.getElementById('yesBtn').addEventListener('click', () => {
    question.innerText = "Happy Valentine's Day Babeyyy! 💕";
    cat1.classList.add('hidden');
    cat2.classList.add('hidden');
    message.classList.add('hidden');
    noBtn.classList.add('hidden');
    yesBtn.classList.add('hidden')
    cat3.classList.remove('hidden');
    cat4.classList.add('hidden')



    
});