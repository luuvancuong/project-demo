function layGiaTriCu(){
    return document.getElementById('gia_tri_cu').innerText;
}

function inGiaTriCu(so){
    return document.getElementById('gia_tri_cu').innerText = so;
}

function layKetQua(){
    return document.getElementById('gia_tri_xuat').innerText;
}

function inKetQua(so){
    if(so == ""){
        return document.getElementById('gia_tri_xuat').innerText = so;
    } else {
        document.getElementById('gia_tri_xuat').innerText = dinhDang(so);
    }
}

function dinhDang (so){
    var n = Number(so);
    var gia_tri = n.toLocaleString('en');
    return gia_tri;
}

function xoaDinhDang(so){
    return Number(so.replace(/,/g, ''));
}

var conSo = document.getElementsByClassName('con_so');
for (var i = 0; i < conSo.length; i++) {
    conSo[i].addEventListener('click', function(){
        var ket_qua = xoaDinhDang(layKetQua());
        if (ket_qua != NaN) {
            ket_qua = ket_qua + this.id;
            inKetQua(ket_qua)

        }
    })
}

var heThong = document.getElementsByClassName('he_thong');
for (let i = 0; i < heThong.length; i++) {
    heThong[i].addEventListener('click', function(){
        if (this.id ==='xoa_tat_ca') {
            inKetQua("");
            inGiaTriCu("")
        } else if (this.id === 'xoa_tung_so') {
            let ket_qua = xoaDinhDang(layKetQua()).toString();
            if (ket_qua){
                ket_qua = ket_qua.substr(0, ket_qua.length -1);
                inKetQua(ket_qua);
            }
        } else {
            ket_qua = layKetQua();
            var ket_qua_cu = layGiaTriCu();
            if (ket_qua != ""){
                ket_qua = xoaDinhDang(ket_qua);
                ket_qua_cu = ket_qua_cu + ket_qua;
                if (this.id == '=') {
                    var ket_qua_cuoi = eval(ket_qua_cu);
                    inKetQua(ket_qua_cuoi);
                    var tinh = '';
                    inGiaTriCu('');
                } else {
                    ket_qua_cu = ket_qua_cu + this.id;
                    inGiaTriCu(ket_qua_cu);
                    inKetQua("");
                }
            }
        }
    })
    
}