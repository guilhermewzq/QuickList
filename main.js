let itens = []

function addItem() {
    const itemName = document.querySelector("#item").value 

    if (itemName === "") {
        alert("Digite um item valido!")
        return
    }

    const item = {
        name: itemName,
        checked: false
    }

    itens.push(item)

    document.querySelector("#item").value = ""

    showItensList()
}

function showItensList(){
    const sectionList = document.querySelector(".list")

    sectionList.innerHTML= ""

    itens.sort((a, b) => Number(a.checked) - Number(b.checked));

    itens.map((item, index) => {
         sectionList.innerHTML += `<div class="item">
                <div>
                    <input type="checkbox" name="list" id="item-${index}" ${item.checked === true ? "checked" : ""}>
                    <div class="custom-checkbox" onclick="checkItem('${item.name}')">
                        <img src="./assets/checked.svg" alt="checked">
                    </div>
                    <label for="item-${index}" onclick="checkItem('${item.name}')">${item.name}</label>
                </div>
                <button onclick="removeItem ('${item.name}')">
                    <img src="./assets/trash-icon.svg" alt="trash-icon">
                </button>
            </div>`
    })

     localStorage.setItem("itens", JSON.stringify(itens))

}
    function checkItem(itemName) {
        const item = itens.find((item) => item.name === itemName)
        item.checked = !item.checked
        showItensList()
    }

function removeItem(itemName) {
   const itemIndex = itens.findIndex((item) => item.name === itemName);
   const divWarning = document.querySelector(".warning")

   divWarning.classList.remove("hide-warning")

   setTimeout(() =>{
    divWarning.classList.add("hide-warning")
   }, 4000)

   if (itemIndex !== -1){
       itens.splice(itemIndex, 1)
   }

   showItensList()
}

function addHideWarningClass() {
     document.querySelector(".warning").classList.add("hide-warning")
}


function verifyLocalStorageItens(){
    const localStorageItens = localStorage.getItem("itens")

    if (localStorageItens){
       itens = JSON.parse(localStorageItens)
       showItensList()
    }
}

verifyLocalStorageItens()