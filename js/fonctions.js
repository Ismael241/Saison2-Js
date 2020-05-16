
/* Episode 10*/
/*function check(){
    var nbr;
    nbr = Number(document.getElementById("myInput").value);
    if(nbr%2 == 0)
    {
           alert("Nombre pair");
    }
    else
    {
           alert("Nombre impair");
    }
}*/

/* Episode 2*/
 
/*function passwordtest() { 
    var msg; 
    var str = document.getElementById("motdepasse").value; 
    if (str.match( /[0-9]/g) && 
            str.match( /[A-Z]/g) && 
            str.length >=8) 
        msg = "<p style='color:green'>Mot de passe fort.</p>"; 
    else 
        msg = "<p style='color:red'>Mot de passe trop court.</p>"; 
    document.getElementById("msg").innerHTML= msg; 
} */

/*Episode 1*/

function checkEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validate() {
    var email = document.getElementById("email").value;

    if (checkEmail(email)) {
        alert('Adresse e-mail valide');
    } else {
        alert('Adresse e-mail non valide');
    }
    return false;
}
 