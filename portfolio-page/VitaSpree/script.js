// Shows uploaded image on the 'create post' page
var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src=URL.createObjectURL(event.target.files[0]);
}; 


//logs keystrokes input into the textbox and pushes them to notesInput
var notesInput = [];
$("textarea.form-control").keypress(function(event) {
    notesInput.push(event.key);
});

$("input#exampleColorInput1").on("click", function() {
    $("this").change("value")
});