function validation(){
    var fName = document.getElementById("fName").value;
    var pNumber = document.getElementById("pNumber").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    
    if(fName != fName.match(/[A-Za-z]{3,}/)){
        alert("Enter Proper Name")
    }

    else if(pNumber != pNumber.match(/[6-9]\d{9}/)){
        alert("Enter Proper Number")
    }

    else if(email != email.match(/[^A-Z]\w+@[a-z]+?\.[a-z]{2,3}/)){
        alert("Enter Proper Email")
    }
    else if(subject != subject.match(/.{2,20}/)){
        alert("Subject Must be between 2-20")
    }
    else{
        alert("Message Sent Successfully")
    }

console.log()
}