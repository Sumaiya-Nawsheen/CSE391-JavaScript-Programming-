// part 1 -1.1

var quotes = [
    '\"Life isn\'t about finding yourself, it is about creating yourself.\"\n\n-George Bernard Shaw',
    '\"If you are going down the right path and you are willing to keep walking, eventually you\'ll make progress.\"\n-Barrack Obama',
    '\"I have far more respect for the person with a single idea who gets there than one with a thousand ideas and does nothing.\"\n-Thomas Edison',
    '\"What is necessary to change a person is to change awareness of himself.\"\n\n-Anonymous',
    '\"Many people die at the age of 25, but their bodies are not buried until 75.\"\n\n-Benjamin Franklin',
    '\"If you don\'t get up every morning with a burning desire to do things, you don\'t have enough goals.\"\n-Lou Holtz',
    '\"The way to learning is to get rid of the arrogance of knowledge.\"\n-Confucius',
    '\"One can have no smaller or greater master than the mastery of oneself.\"\n-Leonardo Da Vinci',
    '\"Empty pockets never held anyone back. Only empty heads and hearts can do that.\"\n-Norman Vincent Peale',
    '\"Great things are not done by impulse, but a series of small things brought together.\"\n-Vincent Van Gogh',
    '\"Why measure your success by the suggestions of society when you can become a success on your own terms.\"\n-Robin Sharma',
    '\"A man may imagine things that are false, but he can only undetsand things that are true.\"\n-Isaac Newton',
    '\"Our fatigue is often caused not by work, but by worry, frustration and resentment.\"\n-Dale Carnegie',
    '\"True freedom is impossible without a mind made free by discipline.\"\n-Mortimer Adler',
    '\"Focus is not saying yes to all important things, rather it is saying no to less important things.\"\n-Steve Jobs',
    '\"Discipline is the bridge between goals and accomplishment.\"\n-Jim Rohn',
    '\"Success in life comes when you simply refuse to give up, with goals so strong that obstacles, failure and loss only act as motivation.\"\n-Jim Rohn',
    '\"Be yourself. Everyone else is already taken.\"\n-Oscar Wilde',
    '\"Be who you are and say what you feel, because those who mind don\'t matter and those who matter don\'t mind.\"\n-Bernard M. Baruch',
    '\"Imperfection is beauty, madness is genius and it\'s better to be absolutely ridiculous than absolutely boring.\"\n-Marilyn Monroe',
    '\"When you are content to be simply yourself and don\'t compare or compete, everyone will respect you.\"\n-Lao Tzu',
    '\"If you are always trying to be ordinary, you will never know how extraordinary you can be.\"\n-Michelangelo',
    '\"Leadership is solving problems. The day people stop bringing you their problems is the day you have stopped leading them.\"\n-Colin Powell',
    '\"Start by doing what\'s necessary; then do what\'s possible and suddenly you are doing the impossible.\"\n-Francis of Assisi',
    '\"It is our choices that show what we truly are, far more than our abilities.\"\n-Albus Dumbledore',
    '\"It does not do to dwell on dreams and forget to live.\"\n-Mirror of Erised'
]



function QuoteBox() {
    let randomNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote').innerHTML = quotes[randomNum];


}


function ChangeRed() {
    document.getElementById('quote').style.fontSize = "larger";
    document.getElementById('quote').style.background = "rgb(252, 195, 195)";
    document.getElementById('quote').style.fontFamily = "Lucida Handwriting";
    document.getElementById('quote').style.borderLeft = "8px solid red";
    document.getElementById('quote').style.borderTop = "6px solid red";
    document.getElementById('quote').style.color = "grey";

}

function ChangeBlue() {
    document.getElementById('quote').style.fontSize = "x-large";
    document.getElementById('quote').style.background = "rgb(197, 219, 226)";
    document.getElementById('quote').style.fontFamily = 'Courier';
    document.getElementById('quote').style.borderLeft = "8px solid blue";
    document.getElementById('quote').style.borderTop = "6px solid blue";
    document.getElementById('quote').style.color = "black";

}

function ChangeYellow() {
    document.getElementById('quote').style.fontSize = "bold";
    document.getElementById('quote').style.background = "rgb(247, 247, 158)";
    document.getElementById('quote').style.margin = 'Arial Narrow Bold';
    document.getElementById('quote').style.borderLeft = "8px solid yellow";
    document.getElementById('quote').style.borderTop = "6px solid yellow";
    document.getElementById('quote').style.color = "red";

}

function ChangeGreen() {
    document.getElementById('quote').style.fontSize = "x-large";
    document.getElementById('quote').style.background = "lightgreen";
    document.getElementById('quote').style.fontFamily = "monospace";
    document.getElementById('quote').style.borderLeft = "8px solid green";
    document.getElementById('quote').style.borderTop = "6px solid green";
    document.getElementById('quote').style.color = "brown";

}

QuoteBox()



// part 1 -1.2

function convert() {
    var output = 0;

    document.getElementById("activitySelector").addEventListener("change", function () {
        const option = document.getElementById("activitySelector").value;
        if (option == "lb to kg") {
            let input = document.getElementById("input").value;
            output = (input / 2.2046).toFixed(4) + " kilograms";
        }
        else if (option == "kg to lb") {
            let input = document.getElementById("input").value;
            output = (input * 2.2046).toFixed(4) + " pounds";
        }
    });


    document.getElementById("show").addEventListener("click", function () {
        document.getElementById("output").value = output;
    })
}

// part 2

function calculate() {
    var values = document.getElementById('box1').value.split(/,/g);
    var sum = values.reduce(function (a, b) { return parseInt(a) + parseInt(b); });
    document.querySelector('#max').innerHTML = values.max();
    document.querySelector('#min').innerHTML = values.min();
    document.querySelector('#sum').innerHTML = sum;
    document.querySelector('#avg').innerHTML = sum / values.length;
    document.querySelector('#reverse').innerHTML = values.reverse().join(',');
}

Array.prototype.max = function () {
    return Math.max.apply(null, this);
};

Array.prototype.min = function () {
    return Math.min.apply(null, this);
};

// part 3

// clear all
const inputarea1 = document.querySelector('#clear');
var textarea = document.querySelector('#demo');

inputarea1.addEventListener('click', function () {
    textarea.value = '';
}, false);


// capitalize
function capitalize() {
    document.getElementById("demo").style.textTransform = "uppercase";
}

// sort
const inputarea2 = document.querySelector('#sort');
inputarea2.addEventListener('click', function () {
        textarea.value = textarea.value.split('').sort().join('').trim();
}, false);

// Reverse
const inputarea3 = document.querySelector('#reverse');
inputarea3.addEventListener('click', function () {
    textarea.value = textarea.value.split(' ').reverse().join(' ');
}, false);

// stripBlank
const inputarea4 = document.querySelector('#stripBlank');
inputarea4.addEventListener('click', function () {
    textarea.value = textarea.value.replace(/(\r\n|\n|\r)/gm, "");
}, false);


// addNumbers
const inputarea5 = document.querySelector('#addNumbers');
inputarea5.addEventListener('click', function () {
     textarea.value = textarea.value.split('\n').map((line, index) => `${index + 1}. ${line}`).join('\n');
}, false);

// shuffle
const inputarea6 = document.querySelector('#shuffle');
inputarea6.addEventListener('click', function () {
    textarea.value = textarea.value.split('').sort(function () { return 0.5 - Math.random() }).join('');
}, false);
