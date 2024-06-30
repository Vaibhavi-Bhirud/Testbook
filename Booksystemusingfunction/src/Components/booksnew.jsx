import React, { useState } from 'react'

const NovelSystem = () => {
    const[books,setBooks]=useState([]);
    const[form,setForm]=useState({title:'',author:'',category:'',description:''});
    const[searchQuery, setSearchQuery]=useState('');
    const[selectedCategory,setSelectedCategory]=useState('All')
    const handleChange=(e)=>{
    const {name,value}=e.target;
    setForm({...form,[name]:value});
    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(form);
        addBook(e)
    }
    const addBook=(e)=>{
        e.preventDefault();
        setBooks([...books,{...form,id:Date.now()}]);
        setForm({title:'',author:'',category:'',description:''})
    }

    const filteredBooks = books.filter(book => 
          (selectedCategory === 'All' || book.category === selectedCategory) &&
          (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           book.author.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    const startEdit=()=>{

    }
    const deleteBook=()=>{

    }
  return (
<>
<div className="App">
    <h1>Novel Management System</h1>
    <form onSubmit={handleSubmit}>
        <h2>Add Novel</h2>
        <input type="text" name='title' placeholder='Title' onChange={handleChange} value={form.title}/>
        <input type="text" name='author' placeholder='Author' onChange={handleChange} value={form.author}/>
        <input type="text" name='description' placeholder='Description' onChange={handleChange} value={form.description}/>
        <select name="category" onChange={handleChange}>
            <option value="">Select Category</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Comedy">Comedy</option>
            <option value="Thriller">Thriller</option>
            <option value="Action">Action</option>
        </select>
        <button type='submit'>Add Book</button>
    </form>
    <div className="search-container">
        <input type="text" placeholder='Search by title or author' />
        <select name="category">
            <option value="Select Category">Select Category</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Comedy">Comedy</option>
            <option value="Thriller">Thriller</option>
            <option value="Action">Action</option>
        </select>
    </div>
    <h2>Novel1 List</h2>
    <div className="BookList">
    {filteredBooks.map(book=>(
       
        <div className='Book' key={book.id}>
             {console.log('book',book)}
        <p>{book.title}</p>
        <p>{book.author}</p>
        <p>{book.description}</p>
        <p>{book.category}</p>
        <button onClick={()=>startEdit(book)}>Edit</button>
        <button onClick={()=>deleteBook(book.id)}>Delete</button>
        </div>
    ))}
    </div>
</div>


</>
  )
}

export default NovelSystem