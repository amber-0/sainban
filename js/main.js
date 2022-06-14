'use strict'; 
{
  const btn = document.getElementById('btn');

  btn.addEventListener('touchstart', () => {
    const results =['外池', '荻野','河内','井出','谷地畝'];
    btn.textContent = results[Math.floor(Math.random() * results.length)];

    // switch(n){
    //   case 0:
    //     btn.textContent ='勝訴';
    //     break;
    //   case 1:
    //     btn.textContent ='敗訴';
    //     break;
    //   case 2:
    //     btn.textContent ='あさひ';
    //     break;
    // }


  });









}
