
let div2=document.getElementById("div2")


if (localStorage.getItem("items")==null){   
  localStorage.setItem("items",'[]')
  
}
let items=JSON.parse(localStorage.getItem("items"))
document.getElementById("form").addEventListener("submit",function(){
  let del=Math.random()*25
    let delt=del+"li"
    let title=document.getElementById("title").value
    let para=`<li id=${delt} >${title}    <button onclick="remove(this)" id=${del} class="btn btn-danger del">Remove</button></li><br> `
    items.push(para)
    document.getElementById("title").value=""
    // let p1=document.createElement("p")
    // let p2=document.createElement("p")
    // let butn=document.createElement("button")
    // butn.setAttribute("value","delete")
    // const node2 = document.createTextNode(desc);
    // const node1 = document.createTextNode(title);
    // p1.appendChild(node1)
    // p2.appendChild(node2)
    // div2.appendChild(p1)
    // div2.appendChild(p2)
    // div2.appendChild(butn)
    localStorage.setItem("items",JSON.stringify(items))
render()
})


function render(){
  let it= JSON.parse(localStorage.getItem("items"))
  let item=it.join("")

   div2.innerHTML=item 
}
function remove(p){
  let x=p.id
  let y=x+"li"
  console.log(y)
  let element=document.getElementById(y)

  let ind=items.findIndex(
    item =>item.indexOf(y)>-1
  )
  console.log(items)
  console.log(ind)
  items.splice(ind,1)
 localStorage.setItem("items",JSON.stringify(items))
  render()

}
document.getElementById("btn1").addEventListener("click",function(){
  localStorage.setItem("items","[]")
  render()
  
})
render()
