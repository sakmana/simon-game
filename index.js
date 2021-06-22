var r = [];
  var d = 0;
  var level = 0

$(document).keypress( function(){
switch (level) {
  case 0:
      d = 0;  
      randomSelect();
      buttonClick();
      
      level=level +1
      $("#level-title").text("Level "+level)
    
    break; 
    
    default:
      break;
    }})

$(".btn").click(function(){
  if (d<r.length){
    beforeClick(r[d]);
        
                if($(this).hasClass(buttonColor)===true){
                    buttonClick();
                    d = d + 1
                    console.log(level);
                    if(d>=r.length){
                    nextLevel();
                    d = 0
                    }
                    
                    
                }else{
                  $(this).addClass("game-over");
                  $("body").addClass("game-over")
                  var wrongAudio = new Audio ("sounds/wrong.mp3");
                  wrongAudio.play();
                  setTimeout(function(){
                    $("body, div").removeClass("game-over");
                    $("#level-title").text("Game Over, Press Any Key to Restart")
                    level = 0
                    r = [];
                    
                }, 250);
                   }   

                
           
         
  } 

})



function t(){
setTimeout(function(){
    $("div").removeClass("pressed");
    
}, 500);
}

function randomSelect(){
    var a = Math.floor(Math.random() * 4);
        r.push(a);
        beforeClick(a);
}


function beforeClick(key){
  switch (key) {
      case 0:
        buttonColor = "green"
      break;
  
      case 1:
        buttonColor = "red"
      break;
  
      case 2:
        buttonColor = "yellow"
      break;
  
      case 3:
        buttonColor = "blue"  
      break;
  
      default:
          break;
  
  }
  t();
  audioFile="sounds/"+buttonColor+".mp3";
  classSelect="."+buttonColor;
  check = buttonColor;
  checkS = "."+buttonColor;
  }

 

  function buttonClick(){

    $(classSelect).addClass("pressed");
    var buttonAudio = new Audio (audioFile);
    buttonAudio.play();
  }
  
  function nextLevel(){
    setTimeout(function(){
             
      
        level=level +1;
        buttonColor ="none";
          $("#level-title").text("Level "+level)
          randomSelect();
          buttonClick();
          
      
    },1200);  
  }