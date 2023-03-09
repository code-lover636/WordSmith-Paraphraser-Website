// const dotenv = require("dotenv").config();


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
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

paraphrase("The worlds largest buildings are burj khalifa");
