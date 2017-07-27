
# HackJam: Frameworks marathon
Hey guys, tonight you'll have to build an online library!

Using either react or angular, choose your weapon ⚔
## Getting started
```bash
git clone https://github.com/hackages/hackjam-frameworks-marathon.git
cd ./hackjam-frameworks-marathon
# If you want to use React
cd ./react-app
yarn OR npm install
yarn start OR npm start
# If you'd rather use Angular
cd ./angular
yarn OR npm install
yarn start OR npm start

# Happy hacking ! ;-)
```

## Todo:
- Fix all the bugs before building new features

- Features:
  - Dashboard view
    - Display all the books inside the Dashboard
    - When you click on a book, you should navigate to the detail of that book
    
  - NavBar view
    - Implement the search for the books (in the BookSearch Component)
      - Display the books under the search box
      - Once the result is displayed, clicking on it should navigate to the detail of that book
      
  - Manage books view
   - Once again, show all the books
   - CRUD API
     - Add a new book with a title only
     - Delete a book by id
     - Get a book by id

  - Book Detail view
    - Implement the save button: It should update the book's title
    - Implement the goBack button
   
  - Introducing Redux
    - After a quick introduction to Redux, let's reimplement our application using it
    - Create a AppState class that represents your data structure (app structure)
    - Create a store folder with your store define inside
