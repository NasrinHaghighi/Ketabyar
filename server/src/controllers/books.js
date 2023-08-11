 const getAllBooks =(req,res) =>{
    res.send('all books')
}
const getSingleBook =(req,res) =>{
    res.send('single books')
}

module.exports = {
    getAllBooks, getSingleBook
}

