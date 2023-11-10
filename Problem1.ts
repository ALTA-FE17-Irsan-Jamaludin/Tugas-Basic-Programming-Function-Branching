// Problem 1 - Konversi Nilai
// Seorang Dosen sedang memeriksa ujian mahasiswa dan akan memberikan nilai
//pada mahasiswa dengan A, B+, B, C, & D. dan kriteria penilaian dosen adalah sebagai berikut:

// Nilai Number
// Nilai Huruf
// 80 sampai 100 A
// 65 sampai 79 B+
// 50 sampai 64 B
// 35 sampai 49 C
// 0 sampai 34 D

const konversiNilai = (nilai: number): string => {
  if (nilai >= 80 && nilai <= 100) {
    return "A";
  } else if (nilai >= 65 && nilai < 80) {
    return "B+";
  } else if (nilai >= 50 && nilai < 65) {
    return "B";
  } else if (nilai >= 35 && nilai < 50) {
    return "C";
  } else if (nilai >= 0 && nilai < 35) {
    return "D";
  } else {
    return "Input angka dari 0 - 100";
  }
};

console.log(konversiNilai(80));
console.log(konversiNilai(65));
console.log(konversiNilai(50));
console.log(konversiNilai(35));
console.log(konversiNilai(0));
console.log(konversiNilai(-2));
console.log(konversiNilai(101));
