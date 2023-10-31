/* Desenvolva sua lógica aqui */

function creatItem(item){
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

title.innerText=`R$ ${item.value}`;
category.innerText=valuesCategory[item.categoryID];

divButtons.append(category,delButton);
card.append(title,divButtons);

delButton.addEventListener("click",(event)=>{
const index = insertedValues.indexOf(item);
insertedValues.splice(index,1);
    console.log(index);
    renderCards(insertedValues);
})

return card;
}

function renderCards(list){
    const totalAmount = list.reduce((acc,currentValue)=>{       
     return acc+currentValue.value;
    },0);

    const totalSum=document.querySelector("#total-amount");
    totalSum.innerText=`R$ ${totalAmount}`;
    const itemList = document.querySelector(".list__itens");
    itemList.innerHTML= ' ';
    for(item of list){
        itemList.appendChild(creatItem(item));
    }

}

function openModal(){
const button = document.querySelector("#header__button");
const modal = document.querySelector("#modal__new-value")
button.addEventListener("click", ()=>{
    modal.showModal();
})
}

function filterButtons(){
    const allButton = document.querySelector("#all__button");
    const incomeButton = document.querySelector("#income__button");
    const outcomeButton = document.querySelector("#outcome__button");

    allButton.addEventListener("click",()=>{
        allButton.classList.add("filter__button--selected");
        incomeButton.classList.remove("filter__button--selected");
        outcomeButton.classList.remove("filter__button--selected");

        renderCards(insertedValues);
    });

    incomeButton.addEventListener("click",()=>{
        incomeButton.classList.add("filter__button--selected");
        allButton.classList.remove("filter__button--selected");
        outcomeButton.classList.remove("filter__button--selected");

     const Filterlist = insertedValues.filter((item)=>{
        
        return item.categoryID===0;
     })   
     console.log(Filterlist);
        renderCards(Filterlist);
    });

    outcomeButton.addEventListener("click",()=>{
        outcomeButton.classList.add("filter__button--selected");
        allButton.classList.remove("filter__button--selected");
        incomeButton.classList.remove("filter__button--selected");

     const Filterlist = insertedValues.filter((item)=>{
        
        return item.categoryID===1;
     })   
     console.log(Filterlist);
        renderCards(Filterlist);
    });

}


openModal();
filterButtons();
renderCards(insertedValues);