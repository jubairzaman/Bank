document.getElementById('login-button').addEventListener('click', function () {
    //emailvalue
    const emailfield = document.getElementById('email');
    const emailvalue = emailfield.value;
    //passsword value
    const passfield = document.getElementById('password');
    const passvalue = passfield.value;
    //check email & pass

    if (emailvalue == 'sontan@baap.com' && passvalue == '123456') {

        window.location.href = 'banking.html';

    }



})

// diposit button 



