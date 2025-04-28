const checkButton = document.getElementById("checkButton");
const nameInput = document.getElementById("nameInput") 
const result = document.getElementById("result")

checkButton.addEventListener("click", function(){
    const name = nameInput.value;
    if(name === "양수회"){
        result.innerText = "안녕, 수회야";
    } else if(name === "정재헌"){
        result.innerText = "내 이름";
    } else{
        result.innerText = "누구세요?";
    }
});