(function(){
    var countS = 10;
    $("#session").html(countS);
    var countB = 5;
    $("#break").html(countB);
    var countLama;
    var posLama;
    var count;
    var clock = $(".timer").FlipClock(0, {
      countdown: true,
      clockFace: 'MinuteCounter',
      autoStart: false,
      language: 'pt-br',
      callbacks: {
        interval: function(){
          if (clock.getTime() == 0){
            if (pos == "session"){
              clock.setTime(countB*60);
              clock.start();
            }
          }        
        }
      }
    })  
    //SESSION
    $("#sessInc").on("click", function(){
      if ($("#session").html() > 0){
        countS = parseInt($("#session").html());
        countS+=1;
        $("#session").html(countS);
        //clock.setTime(countS*60);
      }
    });
    $("#sessDec").on("click", function(){
      if ($("#session").html() > 1){
        countS = parseInt($("#session").html());
        countS-=1;
        $("#session").html(countS);
        //clock.setTime(countS*60);
      }
    });
    //BREAK
    $("#breakInc").on("click", function(){
      if ($("#break").html() > 0){
        countB = parseInt($("#break").html());
        countB+=1;
        $("#break").html(countB);
      }    
    });
    $("#breakDec").on("click", function(){
      if ($("#break").html() > 1){
        countB = parseInt($("#break").html());
        countB-=1;
        $("#break").html(countB);
      }
    });  
    $("#start").on("click", function(){
      if (count != countS || clock.getTime()==0){
        clock.setTime(countS*60);
      }
      count = countS;    
      clock.start();    
    });
    $("#stop").on("click", function(){
      clock.stop();
      countLama = clock.getTime();
    });
    $("#clear").on("click", function(){
      clock.stop();
      clock.setTime(0);
    });
  })();