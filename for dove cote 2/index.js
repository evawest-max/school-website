// mind game starts here
let quest1= document.getElementById("quest1")
let quest2= document.getElementById("quest2")
let resetEl= document.getElementById("reset button")
let ans= document.getElementById("ans")
let multi1= Math.floor(Math.random() * 9)+ 1
let multi2= Math.floor(Math.random() * 9)+ 1
let sum= multi1*multi2
function result(){
    //when even is called set sum to the multiple of the 
    //textcontent and set answer equal sum
    sum=quest1.textContent*quest2.textContent
    ans.textContent= sum
}
function start(){
    //create an array
    //and a for loop were iteration is less than the array lenth

    //set values to multiply= random number
   resetvalue=[1,5,4,3,6,9,]
    for(let i=0; i<resetvalue.length; i++ )
    
    quest1.textContent=Math.floor(Math.random() * resetvalue.length)
    quest2.textContent=Math.floor(Math.random() * resetvalue.length)
}
resetEl.addEventListener("click", function (){
    //when function is called set all values to null
    quest1.textContent=null
    quest2.textContent=null
    ans.textContent=null
}) // mind game ends here


// chat starts here
let deletebutton= document.getElementById("delete")
let sendbutton= document.getElementById("send-El")
let textbox= document.getElementById("textbox-el")
let message= document.getElementById("message-el")
let brake= document.getElementById("brake-el")
let messagelist=[]

sendbutton.addEventListener("click", function(){
    messagelist.pop()
    messagelist.push(textbox.value)
    textbox.value=null
    for (let i=0; i<messagelist.length; i++){
        message.innerHTML += "<br>"+ "<li>" + messagelist[i] + "</li>"
    }
}) // and ends here

let emailValue= getElementById("email-el")
let passwordValue= getElementById("password-el")
let printCheck = getElementById("print-el")
let signIn= getElementById("sign-el")
let email="ebunoluwaakinwumi@gmail.com"
let password=12345678
signIn.addEventListener("click", function(){
    if (emailValue.value===email && passwordHolder.value===password){
        alert("congrats")
    }
    else {
        alert("incorret password")
    }
})



