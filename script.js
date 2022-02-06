let toggle = document.getElementById('theme-switch')
let body = document.querySelector("body")

function load() {
    let id = localStorage.getItem("id")

    if (id == null) {
        localStorage.setItem("id", "0")
        console.log(id)
    }
    if (id == 1) {
        dark();
        toggle.checked = true;
    }
}

const Theme = {
    dark() {
        body.classList.add("dark")
        body.classList.remove("light")
    },
    light() {
        body.classList.add("light")
        body.classList.remove("dark")
    }
}

toggle.addEventListener("click", (a) => {
    if (toggle.checked == true) {
        localStorage.setItem("id", "1")
        Theme.dark()
    } else {
        Theme.light()
        localStorage.setItem("id", "0")
    }
})
