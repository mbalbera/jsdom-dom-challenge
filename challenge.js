
    const plus = document.querySelector("#\\+")
    const minus = document.querySelector("#\\-")
    const like = document.querySelector("#\\<3")
    const pausebutton = document.querySelector("#pause")
    let counter = document.querySelector("#counter")
    const list = document.querySelector(".likes")
    const comments = document.querySelector(".comments")
    let submit = document.getElementById("submit")
    let timer = setInterval(() => {counter.innerText = parseInt(counter.innerText) + 1}, 1000)

    document.addEventListener('DOMContentLoaded', function(){
        document.addEventListener("click", function(e){
            if (e.target.dataset.action === "add"){
                plus()
            }else if (e.target.dataset.action === "subtract") {
                minus()
            }else if (e.target.dataset.action === "like") {
               like()
            }else if (e.target.dataset.action === "pause") {
                pause()
            }
        })
    
        function plus(){
            counter.innerText = parseInt(counter.innerText) + 1
        }

        function pause(){
            if (pausebutton.innerText === "pause"){
                console.log("we're trying to hit pause and stop the timer");
                // console.log(pause);
                
                clearInterval(timer)
                pausebutton.innerText = "resume"
            }else{
                timer = setInterval(function () { counter.innerText = parseInt(counter.innerText) + 1 }, 1000)
                pausebutton.innerText = "pause"
            }
        }

        function minus () {
            counter.innerText = parseInt(counter.innerText) - 1
        }

        function like(){
            const found = document.querySelector(`[data-like-id='${counter.innerText}']`)
            if (found){
                let something = found.querySelector("span")
                something.innerText = parseInt(something.innerText) + 1 
                if (something.innerText == 2){found.innerHTML += "s"}
            } else { 
                list.insertAdjacentHTML("beforeend", `<li data-like-id=${counter.innerText}> ${counter.innerText} has been liked  <span >1</span> time</li>`)
            }   
        }

       
        submit.addEventListener("click", function (event) {
            event.preventDefault()
            let comm = document.querySelector("#comment-form > input[type=text]")
            comments.insertAdjacentHTML('beforeend', `<p>${comm.value}</p>`)
            comm.value = ""
        })
        
        

        

}) 