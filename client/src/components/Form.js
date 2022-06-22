import React from "react";

const Form = (props) => {

    const {submitHandler, onChangeHandler, book, errors, buttonText} = props;

    return(
        <div>
            <form onSubmit={submitHandler}>
                <div  id="newBookConatiner">
                    <div>
                        <label className="newBookLabel" id="newBookTitle">Title</label>
                        <input className="newBookInput" name ="title" value={book.title} onChange={onChangeHandler} type="text"/>
                        { errors.title && <p className="error">{errors.title.message}</p>}
                    </div>
                    <br/>
                    <div>
                        <label className="newBookLabel" id="newBookAuthor">Author</label>
                        <input className="newBookInput" name ="author" value={book.author} onChange={onChangeHandler} type="text"/>
                        { errors.author && <p className="error">{errors.author.message}</p>}
                    </div>
                    <br/>
                    <div>
                        <label className="newBookLabel" id="newBookCoverArt">Cover Art</label>
                        <input className="newBookInput" name ="coverArt" value={book.coverArt} onChange={onChangeHandler} type="text"/>
                        { errors.coverArt && <p className="error">{errors.coverArt.message}</p>}
                    </div>
                    <br/>
                    <div>
                        <label className="newBookLabel" id="newBookDescription">Description</label>
                        <textarea className="newBookInput" name ="description" value={book.description} onChange={onChangeHandler} type="text" rows="5"></textarea>
                        
                    </div>
                </div>
                <br/>
                <button className="button">{buttonText}</button>
            </form>
        </div>
    )
}

export default Form;