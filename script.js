"use";
var _buttons = document.getElementsByTagName("button"),
    _lengthh = _buttons.length,
    _output = document.getElementById("output");

for(var i=0; i<_lengthh; i++){
    _buttons[i].onclick = calculate;
}

function calculate() {
    var _value = this.innerHTML;
    if (_value == "=") {
        try {
            _output.value = eval(_output.value);

        }
        catch (e){
            _output.value = "0";
        }
        return;
    }
    _output.value += _value;
}