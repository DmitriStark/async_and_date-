

function dateGiver() {
    const todayDate = new Date()
    console.log("today is : " + todayDate)

    return todayDate
}

async function addDays(day) {
    let promise = await new Promise((resolve, reject) => {
        try {
            const date1 = dateGiver()
            date1.setDate(day)
            resolve(setTimeout(() => { console.log(date1) }, 1000))

        }

        catch (error) {

        }

        reject('bad number');

        // reject if false
    });


}

//לדעתי עשיתי פה עבודה כפולה כי פרומיס גם ככה מחזיר לי REJECT RESOLVE למה אני צריך TRY ו CATCH?



dateGiver()
addDays(5)


//////////////////////////////////////////////////////////////////////////////


const library = {
    books: [
        { title: 'Book 1', author: 'Author 1' },
        { title: 'Book 2', author: 'Author 2' },
        { title: 'Book 3', author: 'Author 1' },
        { title: 'Book 4', author: 'Author 3' },
        { title: 'Book 5', author: 'Author 2' },
        { title: 'Book 6', author: 'Author 1' },
        { title: 'Book 7', author: 'Author 3' },
        { title: 'Book 8', author: 'Author 4' },
        { title: 'Book 9', author: 'Author 4' },
        { title: 'Book 10', author: 'Author 1' },
        { title: 'Book 11', author: 'Author 5' },
        { title: 'Book 12', author: 'Author 5' },
        { title: 'Book 13', author: 'Author 1' },
        { title: 'Book 14', author: 'Author 3' },
        { title: 'Book 15', author: 'Author 2' },],

    findBooksByAuthor: function (search) {
        const newFilteredBooksArray = this.books.filter((thisbook)=>thisbook.author === search)
        const titleArray = []
        newFilteredBooksArray.filter((title)=>titleArray.push(title.title))
        return titleArray
    }
}
// function search(namekey,myarray){
//     for(let i=0 ;i<myarray.length;i++){
//         if(myarray[i].author === namekey){
//             myarray[i]
//         }
//     }
// }

// let res =search('Author 1',library.books)
// console.log(res)

console.log(library.findBooksByAuthor('Author 1'))