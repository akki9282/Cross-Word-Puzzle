var count=0;
function validAnswer(){
    
const inputs_1 = document.querySelectorAll('.across1');
// Listen for the "input" event on each input element

inputs_1.forEach(input => {
  
  input.addEventListener('input', () => {
    // Get the values of all inputs in the row
    const values = Array.from(inputs_1).map(input => input.value);
    
    // Compare the values to the correct answer (in this case, "hello")
    const correctAnswer =  ['d', 'r', 'i', 'v', 'e' ,'r', 's'];
    const isCorrect = JSON.stringify(values).toLowerCase() === JSON.stringify(correctAnswer).toLowerCase();

    // If all the values match the correct answer, display a message to the user
    if(inputs_1.length===7){
    if (isCorrect) {
    //   alert('Congratulations, you solved the row!');
      for (var i = 0; i < inputs_1.length; i++) {
        // inputs[i].style.backgroundColor="#777";
        inputs_1[i].style.color="green";
        inputs_1[i].disabled = true;
        
  }
  count++;
  console.log(count);
  if(count===20)
                    {
                        starttime(false);
                        alert("congratulation you done it...");
                    }
    }
  }
  
  });
});

const inputs_2 = document.querySelectorAll('.across2');
inputs_2.forEach(input => {
  
    input.addEventListener('input', () => {
      // Get the values of all inputs in the row
      const values = Array.from(inputs_2).map(input => input.value);
      
      // Compare the values to the correct answer (in this case, "hello")
      const correctAnswer =  ['e','a','r'];
      const isCorrect = JSON.stringify(values).toLowerCase() === JSON.stringify(correctAnswer).toLowerCase();
  
      // If all the values match the correct answer, display a message to the user
      if(inputs_2.length===3){
      if (isCorrect) {
      //   alert('Congratulations, you solved the row!');
        for (var i = 0; i < inputs_2.length; i++) {
          // inputs[i].style.backgroundColor="#777";
          inputs_2[i].style.color="green";
          inputs_2[i].disabled = true;
          
    }
    count++;
    console.log(count);
    if(count===20)
    {
        starttime(false);
        alert("congratulation you done it...");
    }
      }
    }
    
    });
  });

  const inputs_3 = document.querySelectorAll('.across3');
inputs_3.forEach(input => {
  
    input.addEventListener('input', () => {
      // Get the values of all inputs in the row
      const values = Array.from(inputs_3).map(input => input.value);
      
      // Compare the values to the correct answer (in this case, "hello")
      const correctAnswer =  ['s','t','e','w','s'];
      const isCorrect = JSON.stringify(values).toLowerCase() === JSON.stringify(correctAnswer).toLowerCase();
  
      // If all the values match the correct answer, display a message to the user
      if(inputs_3.length===5){
      if (isCorrect) {
      //   alert('Congratulations, you solved the row!');
        for (var i = 0; i < inputs_3.length; i++) {
          // inputs[i].style.backgroundColor="#777";
          inputs_3[i].style.color="green";
          inputs_3[i].disabled = true;
          
    }
    count++;
    if(count===20)
    {
        starttime(false);
        alert("congratulation you done it...");
    }
      }
  }
    
    });
  });

  const inputs_4 = document.querySelectorAll('.across4');
  inputs_4.forEach(input => {
    
      input.addEventListener('input', () => {
        // Get the values of all inputs in the row
        const values = Array.from(inputs_4).map(input => input.value);
        
        // Compare the values to the correct answer (in this case, "hello")
        const correctAnswer =  ['t','o','e'];
        const isCorrect = JSON.stringify(values).toLowerCase() === JSON.stringify(correctAnswer).toLowerCase();
    
        // If all the values match the correct answer, display a message to the user
        if(inputs_4.length===3){
        if (isCorrect) {
        //   alert('Congratulations, you solved the row!');
          for (var i = 0; i < inputs_4.length; i++) {
            // inputs[i].style.backgroundColor="#777";
            inputs_4[i].style.color="green";
            inputs_4[i].disabled = true;
            
      }
      count++;
      if(count===20)
      {
          starttime(false);
          alert("congratulation you done it...");
      }
        }
    }
      
      });
    });

    const inputs_5 = document.querySelectorAll('.across5');
  inputs_5.forEach(input => {
    
      input.addEventListener('input', () => {
        // Get the values of all inputs in the row
        const values = Array.from(inputs_5).map(input => input.value);
        
        // Compare the values to the correct answer (in this case, "hello")
        const correctAnswer =  ['t','i','t','l','e'];
        const isCorrect = JSON.stringify(values).toLowerCase() === JSON.stringify(correctAnswer).toLowerCase();
    
        // If all the values match the correct answer, display a message to the user
        if(inputs_5.length===5){
        if (isCorrect) {
        //   alert('Congratulations, you solved the row!');
          for (var i = 0; i < inputs_5.length; i++) {
            // inputs[i].style.backgroundColor="#777";
            inputs_5[i].style.color="green";
            inputs_5[i].disabled = true;
            
      }
      count++;
      if(count===20)
      {
          starttime(false);
          alert("congratulation you done it...");
      }
        }
    }
      
      });
    });

    const inputs_6 = document.querySelectorAll('.across6');
  inputs_6.forEach(input => {
    
      input.addEventListener('input', () => {
        // Get the values of all inputs in the row
        const values = Array.from(inputs_6).map(input => input.value);
        
        // Compare the values to the correct answer (in this case, "hello")
        const correctAnswer =  ['a','n'];
        const isCorrect = JSON.stringify(values).toLowerCase() === JSON.stringify(correctAnswer).toLowerCase();
    
        // If all the values match the correct answer, display a message to the user
        if(inputs_6.length===2){
        if (isCorrect) {
        //   alert('Congratulations, you solved the row!');
          for (var i = 0; i < inputs_6.length; i++) {
            // inputs[i].style.backgroundColor="#777";
            inputs_6[i].style.color="green";
            inputs_6[i].disabled = true;
            
      }
      count++;
      if(count===20)
      {
          starttime(false);
          alert("congratulation you done it...");
      }
        }
    }
      
      });
    });

    const inputs_7 = document.querySelectorAll('.across7');
  inputs_7.forEach(input => {
    
      input.addEventListener('input', () => {
        // Get the values of all inputs in the row
        const values = Array.from(inputs_7).map(input => input.value);
        
        // Compare the values to the correct answer (in this case, "hello")
        const correctAnswer =  ['m','e'];
        const isCorrect = JSON.stringify(values).toLowerCase() === JSON.stringify(correctAnswer).toLowerCase();
    
        // If all the values match the correct answer, display a message to the user
        if(inputs_7.length===2){
        if (isCorrect) {
        //   alert('Congratulations, you solved the row!');
          for (var i = 0; i < inputs_7.length; i++) {
            // inputs[i].style.backgroundColor="#777";
            inputs_7[i].style.color="green";
            inputs_7[i].disabled = true;
            
      }
      count++;
      if(count===20)
      {
          starttime(false);
          alert("congratulation you done it...");
      }
        }
    }
      
      });
    });

    const inputs_8 = document.querySelectorAll('.across8');
  inputs_8.forEach(input => {
    
      input.addEventListener('input', () => {
        // Get the values of all inputs in the row
        const values = Array.from(inputs_8).map(input => input.value);
        
        // Compare the values to the correct answer (in this case, "hello")
        const correctAnswer =  ['m','e','w'];
        const isCorrect = JSON.stringify(values).toLowerCase() === JSON.stringify(correctAnswer).toLowerCase();
    
        // If all the values match the correct answer, display a message to the user
        if(inputs_8.length===3){
        if (isCorrect) {
        //   alert('Congratulations, you solved the row!');
          for (var i = 0; i < inputs_8.length; i++) {
            // inputs[i].style.backgroundColor="#777";
            inputs_8[i].style.color="green";
            inputs_8[i].disabled = true;
            
      }
      count++;
      if(count===20)
      {
          starttime(false);
          alert("congratulation you done it...");
      }
        }
    }
      
      });
    });

    const inputs_9 = document.querySelectorAll('.across9');
  inputs_9.forEach(input => {
    
      input.addEventListener('input', () => {
        // Get the values of all inputs in the row
        const values = Array.from(inputs_9).map(input => input.value);
        
        // Compare the values to the correct answer (in this case, "hello")
        const correctAnswer =  ['c','a','r','s'];
        const isCorrect = JSON.stringify(values).toLowerCase() === JSON.stringify(correctAnswer).toLowerCase();
    
        // If all the values match the correct answer, display a message to the user
        if(inputs_9.length===4){
        if (isCorrect) {
        //   alert('Congratulations, you solved the row!');
          for (var i = 0; i < inputs_9.length; i++) {
            // inputs[i].style.backgroundColor="#777";
            inputs_9[i].style.color="green";
            inputs_9[i].disabled = true;
            
      }
      count++;
      if(count===20)
      {
          starttime(false);
          alert("congratulation you done it...");
      }
        }
    }
      
      });
    });

    const inputs_10 = document.querySelectorAll('.across10');
  inputs_10.forEach(input => {
    
      input.addEventListener('input', () => {
        // Get the values of all inputs in the row
        const values = Array.from(inputs_10).map(input => input.value);
        
        // Compare the values to the correct answer (in this case, "hello")
        const correctAnswer =  ['o','r'];
        const isCorrect = JSON.stringify(values).toLowerCase() === JSON.stringify(correctAnswer).toLowerCase();
    
        // If all the values match the correct answer, display a message to the user
        if(inputs_10.length===2){
        if (isCorrect) {
        //   alert('Congratulations, you solved the row!');
          for (var i = 0; i < inputs_10.length; i++) {
            // inputs[i].style.backgroundColor="#777";
            inputs_10[i].style.color="green";
            inputs_10[i].disabled = true;
            
      }
      count++;
      if(count===20)
      {
          starttime(false);
          alert("congratulation you done it...");
      }
        }
    }
      
      });
    });

    const inputs_11 = document.querySelectorAll('.across11');
  inputs_11.forEach(input => {
    
      input.addEventListener('input', () => {
        // Get the values of all inputs in the row
        const values = Array.from(inputs_11).map(input => input.value);
        
        // Compare the values to the correct answer (in this case, "hello")
        const correctAnswer =  ['a','t','e'];
        const isCorrect = JSON.stringify(values).toLowerCase() === JSON.stringify(correctAnswer).toLowerCase();

    
        // If all the values match the correct answer, display a message to the user
        if(inputs_11.length===3){
        if (isCorrect) {
        //   alert('Congratulations, you solved the row!');
          for (var i = 0; i < inputs_11.length; i++) {
            // inputs[i].style.backgroundColor="#777";
            inputs_11[i].style.color="green";
            inputs_11[i].disabled = true;
            
      }
      count++;
      if(count===20)
      {
          starttime(false);
          alert("congratulation you done it...");
      }
        }
    }
      
      });
    });

    // ========================================================


    const inputs_12 = document.querySelectorAll('.down1');
  inputs_12.forEach(input => {
    
      input.addEventListener('input', () => {
        // Get the values of all inputs in the row
        const values = Array.from(inputs_12).map(input => input.value);
        
        // Compare the values to the correct answer (in this case, "hello")
        const correctAnswer =  ['d','e','s','e','r','t'];
        const isCorrect = JSON.stringify(values).toLowerCase() === JSON.stringify(correctAnswer).toLowerCase();

    
        // If all the values match the correct answer, display a message to the user
        if(inputs_12.length===6){
        if (isCorrect) {
        //   alert('Congratulations, you solved the row!');
          for (var i = 0; i < inputs_12.length; i++) {
            // inputs[i].style.backgroundColor="#777";
            inputs_12[i].style.color="green";
            inputs_12[i].disabled = true;
            
      }
      count++;
      if(count===20)
      {
          starttime(false);
          alert("congratulation you done it...");
      }
        }
    }
      
      });
    });

    const inputs_13 = document.querySelectorAll('.down2');
    inputs_13.forEach(input => {
      
        input.addEventListener('input', () => {
          // Get the values of all inputs in the row
          const values = Array.from(inputs_13).map(input => input.value);
          
          // Compare the values to the correct answer (in this case, "hello")
          const correctAnswer =  ['r','a','t'];
          const isCorrect = JSON.stringify(values).toLowerCase() === JSON.stringify(correctAnswer).toLowerCase();
  
      
          // If all the values match the correct answer, display a message to the user
          if(inputs_13.length===3){
          if (isCorrect) {
          //   alert('Congratulations, you solved the row!');
            for (var i = 0; i < inputs_13.length; i++) {
              // inputs[i].style.backgroundColor="#777";
              inputs_13[i].style.color="green";
              inputs_13[i].disabled = true;
              
        }
        count++;
        if(count===20)
        {
            starttime(false);
            alert("congratulation you done it...");
        }
          }
      }
        
        });
      });

      const inputs_14 = document.querySelectorAll('.down3');
      inputs_14.forEach(input => {
        
          input.addEventListener('input', () => {
            // Get the values of all inputs in the row
            const values = Array.from(inputs_14).map(input => input.value);
            
            // Compare the values to the correct answer (in this case, "hello")
            const correctAnswer =  ['i','r','e'];
            const isCorrect = JSON.stringify(values).toLowerCase() === JSON.stringify(correctAnswer).toLowerCase();
    
        
            // If all the values match the correct answer, display a message to the user
            if(inputs_14.length===3){
            if (isCorrect) {
            //   alert('Congratulations, you solved the row!');
              for (var i = 0; i < inputs_14.length; i++) {
                // inputs[i].style.backgroundColor="#777";
                inputs_14[i].style.color="green";
                inputs_14[i].disabled = true;
                
          }
          count++;
          if(count===20)
          {
              starttime(false);
              alert("congratulation you done it...");
          }
            }
        }
          
          });
        });

        const inputs_15 = document.querySelectorAll('.down4');
        inputs_15.forEach(input => {
          
            input.addEventListener('input', () => {
              // Get the values of all inputs in the row
              const values = Array.from(inputs_15).map(input => input.value);
              
              // Compare the values to the correct answer (in this case, "hello")
              const correctAnswer =  ['s','t','r','e','w','n'];
              const isCorrect = JSON.stringify(values).toLowerCase() === JSON.stringify(correctAnswer).toLowerCase();
      
          
              // If all the values match the correct answer, display a message to the user
              if(inputs_15.length===6){
              if (isCorrect) {
              //   alert('Congratulations, you solved the row!');
                for (var i = 0; i < inputs_15.length; i++) {
                  // inputs[i].style.backgroundColor="#777";
                  inputs_15[i].style.color="green";
                  inputs_15[i].disabled = true;
                  
            }
            count++;
            if(count===20)
            {
                starttime(false);
                alert("congratulation you done it...");
            }
              }
          }
            
            });
          });

          const inputs_16 = document.querySelectorAll('.down5');
          inputs_16.forEach(input => {
            685459
              input.addEventListener('input', () => {
                // Get the values of all inputs in the row
                const values = Array.from(inputs_16).map(input => input.value);
                
                // Compare the values to the correct answer (in this case, "hello")
                const correctAnswer =  ['s','t','r','e','a','m'];
                const isCorrect = JSON.stringify(values).toLowerCase() === JSON.stringify(correctAnswer).toLowerCase();
        
            
                // If all the values match the correct answer, display a message to the user
                if(inputs_16.length===6){
                if (isCorrect) {
                //   alert('Congratulations, you solved the row!');
                  for (var i = 0; i < inputs_16.length; i++) {
                    // inputs[i].style.backgroundColor="#777";
                    inputs_16[i].style.color="green";
                    inputs_16[i].disabled = true;
                    
              }
              count++;
              if(count===20)
              {
                  starttime(false);
                  alert("congratulation you done it...");
              }
                }
            }
              
              });
            });

            const inputs_17 = document.querySelectorAll('.down6');
            inputs_17.forEach(input => {
              
                input.addEventListener('input', () => {
                  // Get the values of all inputs in the row
                  const values = Array.from(inputs_17).map(input => input.value);
                  
                  // Compare the values to the correct answer (in this case, "hello")
                  const correctAnswer =  ['o','t','h','e','r'];
                  const isCorrect = JSON.stringify(values).toLowerCase() === JSON.stringify(correctAnswer).toLowerCase();
          
              
                  // If all the values match the correct answer, display a message to the user
                  if(inputs_17.length===5){
                  if (isCorrect) {
                  //   alert('Congratulations, you solved the row!');
                    for (var i = 0; i < inputs_17.length; i++) {
                      // inputs[i].style.backgroundColor="#777";
                      inputs_17[i].style.color="green";
                      inputs_17[i].disabled = true;
                      
                }
                count++;
                if(count===20)
                {
                    starttime(false);
                    alert("congratulation you done it...");
                }
                  }
              }
                
                });
              });


              const inputs_18 = document.querySelectorAll('.down7');
              inputs_18.forEach(input => {
                
                  input.addEventListener('input', () => {
                    // Get the values of all inputs in the row
                    const values = Array.from(inputs_18).map(input => input.value);
                    
                    // Compare the values to the correct answer (in this case, "hello")
                    const correctAnswer =  ['n','e','a','t'];
                    const isCorrect = JSON.stringify(values).toLowerCase() === JSON.stringify(correctAnswer).toLowerCase();
            
                
                    // If all the values match the correct answer, display a message to the user
                    if(inputs_18.length===4){
                    if (isCorrect) {
                    //   alert('Congratulations, you solved the row!');
                      for (var i = 0; i < inputs_18.length; i++) {
                        // inputs[i].style.backgroundColor="#777";
                        inputs_18[i].style.color="green";
                        inputs_18[i].disabled = true;
                        
                  }
                  count++;
                  if(count===20)
                  {
                      starttime(false);
                      alert("congratulation you done it...");
                  }
                    }
                }
                  
                  });
                });

                const inputs_19 = document.querySelectorAll('.down8');
                inputs_19.forEach(input => {
                  
                    input.addEventListener('input', () => {
                      // Get the values of all inputs in the row
                      const values = Array.from(inputs_19).map(input => input.value);
                      
                      // Compare the values to the correct answer (in this case, "hello")
                      const correctAnswer =  ['m','a','r'];
                      const isCorrect = JSON.stringify(values).toLowerCase() === JSON.stringify(correctAnswer).toLowerCase();
              
                  
                      // If all the values match the correct answer, display a message to the user
                      if(inputs_19.length===3){
                      if (isCorrect) {
                      //   alert('Congratulations, you solved the row!');
                        for (var i = 0; i < inputs_19.length; i++) {
                          // inputs[i].style.backgroundColor="#777";
                          inputs_19[i].style.color="green";
                          inputs_19[i].disabled = true;
                          
                    }
                    count++;
                    if(count===20)
                    {
                        starttime(false);
                        alert("congratulation you done it...");
                    } 
                      }
                  }
                    
                    });
                  });

                  const inputs_20 = document.querySelectorAll('.down9');
                  inputs_20.forEach(input => {
                    
                      input.addEventListener('input', () => {
                        // Get the values of all inputs in the row
                        const values = Array.from(inputs_20).map(input => input.value);
                        
                        // Compare the values to the correct answer (in this case, "hello")
                        const correctAnswer =  ['c','o'];
                        const isCorrect = JSON.stringify(values).toLowerCase() === JSON.stringify(correctAnswer).toLowerCase();
                
                    
                        // If all the values match the correct answer, display a message to the user
                        if(inputs_20.length===2){
                        if (isCorrect) {
                        //   alert('Congratulations, you solved the row!');
                          for (var i = 0; i < inputs_20.length; i++) {
                            // inputs[i].style.backgroundColor="#777";
                            inputs_20[i].style.color="green";
                            inputs_20[i].disabled = true;
                            
                      }
                      count++;
                      if(count===20)
                    {
                        starttime(false);
                        alert("congratulation you done it...");
                    } 
                        }
                    }
                      
                      });
                    });

                               

}