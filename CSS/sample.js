
let age=Number (prompt("enter your age"))
if(age>=18 && age<=60){
    alert("enter y for yes / n for no for below qus")
    let sugar=prompt("enter whether you hae sugar?")
    let bp=prompt("enter whether you hae bp?")
    if(sugar=='y'||bp=='y'){
        console.log("not eligiblecoz of bp/sugar")
    }
    else{
       let surgery=prompt("have you indergoan any surgery in past one year ?")
       if(surgery=='y'){
         console.log("not eligible coz of surgery")
        }
        else{
         console.log("eligible")
        }
    }
}
else{
    console.log("not eligible")
}    