var player = "X";
const wins = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]; //win states
var c1, c2, c3;
var turns = 9;
var started = false;
$(".square").css("cursor", "pointer");

$(document).click(function() {
    if (!started) {
        $("h2").animate({opacity:0,}, 200)
        $(".square").text(""); //removing X, O from all boxes
        $(".square").removeClass("win");
        $("h1").text("X starts");
        started = true;
    }
});

$(".square").click(function(){
    if(started && $(this).text() == ""){
        $(this).text(player);
        for(var i = 0; i<8; i++){
            c1 = "#s" + wins[i][0];
            c2 = "#s" + wins[i][1];
            c3 = "#s" + wins[i][2];
            //checking if a win state is attained
            if($(c1).text() == player && $(c2).text() == player && $(c3).text() == player){ 
                $("h1").text(player+" WINS!");
                $(c1+","+c2+","+c3).addClass("win");
                setTimeout(restart, 100);
                return;
            }
        }
        turns --;
        if(turns == 0){
            $("h1").text("IT'S A DRAW!");
            setTimeout(restart, 100);
            return;
        }
        player = player == "X" ? "O" : "X";
        $("h1").text(player + "'s Turn");
    }  
});

function restart() {
    started = false;
    player = "X";
    turns = 9;
}
