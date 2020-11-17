


document.addEventListener("DOMContentLoaded", () => {
  // const input = document.querySelector('#new-task-description')
  const form = document.querySelector('#create-task-form')
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const ul = document.querySelector('#tasks')
    const li = document.createElement('li')
    const text = document.createElement('text')
    const input = document.querySelector('#new-task-description')
    text.innerText = input.value
    li.appendChild(text) 
    ul.appendChild(li)
  })
});