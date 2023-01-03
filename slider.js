// testimoni Buyer 
const DataTestimoni = [
    {
        name: "Sofia Anisa Umma",
        job: "Ketua Muslimat Kota",
        image: "aset/anisa.jpg",
        katanya:
            "Alhamdulillah, bisa ikut merayakan idul adha dengan makan soto mafia. Mantap semua ayam dan sapinya, seger. Dagingnya empuk. Semua jamaah puas, masakannya enak pas dilidah mereka. Soto Ma'fia Keren!!",
    },
    {
        name: "Liem Narendra",
        job: "Pelatih Sepak Bola",
        image: "aset/kohliem.jpg",
        katanya:
            "Tempat stategis dan parkirannya luas. Bagi orang luar kota seperti saya, pemilikny sangat ramah, bahkan tersedia rest area dan charger, sambil makan sotonya sambil wifi-an. Emang Soto Ma'fia Joss!!",
    },
    {
        name: "Fida Mustaghfiroh",
        job: "Karang Taruna Jetayu",
        image: "aset/fidanana.jpg",
        katanya:
            "Pengalaman pertama beli soto frezer dititipi banyak orang. Awalnya takut kalo harganya dinaikin, tapi ternyata disini harganya cukup terjangkau sebanding dengan pelayanannya. Meski harus kirim jauh, tidak ada ongkirnya. Soto sampai ditempat dengan kondisi aman dan masih enak rasanya.",
    },
    {
        name: "Abdullah Haji Manaf",
        job: "Takmir Masjid Agung Kota",
        image: "aset/pakhaji.jpg",
        katanya:
            "Masyaallah, sapi dan ayamnya banyak. Datang ke warung langsung, lihat masaknya bikin ngiler. Warungnya bersih dan banyak mejanya, jadi pas lagi rame tetep dapat tempat. Tempat nyoto yang wenak banget!!!. Soto Ma'fia Hebat!!",
    },
];

// slide now
let i = 0;

// slide total
let j = DataTestimoni.length;

// var frame
let testiContainer = document.getElementById('testi-container');
let nextBTN = document.getElementById('next');
let prevBTN = document.getElementById('prev');


// function 
nextBTN.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimoni();
});
prevBTN.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimoni();
});



// var display
let displayTestimoni = () => {
    testiContainer.innerHTML = `
        <p>${DataTestimoni[i].katanya}</p>
        <img src=${DataTestimoni[i].image}>
        <h3>${DataTestimoni[i].name}</h3>
        <h6>${DataTestimoni[i].job}</h6>
    `;
};


// invoke 
window.onload = displayTestimoni;