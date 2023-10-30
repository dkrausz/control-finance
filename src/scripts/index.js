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

title.innerText=item.value;
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
renderCards(insertedValues);
openModal();