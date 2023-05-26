const getBTN=document.getElementById('getBTN')
const wrapper=document.querySelector('.wrapper')


const API_URL='http://localhost:3000/getInfo'
const greenCaretSVG='<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#34f000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Arrow / Caret_Up_MD"> <path id="Vector" d="M8 14L12 10L16 14" stroke="#34f000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>'
const redCaretSVG='<svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#f00000" transform="matrix(1, 0, 0, -1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Arrow / Caret_Up_MD"> <path id="Vector" d="M8 14L12 10L16 14" stroke="#f00000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>'

getBTN.addEventListener('click', async ()=>{
    const respone= await fetch(API_URL)
    const parsedResponse=await respone.json() 
    wrapper.innerHTML=''
    parsedResponse.forEach(item=>{
    
     
        wrapper.style.flexDirection='row'
        wrapper.style.justifyContent='flex-start'
        wrapper.innerHTML+=`<div class="currencyInfo">
        <p>${item.Ccy}  ${item.Diff.indexOf('-')>-1?greenCaretSVG:redCaretSVG}<br/> ${item.Rate} сум</p>
        </div>`
    })
    
})