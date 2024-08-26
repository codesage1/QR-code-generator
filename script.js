//all the variables for selections
let qrAPI = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
let imgBox = document.querySelector('#imgBox')
let qrImage=document.querySelector('#qrImage')
let qrText=document.querySelector('#qrText')
let button=document.querySelector('button')
let input=document.querySelector('input')

//function
function generateQR(){
    let link=input.value
     if(link.length>0){
     qrImage.src=qrAPI+link
     console.log(imgBox)
     imgBox.classList.add("show-img")
     input.value=""
     input.placeholder="Here is your QR code."
    }else{
        qrText.classList.add("error")
        setTimeout(()=>{
            qrText.classList.remove("error");
        },1000)
    }
}

//event listener
button.addEventListener('click',function(e){
   generateQR()
})