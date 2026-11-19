const conteiner = document.getElementById("color-Conteiner")
const btn = document.getElementById("btn")

btn.addEventListener("click", function () {
    const colorInput = document.getElementById("color-input")
    const selectedColor = colorInput.value
    const hex = selectedColor.slice(1)

    fetch(`https://www.thecolorapi.com/scheme?hex=${hex}&mode=triad&count=6`)
        .then(res => res.json())
        .then(data => {
            // Brišemo prethodne boje
            conteiner.innerHTML = ""

            data.colors.forEach(color => {
                const colorDiv = document.createElement("div")
                const hexText = document.createElement("p")
                const colorWrapper = document.createElement("div")

                // HEX tekst i pozadinska boja
                hexText.textContent = color.hex.value
                colorDiv.style.background = color.hex.value

                // Dimenzije i izgled
                colorWrapper.style.textAlign = "center"
                colorWrapper.style.width = "110px"
                colorWrapper.style.paddingTop = "10px"

                colorDiv.style.height = "550px"
                colorDiv.style.width = "110px"

                // Dodajemo boju i HEX kod u wrapper
                colorWrapper.appendChild(colorDiv)
                colorWrapper.appendChild(hexText)

                // Dodajemo wrapper na stranicu
                conteiner.appendChild(colorWrapper)
            })
        })
        .catch(error => {
            console.error("Greška pri učitavanju boja:", error)
        })
})