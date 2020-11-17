
document.addEventListener("DOMContentLoaded", () => {
  // const input = document.querySelector('#new-task-description')
  const form = document.querySelector('#create-task-form')
  form.addEventListener("submit", function(event) {
    console.dir(event)
    event.preventDefault();
    const ul = document.querySelector('#tasks')
    const li = document.createElement('li')
    const text = document.createElement('text')
    const input = document.querySelector('#new-task-description')
    text.innerText = input.value

    const deleteButton = document.createElement('button')
    deleteButton.textContent = "X"
    deleteButton.addEventListener("click", (event) => event.target.parentNode.remove())

    li.appendChild(text) 
    li.appendChild(deleteButton)
    ul.appendChild(li)
  })
});