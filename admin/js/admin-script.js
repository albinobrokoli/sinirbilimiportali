document.addEventListener('DOMContentLoaded', function () {
    const dragElements = document.querySelectorAll('.draggable');
    const contentArea = document.getElementById('content-area');

    dragElements.forEach(element => {
        element.addEventListener('dragstart', function (e) {
            e.dataTransfer.setData('text/plain', element.textContent);
        });
    });

    contentArea.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    contentArea.addEventListener('drop', function (e) {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        const newElement = document.createElement('div');
        newElement.textContent = data;
        newElement.classList.add('draggable');
        newElement.setAttribute('draggable', 'true');
        newElement.addEventListener('dragstart', function (e) {
            e.dataTransfer.setData('text/plain', e.target.textContent);
        });
        contentArea.appendChild(newElement);
    });
});
