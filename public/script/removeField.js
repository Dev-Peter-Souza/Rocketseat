//Deletando o campo 
function removeParent(elem) {
    if (document.querySelectorAll('.schedule-item').length > 1)
        elem.parentElement.remove();
}