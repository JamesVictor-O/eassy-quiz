const questions =[
    {
        ques: "which javascript method is use to remove the last element of an array?",
        ans: "Pop()"
    },
    {
        ques: "an error that comes up while a program is running is called?",
        ans: "Runtime error"
    },
    {
        ques: "Does javascript support automatic type conversation?",
        ans: "yes"
    },
    {
        ques: "which year was apple-1 created",
        ans: "1976"
    },
    {
        ques: "Which is faster between javascript and an ASP script?",
        ans: "javascript"
    },
    {
        ques: "a function visible only within a function where it is define is called?",
        ans: "Local variable"
    },
    {
      ques: "provides more details on an element like Iid,type,value",
      ans: "Attribute"
  }
];
 let Question_space=document.querySelector(".Quiz-questions");
 let Input=document.querySelector(".input-space");
 let btn=document.querySelector(".btn");
 let main=document.querySelector(".main")
 let boDy=document.getElementsByTagName("body")[0]
 let backBtn=document.querySelector(".back")
 let Quiz_num=0;
 let correct=0;
 let wrong=0;
 questions.sort(()=>{
    return 0.5 - Math.random()
}) 
  function load(){
    let Question=questions[Quiz_num];
    Question_space.innerHTML=Question.ques
  }
  function getValue(){
    let input_value=Input.value.toUpperCase();
    return input_value;
  }
//   back button
   backBtn.addEventListener("click",()=>{
    load()
     Quiz_num--;
     if(Quiz_num<0){
        Quiz_num=0;
        backBtn.style.display="none";
     }
   })
//   next button
  btn.addEventListener("click",()=>{
    
    inputValue=getValue()
    if(Input.value===""){
        Input.style.border="2px solid red";
    }
    if(Input.value !== ""){
        if(inputValue === questions[Quiz_num].ans.toUpperCase()){
          correct++;
        }else{
          wrong++;
        }
        Quiz_num++;
        Input.style.border="2px solid green";
        console.log(correct)
    }

     if(Quiz_num < questions.length){
       load()
    }else{
       let Div=document.createElement("div");
         main.classList.add("hide");
         Div.classList.add("sco")
         Div.innerHTML=`Final Scores = ${correct}`;
         boDy.appendChild(Div)
     }
     if(Quiz_num >=1){
      backBtn.style.display="block";
   }
    Input.value=""

 })
  load()
