
window.addEventListener('DOMContentLoaded', ()=>{
    let title = document.querySelector('#title'),
    author = document.querySelector('#author'),
    year = document.querySelector('#year'),
    btn = document.querySelector('.btn'),
    bookList = document.querySelector('#book-list');
    btn.addEventListener('click', (event)=>{
        event.preventDefault()
        if( title == "" & author == '' & year == '' ){
            alert('Please input information!')
        }
        else{
            let newRow = document.createElement('tr')

            let newTitle = document.createElement('th')
            newTitle.innerHTML = title.value
            newRow.appendChild(newTitle)

            let newAuthor = document.createElement('th')
            newAuthor.innerHTML = author.value
            newRow.appendChild(newAuthor)

            let dataYear = document.createElement('th')
            dataYear.innerHTML = year.value
            newRow.appendChild(dataYear)

            bookList.appendChild(newRow)
            title.value =''
            author.value =''
            year.value =''
        }  
    })
})
    