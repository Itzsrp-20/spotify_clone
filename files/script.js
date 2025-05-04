var card_list=$(".card");
var current_num;
var audio;
var c=0;
var timer=0;
var realtime=0;
$(".save").addClass("hidden");
$(".control").hide();
$(".cardnum").hide();
$(".card").click(function(){
    $(".control").slideDown();
    (this.querySelector(".cardnum").textContent);
    fetchNumber(this.querySelector(".cardnum").textContent);
    this.querySelector(".song").textContent;
    if(c>0){
        pause();
    }
    c++;
    var addr=(card_list[current_num-1].querySelector(".song").textContent);
    audio = new Audio(addr);
    audio.play();
    glow();
    var tim=(time_convertion(Math.floor(card_list[current_num-1].querySelector(".time").duration)))
    $(".play").hide();
    $(".pause").show();
    display((card_list[current_num-1].querySelector(".info_name").textContent),(card_list[current_num-1].querySelector(".info_artist").textContent),tim,Math.floor(card_list[current_num-1].querySelector(".time").duration));
})
$(".pause").click(function(){
    pause();
    $(".pause").hide();
    $(".play").show();
})
$(".play").click(function(){
    play();
    $(".pause").show();
    $(".play").hide();
})
document.querySelector(".next").addEventListener("click",function(){
    pause();
    increament(current_num);
    if(current_num>card_list.length){
        display("No More Songs in Queue","","")
    }else{
        $(".play").hide();
        $(".pause").show();
        var addr=(card_list[current_num-1].querySelector(".song").textContent);
        var tim=(time_convertion(Math.floor(card_list[current_num-1].querySelector(".time").duration)))
        audio = new Audio(addr);
        audio.play();
        display((card_list[current_num-1].querySelector(".info_name").textContent),(card_list[current_num-1].querySelector(".info_artist").textContent),tim)
    }
    
})
document.querySelector(".previous").addEventListener("click",function(){
    pause();
    $(".play").hide();
    $(".pause").show();
    decreament(current_num);
    var tim=(time_convertion(Math.floor(card_list[current_num-1].querySelector(".time").duration)))
    var addr=(card_list[current_num-1].querySelector(".song").textContent);
    audio = new Audio(addr);
    audio.play();
    display((card_list[current_num-1].querySelector(".info_name").textContent),(card_list[current_num-1].querySelector(".info_artist").textContent),tim)
})

function fetchNumber(num){
    current_num=Number(num);
}
function increament(){
    current_num++;
}
function decreament(){
    current_num--;
}
function play(){
    audio.play();
}

function pause(){
    audio.pause();
}
function time_convertion(timer){
    var sec=timer%60;
    var min=Math.floor(timer/60);
    return (min+":"+sec);
}
function display(a,b,c,d){
    $(".bottom-song-name").text(a);
    $(".bottom-artist-name").text(b);
    $(".timer").text(c);
    // var i=0;
    // console.log(i);
    // for(var a=0;a<10;){
    //    console.log(a);
    //    setTimeout(function(){a++;
    //     return a;
    //    },1000);
    // }
}
function glow(){
    card_list[current_num-1].classList.add("shine");
    setTimeout(function(){
        card_list[current_num-1].classList.remove("shine");
    },100)
}


$(".card").mouseenter(function(){
    (this).querySelector(".save").classList.remove("hidden");
})
$(".card").mouseleave(function(){
    (this).querySelector(".save").classList.add("hidden");
})
$(".save").click(function(){
    console.log(this.textContent)
    likedSongs();
})

function likedSongs(){
    $(".liked-songs-list").html("<div>Add</div>");
}