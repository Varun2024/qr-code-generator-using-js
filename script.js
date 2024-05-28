// - (hyphen): not allowed in js name convention
const qrText = document.getElementById('qr-text');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const sizes = document.getElementById('sizes');

let size = sizes.value;
qrContainer =  document.querySelector('.qr-body');
// e is the parameter
generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();
});
// change- when there is a change in the sizes select this will be called
sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    isEmptyInput();
});

downloadBtn.addEventListener('click',()=>{
    let img = document.querySelector('qr-body img');
    // getattribute: returns the specified attribute
    // setattribute: changes the value of the specified attribute
    if(img !==null){
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href",imgAtrr);
    }
    else{
        downloadBtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);
    }
})

function isEmptyInput(){
    if(qrText.value.length > 0){
        generateQRCode();
    }
    else{
        alert("Enter the text or URL to generate your QR code")
    }
}

function generateQRCode(){
    qrContainer.innerHTML="";
    new QRCode(qrContainer,{
       text:qrText.value,
       height: size,
       width:size ,
       colorLight: "#ffff",
       colorDark: "#000", 
    })
}

