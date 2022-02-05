let theme = document.getElementById('theme-switch')
let body = document.querySelector("body")

function load() {
    let id = localStorage.getItem("id")

    if (id == null) {
        localStorage.setItem("id", "0")
        console.log(id)
    }
    if (id == 1) {
        dark();
        theme.checked = true;
    }
}

let dark = () => {
    body.classList.add("dark")
    body.classList.remove("light")
}

let light = () => {
    body.classList.add("light")
    body.classList.remove("dark")
}
theme.addEventListener("click", (a) => {
    if (theme.checked == true) {
        localStorage.setItem("id", "1")
        dark()
    } else {
        light()
        localStorage.setItem("id", "0")
    }
})
