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
const fileUrl = 'https://github.com/codegeek03/python-codes/blob/main/Profile.pdf';
const fileName = 'myFile.pdf';
downloadFile(fileUrl, fileName);
function downloadFile(url, filename) {
    const anchorElement = document.createElement('a');
    anchorElement.href = url;
      anchorElement.download = filename;
    anchorElement.style.display = 'none';
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
  }
  