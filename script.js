const btn_idiom = document.getElementById('get_idiom');
const btn_word = document.getElementById('get_word');
const result = document.getElementById('result');
const idioms = data;

function idiom_data() {
    const idiom = idioms[Math.floor(Math.random() * idioms.length)];
    return idiom;
}

async function word_data() {
    const res = await fetch('https://random-words-api.vercel.app/word');
    const word = await res.json();
    const result = `<h2>Word:</h2>
                    <p>${word[0].word}</p>
                    <h2>Defination:</h2>
                    <p>${word[0].definition}</p>`;
    return result;
}

function get_idiom(idiom) {
    const result = `<h2>Idiom:</h2>
                    <p>${idiom.text}</p>
                    <h2>Explanation:</h2>
                    <p>${idiom.explanation}</p>`;
    return result;
}

btn_idiom.addEventListener('click', () => {
    const idiom = idiom_data();
    result.innerHTML = get_idiom(idiom);
});

btn_word.addEventListener('click', async () => {
    const a = await word_data();
    console.log(a);
    result.innerHTML = a;
});
