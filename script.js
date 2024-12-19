function myFunction() {
    var x = document.getElementById("demo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
document.addEventListener('DOMContentLoaded', function () {
    // *** Переключення кольору тексту таблиці ***
    const gTable = document.querySelector('.g-table');
    const changeColorBtn = document.getElementById('changeColorBtn');

    if (gTable && changeColorBtn) {

        changeColorBtn.addEventListener('click', () => {
            gTable.style.color = gTable.style.color === 'blue' ? 'black' : 'blue';
        });
    }

    // *** Селектор для зміни розміру шрифта елементів з класом .text ***
    const fontSizeSelector = document.getElementById('font-size-selector');
    const textElements = document.querySelectorAll('.text');

    if (fontSizeSelector) {
        fontSizeSelector.addEventListener('change', (event) => {
            const selectedFontSize = event.target.value;
            textElements.forEach((element) => {
                element.style.fontSize = selectedFontSize;
            });
        });
    }

    // *** Слайдер для зміни розміру шрифта у таблицях .grid-table та .g-table ***
    const fontSizeSlider = document.getElementById('font-size-slider');
    const gridTable = document.querySelector('.grid-table');
    const gTableElements = document.querySelectorAll('.g-table, .grid-table');

    if (fontSizeSlider) {
        fontSizeSlider.addEventListener('input', function () {
            const newFontSize = fontSizeSlider.value + 'px';
            gTableElements.forEach((table) => {
                table.style.fontSize = newFontSize;
            });
        });
    }

    // *** Слайдер для зміни ширини таблиці та кнопка скидання ***
    const tableWidthSlider = document.getElementById('table-width-slider');
    const resetButton = document.getElementById('reset-button');
    const resizableTable = document.getElementById('resizable-table');

    const initialFontSize = '16px';
    const initialWidth = '50%';

    if (tableWidthSlider && resizableTable && resetButton) {
        tableWidthSlider.addEventListener('input', function () {
            resizableTable.style.width = tableWidthSlider.value + 'px';
        });

        resetButton.addEventListener('click', function () {
            tableWidthSlider.value = 800; // Встановити значення за замовчуванням
            resizableTable.style.width = '800px'; // Встановити ширину за замовчуванням
            fontSizeSlider.value = 16; // Скинути значення слайдера шрифта
            gTableElements.forEach((table) => {
                table.style.fontSize = initialFontSize; // Скинути шрифт
            });
        });
    }

    // *** Зміна фону елемента #mainContent за натисканням кнопки ***
    const changeColorButton = document.getElementById('changeColorButton');
    const mainContent = document.getElementById('mainContent');

    if (changeColorButton && mainContent) {
        changeColorButton.addEventListener('click', () => {
            if (mainContent.style.backgroundColor !== 'plum') {
                mainContent.style.backgroundColor = 'plum';
            } else {
                mainContent.style.backgroundColor = 'pink';
            }
        });
    }

    // *** Встановлення фону за RGB-значеннями, введеними користувачем ***
    const redInput = document.getElementById('red');
    const greenInput = document.getElementById('green');
    const blueInput = document.getElementById('blue');
    const enterButton = document.getElementById('enterButton');

    if (redInput && greenInput && blueInput && enterButton && mainContent) {
        enterButton.addEventListener('click', () => {
            const red = parseInt(redInput.value, 10);
            const green = parseInt(greenInput.value, 10);
            const blue = parseInt(blueInput.value, 10);

            if (red >= 0 && red <= 255 && green >= 0 && green <= 255 && blue >= 0 && blue <= 255) {
                mainContent.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            } else {
                alert("Будь ласка, введіть значення від 0 до 255 для кожного кольору.");
            }
        });
    }

    // *** Динамічне оновлення шрифта для телефонів (екрани <= 600px) ***
    const updateMobileFontSize = () => {
        const isMobile = window.matchMedia("(max-width: 600px)").matches;
        if (isMobile) {
            const mobileFontSize = fontSizeSlider ? fontSizeSlider.value + 'px' : '12px';
            gTableElements.forEach((table) => {
                table.style.fontSize = mobileFontSize;
            });
        }
    };

    // Слідкуємо за зміною розміру екрана і застосовуємо зміни
    window.addEventListener('resize', updateMobileFontSize);

    // Викликаємо відразу після завантаження сторінки
    updateMobileFontSize();
});

