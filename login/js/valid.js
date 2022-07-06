const register = document.getElementById('register');
const login = document.getElementById('login');

const in_email = document.getElementById('in_email');
const in_password = document.getElementById('in_password');

const email = document.getElementById('email');
const fullname = document.getElementById('fullname');
const password = document.getElementById('password');
const cf_password = document.getElementById('password_confirmation')


let checkValidate_email = false;
let checkValidate_name = false;
let checkValidate_password = false;
let checkValidate_cf_password = false;
let checkMail_used = true;

function checkError(input, message) {
    const formCheck = input.parentElement;
    formCheck.className = "form-group invalid";
    const formMess = formCheck.querySelector('span');
    formMess.innerText = message;
}

function checkSucces(input, message) {
    const formCheck = input.parentElement;
    formCheck.className = "form-group";
    const formMess = formCheck.querySelector('span');
    formMess.innerText = message;
}

function checkNull(input) {
    if (input.value.trim() === "") {
        checkError(input, "Vui lòng nhập trường này!");
        checkValidate_name = false;
    } else {
        checkSucces(input, '');
        checkValidate_name = true;
    }
}

function checkMail(input) {
    const rule = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!rule.test(input.value.trim())) {
        checkError(input, "Email không hợp lệ");
        checkValidate_email = false;
    } else {
        checkValidate_email = true;
    }
}

// function checkUsedMail(input) {
//     if (!checkMail_used) {
//         checkError(input, "Email đã sử dụng!");
//     }
// }

function checkPassword(input) {
    const rule1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (rule1.test(input.value.trim())) {
        checkSucces(input, '');
        checkValidate_password = true;
    } else {
        checkError(input, "Mật khẩu yêu cầu ít nhất 8 kí tự gồm chữ in hoa, chữ số, chữ cái thường");
        checkValidate_password = false;
    }
}

function check_Confir_Password(input1, input2) {
    if (input1.value !== input2.value) {
        checkError(input2, "Nhập mật khẩu không khớp!");
        checkValidate_cf_password = false;
    } else {
        checkValidate_cf_password = true;
    }
}

email.addEventListener("blur", async function(e) {
    e.preventDefault();
    checkMail(email);
    checkNull(email);
})
in_email.addEventListener("blur", async function(e) {
    e.preventDefault();
    checkMail(in_email);
    checkNull(in_email);
})

fullname.addEventListener("blur", function(e) {
    e.preventDefault();
    checkNull(fullname)
})

password.addEventListener("blur", function(e) {
    e.preventDefault();
    checkNull(password);
    checkPassword(password);
})
in_password.addEventListener("blur", function(e) {
    e.preventDefault();
    checkNull(in_password);
    checkPassword(in_password);
})
cf_password.addEventListener("blur", function(e) {
    e.preventDefault();
    checkNull(cf_password);
    checkPassword(cf_password);
    check_Confir_Password(password, cf_password);
})

//Check logic trang Đăng kí
register.addEventListener('submit', async function(e) {
    e.preventDefault();
    checkNull(fullname);
    checkNull(email);
    checkMail(email);
    checkPassword(password);
    checkPassword(cf_password);
    checkNull(cf_password);
    checkNull(password);
    check_Confir_Password(password, cf_password);
    checkUsedMail(email);
});

//Check logic trang Đăng nhập
login.addEventListener('submit', function(e) {
    e.preventDefault();
    checkMail(in_email);
    checkPassword(in_password);
})