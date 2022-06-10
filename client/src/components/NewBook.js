import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "./Form";

const NewBook = (props) => {

const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    coverArt: "",
    description: ""
});

const [errors, setErrors] = useState([]);

const navigate = useNavigate();

const newSubmitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/books", 
        newBook
    )
    .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/")
    })
    .catch((err) => {
        console.log(err)
        setErrors(err.response.data.error.errors)
    })
}

const onChangeHandler = (e) => {

    const newStateObject = {...newBook};

    newStateObject[e.target.name] = e.target.value;

    console.log("e.target.name = ", e.target.name);
    console.log("e.target.value = ", e.target.value);
    setNewBook(newStateObject);
}

    return(
        <div>
            <header>
                <h1>Add A New Book</h1>
            </header>
            <Form
                submitHandler = {newSubmitHandler}
                onChangeHandler = {onChangeHandler}
                book = {newBook}
                errors = {errors}
                buttonText = {"Add"}
            />
        </div>
    )
}

export default NewBook;