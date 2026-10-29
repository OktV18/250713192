function fn_Valform(){
    var sMsg = "";
    var xINput;
    var xumur;
    var xkat;

    if (document.getElementById("nama").value == ""){
        sMsg += "\n* Anda belum mengisikan nama";
    }

    if (document.getElementById("email").value == ""){
        sMsg += "\n* Anda belum mengisikan email";
    }

    if (document.getElementById("umur").value == ""){
        sMsg += "\n* Anda belum mengisikan umur";
    }else{
        if ("umur" <= 25){
            xumur = "\n* Peserta Mahasiswa";
        }else{
            xumur = "\n* Peserta Umum";
        }
    }

    if (document.getElementById("kategori").value == ""){
        sMsg += "\n* Anda belum mengisikan kategori";
    }else{
        switch(xInput){
            case "W":
                xinput = "\n Workshop";
                break;
            
            case "S":
                xinput = "\n Seminar";
                break;
            
            case "L":
                xinput = "\n Lomba Coding";
                break;
            
            default:
                alert("Kategori tidak tersedia");
        }
    }

    if(sMsg != ""){
        alert("Peringatan:\n" + sMsg);
        return false;
    }else{
        alert("Terima kasih " + document.getElementById(nama).value + "! Anda telah terdaftar di acara " + xinput + xumur);
        return true;
    }
}