function startGame(){
document.getElementById("main").style.visibility="visible";
document.getElementById("btn3").style.visibility="hidden";

starttime(true);
}

function locationreload()
{

    location.reload();
//     document.getElementById("main").style.visibility="visible";
// document.getElementById("btn3").style.visibility="hidden";
// starttime(true);
}
function checkAnswer()
{   var ans=["d","r","i","v","e","r","s","e","a","r","t","s","t","e","w","s","r","e","t","o","e","r","o","r","w","t","i","t","l","e","n","h","a","n","m","e","m","e","w","c","a","r","s","a","o","r","a","t","e"];

    var inp=[];
    alert(inp);
    var size=0;
    for(var i=1;i<=49;i++)
    {
        var str=i;
        var temp=document.getElementById(str).value;
      console.log(temp);
        if(temp=="")
        {
            alert("first fill")
            break;
        }
        size++;
        temp=temp.toLowerCase();
        inp.push(temp);
    }

if(size==49){
    for(var i=0;i<49;i++)
    {var str=(i+1);
        if (ans[i]==inp[i]) 
        {
            
            document.getElementById(str).style.color="green";
        }
        else{
            document.getElementById(str).style.color="red";
        }
   }
   var inputs = document.getElementsByTagName('input');
var test=false;
   for (var i = 0; i < inputs.length; i++) {
     inputs[i].disabled = true;
     test=true;
   } 
   if (test) {
    console.log("blocked");
    
   }      
   starttime(false);
}


}
// const inputs = document.querySelectorAll('.crossword-cell');
  
//     // Listen for the "input" event on each input element
//     inputs.forEach(input => {
//       input.addEventListener('input', () => {
//         // Get the values of all inputs in the row
//         const values = Array.from(inputs).map(input => input.value);
        
//         // Compare the values to the correct answer (in this case, "hello")
//         const correctAnswer = "drivers";
//         const isCorrect = JSON.stringify(values) === JSON.stringify(correctAnswer);
  
//         // If all the values match the correct answer, display a message to the user
//         if (isCorrect) {
//         //   alert('Congratulations, you solved the row!');
//           for (var i = 0; i < inputs.length; i++) {
//             // inputs[i].style.backgroundColor="#777";
//             inputs[i].style.color="green";
// }
//         }

      
//       });
//     });

function visibleAnswer()
{
    document.getElementById("tab1").style.visibility="hidden";
    document.getElementById("tab2").style.visibility="visible";
    starttime(false);
    document.getElementById("btn").style.visibility="hidden";
  
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
      input.disabled = true;
    });
    
}