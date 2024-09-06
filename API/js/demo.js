async function getData() {
    let myResult = document.querySelectorAll(".box");

    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json();
    let myData = data.products;
    console.log(myData);

    myResult.forEach((element, i) => {
        element.getElementsByTagName('img')[0].src = myData[i].images[0]; // Use the first image in the array
        element.getElementsByTagName('p')[0].innerHTML = "Id No: " + myData[i].id;
        element.getElementsByTagName('b')[0].innerHTML = "Price: $" + myData[i].price + "<br/>";
        element.getElementsByTagName('span')[0].innerHTML = "Brand Name: " + myData[i].brand;
        element.getElementsByTagName('h4')[0].innerHTML = "rating: " + myData[i].rating;
    });
}

getData();



// async function getData() {
//     let myResult = document.querySelectorAll(".box");

//     let response = await fetch('https://dummyjson.com/products');
//     let data = await response.json();
//     let myData = data.products;
//     console.log(myData);

//     for (let i = 0; i < myResult.length; i++) {
//         if (i === 3 || i === 5) {
//             continue; // Skip these indices
//         } else {
//             let element = myResult[i];
//             element.getElementsByTagName('img')[0].src = myData[i].images[0]; // Use the first image in the array
//             element.getElementsByTagName('p')[0].innerHTML = "Id No: " + myData[i].id;
//             element.getElementsByTagName('b')[0].innerHTML = "Price: $" + myData[i].price + "<br/>";
//             element.getElementsByTagName('span')[0].innerHTML = "Brand Name: " + myData[i].brand;
//         }
//     }
// }

// getData();
