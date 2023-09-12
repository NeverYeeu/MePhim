function updateBtn(){
    alert('Chức năng này đang cập nhật!');
}
// --------------------------------------------Slide show--------------------------
var sizeSlide = document.getElementsByClassName("movie-slide")[0].clientWidth;
var moveSlide = document.getElementsByClassName("movie-slide_wrap")[0];

var move = 0;

var maxSlide = sizeSlide * 4;
//2 la so luong slide ban muon chay
maxSlide -= sizeSlide;
function nextSlide(){
    if (move < maxSlide) move += sizeSlide;
    else move = 0;
    moveSlide.style.marginLeft = '-' + move + 'px';
}
function prevSlide(){
    if (move == 0) move = maxSlide;
    else move += sizeSlide;
    moveSlide.style.marginLeft = '-' + move + 'px';
}

setInterval(function(){
    //Cong viec can thuc hien
    nextSlide();
}, 40000);

// ----------------------------------------Infor-------------------------------
var widthSlide = document.getElementsByClassName("left-propo_contain")[0].clientWidth;
var moveSlideW = document.getElementsByClassName("left-propo_wrap")[0];
var moveW = 0;
var maxSlideW = widthSlide * 3;
    maxSlideW -= widthSlide;
function nextSlideW(){
    if (moveW < maxSlideW) moveW += widthSlide;
    else moveW = 0;
    moveSlideW.style.marginLeft = '-' + moveW + 'px';
}
function prevSlideW(){
    if (moveW == 0) moveW = maxSlideW;
    else moveW += widthSlide;
    moveSlideW.style.marginLeft = '-' + moveW + 'px';
}

setInterval(function(){
    //Cong viec can thuc hien
    nextSlideW();
}, 10000);
