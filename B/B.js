function roll(){
    var inputNumber = document.getElementById('inp').value;
    var reg = /^[0-9]/;
    var cout = 0;
    if(inputNumber == '' || !reg.test(inputNumber) && inputNumber<0 || inputNumber>10)
        alert('Bạn cần nhập vào một số từ 0 đến 10');
    else{
        do{
            var randomNum =  Math.floor(Math.random() * 11);
            
            if(inputNumber == randomNum){
                alert('BẠN ĐÃ NHẬP ĐÚNG SỐ MAY MẮN ĐÓ LÀ ' + randomNum);
            }
            else{
                alert("BẠN ĐÃ NHẬP SAI!!! SỐ MAY MẮN ĐÓ LÀ " + randomNum);
                cout++;
            }
        }while(cout == 3);
    }
}