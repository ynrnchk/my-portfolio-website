function validateForm() {
    var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
        keyboard: false
    })
    var name = document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.name').innerHTML = "Name cannot be empty";
        document.querySelector('.name').style.color = "#FF0000";
        return false;
    }
    var email = document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.mail').innerHTML = "Email cannot be empty";
        document.querySelector('.mail').style.color = "#FF0000";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            document.querySelector('.mail').innerHTML = "Email format invalid";
            document.querySelector('.mail').style.color = "#FF0000";
            return false;
        }
    }
    var subject = document.getElementById('subject').value;
    if (subject == "") {
        document.querySelector('.sub').innerHTML = "Subject cannot be empty";
        document.querySelector('.sub').style.color = "#FF0000";
        return false;
    }
    var message = document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.mes').innerHTML = "Message cannot be empty";
        document.querySelector('.mes').style.color = "#FF0000";
        return false;
    }
    myModal.toggle()

    sendEmail(email, subject, message);
};

function sendEmail(email, subject, message) {
    location.href = "mailto:"+"yronchyk@edu.cdv.pl"+'?cc='+email+'&subject='+subject+'&body='+message;

    // Email.send({
    //   Host: "smtp.gmail.com",
    //   Username: "yana12rona@gmail.com",
    //   Password: "53510410yr1",
    //   To: 'yronchyk@edu.cdv.pl',
    //   From: email,
    //   Subject: subject,
    //   Body: message,
    // })
    //   .then(function (message) {
    //     alert("mail sent successfully")
    //   });
}

function onChangeInputField() {
    const productrows = document.querySelectorAll(".productrow");

    let totalSum = 0;

    productrows.forEach(productrow => {
        const hourlyRate = Number(productrow.querySelectorAll("td")[1].innerText);
        const hoursValue = Number(productrow.querySelectorAll("td")[2].querySelector("input").value);
        const sum = hourlyRate * hoursValue;

        productrow.querySelectorAll("td")[3].innerText = sum;

        totalSum += sum;
    });

    document.querySelector("#totalsumrow").querySelectorAll("td")[3].innerText = totalSum;
}