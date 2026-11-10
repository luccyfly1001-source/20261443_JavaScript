var itemList = [];

var addBtn = document.querySelector("#add");  // '추가' 버튼
addBtn.addEventListener("click", addList); // addBtn을 클릭하면 addList 함수 실행

function addList() {
    var item = document.querySelector("#item").value; // 텍스트 필드 내용 가져옴
    if (item != null && item.trim() !== "") {
        itemList.push(item);     // itemList 배열의 끝에 item 변수 값 추가
        document.querySelector("#item").value = "";  // 텍스트 필드 내용 지움
        document.querySelector("#item").focus(); // 텍스트 필드에 focus() 메서드 적용
    }
    showList();   // // 목록을 표시하는 showList() 함수 실행
}

function showList() {
    var list = "<ul>";

    for (var i = itemList.length - 1; i >= 0; i--) {
        list += "<li>" + itemList[i] + "<span class='close' id=" + i + ">XX</span></li>";
    }

    list += "</ul>";

    document.querySelector('#itemList').innerHTML = list;

    var remove = document.querySelectorAll(".close");
    for (var i = 0; i < remove.length; i++) {
        remove[i].addEventListener("click", removeList);
    }
}

function removeList() {
    var id = this.getAttribute("id");
    var deletedItem = itemList[id];

    itemList.splice(id, 1);
    alert(deletedItem + " 가 삭제되었습니다.");

    showList();
}
