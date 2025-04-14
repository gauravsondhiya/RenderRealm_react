let data=[
    {
    name:"gaurav",
    address:"jabalpur",
    Mobile:94257856,
    Dob:15/03/1999
},
    {
    name:"gaurav",
    address:"jabalpur",
    Mobile:94257856,
    Dob:15/03/1999
},
    {
    name:"gaurav",
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

    let btn = document.createElement("button")
    btn.innerText = "❌"
    box.append(nameslist,btn)
    document.getElementById("dataoutput").append(box)
})