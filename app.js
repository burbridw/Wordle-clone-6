const sixLetterWords = ["doctor", "mother", "school", "friday", "eraser", "desert", "potato", "always", "father", 
"chorus", "hungry", "monday", "monkey", "castle", "rabbit", "sister", "active", "spider", "coffee", "dishes", 
"shrine", "turtle", "omelet", "yellow", "cloudy", "cherry", "skiing", "sweden", "shrimp", "orange", "listen", 
"crayon", "salmon", "square", "tennis", "circle", "singer", "guitar", "police", "soccer", "cheese", "pencil", 
"flight", "artist", "player", "island", "subway", "strong", "tshirt", "gloves", "temple", "street", "tomato", 
"turkey", "bitter", "sunday", "carrot", "sleepy", "farmer", "norway", "violin", "hiking", "bridge", "basket", 
"driver", "flower", "banana", "spring", "pepper", "figure", "skater", "grapes", "winter", "french", "brazil", 
"france", "marker", "hotdog", "window", "purple", "forest", "gentle", "dinner", "famous", "racket", "travel", 
"canada", "museum"]

const sixLetterWordsObj = {"doctor": "./images/jobs/img5.png", "mother": "./images/family/img3.png", 
"school": "./images/buildings/img2.png", "friday": "./images/days/img6.png", "eraser": "./images/stationary/img7.png", 
"desert": "./images/nature/img1.png", "potato": "./images/fruitsvegetables/img23.png", "always": "./images/frequency/img1.png", 
"father": "./images/family/img4.png", "chorus": "./images/clubactivities/img18.png", "hungry": "./images/feelings/img9.png", 
"monday": "./images/days/img2.png", "monkey": "./images/animals/img8.png", "castle": "./images/buildings/img21.png", 
"rabbit": "./images/animals/img19.png", "sister": "./images/family/img7.png", "active": "./images/personalities/img1.png", 
"spider": "./images/bugs/img4.png", "coffee": "./images/drinks/img1.png", "dishes": "./images/dailyactivities/img14.png", 
"shrine": "./images/buildings/img22.png", "turtle": "./images/seaanimals/img4.png", "omelet": "./images/foods/img15.png", 
"yellow": "./images/colours/img10.png", "cloudy": "./images/weather/img2.png", "cherry": "./images/fruitsvegetables/img7.png", 
"skiing": "./images/sports/img13.png", "sweden": "./images/countries/img22.png", "shrimp": "./images/seaanimals/img8.png", 
"orange": "./images/colours/img5.png", "listen": "./images/actions1/img21.png", "crayon": "./images/stationary/img1.png", 
"salmon": "./images/ingredients/img9.png", "square": "./images/shapes/img6.png", "tennis": "./images/sports/img7.png", 
"circle": "./images/shapes/img1.png", "singer": "./images/jobs/img3.png", "guitar": "./images/instruments/img5.png", 
"police": "./images/jobs/img14.png", "soccer": "./images/sports/img6.png", "cheese": "./images/ingredients/img6.png", 
"pencil": "./images/stationary/img4.png", "flight": "./images/jobs/img17.png", "artist": "./images/jobs/img1.png", 
"player": "./images/jobs/img23.png", "island": "./images/nature/img3.png", "subway": "./images/vehicles/img6.png", 
"strong": "./images/personalities/img7.png", "tshirt": "./images/clothes/img1.png", "gloves": "./images/clothes/img9.png", 
"temple": "./images/buildings/img23.png", "street": "./images/buildings/img29.png", "tomato": "./images/fruitsvegetables/img26.png", 
"turkey": "./images/countries/img24.png", "bitter": "./images/tastes/img1.png", "sunday": "./images/days/img1.png", 
"carrot": "./images/fruitsvegetables/img6.png", "sleepy": "./images/feelings/img7.png", "farmer": "./images/jobs/img13.png", 
"norway": "./images/countries/img17.png", "violin": "./images/instruments/img6.png", "hiking": "./images/activities/img3.png", 
"bridge": "./images/buildings/img28.png", "basket": "./images/commonitems/img6.png", "driver": "./images/jobs/img18.png", 
"flower": "./images/nature/img11.png", "banana": "./images/fruitsvegetables/img2.png", "spring": "./images/seasons/img1.png", 
"pepper": "./images/fruitsvegetables/img12.png", "figure": "./images/jobs/img25.png", "skater": "./images/jobs/img25.png", 
"grapes": "./images/fruitsvegetables/img11.png", "winter": "./images/seasons/img4.png", "french": "./images/foods/img11.png", 
"brazil": "./images/countries/img3.png", "france": "./images/countries/img7.png", "marker": "./images/stationary/img2.png", 
"hotdog": "./images/foods/img10.png", "window": "./images/commonitems/img28.png", "purple": "./images/colours/img7.png", 
"forest": "./images/nature/img2.png", "gentle": "./images/personalities/img5.png", "dinner": "./images/meals/img3.png", 
"famous": "./images/descriptions/img12.png", "racket": "./images/commonitems/img3.png", "travel": "./images/actions1/img17.png", 
"canada": "./images/countries/img4.png", "museum": "./images/buildings/img6.png"}

let word = ""
let randomSelectSix = "" 
let answerCount = 0
let round = 0
let correctGuess = 0
let gameActive = true
let inputArr = []
let answerArr = []
const dictionary = document.querySelector(".dictionary")
function buildDictionary() {
    sixLetterWords.forEach( (x) => {
        dictionary.innerHTML += `<div class="dictionary-image">${x} <img src="${sixLetterWordsObj[x]}"></div>`
    })

}
buildDictionary()
start()

function start() {
    randomSelectSix = Math.floor( Math.random()*104 )
    word = sixLetterWords[randomSelectSix]
    answerArr = word.split("")
    console.log(answerArr)
    answerCount = 0
    round = 0
    correctGuess = 0
    gameActive = true
    inputArr = []
    let allInputs = document.querySelectorAll(".answer-box")
    allInputs.forEach( (x) => {
        x.textContent = ""
        if (x.style.backgroundColor !== "rgb(243, 243, 231)")
        x.style.backgroundColor = "rgb(243, 243, 231)"
    })
    let allKeys = document.querySelectorAll(".key")
    allKeys.forEach( (x) => {
        if (x.style.backgroundColor !== "rgb(243, 243, 231)")
        x.style.backgroundColor = "rgb(243, 243, 231)"
    })
}

const delBtn = document.getElementById("delete")
const enterBtn = document.getElementById("enter")
const keyboardDiv = document.querySelector(".keyboard")
const messageBox = document.getElementById("message-box")
const endMessage = document.getElementById("end-message")
const endImage = document.getElementById("end-image")
const resetBtn = document.getElementById("reset-btn")
const endBox = document.querySelector(".reset-box")
const upperBox = document.querySelector(".upper-container")
const lowerBox = document.querySelector(".lower-container")
const imageBox = document.querySelector(".answer-image-container")
const dictionaryBtn = document.getElementById("dictionary-button")
const closeDictionaryBtn = document.getElementById("close-dictionary")
const answerBoxContainer = document.querySelector(".answer-box-container")

let answerInput = document.querySelector(".answer-active")
let answerBox0 = answerInput.children[0]
let answerBox1 = answerInput.children[1]
let answerBox2 = answerInput.children[2]
let answerBox3 = answerInput.children[3]
let answerBox4 = answerInput.children[4]
let answerBox5 = answerInput.children[5]

let allKeys = document.querySelectorAll(".keys")
allKeys.forEach( (x) => {
    x.addEventListener("click",function() {
        let letter = x.textContent
        press(letter)
    })
})

window.addEventListener("keydown", (x) => {
    if (gameActive) {
    if (x.key === "Enter") {
        checkGuess()
    } else if (x.key === "Backspace") {
        del()
    } else {
        if ( /[a-z]/.test(x.key) && x.key.length === 1) {
        press(x.key)
        }
    }
    } else {
    if (x.key === "Enter") {
        resetGame()
        }
    }
})


function press(key) {
    if (answerBox0.textContent === "") { 
    answerBox0.textContent = key
    answerCount = 1
    inputArr.push(key)
    } else if (answerBox1.textContent === "") {
        answerBox1.textContent = key
        answerCount = 2
        inputArr.push(key)
    } else if (answerBox2.textContent === "") {
        answerBox2.textContent = key
        answerCount = 3
        inputArr.push(key)
    } else if (answerBox3.textContent === "") {
        answerBox3.textContent = key
        answerCount = 4
        inputArr.push(key)
    } else if (answerBox4.textContent === "") {
        answerBox4.textContent = key
        answerCount = 5
        inputArr.push(key)
    } else if (answerBox5.textContent === "") {
        answerBox5.textContent = key
        answerCount = 6
        inputArr.push(key)
    }
}

function del() {
    if (gameActive) {
    if (answerBox5.textContent !== "") { 
        answerBox5.textContent = ""
        inputArr.pop()
        answerCount = 5
        } else if (answerBox4.textContent !== "") {
            answerBox4.textContent = ""
            inputArr.pop()
            answerCount = 4
        } else if (answerBox3.textContent !== "") {
            answerBox3.textContent = ""
            inputArr.pop()
            answerCount = 3
        } else if (answerBox2.textContent !== "") {
            answerBox2.textContent = ""
            inputArr.pop()
            answerCount = 2
        } else if (answerBox1.textContent !== "") {
            answerBox1.textContent = ""
            inputArr.pop()
            answerCount = 1
        } else if (answerBox0.textContent !== "") {
            answerBox0.textContent = ""
            inputArr.pop()
            answerCount = 0
        }
    }
}

delBtn.addEventListener("click", function(){
    del()
})

enterBtn.addEventListener("click",function(){
    checkGuess()
})

resetBtn.addEventListener("click",function(){
    resetGame()
})

dictionaryBtn.addEventListener("click",function(){
    dictionary.classList.remove("dictionary-close")
})

closeDictionaryBtn.addEventListener("click",function() {
    dictionary.classList.add("dictionary-close")
})

function resetGame() {
    endBox.classList.add("hide-me")
    upperBox.classList.remove("go-transparent")
    lowerBox.classList.remove("go-transparent")
    answerInput.classList.remove("answer-active")
    let currentAnswerBox = answerBoxContainer.children[0]
    currentAnswerBox.classList.add("answer-active")
    answerInput = document.querySelector(".answer-active")
    answerBox0 = answerInput.children[0]
    answerBox1 = answerInput.children[1]
    answerBox2 = answerInput.children[2]
    answerBox3 = answerInput.children[3]
    answerBox4 = answerInput.children[4]
    answerBox5 = answerInput.children[5]
    let imageBoxes = document.querySelectorAll(".answer-image")
    imageBoxes.forEach( (x) => {
        x.textContent = ""
    })
    start()
}

function checkGuess() {
    let thisGuess = inputArr.join("")
    if (gameActive) {
    if (answerCount !== 6) {
        showMessage("Not enough letters")
    } else if ( !sixLetterWords.includes(thisGuess) ) {
        showMessage("Word not in list")
    } else {
        let currentImageBox = imageBox.children[round]
        let currentImage = sixLetterWordsObj[thisGuess]
        currentImageBox.innerHTML = `<img src=${currentImage}>`
        greenCheck()
        }
    }
}

function showMessage(message) {
    messageBox.textContent = message
    messageBox.classList.remove("hide-me")
    setTimeout( () => {
        messageBox.classList.add("hide-me")
    }, 3000)
}

function greenCheck() {
    for ( let i = 0; i < answerArr.length; i++ ) {
        if (answerArr[i] === inputArr[i]) {
            let currentAnswer = answerInput.children[i]
            currentAnswer.style.backgroundColor ="greenyellow"
            let allKeys = document.querySelectorAll(".key")
            allKeys.forEach ( (x) => {
                if (x.textContent === inputArr[i]) {
                    x.style.backgroundColor = "greenyellow"
                }
            })
            correctGuess++
            answerArr.splice( i, 1, "*")
            inputArr.splice( i, 1, "@")
            }
        }   
            if ( correctGuess === 6) {
            playerWins()
        } else {    
            yellowCheck()
    } 
}

function yellowCheck() {
    for ( let i = 0; i < answerArr.length; i++ ) {
        if (answerArr.includes(inputArr[i]) && answerArr[i] !== inputArr[i]) {
        let currentAnswer = answerInput.children[i]
            currentAnswer.style.backgroundColor ="yellow"

            let allKeys = document.querySelectorAll(".key")
            allKeys.forEach ( (x) => {
                if (x.textContent === inputArr[i] && x.style.backgroundColor !== "greenyellow") {
                    x.style.backgroundColor = "yellow"
                }
            })
            let cutIndex = answerArr.indexOf(`${inputArr[i]}`)
            inputArr.splice( i, 1, "@")
            answerArr.splice( cutIndex, 1, "*")
        } 
    }  for ( let i = 0; i < 6; i++ ) {
        let currentAnswer = answerInput.children[i]
        let allKeys = document.querySelectorAll(".key")
        if (currentAnswer.style.backgroundColor !== "greenyellow" && currentAnswer.style.backgroundColor !== "yellow") {
            currentAnswer.style.backgroundColor = "darkgray"
            allKeys.forEach ( (x) => {
                if (x.textContent === currentAnswer.textContent && x.style.backgroundColor !== "greenyellow" && x.style.backgroundColor !== "yellow") {
                    x.style.backgroundColor = "darkgray"
                }
            })
        }
    }   if ( round < 5) {
        resetRound()
    }  else if ( round === 5 && correctGuess < 6) {
        gameOver()
    }
}

function playerWins() {
    gameActive = false
    endMessage.textContent = "You Win!"
    let correctImage = sixLetterWordsObj[word]
    endImage.innerHTML = `It was "${word}" <img src=${correctImage}>`
    upperBox.classList.add("go-transparent")
    lowerBox.classList.add("go-transparent")
    setTimeout( () => {
        endBox.classList.remove("hide-me")
    }, 1000)
}

function gameOver() {
    gameActive = false
    endMessage.textContent = "You Lose!"
    let correctImage = sixLetterWordsObj[word]
    endImage.innerHTML = `It was "${word}" <img src=${correctImage}>`
    upperBox.classList.add("go-transparent")
    lowerBox.classList.add("go-transparent")
    setTimeout( () => {
        endBox.classList.remove("hide-me")
    }, 1000)
}

function resetRound() {
    answerArr = word.split("")
    let currentAnswerBox = answerBoxContainer.children[round]
    currentAnswerBox.classList.remove("answer-active")
    round++
    let nextAnswerBox = answerBoxContainer.children[round]
    nextAnswerBox.classList.add("answer-active")
    answerInput = document.querySelector(".answer-active")
    answerBox0 = answerInput.children[0]
    answerBox1 = answerInput.children[1]
    answerBox2 = answerInput.children[2]
    answerBox3 = answerInput.children[3]
    answerBox4 = answerInput.children[4]
    answerBox5 = answerInput.children[5]
    inputArr = []
    correctGuess = 0
    answerCount = 0
}

