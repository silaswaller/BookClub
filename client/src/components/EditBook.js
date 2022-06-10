import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Form from "./Form";

const EditBook = (props) => {

    const [editBook, setEditBook] = useState({
        title: "",
        author: "",
        coverArt: "",
        description: ""
    });

    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}`)
        .then((res) => {
            console.log(res)
            console.log(res.data)
            setEditBook(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [id])

    const editSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/books/${id}`, 
            editBook
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

        const newStateObject = {...editBook};
    
        newStateObject[e.target.name] = e.target.value;
    
        console.log("e.target.name = ", e.target.name);
        console.log("e.target.value = ", e.target.value);
        setEditBook(newStateObject);
    }

    return(
        <div>
            <header>
                <h1>Edit Book</h1>
            </header>
            <Form
                submitHandler = {editSubmitHandler}
                onChangeHandler = {onChangeHandler}
                book = {editBook}
                errors = {errors}
                buttonText = {"Edit"}
            />
        </div>
    )
}

export default EditBook;