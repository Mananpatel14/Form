const form = document.querySelector("form");


function sendEmail(){

   

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "roypatel14102001@gmail.com",
        Password : "E4C55D8A7D46C61E56E4E0E5C248F4BC9185",
        To : 'roypatel14102001@gmail.com',
        From : "roypatel14102001@gmail.com",
        Subject : subject.value,
        Body : "Name:  " +  document.getElementById("name").value
        + "<br> Email:  " + document.getElementById("email").value
        + "<br> Phone no:  " + document.getElementById("phone").value
        + "<br> Message:  " + document.getElementById("message").value
    }).then(
      message => alert(message)
    );
}


form.addEventListener("submit",(e) => {
    e.preventDefault();

    sendEmail();
});