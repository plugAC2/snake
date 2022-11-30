
const form = document.querySelector(".jumbotron");
const bookInfo = document.querySelector(".book-info");

    form.addEventListener("submit", (event) =>{
        event.preventDefault();
        const inputIsbn = form.isbn;
        const isbn = inputIsbn.value;
            fetch("https://www.googleleapis.com/books/v1/volumes?q=isbn:" + isbn, {
                headers: {
                    AccessControlAllowOrigin: "https://www.googleleapis.com/"
    }
            })
                .then(function (respone) {
                    return respone.json();
                })
                .then(function (isbnData) {
                    const newElement = document.createElement("h2");
                    newElement.innerText = isbnData.items[0].volumeInfo.title;
                    bookInfo.appendChild(newElement);
                })
                .catch((err) => {
                    console.log(err);
                })

})

