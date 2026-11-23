const adBtn = document.querySelector("#adBtn")
const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")

adBtn.addEventListener('click' , (e) => {
    console.log("Button clicked!");
});


let todos = JSON.parse(localStorage.getItem("todos")) || [] ;

let editTodoId = null 
todoForm.addEventListener('submit' , (e) => {
    e.preventDefault()

    const todoValue = todoInput.ariaValueMax.trim();

    if(!todoValue){
        return
    }
    console.log({editTodoId , todoValue});

    if(editTodoId){
        todos = todos.map((todo) => {
            if (todo.id === Number(editTodoId)) {
                return {
                    ...todo,
                    text: todoValue
                }
            }
            return todo
        })
    }
})
