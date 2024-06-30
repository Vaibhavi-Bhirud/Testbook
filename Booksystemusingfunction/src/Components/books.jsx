// import React, { useState } from 'react'

// import './BookSystem.css'
// const BookSystem = () => {
//     const [books, setBooks] = useState([]);
// const [title, setTitle] = useState('');
// const [author, setAuthor] = useState('');
// const [category, setCategory] = useState('');
// const [isEditing, setIsEditing] = useState(false);
// const [currentBook, setCurrentBook] = useState(null);
// const [searchQuery, setSearchQuery] = useState('');
// const [selectedCategory, setSelectedCategory] = useState('All');
// const handleCategoryChange=()=>{

// }


//     const handleChange=(e)=>{
//         const {name,value}=e.target;
//         if(name==='title') setTitle(value);
//         if(name==='author') setAuthor(value);
//         if(name==='category') setCategory(value);
//     };


//     const handleSearchChange=()=>{

//     }

//     const addBook=(e)=>{
//         e.preventDefault();
//         const newBook={
//             id:Date.now(),
//             title,
//             author,
//             category
//         }
//         setBooks((prevBooks)=>[...prevBooks,newBook]);
//         setTitle('');
//         setAuthor('');
//         setCategory('');

//     }

//     const filteredBooks=books.filter(
//         (book)=>
//         (selectedCategory==="All" || book.category===selectedCategory) &&
//         (book.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
//         (book.author.toLowerCase().includes(searchQuery.toLowerCase()))
//     );

//     const toggleEdit=(book)=>{
//         console.log(book);
//         setIsEditing(!isEditing);
//         setCurrentBook(book || null);
//         setTitle(book ? book.title:'');
//         setAuthor(book ? book.author:'');
//         setCategory(book ? book.category:'');


//     }

//     const deleteBook=()=>{

//     }
// const editbook=(updatedBook)=>{
//     setBooks((prevBooks)=>
//     prevBooks.map((book)=>
//         book.id===updatedBook.id?updatedBook:book
//     ));
//     setIsEditing(false);
//     setCurrentBook(null);
//     setTitle('');
//     setAuthor('');
//     setCategory('');
    
// }
//     const handleSubmitEdit=(e)=>{
//         e.preventDefault();
//         const updatedBook={
//             id:currentBook.id,
//             title,
//             author,
//             category
//         }
//         editbook(updatedBook)
//     }
    
//   return (
// <>

// {isEditing?

// (<form onSubmit={handleSubmitEdit}>
// <h2>Add Book</h2>
// <div>
//   <label>Title:</label>
//   <input
//     type="text"
//     name="title"
//     value={title}
//     onChange={handleChange}
//   />
// </div>
// <div>
//   <label>Author:</label>
//   <input
//     type="text"
//     name="author"
//     value={author}
//     onChange={handleChange}
//   />
// </div>
// <div>
//   <label>Category:</label>
//   <select
//     name="category"
//     value={category}
//     onChange={handleChange}
//   >
//     <option value="">Select Category</option>
//     <option value="Fiction">Fiction</option>
//     <option value="Non-Fiction">Non-Fiction</option>
//     <option value="Romantic">Romantic</option>
//     <option value="Comedy">Comedy</option>
//     <option value="Thriller">Thriller</option>
//     <option value="Action">Action</option>
//   </select>
// </div>
// <button type="submit">Add Book</button>
// </form>):
// (
//     <form onSubmit={addBook}>
//     <h2>Add Book</h2>
//     <div>
//       <label>Title:</label>
//       <input
//         type="text"
//         name="title"
//         value={title}
//         onChange={handleChange}
//       />
//     </div>
//     <div>
//       <label>Author:</label>
//       <input
//         type="text"
//         name="author"
//         value={author}
//         onChange={handleChange}
//       />
//     </div>
//     <div>
//       <label>Category:</label>
//       <select
//         name="category"
//         value={category}
//         onChange={handleChange}
//       >
//         <option value="">Select Category</option>
//         <option value="Fiction">Fiction</option>
//         <option value="Non-Fiction">Non-Fiction</option>
//         <option value="Romantic">Romantic</option>
//         <option value="Comedy">Comedy</option>
//         <option value="Thriller">Thriller</option>
//         <option value="Action">Action</option>
//       </select>
//     </div>
//     <button type="submit">Add Book</button>
//   </form>
// )
// }

//    <div>
      
    

//       <div>
//         <input
//           type="text"
//           placeholder="Search by title or author"
//           value={searchQuery}
//           onChange={handleSearchChange}
//         />
//         <select value={selectedCategory} onChange={handleCategoryChange}>
//           <option value="All">All</option>
//           <option value="Fiction">Fiction</option>
//           <option value="Non-Fiction">Non-Fiction</option>
//           <option value="Romantic">Romantic</option>
//           <option value="Comedy">Comedy</option>
//           <option value="Thriller">Thriller</option>
//           <option value="Action">Action</option>
//         </select>
//       </div>

//       <h2>Book List</h2>
//       <div className="BookList">
//         {filteredBooks.map((book) => (
//           <div key={book.id} className="Book">
//             <div>
//               <h3>{book.title}</h3>
//               <p>{book.author}</p>
//               <p>{book.category}</p>
//             </div>
//             <div>
//               <button onClick={() => toggleEdit(book)}>Edit</button>
//               <button onClick={() => deleteBook(book.id)}>Delete</button>
//             </div>
//           </div>
//         ))} 
//       </div>
//     </div>
//    </>
//   )
// }

// export default BookSystem

import React, { useState } from 'react';

const BookSystem = () => {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ title: '', author: '', category: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentBook, setCurrentBook] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const addBook = (e) => {
    e.preventDefault();
    setBooks([...books, { ...form, id: Date.now() }]);
    setForm({ title: '', author: '', category: '' });
  };

  const updateBook = (updatedBook) => {
    setBooks(books.map(book => book.id === updatedBook.id ? updatedBook : book));
    resetForm();
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const startEdit = (book) => {
    setIsEditing(true);
    setCurrentBook(book);
    setForm(book);
  };

  const resetForm = () => {
    setIsEditing(false);
    setCurrentBook(null);
    setForm({ title: '', author: '', category: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    isEditing ? updateBook({ ...form, id: currentBook.id }) : addBook(e);
  };

  const filteredBooks = books.filter(
    book => 
      (selectedCategory === 'All' || book.category === selectedCategory) &&
      (book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       book.author.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="App">
      <h1>Book Management System</h1>

      <form onSubmit={handleSubmit}>
        <h2>{isEditing ? 'Edit Book' : 'Add Book'}</h2>
        <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" />
        <input type="text" name="author" value={form.author} onChange={handleChange} placeholder="Author" />
        <select name="category" value={form.category} onChange={handleChange}>
          <option value="">Select Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Romantic">Romantic</option>
          <option value="Comedy">Comedy</option>
          <option value="Thriller">Thriller</option>
          <option value="Action">Action</option>
        </select>
        <button type="submit">{isEditing ? 'Save' : 'Add Book'}</button>
        {isEditing && <button type="button" onClick={resetForm}>Cancel</button>}
      </form>

      <div>
        <input type="text" placeholder="Search by title or author" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Romantic">Romantic</option>
          <option value="Comedy">Comedy</option>
          <option value="Thriller">Thriller</option>
          <option value="Action">Action</option>
        </select>
      </div>

      <h2>Book List</h2>
      <div className="BookList">
        {filteredBooks.map(book => (
          <div key={book.id} className="Book">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.category}</p>
            <button onClick={() => startEdit(book)}>Edit</button>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookSystem;
