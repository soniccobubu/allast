const API_URL = "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10";
const API_KEY = "live_1xspfmgMUI2nFbsyb3w98Ruo0b0oLQwSS83X2or3tDXBEfoYJuYhuhTNDUgif6cD";
const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": API_KEY
});
const requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
};

function fetchCatImage() {
    fetch(API_URL, requestOptions)
        .then(response => response.json())
        .then(data => {
            // Получаем контейнер для вывода
            const container = document.getElementById("cat-images");

            // Очищаем контейнер перед добавлением нового изображения
            container.innerHTML = "";

            // Обрабатываем данные (изображение кота)
            data.forEach(item => {
                const img = document.createElement("img");
                img.src = item.url; // URL изображения
                img.alt = "Random Cat";
                img.style.width = "300px";
                img.style.margin = "10px";

                container.appendChild(img);
            });
        })
        .catch(error => console.error("Ошибка при загрузке данных:", error));
}

// Устанавливаем обработчик на кнопку
document.getElementById("load-cat-btn").addEventListener("click", fetchCatImage);

// Загружаем изображение при загрузке страницы
fetchCatImage();