const btn = document.getElementById('get_idiom');
const result = document.getElementById('result');
const idioms = data;

function idiom_data() {
    const idiom = idioms[Math.floor(Math.random() * idioms.length)];
    return idiom;
}

function get_idiom(idiom) {
    const result = `<h2>Idiom:</h2>
                    <p>${idiom.text}</p>
                    <h2>Explanation:</h2>
                    <p>${idiom.explanation}</p>`;
    return result;
}

btn.addEventListener('click', () => {
    const idiom = idiom_data();
    result.innerHTML = get_idiom(idiom);
});
