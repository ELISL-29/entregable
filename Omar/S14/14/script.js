
document.addEventListener('DOMContentLoaded',function(){
    
    const button=document.getElementById('changeTextButton')
    button.addEventListener('click',function(){
        const introSection=document.getElementById('intro')
        introSection.innerHTML='<h1>Parrafo Modificado</h1><p>El texto ha cambiado despues de hacer click en el botón</p>'
        introSection.style.backgroundColor='green';
    })
})
const modEstilos=()=>{
    const elemento=document.getElementById('titulo2')
    elemento.style.color='blue';
    elemento.style.fontSize='30px';
   
}