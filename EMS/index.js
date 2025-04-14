let data=[
    {
    name:"gaurav",
    address:"jabalpur",
    Mobile:94257856,
    Dob:15/03/1999
},
    {
    name:"gausdfsdfrav",
    address:"jabalpur",
    Mobile:"94257wrew856",
    Dob:"15/03/19sdfsdf99"
},
    {
    name:"gaursdeeeeefsdfav",
    address:"jabalpur",
    Mobile:94257856,
    Dob:15/03/1999
},
]

data.map((e)=>{
   
    let box = document.createElement("div")
    box.setAttribute("id","inbox")
    let nameslist = document.createElement("p")
    nameslist.innerText = e.name
    nameslist.addEventListener("click",()=>{
        //  console.log(e)
         detail(e)
    })

    let btn = document.createElement("button") 
    btn.innerText = "❌"
   
    box.append(nameslist,btn)
    document.getElementById("dataoutput").append(box)
})

function detail(values){
    document.getElementById("secondscreenbox").innerText=""
  let name = document.createElement("h1")
  name.innerText = values.name
  let address = document.createElement("p")
  address.innerText = values.address
  let Mobile = document.createElement("p")
  Mobile.innerText = values.Mobile
  let Dob = document.createElement("p")
  Dob.innerText = values.Dob
  document.getElementById("secondscreenbox").append(name,address,Mobile,Dob)
  
 }


 document.getElementById("buttonemp").addEventListener("click",()=>{
     console.log("chl rha hu may")
   let change = document.getElementById("overlay").style
    change.zIndex =1
    change.opacity=1
})

 document.getElementById("btnclose").addEventListener("click",()=>{
    let change = document.getElementById("overlay").style
    change.zIndex =-1
    change.opacity= 0
 })