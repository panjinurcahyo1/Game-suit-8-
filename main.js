let userScore = 0; //menyimpan skor dari pengguna
let computerScore = 0; //menyimpan skor dari komputer
const userScore_span = document.getElementById("user-score"); //elemen html yang menampilkan skor pengguna di layar
const computerScore_span = document.getElementById("computer-score"); //elemen html yang menampilkan skor komputer di layar
const scoreBoard_div = document.querySelector(".score-board"); //menyimpan elemen html yang menunjukan papan skor
const result_p = document.querySelector(".result > p") //elemen html yang menampilkan hasil pertandingan

//tombol di html untuk memilih gajah, manusia, atau semut
const gajah_div = document.getElementById("g"); 
const manusia_div = document.getElementById("m");
const semut_div = document.getElementById("s");

//fungsi ini mengembalikan pilihan acak komputer dari array 'choices' yang berisi g,m,s
function getComputerChoice(){
    const choices = ['g', 'm', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//fungsi untuk mengonversi karakter menjadi kata yang sesuai
function convertToWord(letter) {
    if (letter === "g") return "Gajah";
    if (letter === "m") return "Manusia";
    if (letter === "s") return "Semut";
}

//fungsi untuk menang
function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = `${convertToWord (userChoice)} VS ${convertToWord (computerChoice)}. Kamu menang!`;
} 

//fungsi untuk kalah
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = `${convertToWord (userChoice)} VS ${convertToWord (computerChoice)}. Kamu kalah!`;
} 

//fungsi untuk seri
function draw(userChoice, computerChoice) {
    result_p.innerHTML = `${convertToWord (userChoice)} VS ${convertToWord (computerChoice)}. Kamu seri!`;
} 

//fungsi utama permainan
function game(userChoice) {
    const computerChoice = getComputerChoice();
    result_p.textContent = "Komputer memilih..";

    // Setelah jeda waktu, komputer akan memilih dan hasil akan ditampilkan
    setTimeout(() => {
        switch (userChoice + computerChoice) {    
            case "gm":
            case "ms":
            case "sg":
                win(userChoice, computerChoice);
                break;
            case "gs":
            case "mg":
            case "sm":
                lose(userChoice, computerChoice);
                break;
            case "gg":
            case "mm":
            case "ss":
                draw(userChoice, computerChoice);
                break;
        }
    }, 1000); // angka 1000 milidetik = 1 detik
}

//fungsi utama yang menambahkan event listener ke elemen html untuk setiap pilihan
function main () {
gajah_div.addEventListener('click', () => game("g"));
manusia_div.addEventListener('click', () => game("m"));
semut_div.addEventListener('click', () => game("s"));
}

//memanggil fungsi main untuk memulai permainan
main ();