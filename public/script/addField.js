//procurar o botão 
document.querySelector('#add-time')
// Quando clicar no botão  
.addEventListener('click', cloneField)


//Executar uma ação
function cloneField() {
    //Duplicar os  Campos, que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) 

    //pegar os campos. Que Campos? 
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar 
    fields.forEach(function(field) {
        //pegar o field do momento e limpa 
        field.value = ""
        
        
    })

     //colocar na  página: onde ? 
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
