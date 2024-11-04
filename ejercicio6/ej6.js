function toggleText1() {
    const text1 = document.getElementById("text1");
    const button1 = document.getElementById("button1");
    const isHidden = text1.classList.contains("hidden");

    if (isHidden) {
        text1.classList.remove("hidden");
        button1.innerHTML = "ocultar";
    } else {
        text1.classList.add("hidden");
        button1.innerHTML = "mostrar";
    }
}

function toggleText2() {
    const text2 = document.getElementById("text2");
    const button2 = document.getElementById("button2");
    const isHidden = text2.classList.contains("hidden");

    if (isHidden) {
        text2.classList.remove("hidden");
        button2.innerHTML = "ocultar";
    } else {
        text2.classList.add("hidden");
        button2.innerHTML = "mostrar";
    }
}

function toggleText3() {
    const text3 = document.getElementById("text3");
    const button3 = document.getElementById("button3");
    const isHidden = text3.classList.contains("hidden");

    if (isHidden) {
        text3.classList.remove("hidden");
        button3.innerHTML = "ocultar";
    } else {
        text3.classList.add("hidden");
        button3.innerHTML = "mostrar";
    }
}
