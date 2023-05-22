const addElement = document.querySelector('.add');
const container = document.querySelector('.container');

const addNodeElement = () => {

    let findEle = localStorage.getItem("notes");
    if (findEle == null)
        eleObj = [];
    else
        eleObj = JSON.parse(findEle);

    let len = eleObj.length;

    const note = document.createElement(`div${len}`);
    console.log(`div${len}`);
    note.classList.add('note');
    const addHTML = `
            <div class="change">
                <button class="del" id = d${len} onclick = "deleteChange(this.id)"><i class="fas fa-trash-alt"></i></button>
                <button class="edit" id = ${len} onclick = "editChange(this.id)"><i class="fas fa-edit"></i></button>
            </div>
            <br>
            <div class="display${len} visible disp"></div>
            <textarea class="text${len}"></textarea>`;

    note.insertAdjacentHTML('afterbegin', addHTML);
    container.appendChild(note);
    eleObj.push(note);
    localStorage.setItem("notes", JSON.stringify(eleObj));
};

function editChange(index) {

    let displayText = document.querySelector(`.display${index}`);
    let textArea = document.querySelector(`.text${index}`);
    displayText.classList.toggle('visible');
    textArea.classList.toggle('visible');
    displayText.innerHTML = textArea.value;

    let findEle = localStorage.getItem("notes");
    if (findEle == null)
        eleObj = [];
    else
        eleObj = JSON.parse(findEle);

    var temp = [];
    temp.push(displayText.innerHTML);
    console.log(temp);
    eleObj.splice(index, 1, temp);
    localStorage.setItem("notes", JSON.stringify(eleObj));
}

function deleteChange(index) {
 
    index = index.toString(index);
    index = index.substring(1);
    // console.log(index);
    // let deleteArea = document.querySelector(`div${index}`);
    // console.log(`${index}`);
    // deleteArea.remove();

    let findEle = localStorage.getItem("notes");
    if (findEle == null)
        eleObj = [];
    else
        eleObj = JSON.parse(findEle);

    eleObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(eleObj));
    startPrint();
}

function startPrint() {

    container.innerHTML = "";
    let findEle = localStorage.getItem("notes");
    if (findEle == null)
        eleObj = [];
    else
        eleObj = JSON.parse(findEle);

    eleObj2 = [];
    eleObj.forEach((ele, index) => {

        if (ele.length != undefined) {

            const note = document.createElement(`div${index}`);
            note.classList.add('note');
            const addHTML = `
            <div class="change">
            <button class="del" id = d${index} onclick = "deleteChange(this.id)"><i class="fas fa-trash-alt"></i></button>
            <button class="edit" id = ${index} onclick = "editChange(this.id)"><i class="fas fa-edit"></i></button>
            </div>
            <br>
            <div class="display${index}"> ${ele}</div>
            <textarea class="text${index} visible">${ele}</textarea>`;

            // const text = document.querySelector(`.text${index}`);
            note.insertAdjacentHTML('afterbegin', addHTML);
            container.appendChild(note);
            console.log(note);
            // eleObj2.push(note);
        }
    });
    // localStorage.setItem("notes", JSON.stringify(eleObj2));
}

let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value;
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('note');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("div")[1].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

startPrint();

addElement.addEventListener('click', () => {
    return addNodeElement();
});