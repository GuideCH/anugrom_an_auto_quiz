
const question_bar = document.getElementById("question");
const submitbtn = document.getElementById("submit");
const answer = document.getElementById("answer");
const submit_surrender = document.getElementById("submit_surrender");

var an;
var a1;
var n;
var d;


function get_question(){
  let scale = 100 ;
  let random_minus_scale = Math.round(Math.random() * 50);

  let question ;
  a1 = (Math.round(Math.random() * scale) + (1))
  n = (Math.round(Math.random() * scale) + (1))
  d = (Math.round(Math.random() * (scale - random_minus_scale)) + (1))
  an = (a1 + ((n-1)*d))
  question = String('ลำดับที่ ' + n.toString() +' ของอนุกรมเลขคณิต ที่มี a1 = ' + a1.toString() + ' และ d = ' + d.toString() )
  return [question,a1,n,d,an]
};

function give_me_question_and_answer(){
  question_bar.innerHTML = String(get_question()[0])
};


window.addEventListener('load', give_me_question_and_answer);

submitbtn.addEventListener('click',submit);
submit_surrender.addEventListener('click',surrender);

function submit(){
  if(answer.value == an){
    correct()
  }
  else {
    not_correct()
  }
};

function correct(){
  alert('ถูกต้อง')
  give_me_question_and_answer()

};

function not_correct(){
  alert('ไม่ถูกต้อง')
}

function surrender(){
  alert('คำตอบคือ:'+' '+ an + ' มึงแม่งกากว่ะ')
  give_me_question_and_answer()
}
