//Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField(){
    //Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //Node é um comando que usa para se referir a tags HTML, e é do tipo boolean

    //pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')
    
    //Para cada campo, limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpa ele.
        field.value =""
    })
    //Colocar na página: onde colocar ?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}