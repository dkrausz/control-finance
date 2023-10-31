let category = 0;
const modal = document.querySelector("#modal__new-value");
function modalCloseButtons() {
    const closeButton = document.querySelector(".modal__close-button");
    const cancelButton = document.querySelector(".modal__cancel-button");
    

    closeButton.addEventListener("click", () => {
        modal.close();
    });

    cancelButton.addEventListener("click", () => {
        modal.close();
    });
}

function readCategory() {
    const inBtn = document.querySelector("#modal__income-button");
    const outBtn = document.querySelector("#modal__outcome-button");

    inBtn.addEventListener("click", () => {
        category = 0;       
        inBtn.classList.add("category__button-selected");
        outBtn.classList.remove("category__button-selected");
    });

    outBtn.addEventListener("click", () => {
        category = 1;       
        outBtn.classList.add("category__button-selected");
        inBtn.classList.remove("category__button-selected");
    });

}


function addValue() {
    const confirmButton = document.querySelector(".modal__confirm-button");
    const input = document.querySelector("#input__value");
    confirmButton.addEventListener("click", () => {
        const newItem = {
            id: biggerID(insertedValues)+1,
            value: parseFloat(input.value),
            categoryID: category,
        }
        insertedValues.push(newItem);
        modal.close();
        input.value='';
        renderCards(insertedValues);
    });
}

function biggerID(list) {
    let biggerNumeber = list[0].id;
    list.forEach((item) => {
        if (item.id > biggerNumeber) {
            biggerNumeber = item.id;
        }
    })
    return biggerNumeber;
}






readCategory();
addValue();
modalCloseButtons();