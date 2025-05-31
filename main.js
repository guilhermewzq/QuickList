const itens = []

function addItem() {
    const itemName = document.querySelector("#item").value 

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
                    <input type="checkbox" name="list" id="item-${index}">
                    <div class="custom-checkbox">
                        <img src="./assets/checked.svg" alt="checked">
                    </div>
                    <label for="item-${index}">${item.name}</label>
                </div>
                <button>
                    <img src="./assets/trash-icon.svg" alt="trash-icon">
                </button>
            </div>`
    })
}
    function checkItem(itemName) {
        const item = itens.find((item) => item.name === itemName)
        item.checked = !item.checked
    }