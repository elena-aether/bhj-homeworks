const input = document.querySelector('.tasks__input')
const form = document.querySelector('.tasks__control')
const btn = document.querySelector('.tasks__add')
const tasks = document.querySelector('.tasks__list')

btn.addEventListener('click', (e) => {
    e.preventDefault()

    const task = document.createElement('div')
    task.classList.add('task')
    const text = input.value

    if (text != ""){
        task.innerHTML = `<div class="task__title"> ${text} </div> <a href="#" class="task__remove">&times;</a>`
        tasks.insertAdjacentElement("beforeend", task)  
    }
    
    const removeBtn = document.querySelectorAll('.task__remove')
    
    for(const btn of removeBtn) {
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            const p = btn.closest('.task')
            p.remove()
        })
    }

form.reset()
})
