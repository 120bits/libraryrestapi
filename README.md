# libraryrestapi

This is a demo for Library RESTFUL API

1. To get all the books, GET request

http://35.162.29.231:9000/library/books/all

<img width="1440" alt="Screen Shot 2021-10-24 at 10 20 13 AM" src="https://user-images.githubusercontent.com/21069692/138603058-e07e6fb4-85fd-413e-b097-f7200ea02341.png">


2. To get details for a single book, use the book ID in the URL. GET request

http://35.162.29.231:9000/library/books/book/{id}

<img width="1437" alt="Screen Shot 2021-10-24 at 10 21 44 AM" src="https://user-images.githubusercontent.com/21069692/138603113-4b2c12b1-d922-43da-9bcd-13aebc2ddb32.png">


3. For adding a new book use a POST request to this URL

The request body has the JSON data. 

http://35.162.29.231:9000/library/books/book/

<img width="1439" alt="Screen Shot 2021-10-24 at 10 24 08 AM" src="https://user-images.githubusercontent.com/21069692/138603196-aaca60fb-318a-4bdb-95bf-489e0f337389.png">

4. For updating the a book details, we can use this URL and the request body has the data and perform a PUT request

http://35.162.29.231:9000/library/books/book/{id}
<img width="1440" alt="Screen Shot 2021-10-24 at 10 26 26 AM" src="https://user-images.githubusercontent.com/21069692/138603275-406a0d65-d7ab-41f0-8301-dde66be76464.png">

5. Deleting a book is sending a DELETE Http request to this URL with the ID id as the URL paramater. 

http://35.162.29.231:9000/library/books/book/{id}

<img width="1440" alt="Screen Shot 2021-10-24 at 10 29 01 AM" src="https://user-images.githubusercontent.com/21069692/138603373-28cbbd22-2cb4-4496-bb63-755b801296e1.png">


