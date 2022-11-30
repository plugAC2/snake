import React, {useEffect, useState} from "react";

function BookInfo({isbn}) {
    const [book, setBook] = useState(false);

    useEffect(() => {
        async function getBooks() {
            const response = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn);
            const responseJson =  await response.json();
            console.log(responseJson.items[0]);
            setBook(responseJson.items[0]);
        }
        try {
            getBooks();
        }catch (e) {
            console.log(e);
        }
    }, [])

    return(
        (book &&
        <div>
            <h1>{book.volumeInfo.title}</h1>
        </div>
        )
    )
}

export default BookInfo;