document.addEventListener("DOMContentLoaded", () => {
  // your code here
    let form = document.querySelector("form")
    form.addEventListener(`submit`, (e) => {
    e.preventDefault()
    buildToDo(e.target[`new-task-description`].value)
    form.reset()
  })
});

function buildToDo(todo){
    let ul = document.createElement(`ul`)
    let btn = document.createElement(`button`)
    btn.addEventListener(`click`, handleDelete)
    btn.textContent = ` x`
    ul.textContent = `${todo}`
    ul.appendChild(btn);
    console.log(ul)
    document.querySelector(`#tasks`).appendChild(ul)
    ul.appendChild(btn)
}


function handleDelete(e){
  e.target.parentNode.remove();
}