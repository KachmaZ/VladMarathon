const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
}

function dragstart(event) {
    event.target.classList.add('hold');
    setTimeout(() => {
        event.target.classList.add('hide');
    }, 0)
}

function dragend(event) {
    event.target.className = "item";
}

function dragover(event) {
    event.preventDefault();
}

function dragenter(event) {
    event.target.classList.add('entered');
}

function dragleave(event) {
    event.target.classList.remove('entered')
}

function dragdrop(event) {
    event.target.classList.remove('entered');
    event.target.append(item);
}