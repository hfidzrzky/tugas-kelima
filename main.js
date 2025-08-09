// a. Array data produk
// Menambahkan properti 'kategori' untuk persiapan fitur filter
const products = [
    {
        nama: "Laptop Canggih",
        harga: 12000000,
        deskripsi: "Laptop performa tinggi untuk kerja dan gaming.",
        gambar: "https://placehold.co/300x200/blue/white?text=Laptop",
        kategori: "Elektronik"
    },
    {
        nama: "Kaos Polos",
        harga: 150000,
        deskripsi: "Kaos katun nyaman untuk dipakai sehari-hari.",
        gambar: "https://placehold.co/300x200/green/white?text=Kaos",
        kategori: "Pakaian"
    },
    {
        nama: "Smartphone Flagship",
        harga: 8500000,
        deskripsi: "Kamera jernih dan prosesor super cepat.",
        gambar: "https://placehold.co/300x200/red/white?text=Smartphone",
        kategori: "Elektronik"
    },
    {
        nama: "Sepatu Lari",
        harga: 750000,
        deskripsi: "Sepatu ringan dan empuk untuk jogging.",
        gambar: "https://placehold.co/300x200/orange/white?text=Sepatu",
        kategori: "Pakaian"
    },
    {
        nama: "Headphone Wireless",
        harga: 950000,
        deskripsi: "Nikmati musik tanpa kabel dengan suara jernih.",
        gambar: "https://placehold.co/300x200/purple/white?text=Headphone",
        kategori: "Elektronik"
    },
    
    {
        nama: "Handphone",
        harga: 950000,
        deskripsi: "Hp canggih serbaguna.",
        gambar: "https://placehold.co/300x200/purple/white?text=Handphone",
        kategori: "Elektronik"
    }
];

// Menyeleksi elemen kontainer produk dari HTML
const productListContainer = document.getElementById('product-list');

// b. Fungsi untuk menampilkan produk menggunakan looping
function displayProducts(productsToDisplay) {
    // Kosongkan kontainer terlebih dahulu
    productListContainer.innerHTML = '';

    // Lakukan looping untuk setiap produk di dalam array
    productsToDisplay.forEach(product => {
        // Format harga ke dalam format Rupiah
        const formattedPrice = `Rp ${product.harga.toLocaleString('id-ID')}`;

        // Buat elemen HTML untuk setiap produk (product card)
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.gambar}" alt="${product.nama}">
            <h3>${product.nama}</h3>
            <p class="price">${formattedPrice}</p>
            <p class="description">${product.deskripsi}</p>
        `;

        // Masukkan kartu produk ke dalam kontainer
        productListContainer.appendChild(productCard);
    });
}

// Panggil fungsi untuk menampilkan semua produk saat halaman pertama kali dimuat
displayProducts(products);