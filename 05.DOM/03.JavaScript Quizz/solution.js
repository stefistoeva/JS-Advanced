function solve() {
  let correctAnswers = 0;
  let answers = ['onclick', "JSON.stringify()", "A programming API for HTML and XML documents"];
  let tempIndex = 0;

  Array.from(document
  .querySelectorAll('.answer-text'))
  .map(x => x.addEventListener('click', function nextQuestion(e) {
      
    if(answers.includes(e.target.innerHTML)) {
        correctAnswers++;
    }
      
    let currentSection = document.querySelectorAll('section')[tempIndex];
    currentSection.style.display = 'none';
  
    let nextSection = document.querySelectorAll('section')[tempIndex + 1];
    if(nextSection !== undefined) {
      nextSection.style.display = 'block';
      tempIndex++;
    } else {
      showResult(correctAnswers);
    }
  }));

  function showResult(correctAnswers) {
    document.querySelector("#results").style.display = 'block';

    if(correctAnswers === 3) {
      document.querySelector("#results > li > h1").innerHTML = "You are recognized as top JavaScript fan!";
    } else {
      document.querySelector("#results > li > h1").innerHTML = `You have ${correctAnswers} right answers`;
    }
  }
}
