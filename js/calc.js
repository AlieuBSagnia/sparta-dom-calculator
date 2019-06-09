var sum = "";

var display = document.getElementById("screen");

var button = document.getElementsByClassName("buttonNum")[0];

var symbol = document.getElementsByClassName("operator")[0];

var equals = document.querySelectorAll(".equals")[0];

var clear = document.querySelectorAll(".buttonClear")[0];

symbol.addEventListener("click", symbolClick);
button.addEventListener("click", buttonClick);

function buttonClick(){ 
    
var mybuttons = document.querySelectorAll(".buttonNum")
for(var i = 0; i < mybuttons.length; i++){
    var button = mybuttons[i];

    button.addEventListener("click", function(event){
        event.stopImmediatePropagation();
        sum += this.innerHTML;
        display.innerHTML = sum;

    });
}   
};

function symbolClick(){   
    var mysymbols = document.querySelectorAll(".operator")
    for(var i = 0; i < mysymbols.length; i++){
        var symbol = mysymbols[i];

        symbol.addEventListener("click", function(event){
            event.stopImmediatePropagation();
            sum += this.innerHTML;
            display.innerHTML = sum;
        });
    };

};

equals.addEventListener("click", function(event){
    var result = "Ans = "  + eval(sum);
    sum = "";
    display.innerHTML = result;
});

clear.addEventListener("click", function(event){
    // var cleared = document.location.reload(false);
    display.textContent = 0;
    // display.mybuttons = 0
    clear.textContent = 'CE';      
});

clear.addEventListener("dblclick", function(event){
    var cleared = document.location.reload(false);
    display.innerHTML = cleared;
});

buttonClick();
symbolClick();


