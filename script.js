(function () {
    var names=["Rehman" , "John" , "Jen", "Jason" ,"Paul" , "Frank" , "Larry",
    "Paula", "Laura", "Jim"]; 
    //console.log(names[0].toLowerCase());
    //console.log(names[4].charAt()); give first index character
    
    for(var i=0; i<names.length; i++){
        var fisrtLetter = names[i].charAt();
       // if(names[i].charAt()==='j' || names[i].charAt()==='J'){
        if(fisrtLetter==='J' || fisrtLetter==='j') {
            byeSpeaker.speak(names[i]);
        }
        else {
            helloSpeaker.speak(names[i]);
        }
    }
})();