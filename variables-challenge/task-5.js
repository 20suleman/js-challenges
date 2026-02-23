    const textArea = document.querySelector("#textArea");
    const searchInput = document.querySelector("#searchWord");
    const button = document.querySelector("#searchBtn");

    button.addEventListener("click", function () {
        const text = textArea.value.toLowerCase();
        const word = searchInput.value.toLowerCase();
        
        if (word && text.includes(word)) {
            alert("Word exists");
        } else {
            alert("Word not present");
        }
           });