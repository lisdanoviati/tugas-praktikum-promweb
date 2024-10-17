document.getElementById("id-name").innerText ="KOM B"

const age= document.getElementsByClassName("age")
for (let i=0; i < age.leght; i++) {
   age[i].innerText = "paragraf" + i
}

const lab= document.getElementsByTagName("h4")
for (let i=0; i < lab.leght; i++) {
    lab[i].innerText = "jaringan" + (i+1)
}