//

var iSoArr = [];

function kiemTra() {
  // Nhap gia tri input vao o

  var iSo = Number(document.getElementById("iSo").value);

  // them gia tri Vao mang
  iSoArr.push(iSo);

  // xu ly va duyet mang
  var tongSoDuong = 0; // Bai 1: Tổng các số dương trong mảng
  var demSoDuong = 0; // bài 2 đếm các số dương trong mảng
  var soNhoNhat = iSoArr[0]; // bai 3: Tìm số nhỏ nhất trong mảng.
  var soDuongNhoNhat = iSoArr[0]; // bai 4: Tìm số dương nhỏ nhất trong mảng.
  //   var demSoChan = 0;
  var soChanCuoiCung = 0; // bai 5: Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1

  //   var sapXepTang = iSoArr; // bai 7: Sắp xếp mảng theo thứ tự tăng dần
  var soNguyenTo = 0; // bai 8: Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về – 1.
  var demSoNguyen = 0; //  bai 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
  // xu ly
  for (var index = 0; index < iSoArr.length; index++) {
    // var value = iSoArr[index];
    if (iSoArr[index] > 0) {
      demSoDuong++;
      tongSoDuong += iSoArr[index];
    }

    if (iSoArr[index] < soNhoNhat) {
      // Cach 1: tim so nho nhat
      soNhoNhat = iSoArr[index];
    }
    // var soNhoNhat = Math.min(...iSoArr); // cach 2: tim so nho nhat

    if (iSoArr[index] < soDuongNhoNhat && iSoArr[index] > 0) {
      soDuongNhoNhat = iSoArr[index];
    }

    if (iSoArr[index] % 2 == 0) {
      soChanCuoiCung = iSoArr[index];
    } else {
      soChanCuoiCung = -1;
    }

    // sapXepTang.sort(function (a, b) {
    //   sapXepTang = iSoArr;
    //   return a - b;
    // });

    // if (iSoArr[index] % soNguyenTo == 0 && iSoArr[index] % 1 == 0) {
    //   soNguyenTo = iSoArr[index];
    //   break;
    // } else {
    //   soNguyenTo = -1;
    // }
  }

  // xuat ra man hinh

  document.getElementById("result").innerHTML = `
   <p class="alert alert-info mt-3 w-75">Dãy số: ${iSoArr} </p>
   <p class="alert alert-info mt-3 w-75">Bài 1: Tổng các số dương: ${tongSoDuong} </p>
   <p class="alert alert-info mt-3 w-75">Bài 2: Các số dương: ${demSoDuong} </p>
   <p class="alert alert-info mt-3 w-75">Bài 3: Số nhỏ nhất: ${soNhoNhat} </p>
    <p class="alert alert-info mt-3 w-75">Bài 4: Số dương nhỏ nhất: ${soDuongNhoNhat} </p>
    <p class="alert alert-info mt-3 w-75">Bài 5: Số chẵn cuối cùng: ${soChanCuoiCung} </p>
    // <p class="alert alert-info mt-3 w-75">Bài 8: Số nguyên tố đầu tiên: ${soNguyenTo} </p>
   `;
}
document.getElementById("kiemTra").addEventListener("click", kiemTra);
