/Lưu dữ liệu đầu vào trên LocalStor/

function check_used() {
    let get_name = JSON.parse(localStorage.getItem("fullname"));
    console.log(get_name);
    if (localStorage.getItem("fullname")) {
        window.location.replace("../index.html");
    }
}
check_used();

/-----------------------------------------------------------------------/

/*Khi log out ra*/
function logout() {
    localStorage.removeItem("fullname");
    localStorage.removeItem("mail");
    window.location.replace("../index.html");
}

/-----------------------------------------------------------------------/

let urlApi = "https://616a37c716e7120017fa0edb.mockapi.io/api/account";

function createUser(data, callback) {
    let option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    fetch(urlApi, option)
        .then(function(response) {
            response.json();
        })
        .then(callback);
}

function createInfor() {
    let createBtn = document.querySelector('#create');
    createBtn.onclick = async function() {
        let fullname = document.querySelector('#fullname').value;
        let email = document.querySelector('#email').value;
        let password = document.querySelector('#password').value;

        let obj_checkMail = await getUser(email)
        console.log(obj_checkMail.length);
        if (obj_checkMail.length > 0 && email.length > 0) {
            alert("Email đã được sử dụng! Vui lòng thử email khác");

        } else if (checkValidate_email && checkValidate_name && checkValidate_password && checkValidate_cf_password && obj_checkMail.length === 0) {
            let formData = {
                fullname: fullname,
                email: email,
                password: password
            };
            createUser(formData);
            alert("Đăng kí thành công!");
            document.getElementById("#create").addEventListener = toggleForm();
        }
    }
}
createInfor();


/-------------------------------------------------/

async function getUser(email) {
    let option = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        // body: JSON.stringify(data)
    };
    let urlApi2 = `https://616a37c716e7120017fa0edb.mockapi.io/api/account?email=${email}`;

    let response = await fetch(urlApi2, option);
    return await response.json();
}

function checkInfor() {
    let logBtn = document.querySelector('#btnlogin');
    logBtn.onclick = async function() {
        let email = document.querySelector('#in_email').value;
        let password = document.querySelector('#in_password').value;
        let data = await getUser(email);
        console.log(data);
        if (data.length === 0) {
            alert("Tài khoản chưa được tạo!");
        } else if (data.length === 1) {
            if (data[0].password === password) {
                localStorage.setItem("fullname", JSON.stringify(data[0].fullname));
                localStorage.setItem("email", JSON.stringify(data[0].email));
                window.location.replace("../index.html");
            } else {
                alert("Vui lòng nhập lại mật khẩu!");
            }
            document.querySelector('#btn_Logout').classList.remove("btn_hidden");
        }
    }
}
checkInfor();

/----------------------------------------------------------------------------/