let data=[
    {
    name:"gaurav",
    address:"jabalpur",
    Mobile:94257856,
    Dob:15/03/1999,
    imageup:"https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"
},
    {
    name:"gausdfsdfrav",
    address:"jabalpur",
    Mobile:"94257wrew856",
    Dob:"15/03/19sdfsdf99",
    imageup:"https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"
},
    {
    name:"gaursdeeeeefsdfav",
    address:"jabalpur",
    Mobile:94257856,
    Dob:15/03/1999,
    imageup:"https://thewowstyle.com/wp-content/uploads/2015/01/nature-images..jpg"
},
]
 function callme(){
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
 }

 callme()
function detail(values){
    document.getElementById("secondscreenbox").innerText=""
    let img = document.createElement("img")
    img.src = values.imageup
    img.setAttribute("id","image")
  let name = document.createElement("h1")
  name.innerText = values.name
  let address = document.createElement("p")
  address.innerText = values.address
  let Mobile = document.createElement("p")
  Mobile.innerText = values.Mobile
  let Dob = document.createElement("p")
  Dob.innerText = values.Dob
  document.getElementById("secondscreenbox").append(img,name,address,Mobile,Dob)

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

 let formdata = document.querySelector("form")
  formdata.addEventListener("submit" ,(e)=>{
    e.preventDefault()
       let imageup = document.getElementById("imageup").value
      let name = document.getElementById("name").value;
  let address = document.getElementById("address").value;
  let dob = document.getElementById("dob").value;
  let mobile = document.getElementById("mobile").value;
  data.push({imageup,name,address,dob,mobile})
  callme()
  console.log(imageup)
  console.log(data)
})
