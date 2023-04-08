const passField = document.querySelector("input");
const showBtn = document.querySelector("span i");
showBtn.onclick = (()=>{
  if(passField.type === "password"){
    passField.type = "text";
    showBtn.classList.add("hide-btn");
  }else if(passField.type !== "password"){
    passField.type = "password";
    showBtn.classList.remove("hide-btn");
  }

});
function showpass(){
    var content = document.getElementById("content").textContent;
    navigator.clipboard.writeText(content);
    alert("đã copy hãy ấn lưu")
}
function showContent() {
    var password = document.getElementById("password");
    if (password.value === "24032003") {
        
      document.getElementById("copyBtn").style.display = "block";
      document.getElementById("content").style.display = "block";
      document.getElementById("content").innerHTML="U2NZJVTHNM43S6QKJNWMSWLF7DWK3LXO"
      document.getElementById("madangnhap").style.display = "block";
      document.getElementById("anhfb").style.display = "block";
      document.getElementById("button_enter").style.display = "none";
      var content = document.getElementById("content").textContent;
      navigator.clipboard.writeText(content);
    } else if(password.value !== "24032003"){
      alert("Sai mật khẩu hãy nhập lại!");
    }
    
  }
  function copyContent() {
    if (confirm("Đã sao chép nội dung sau khi sao chép hãy dán vào ô KEY 2FA để lấy mã nhé a!\nNhấn OK để mở trang web")) {
        var content = document.getElementById("content").textContent;
        navigator.clipboard.writeText(content);
        window.open("https://lay2fa.com/2fa-otp");
      }
      
  }