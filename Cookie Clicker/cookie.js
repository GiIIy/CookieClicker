var cookies = 0;
    var amp = 1;
    var upgMin = 50;

    
    function clicker() {
    
      cookies = cookies + amp

      if(cookies != 1){
        document.getElementById("demo").innerHTML = cookies + " cookies";

      }else{
        document.getElementById("demo").innerHTML = cookies + " cookie";

      }

    }


    function upgrade() {
        if(cookies >= upgMin){
            amp = amp + 1
            cookies = cookies - upgMin;
            upgMin = upgMin * amp

            if(cookies != 1){
                document.getElementById("demo").innerHTML = cookies + " cookies";
                document.getElementById("multi").innerHTML = "Multiplier: " + amp + "x";

            }else{
                document.getElementById("demo").innerHTML = cookies + " cookie";

            }         
            

        }else{
            var next = upgMin - cookies;
            alert("NEED " + next + " More Cookies")
        }

        document.getElementById("howLong").innerHTML = "Next Upgrade at " + upgMin + " Cookies"
        
    }