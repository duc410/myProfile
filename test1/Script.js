let user={
    "UserName":"noobmaster@gmail.com",
    "Password":"c"
}
$('.toast').toast({
    "delay":300
});
function myFunction(){
    let taiKhoan=document.getElementById("InputEmail").value;
    let matKhau=document.getElementById("InputPassword").value;
    if (taiKhoan==""&&matKhau==""){
        document.getElementById("02").innerHTML="ban phai nhap thong tin!" ;
        $('#Login-fail').toast('show');
        
    }
    else if(taiKhoan!=user.UserName&&matKhau==user.Password){
        document.getElementById("02").innerHTML="username nhap sai !" ;
        $('#Login-fail').toast('show');
    }
    else if(taiKhoan==user.UserName&&matKhau!=user.Password){
        document.getElementById("02").innerHTML="password nhap sai !" 
        $('#Login-fail').toast('show');
    }
    else if(taiKhoan==user.UserName&&matKhau==user.Password){
        document.getElementById("01").innerHTML="Dang Nhap Thanh Cong !" ;
        $('#Login-success').toast('show');
            Redirect();
    }
    else{
        document.getElementById("02").innerHTML="Tai khoan khong ton tai !"    
        $('#Login-fail').toast('show');
    }    
}
 function Redirect() {
    window.location="index1.html";
 }