window.addEventListener('DOMContentLoaded', function() {
    var bookList = document.getElementById('book-list');
    var books = bookList.getElementsByClassName('book-item');
    var isCtrlPressed = false;
    
    bookList.addEventListener('click', function(event) {
      var target = event.target;
      
      if (event.ctrlKey) {
        isCtrlPressed = true;
      } else {
        isCtrlPressed = false;
      }
      
      if (target.classList.contains('book-item')) {
        for (var i = 0; i < books.length; i++) {
          if (books[i] !== target && !isCtrlPressed) {
            books[i].classList.remove('orange-text');
          }
        }
        
        target.classList.toggle('orange-text');
      }
    });
    
    bookList.addEventListener('mousedown', function(event) {
      if (event.ctrlKey) {
        event.preventDefault(); 
      }
    });
    
    bookList.addEventListener('mousemove', function(event) {
      if (isCtrlPressed) {
        var target = event.target;
        if (target.classList.contains('book-item')) {
          target.classList.add('highlighted');
        }
      }
    });
    
    bookList.addEventListener('mouseup', function(event) {
      if (isCtrlPressed) {
        var target = event.target;
        if (target.classList.contains('book-item')) {
          target.classList.remove('highlighted');
        }
      }
    });
  });