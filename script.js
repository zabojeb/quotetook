const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const generateButton = document.getElementById('generate-button');
const categorySelect = document.getElementById('category-select');

async function getQuote() {
    const selectedCategory = categorySelect.value;
    const url = `https://api.api-ninjas.com/v1/quotes?category=${selectedCategory}`;
    const options = {
        method: 'GET',
        headers: {
            'X-Api-Key': 'D0cw4RFtUlIFFe7fNMyosw==sEOBsvUyDqsIspLO'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        if (result.length > 0) {
            const quoteData = result[0];
            quoteText.textContent = quoteData.quote;
            quoteAuthor.textContent = quoteData.author;
        } else {
            quoteText.textContent = 'No quotes found for this category';
            quoteAuthor.textContent = 'No Author';
        }
    } catch (error) {
        console.error(error);
    }
}

generateButton.addEventListener('click', getQuote);

categorySelect.addEventListener('input', getQuote);
// Загрузка начальной цитаты при загрузке страницы
getQuote();
