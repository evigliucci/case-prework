// self executing function here
(function() {
    // your page initialization code here
    // the DOM will be available here
    var box = document.getElementById("box");

    //grow
    document.getElementById("button1").addEventListener('click', function(){
        box.style.height = '500px';
        box.style.width = '500px';
    });

    //blue
    document.getElementById("button2").addEventListener('click', function(){
        box.style.background = 'blue';
    });

    //fade
    document.getElementById("button3").addEventListener('click', function(){
        box.style.opacity = '50%';
    });

    //reset
    document.getElementById("button4").addEventListener('click', function(){
        box.style.height = '150px';
        box.style.width = '150px';
        box.style.background = 'orange';
        box.style.opacity = '100';
    });
 })();