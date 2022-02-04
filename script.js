let theme = document.getElementById('theme-switch')
theme.addEventListener("click", (a) => {
    if (theme.checked == true) {
        document.querySelector("body").classList.add("dark")
        document.querySelector("body").classList.remove("light")
    } else {
        document.querySelector("body").classList.add("light")
        document.querySelector("body").classList.remove("dark")
    }
})
