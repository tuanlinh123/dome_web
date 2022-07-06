/*var $ = document.getElementsByClassName('tablinks');
var $$ = document.getElementsByClassName('tab-pane');
function showT(id){
    for(var i=0; i<$$.length;i++){
        $$[i].style.diplay = 'none';
    }
    var content = document.getElementById(id);
    content.style.display = 'block';
}
for(var i=0; i<$.length;i++){
    $[i].addEventListener("click", funtion(){
        var id = this.textContent;

    })
}*/
var $ = document.getElementsByClassName('tablinks');
    var $$ = document.getElementsByClassName('tab-pane');
    function showContent(id){
        for (var i = 0; i < $$.length; i++) {
            $$[i].style.display = 'none';
        }
        var content = document.getElementById(id);
        content.style.display = 'block';
    }
    for (var i = 0; i < $.length; i++) {
        $[i].addEventListener("click", function(){
            var id = this.textContent;
            for (var i = 0; i < $.length; i++) {
                $[i].classList.remove("active");
            }
            this.className += " active";
            showContent(id);
        });
    }
    showContent('1a');