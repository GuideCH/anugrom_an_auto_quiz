
const question_bar = document.getElementById("question");
const submitbtn = document.getElementById("submit");
const answer = document.getElementById("answer");
const submit_surrender = document.getElementById("submit_surrender");

var an;
var a1;
var n;
var d;
var r;
var q_answer;

function test(){
  return ('test')
}


function question_handler(){
  var random = Math.round(Math.random()*10);
  var to_return;
  //random question limit
  //|| random< 3
  while(random > 4) {
    random = Math.round(Math.random()*10);
  }

  if(random == 6){
    to_return = (test())

  } else if(random == 5){
    to_return = (test())

  } else if(random == 4 ){
    to_return = (get_question_two_sum_plus_an())

  } else if(random == 3){
    to_return = (get_question_two_an())

  } else if(random == 2){
    to_return = (get_question_one_sum_plus_an())

  } else if(random == 1){
    to_return = (get_question_one_sum_plus_d())

  } else if(random == 0){
    to_return = (get_question_one_an())
  }
  return to_return
};


function get_question_one_an(){
  let scale = 100 ;
  let random_minus_scale = Math.round(Math.random() * 50);

  let question ;


  a1 = (Math.round(Math.random() * scale) + (1))
  n = (Math.round(Math.random() * scale) + (1))
  d = (Math.round(Math.random() * (scale - random_minus_scale)) + (1))
  q_answer = (a1 + ((n-1)*d))
  question = String('ลำดับที่ ' + n.toString() +' ของอนุกรมเลขคณิต ที่มี a1 = ' + a1.toString() + ' และ d = ' + d.toString() )
  return [question,a1,n,d,q_answer]
};


function get_question_one_sum_plus_d(){
  let scale = 50 ;
  let random_minus_scale = Math.round(Math.random() * 51);

  let question ;


  a1 = (Math.round(Math.random() * scale) + (1))
  n = (Math.round(Math.random() * scale) + (1))
  d = (Math.round(Math.random() * (scale - random_minus_scale)) + (1))

  q_answer = (n/2)*((2*a1) + ((n-1) * d))

  question = `ผลบวก ${n} พจน์แรก ของลำดับ = ${a1},${a1+(((2-1)*d))},${a1+(((3-1)*d))}....., an`
  return [question,a1,n,d,q_answer]
};

function get_question_one_sum_plus_an(){
  let scale = 50 ;
  let random_minus_scale = Math.round(Math.random() * 49);

  let question ;


  a1 = (Math.round(Math.random() * scale) + (1))
  n = (Math.round(Math.random() * scale) + (1))
  d = (Math.round(Math.random() * (scale - random_minus_scale)) + (1))

  q_answer = (n/2)*((2*a1) + ((n-1) * d))

  question = `ผลบวก ${n} พจน์แรก เมื่อ an = ${a1+((n-1)*d)} และ a1 = ${a1}`
  return [question,a1,n,d,q_answer]
};

function get_question_two_an(){
  let a1_scale = 5
  let n_scale = 5
  let r_scale = 2.5
  let question


  a1 = (Math.round(Math.random() * a1_scale) + (1))
  n = (Math.round(Math.random() * n_scale) + (5))
  r = (Math.round(Math.random() * r_scale) + (2))
  q_answer = (a1*(Math.pow(r,(n-1))))
  question = String(`ลำดับที่ ${n.toString()} ของอนุกรมเลขเรขาคณิต ที่มี a1 =  ${a1.toString()} และ r = ${r.toString()}`)
  return [question,a1,n,r,q_answer]
};

function get_question_two_sum_plus_an(){
  let a1_scale = 5
  let n_scale = 3
  let r_scale = 2.5
  let question


  a1 = (Math.round(Math.random() * a1_scale) + (1))
  n = (Math.round(Math.random() * n_scale) + (5))
  r = (Math.round(Math.random() * r_scale) + (2))

  q_answer = ((a1 * (Math.pow(r,(n-1))) ) / r-1 )

  question = String(`ผลรวม ${n.toString()} พจน์แรก ของอนุกรมเลขเรขาคณิต ที่มี a1 =  ${a1.toString()} และ r = ${r.toString()}`)

  return [question,a1,n,r,q_answer]
};


function loadQuestion_to_html(){
  question_bar.innerHTML = String(question_handler()[0])
};



window.addEventListener('load', loadQuestion_to_html);

submitbtn.addEventListener('click',submit);
submit_surrender.addEventListener('click',surrender);

function submit(){
  if(answer.value == q_answer){
    correct()
  }
  else {
    not_correct()
  }
};

function correct(){
  alert('ถูกต้อง')
  loadQuestion_to_html()

};

function not_correct(){
  alert('ไม่ถูกต้อง')
}

function surrender(){
  alert('คำตอบคือ:'+' '+ q_answer + ' มึงแม่งกากว่ะ')
  loadQuestion_to_html()
}
