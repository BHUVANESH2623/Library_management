import { useState, useEffect } from "react";
import "./books.scss";
import axios from "axios";
import moment from "moment";

export const Books = () => {
  const [search, setSearch] = useState("");
  const [filterSearch, setFilterSearch] = useState("none");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get(
          "https://library-management-1-e7u3.onrender.com/book"
        );
        let filteredBooks = res.data;

        if (search) {
          const searchLowerCase = search.toLowerCase();
          filteredBooks = filteredBooks.filter((book) => {
            if (filterSearch === "none") {
              return (
                book.title.toLowerCase().includes(searchLowerCase) ||
                book.author.toLowerCase().includes(searchLowerCase) ||
                book.subject.toLowerCase().includes(searchLowerCase)
              );
            } else {
              return book[filterSearch].toLowerCase().includes(searchLowerCase);
            }
          });
        }

        setBooks(filteredBooks);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBooks();
  }, [search, filterSearch]);

  return (
    <div>
      <div className="component">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="label">
          <label htmlFor="Search Filters">
            <div className="lb">
              <input
                type="radio"
                value="author"
                checked={filterSearch === "author"}
                onChange={() => setFilterSearch("author")}
              />
              <span>Author</span>
            </div>
            <div className="lb">
              <input
                type="radio"
                value="title"
                checked={filterSearch === "title"}
                onChange={() => setFilterSearch("title")}
              />
              <span>Title</span>
            </div>
            <div className="lb">
              <input
                type="radio"
                value="subject"
                checked={filterSearch === "subject"}
                onChange={() => setFilterSearch("subject")}
              />
              <span>Subject</span>
            </div>
            <div className="lb">
              <input
                type="radio"
                value="none"
                checked={filterSearch === "none"}
                onChange={() => setFilterSearch("none")}
              />
              <span>None</span>
            </div>
          </label>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Subject</th>
            <th>Publish Date</th>
            {/* Add more columns if needed */}
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.subject}</td>
              <td>{moment(book.publish).format("DD-MM-YYYY")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
