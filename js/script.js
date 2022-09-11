// let pass = document.getElementById("pass")
// let confir = document.getElementById("confir")
// let name = document.getElementById("name")
// let lastname = document.getElementById("lastname")
// let number = document.getElementById("number")
// let email = document.getElementById("email")

let inputs = [document.getElementById("pass"), document.getElementById("confir"), document.getElementById("name"), document.getElementById("lastname"), document.getElementById("number"), document.getElementById("email")]


inputs.map((current, index) => {

    current.addEventListener("change",(e)=> {

        let status = validarInput(e.target)
        console.log(status);
        if(status == false) {

            current.classList.add("wrong")
        } else {
            current.classList.remove("wrong")
            
        }

    })

})


const  validarInput = (element) => {

    let pass = document.getElementById("pass")
    let confir = document.getElementById("confir")

    let regexobj = {
        name_lastname: /^[a-zÀ-ÿ ,.'-]+$/i,
        number: /^\d+$/, 
        email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/   
    }

    let status = false


    if(element.id == "name" || element.id == "lastname" ) {
        regexobj.name_lastname.test(element.value) ? status = true: ""
        
    } else if(element.id == "pass" || element.id == "confir" ) {
        if (pass.value == confir.value || confir.value == pass.value  ) {
            pass.classList.remove("wrong")
            confir.classList.remove("wrong")
            status = true
        }
    }  else if(element.id == "email") {
        regexobj.email.test(element.value) ? status = true: ""
    } else {
        regexobj.number.test(element.value) ? status = true: ""
    }

    return status

}   

