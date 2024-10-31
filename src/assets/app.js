let list=["Hello this is my first todo","Hello this is my second todo","Hello this is my 3th Todo."]


export let listelem=(_list)=>{
    let elem=""
    
    _list.map((el,i)=>{
        elem+=`<div id="el">${el} <button id=del onclick="remvel('${i}')">x</button></div> `
      
        
        })
 let total=_list.length
    document.getElementById("list").innerHTML=elem
    document.getElementById("total").innerHTML= `<div id="total">Total list : <span>${total}</span></div>`
}
listelem(list)

export let additem =()=>{document.getElementById("b1").addEventListener("click",()=>{
    let inputvalue=document.getElementById("input").value
    list.push(inputvalue)
    listelem(list)
})
}
document.getElementById("b2").addEventListener("click",()=>{
    let inputvalue=document.getElementById("input").value
    list.push(inputvalue)
    listelem(list)
})



export let remvel=(index)=>{
    list.splice(index,1)
    listelem(list)


}


