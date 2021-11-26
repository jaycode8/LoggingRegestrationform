function ray(){
    let x=document.getElementById('pass')
    
    if (x.type==='password'){
        x.type='text'
        document.getElementById('hidden').style.display='inline-block'
        document.getElementById('show').style.display='none'
    }
    else{
        x.type='password'
        document.getElementById('hidden').style.display='none'
        document.getElementById('show').style.display='inline-block'
    }
}

function ray2(){
    let x=document.getElementById('pass1')
    let y=document.getElementById('pass2')
    
    if (x.type==='password'){
        x.type='text'
        y.type='text'
        document.getElementById('hidden1').style.display='inline-block'
        document.getElementById('show1').style.display='none'
    }
    else{
        x.type='password'
        y.type='password'
        document.getElementById('hidden1').style.display='none'
        document.getElementById('show1').style.display='inline-block'
    }
}

function shift(){
    let logForm=document.getElementById('log')
    let RegForm=document.getElementById('reg')
    let toLog=document.getElementById('toLog')
    let toReg=document.getElementById('toReg')

    toLog.onclick = () =>{
        logForm.style.transform='translateX(0%)'
        RegForm.style.transform='translateX(-100%)'
    }
    toReg.onclick = () =>{
        logForm.style.transform='translateX(100%)'
        RegForm.style.transform='translateX(0%)'
    }
    
}

function validate(){
    if(document.myForm.email.value==''){
        document.myForm.email.style.borderBottom='2px solid red'
        document.myForm.email.style.caretColor='red'
        document.myForm.email.focus()
        return false
    }
    if(document.myForm.userName.value==''){
        document.myForm.userName.style.borderBottom='2px solid red'
        document.myForm.userName.style.caretColor='red'
        document.myForm.userName.focus()
        return false
    }
    if(document.myForm.pass.value==''){
        document.myForm.pass.style.borderBottom='2px solid red'
        document.myForm.pass.style.caretColor='red'
        document.myForm.pass.focus()
        return false
    }
    if(document.myForm.passcon.value==''){
        document.myForm.passcon.style.borderBottom='2px solid red'
        document.myForm.passcon.style.caretColor='red'
        document.myForm.passcon.focus()
        return false
    }
    if(document.myForm.pass.value!=document.myForm.passcon.value){
        document.myForm.pass.style.color='red'
        document.myForm.pass.style.borderBottom='2px solid red'
        document.myForm.pass.style.caretColor='red'
        document.myForm.passcon.style.color='red'
        document.myForm.passcon.style.borderBottom='2px solid red'
        document.myForm.passcon.style.caretColor='red'
        document.myForm.pass.focus()
        return false
    }
}

function heyYou(){
    if(document.logForm.userName.value==''){
        document.logForm.userName.style.borderBottom='2px solid red'
        document.logForm.userName.style.caretColor='red'
        document.logForm.userName.focus()
        return false
    }
    else if(document.logForm.passn.value==''){
        document.logForm.passn.style.borderBottom='2px solid red'
        document.logForm.passn.style.caretColor='red'
        document.logForm.passn.focus()
        return false
    }
    else{
        alert(`Welcome ${document.logForm.userName.value}`)
        return false
    }
}