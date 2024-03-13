const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
    let inpWord = document.getElementById("inp-word").value;
    fetch(`${url}${inpWord}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            result.innerHTML = `
            <div class="word">
                    <h4>${inpWord}</h4>
                </div>
                    <p class="details">It is a ${data[0].meanings[0].partOfSpeech}</p>
                <p class="meaning">
                   ${data[0].meanings[0].definitions[0].definition}
                </p>
                <h5 class="example">
                    ${data[0].meanings[0].definitions[0].example || ""}
                </h5>`;
        })
        .catch(() => {
            result.innerHTML = `<h3 class="error">Couldn't Find The Word</h3>`;
        });
});
