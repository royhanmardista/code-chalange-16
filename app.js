document.addEventListener('DOMContentLoaded', function(){

  const list = document.querySelector('#kegiatan ul');
  const forms = document.forms;

  // filter kegiatan
  const searchBar = forms['cari'].querySelector('input');
  searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach((book) => {
      const title = book.firstElementChild.textContent;
      if(title.toLowerCase().indexOf(e.target.value) != -1){
        book.style.display = 'block';
      } else {
        book.style.display = 'none';
      }
    });
  });
  
  // menghapus kegiatan
  list.addEventListener('click', (e) => {
    if(e.target.className == 'done'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });

  // menambah kegiatan
  const addForm = forms['tambah'];
  addForm.addEventListener('submit', function(e){
    e.preventDefault();

    // bikin elemen
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const doneBtn = document.createElement('span');

    // masukin konten
    bookName.textContent = value;
    doneBtn.textContent = 'done';

    // tambah class
    bookName.classList.add('name');
    doneBtn.classList.add('done');

    // append ke DOM
    li.appendChild(bookName);
    li.appendChild(doneBtn);
    list.appendChild(li);
  });  

  

})
