but=document.getElementById("btn");
but.addEventListener("click", function() {
    // Code to be executed when the element is clicked
    var c=confirm("Are you sure about contacting?");
    if(c)
{
    window.open("https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqSwFHCCHFQBvfKpGjBFGMWCSgtXSncwmrvHFBZPWgvTwHSRQthLzZRDPFcBpzHFdvXKcL");
}
  });
