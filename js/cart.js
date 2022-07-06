document.getElementById("showcart").style.display = "none";

let giohang = new Array();

function themvaogiohang(x) {
    let listSp = localStorage.getItem("listSp");
    giohang1 = JSON.parse(listSp);

    let boxsp = x.parentElement.parentElement.children;
    let hinh = boxsp[0].children[0].children[0].src;
    let gia = boxsp[1].children[1].innerText;
    let tensp = boxsp[1].children[0].innerText;
    let soluong = boxsp[1].children[2].value;
    let sp = {
        hinh: hinh,
        gia: gia,
        tensp: tensp,
        soluong: soluong,
    }
    if (giohang1 == null) {
        giohang.push(sp)
        localStorage.setItem("listSp", JSON.stringify(giohang))
        document.getElementById("countsp").innerHTML = "1";
    } else {
        giohang1.push(sp);
        localStorage.setItem("listSp", JSON.stringify(giohang1))
        document.getElementById("countsp").innerHTML = giohang1.length;
    }
    showcart()
}
function showcountsp() {
    document.getElementById("countsp").innerHTML = giohang.length;
}
function showcart() {
    let x = document.getElementById("showcart");
    if (x.style.display == "block") {
        x.style.display = "none"

    } else {
        x.style.display = "block"
    }
}

function showcart() {
    let x = document.getElementById("showcart");

    if (x.style.display == "block") {
        x.style.display = "none"
    } else {
        let tt = document.getElementById("showmycart")
        tt.innerHTML = ""
        x.style.display = "block"
        let listSp = localStorage.getItem("listSp");
        let giohang = JSON.parse(listSp);
        if (giohang == null) {
            document.getElementById("countsp").innerHTML = "0"
            document.getElementById("sumCart").innerHTML = "0"
            return;
        }
        const counts = {};
        giohang.forEach(item => {
            let key = JSON.stringify(item['tensp'])
            counts[key] = (counts[key] || 0) + 1;
        })
        let unique = [...new Set(giohang.map(item => item.tensp))];
       

        let ttgh = ""
        let sum = 0;
        for (let i = 0; i < unique.length; i++) {
            let soluong =  Number.parseInt(counts[`"${giohang[i]['tensp']}"`]);
            let gia =  (giohang[i]['gia'].slice(0,giohang[i]['gia'].length - 2)).replaceAll('.', '');
            sum = gia*soluong;

            ttgh += '<tr>' +
                '<td>' + (i + 1) + '</td>' +
                '<td><img src="' + giohang[i]['hinh'] + '"></td>' +
                '<td>' + giohang[i]['tensp'] + '</td>' +
                '<td>' + giohang[i]['gia'] + '</td>' +
                '<td>' + soluong + '</td>' +
                '<td>' +
                '    <div>' + sum + ' </div>' +
                '</td>' +
                '<td>' +
                '    <button onclick="xoa(this)">X</button>' +
                '</td>' +
                '</tr>'
        }
        tt.innerHTML = ttgh;
    }
}
function xoa(x) {
    var box = x.parentElement.parentElement.children;
    var tensp = box[2].innerHTML
    let listSp = localStorage.getItem("listSp");
    let giohang = JSON.parse(listSp);
    console.log(box[2].innerHTML, giohang)
    for (let i = 0; i < giohang.length; i++) {
        if (giohang[i]['tensp'] == tensp) {
            giohang.splice(i, 1)
            break;
        }
    }
    localStorage.setItem("listSp", JSON.stringify(giohang))
    showcart();
    document.getElementById("countsp").innerHTML = giohang.length
}

window.onload = function loadCout() {
    let listSp = localStorage.getItem("listSp");
    let giohang = JSON.parse(listSp);
    if (giohang == null) {
        document.getElementById("countsp").innerHTML = "0"
    } else {
        document.getElementById("countsp").innerHTML = giohang.length
    }
}


