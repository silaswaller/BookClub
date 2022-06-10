import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const AllBooks = (props) => {

    const [bookList, setBookList] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:8000/api/books")
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setBookList(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])


    return(
        <div>
            <header>
                <h1>Browse Books</h1>
            </header>
            <div id="container">

            {
                bookList.map((book, index) => (
                    <div key={book._id}>
                        <Link to={`/book/${book._id}`}><img id="allBooksImage" alt="book cover" src={book.coverArt} /></Link>
                        
                    </div>    
                ))
            }
            </div>
        </div>
    )
}

export default AllBooks;