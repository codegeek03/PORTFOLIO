but=document.getElementById("btn");
but.addEventListener("click", function() {
    // Code to be executed when the element is clicked
    var c=confirm("Are you sure about contacting?");
    if(c)
{
    window.open("https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqSwFHCCHFQBvfKpGjBFGMWCSgtXSncwmrvHFBZPWgvTwHSRQthLzZRDPFcBpzHFdvXKcL");
}
  });

var res=document.getElementById("cv")
res.addEventListener("click",function(){
    var cvUrl = "https://github.com/codegeek03/python-codes/blob/main/Profile.pdf"; // Replace with the actual path to your CV file
    var link = document.createElement("a");
    link.href = cvUrl;
    link.download = "cv.pdf"; // Specify the desired name for the downloaded file
    link.click();
})