// const searchBtn = document.getElementById("searchbtn");
// searchBtn.addEventListener("click",()=>{
//     const size = document.getElementById('searchsize').value;
//     const outputDiv = document.getElementById('output');
//     outputDiv.innerHTML = '';

//     if (size > 0){
//         const symbols = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
//         for (let i = 1; i <= size; i++) {
//             let symbol = '';
//             let num = i;
//             while (num > 0) {
//                 symbol = symbols[num % 36] + symbol;
//                 num = Math.floor(num / 36);
//             }
//             const cell = document.createElement('div');
//             cell.textContent = `${i}-${symbol.padStart(2, '0')}`; 
//             outputDiv.appendChild(cell);
//         }
//     }
// })


// document.getElementById('btn').addEventListener('click', () => {
//     const num = document.getElementById('size').value;
//     const outputDiv = document.getElementById('symboloutput');
//     outputDiv.innerHTML = ''; 

//     if (num > 0) {
//         const symbol = numberToSymbol(num);

//         outputDiv.textContent = `${num}-${symbol}`;
//     }
// });


function numberToSymbol(num) {
    const symbols = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let symbol = '';
    while (num > 0) {
        symbol = symbols[num % 36] + symbol;
        num = Math.floor(num / 36);
    }
    return symbol.padStart(2, '0'); 
}

const searchBtn = document.getElementById("searchbtn");

searchBtn.addEventListener("click",()=>{
    const size = document.getElementById('searchsize').value;
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    if (size > 0) {
        for (let i = 1; i <= size; i++) {
            const symbol = numberToSymbol(i);
            const div = document.createElement('div');
            div.textContent = `${i}-${symbol}`;
            outputDiv.appendChild(div);
        }
    }
});

document.getElementById('btn').addEventListener('click', () => {
    const num = document.getElementById('size').value;
    const outputDiv = document.getElementById('symboloutput');
    outputDiv.innerHTML = ''; 
    if (num > 0) {
        const symbol = numberToSymbol(num);

        outputDiv.textContent = `${num}-${symbol}`;
    } 
});
