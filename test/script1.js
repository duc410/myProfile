function myFunction() {
    let x = document.getElementById("input-x").value;
    let y = document.getElementById("input-y").value;
    let tong = parseInt(x) + parseInt(y);
    document.getElementById("x").innerHTML = x;
    document.getElementById("y").innerHTML = y;
    document.getElementById("tong").innerHTML = tong;
}