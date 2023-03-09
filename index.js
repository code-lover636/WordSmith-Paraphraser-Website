const btn = document.querySelector('.check');
const textarea = document.querySelector('.input');
const displayarea = document.querySelector('.phrase')

async function paraphrase(text) {
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '15a2a9dc5bmsh020a3872b83c185p10621ejsnd08f0392c827',
            'X-RapidAPI-Host': 'rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com'
        },
        body: `{"language":"en","strength":3,"text":"${text}"}`
    };

    await fetch('https://rewriter-paraphraser-text-changer-multi-language.p.rapidapi.com/rewrite', options)
        .then(response => response.json())
        .then(response => displayarea.value = response.rewrite)
        .catch(err => console.error(err));
}

btn.onclick = () => {
    if (textarea.value){
        console.log("input",textarea.value)
        paraphrase(textarea.value)
    }
}
