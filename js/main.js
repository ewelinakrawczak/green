(function(){
    
    var headerH1=$('h1');
    var headerH2=$('h2');
    var arrow=$('.arrow');
    var nav=$('nav>a');
    
   $.stellar();
   
   $(document).ready(function(){
       console.log('ready');
       headerH1.css({
           '-webkit-animation':'header .75s linear .75s forwards',
            'animation':'header .75s linear .75s forwards'
       });
       headerH2.css({
           '-webkit-animation':'header .75s linear .75s forwards',
            'animation':'header .75s linear .75s forwards' 
       });
       arrow.css({
           '-webkit-animation':'header .75s linear 2s forwards',
            'animation':'header .75s linear 2s forwards' 
       });
       nav.css({
           '-webkit-animation':'anav .75s linear 1.75s forwards',
            'animation':'anav .75s linear 1.75s forwards' 
       });
   });
   
}());
 
            
            
            
