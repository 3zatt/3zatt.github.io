// Fungsi untuk menghitung total pembayaran
function calculateTotal() {
    var product1 = document.getElementById("product-1").value;
    var product2 = document.getElementById("product-2").value;
    var beli1 = document.getElementById("beli-1").value;
    var beli2 = document.getElementById("beli-2").value;
  
    var total = 0;
    var totalp1 = 0;
    var totalp2 = 0;
  
    if (product1 !== "") {
      total += parseInt(product1) * parseInt(beli1);
    }
  
    if (product2 !== "") {
      total += parseInt(product2) * parseInt(beli2);
    }
    if (product1 !== "") {
      totalp1 += parseInt(product1) * parseInt(beli1);
    }
    if (product2 !== "") {
      totalp2 += parseInt(product2) * parseInt(beli2);
    }
  
    document.getElementById("totalp1").value = "Rp. " + totalp1.toLocaleString('id-ID');
    document.getElementById("totalp2").value = "Rp. " + totalp2.toLocaleString('id-ID');
    document.getElementById("total").value = "Rp. " + total.toLocaleString('id-ID');
    document.getElementById("total-bayar").value = "Rp. " + total.toLocaleString('id-ID');
    
  }
  
  // Fungsi untuk melakukan pembayaran
  function submitPayment() {
      var nama = document.getElementById("nama").value;
      var NIM = document.getElementById("NIM").value;
      var jurusan = document.getElementById("jurusan").value;
      var total = document.getElementById("total").value.replace("Rp. ", "");
      
      alert("Pembayaran berhasil!\nNama: " + nama + "\nNIM: " + NIM +  "\nJurusan: " + jurusan + "\nTotal pembayaran: Rp. " + total);
      alert("Terima kasih atas pembayaran Anda!");
  
  }

  