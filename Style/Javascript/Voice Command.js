﻿const btn = document.getElementById('btn');
const result = document.createElement("div");
const processing = document.createElement("p");
document.body.append(btn);

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (typeof SpeechRecognition === "undefined") {

}

else {
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = event => {
        const last = event.results.length - 1;
        const res = event.results[last];
        const text = res[0].transcript;
        if (res.isFinal) {

            const response = process(text);
            const p = document.createElement("p");
            processing.innerHTML = "";
            result.appendChild(p);

            speechSynthesis.speak(new SpeechSynthesisUtterance(response));

        } else {

        }
    }

    let listening = false;
    toggleBtn = () => {
        if (listening) {
            recognition.stop();
            btn.textContent = "Talk to CS";
        } else {
            recognition.start();
            btn.textContent = "Stop listening";
        }
        listening = !listening;
    };
    btn.addEventListener("click", toggleBtn);
}

function process(otherInput) {

    let text = otherInput.replace(/\s/g, "");
    let response = null;

    switch (text) {
        case "hello":
            return "Hello, I'm Siensia, let's begin!";
        case "hi":
            return "Hi, I'm Siensia, let's begin!";
        case "openstoryboard":
            response = location.href = 'Storyboard.php';
            return "sure, opening storyboard";
        case "opensimulations":
            response = location.href = 'Simulations.php';
            return "sure, opening simulations";
        case "openlectures":
            response = location.href = 'Lectures.php';
            return "sure, opening lectures";
        case "openmodules":
            response = location.href = 'Modules.php';
            return "sure, opening modules";
        case "module1":
            response = location.href = 'Module1.html';
            return "When rocks and minerals break down into pieces or dissolve, it is called weathering, Weathering happens not just on its own," +
                "This is possible through the following agents, water, ice, acids, salts, plants, animals, and changes in temperature," +
                "The more exposed the rock is to weathering, the more it becomes very vulnerable to breaking, For example, rocks buried beneath the" +
                "surface are less vulnerable than those rocks on the surface areas because they are very exposed to agents like wind and water," +
                "Once rocks have been broken down into tiny pieces, a process called erosion transports them away into different areas," +
                "The process of weathering and erosion is responsible for the creation of some famous landmarks around the world like the Delicate" +
                "Arch in Utah and Kapurpurawan Rock Formations in Ilocos Norte, Philippines, One of the most natural creation resulted from" +
                "erosion is the canyon or a deep, narrow channel with steep sides, A river canyon is made when the pressure from a river cuts" +
                "deep into the river bed.The sediments then from the river bed were carried downstream (erosion) which resulted to the creation" +
                "of canyons, The river that lies down at the bottom of the canyon is called entrenched river, What makes it different from other" +
                "rivers is that the river from canyons do not change its course, For thousands of years weathering and erosion gradually and" +
                "constantly change the landscape of Earth, Hence, no matter how hard the rock is it cannot resist the forces of nature weathering" +
                "and erosion";
        case "earthscience":
            response = location.href = 'Lectures - Earth Science.html';
            return "Earth science lectures";
        case "time":
            return new Date().toLocaleTimeString();
        case "stop":
            response = "Bye";
            toggleBtn();

    }

    return response;
}

function myFunction() {
    alert("Hello, I'm Scientia. You can give me any command by clicking the 'Talk to Scientia' button");
}