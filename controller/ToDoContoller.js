
const TODO = []
let id = 0

const index = (req, res) => {
    try {
        return res.render('dashboard')
    } catch (error) {
        console.error(error)
    }
}

const addTodo = (req, res) => {
    try {
        const reqData = req.body;
        if (!reqData.taskinput) {
            return res.send('please fill all mandatory fields') // validation
        }
        const toDoObj = {
            toDoId: ++id,
            toDoData: reqData.taskinput,
            isToDoDone: false
        }
        TODO.push(toDoObj) // insert data
        return res.json({ message: 'ToDo added successfully!', status: true, toDoObj })
    } catch (error) {
        console.error(error)
    }
}



module.exports = {
    index,
    addTodo
}