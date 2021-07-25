'use strict';

function randomNumber() {
    return Math.floor(Math.random() * 500 + 1);
}

let total = 0; 


function Books(name, price, pages) {
    this.name = name;
    this.price = price;
    this.pages = pages;
    
    Books.globArr.push(this);

}

Books.globArr = [];


let formbtn = document.getElementById('booksForm');

formbtn.addEventListener('submit', formbtnFun);

function formbtnFun(event) {

    event.preventDefault();

    tableElement.textContent = "";

    renderHeader()

    

    let newName = event.target.bName.value;
    let newPrice = event.target.booksList.value;
    let newPages = randomNumber();

    new Books(newName, newPrice, newPages);


    if (newPrice === '100JD') {
        total+= 100 ; 
    } else if (newPrice === '500JD') {
        total+= 500 ;
    }else if (newPrice === '1000JD') {
        total+= 1000 ;
    }

    console.log(total);

    

    console.log(Books.globArr);

    renderData();
    renderTotal();
    

    saveToLs() ;
    
}


let parent = document.getElementById('tableDiv');

let tableElement = document.createElement('table');
parent.appendChild(tableElement);

// Books.prototype.headerRowRender = function () {
    
// }
function renderHeader() {

    let headerRow = document.createElement('tr');
    tableElement.appendChild(headerRow);

    let bNameTh = document.createElement('th');
    headerRow.appendChild(bNameTh);
    bNameTh.textContent = "Book Name";

    let bPagesTh = document.createElement('th');
    headerRow.appendChild(bPagesTh);
    bPagesTh.textContent = "Book Pages";

    let bPriceTh = document.createElement('th');
    headerRow.appendChild(bPriceTh);
    bPriceTh.textContent = "Price";

}

renderHeader()




function renderData() {

    for (let i = 0; i < Books.globArr.length; i++) {

        let dataRow = document.createElement('tr');
        tableElement.appendChild(dataRow);

        let bNameTd = document.createElement('td');
        dataRow.appendChild(bNameTd);
        bNameTd.textContent = `${Books.globArr[i].name}`;

        let bPagesTd = document.createElement('td');
        dataRow.appendChild(bPagesTd);
        bPagesTd.textContent = `${Books.globArr[i].pages}`;

        let bPriceTd = document.createElement('td');
        dataRow.appendChild(bPriceTd);
        bPriceTd.textContent = `${Books.globArr[i].price}`;

       

        
        

    }
}


function renderTotal() {

    let totalElement = document.createElement ('h2')
    tableElement.appendChild(totalElement);
    totalElement.textContent = 'Total: '

    let totalValueElement = document.createElement ('h2')
    tableElement.appendChild(totalValueElement);
    totalValueElement.textContent = total ; 
    
}


function saveToLs() {
    let convertArr = JSON.stringify (Books.globArr);
    localStorage.setItem ("Books", convertArr);
    localStorage.setItem ("total", total);

}

function getFromLs() {
    let data = localStorage.getItem ("Books");
    let parsedData = JSON.parse (data);
    let totaldata = localStorage.getItem ("total");

    if (parsedData !== null) {
        
        Books.globArr = parsedData;
        
    }
}

getFromLs();

renderData();
renderTotal();


