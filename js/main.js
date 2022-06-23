'use strict';
{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');

  const quizSet = [
    {q:'Q1 指差呼称で使わないのはどれか？',c:['鼻','目','耳']},
    {q:'Q2 指差呼称でエラーが減る理由の内、間違えているものはどれか？',c:['筋肉痛がなくなる','焦燥（あせり、いらいら）反応の防止','思考や判断，意識・注意集中等の認知機能が活性化']},
    {q:'Q3 指差呼称が開発されたのはどこか?',c:['日本','アメリカ','ドイツ']},
    {q:'Q4 指差呼称の効果として正しいものはどれか?',c:['何もしないときより間違えが1/6減ると言われている','これまで正式な研究データはない','特に効果はない']},
    {q:'Q5 指差呼称の取り組みで正しいのはどれか?',c:['会社から新入社員まで全員が行う','作業する人が主体となって行う','始業MTG時のみ行う']},
  ];

  let currentNum = 0;
  let isAnswered;
  let score = 0;

  function shuffle(arr){
    for(let i = arr.length -1; i>0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }

  function checkAnswer(li){
    if(isAnswered === true){
      return;
    }
    isAnswered = true;

    if(li.textContent === quizSet[currentNum].c[0]){
      li.classList.add('correct')
      score++;
    }else{
      li.classList.add('wrong')
    }
    btn.classList.remove('disabled');
  };

  function setQuiz(){
    isAnswered = false;
    question.textContent = quizSet[currentNum].q;

    while(choices.firstChild){
      choices.removeChild(choices.firstChild);
    }

    const shuffleChoices = shuffle([...quizSet[currentNum].c]);
    shuffleChoices.forEach(choice => {
      const li =document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      choices.appendChild(li);
    });

    if(currentNum === quizSet.length - 1){
      btn.textContent = 'Show Score';
    }
  }

  setQuiz();

  btn.addEventListener('click', () => {
    if(btn.classList.contains('disabled')){
      return;
    }
    btn.classList.add('disabled');

    if(currentNum === quizSet.length - 1){
      // console.log(`正解数: ${score} / ${quizSet.length}`);
      scoreLabel.textContent = `正解数: ${score} / ${quizSet.length}`
      result.classList.remove('hidden');
    }else{
      currentNum++;
      setQuiz();
    }
  });

}