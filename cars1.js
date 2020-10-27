var btn=document.getElementById("register");
btn.addEventListener('click',addDetails)
function addDetails(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var mobile=document.getElementById("mobile").value;
    var pincode=document.getElementById("pincode").value;
    var dealer=document.getElementById("dealer").value;
    var para=document.getElementById("output")
    if(name==' '|| email==''|| mobile==''|| pincode==''|| dealer==''){
       para.textContent="*Please fill all the required" 
       para.style.color="red";
   }
    
    else{
      var name=document.getElementById("name").value;
        var show=document.getElementById("aside");
        show.setAttribute('id','successMessage')
        show.textContent="Thank You "+name;
    }
 } 
 
 