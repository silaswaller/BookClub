import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const OneBook = (props) => {

    const {id} = useParams();

    const [book, setBook] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setBook(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [id])

    const deleteBook = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/books/${idFromBelow}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            navigate("/")
        })
        .catch((err) => {
            console.log(err)
        })
    }

    const editBook = () => {
        navigate(`/book/edit/${book._id}`)
    }


    return(
        <div id="oneBookContainer">
            <div id="bookImageDiv">
                <img id="oneBookImage" alt="book cover" src={book.coverArt}/>
                <br/>
                <button className="button" onClick={() => editBook()}>Edit</button>
                <button className="button" onClick={() => deleteBook(book._id)}>Delete</button>
            </div>
            <div id="bookInfoDiv">
                <h1>{book.title}</h1>
                <h3>by {book.author}</h3>
                <p id="oneBookDescription">{book.description}</p>
                
            </div>
        </div>
    )
}

export default OneBook;