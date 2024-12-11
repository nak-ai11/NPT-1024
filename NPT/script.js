let Slide_number = 0;
const slides_hands = document.querySelectorAll('.slide');
const totalSlides_hands = slides_hands.length;

function showSlide(index) {
    slides_hands.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function autoSlide() {
    Slide_number = (Slide_number + 1) % totalSlides_hands;
    showSlide(Slide_number);
}

// 初回表示
showSlide(Slide_number);

// 自動スライド
setInterval(autoSlide, 5000);

// 手動スライド
document.getElementById('next').addEventListener('click', () => {
    Slide_number = (Slide_number + 1) % totalSlides_hands;
    showSlide(Slide_number);
});

document.getElementById('prev').addEventListener('click', () => {
    Slide_number = (Slide_number - 1 + totalSlides_hands) % totalSlides_hands;
    showSlide(Slide_number);
});


// 検索バーの機能
const searchButton = document.querySelector('.search-bar button');
const searchInput = document.querySelector('.search-bar input');

// 仮のデータとして、商品名リストを作成
const products = ['商品名 1', '商品名 2', '商品名 3', '商品名 4'];

searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    const results = products.filter(product => product.toLowerCase().includes(query));
    
    if (results.length > 0) {
        alert(`検索結果: ${results.join(', ')}`);
    } else {
        alert('該当する商品が見つかりませんでした');
    }
});
