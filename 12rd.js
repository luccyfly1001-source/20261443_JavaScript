const box = document.getElementById("box");
const result = document.getElementById("result");

let count = 0;

box.addEventListener("click", function() {
    count++;

    if (count === 1) {
        result.innerHTML = "마우스 클릭되었습니다!";
    }
});

box.addEventListener("dblclick", function() {
    result.innerHTML = "마우스 더블클릭되었습니다!";
});

box.addEventListener("mouseover", function() {
    result.innerHTML = "마우스 오버되었습니다!";
});

box.addEventListener("mouseout", function() {
    result.innerHTML = "마우스 아웃되었습니다!";
});