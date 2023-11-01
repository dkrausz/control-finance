/* Desenvolva sua lógica aqui */

let isFiltered = 0; //0-all // 1 - entradas 2-saidas

function creatItem(item) {
    const title = document.createElement("h3");
    const divButtons = document.createElement("div");
    const category = document.createElement("span");
    const delButton = document.createElement("button");
    const card = document.createElement("li");

    title.classList.add("item__price");
    divButtons.classList.add("item__buttons");
    category.classList.add("item__category");
    delButton.classList.add("item__del-button");
    card.classList.add("item__container");

    title.innerText = `R$ ${item.value}`;
    category.innerText = valuesCategory[item.categoryID];

    divButtons.append(category, delButton);
    card.append(title, divButtons);

    delButton.addEventListener("click", () => {
        const index = insertedValues.indexOf(item);
        insertedValues.splice(index, 1);

        renderCards(insertedValues, isFiltered);
    })

    return card;
}

function renderCards(list, type) {
    const totalSum = document.querySelector("#total-amount");
    const itemList = document.querySelector(".list__itens");
    const emptyDiv = document.querySelector(".item__container--empty");

    if (list.length === 0) {       
        emptyDiv.classList.remove("hidden-class");
        totalSum.innerText=`R$ 00.00`;
        itemList.innerHTML = ' ';
        return;
    }
    
    emptyDiv.classList.add("hidden-class");
    let renderList = [];

    itemList.innerHTML = ' ';
    if (type === 0) {
        renderList = [...list];

    } else if (type === 1) {
        const Filterlist = insertedValues.filter((item) => {
            return item.categoryID === 0;
        })
        renderList = [...Filterlist];
    } else if (type === 2) {
        const Filterlist = insertedValues.filter((item) => {
            return item.categoryID === 1;
        })
        renderList = [...Filterlist];
    }

    for (item of renderList) {
        itemList.appendChild(creatItem(item));
    }

    const totalAmount = renderList.reduce((acc, currentValue) => {
        return acc + currentValue.value;
    }, 0);

    totalSum.innerText = `R$ ${totalAmount}`;
}

function openModal() {
    const button = document.querySelector("#header__button");
    const modal = document.querySelector("#modal__new-value");
    const emptyList = document.querySelector(".item__container--empty");
    button.addEventListener("click", () => {
        modal.showModal();
    });
    emptyList.addEventListener("click", () => {
        modal.showModal();
    });

}

function filterButtons() {
    const allButton = document.querySelector("#all__button");
    const incomeButton = document.querySelector("#income__button");
    const outcomeButton = document.querySelector("#outcome__button");

    allButton.addEventListener("click", () => {
        allButton.classList.add("filter__button--selected");
        incomeButton.classList.remove("filter__button--selected");
        outcomeButton.classList.remove("filter__button--selected");
        isFiltered = 0;
        renderCards(insertedValues, isFiltered);
    });

    incomeButton.addEventListener("click", () => {
        incomeButton.classList.add("filter__button--selected");
        allButton.classList.remove("filter__button--selected");
        outcomeButton.classList.remove("filter__button--selected");
        isFiltered = 1;
        renderCards(insertedValues, isFiltered);
    });

    outcomeButton.addEventListener("click", () => {
        outcomeButton.classList.add("filter__button--selected");
        allButton.classList.remove("filter__button--selected");
        incomeButton.classList.remove("filter__button--selected");
        isFiltered = 2;
        renderCards(insertedValues, isFiltered);
    });

}


openModal();
filterButtons();
renderCards(insertedValues,0);