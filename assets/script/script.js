let coll = document.getElementsByClassName("collapsible")
for(let i = 0; i < coll.length; i++) {
    coll[i].addEventListener ("click", ()=>{
        let content = coll[i].nextElementSibling
        console.log(coll[i].nextElementSibling)
        if (getComputedStyle(content).display == "block"){
            content.style.display = "none";
        } else{
            content.style.display = "block";
        }
    })
}

