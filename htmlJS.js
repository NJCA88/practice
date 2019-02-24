


let script = function(){
    console.log("JS script is running...")

    var newHeading = document.createElement('h1');
    var h1Text = document.createTextNode("this is my heading text!")
    newHeading.appendChild(h1Text)

    var parent = newHeading.parentNode

    // let body = document.getElementsByClassName("body")
    // console.log(body)
    // body[0].appendChild(newHeading)

    document.body.appendChild(newHeading)



    newHeading.style.color = 'blue'
    newHeading.style.fontSize = '16px'


    var newButton = document.createElement('button')
    newButton.innerText = "make heading bigger"
    newButton.id = "makeBigger";

    newButton.onclick = buttonFunction
    document.body.appendChild(newButton)
    
    var newButton = document.createElement('button')
    newButton.innerText = "make heading smaller"
    newButton.id = "makeSmaller";

    newButton.onclick = buttonFunctionSmaller
    document.body.appendChild(newButton)
    

    var newButton = document.createElement('button')
    newButton.innerText = "Lets make a table!"
    newButton.onclick = makeTable
    document.body.appendChild(newButton)
    
    var newForm = document.createElement('form')
    var formLabel = document.createElement('label')
    formLabel.innerText = "we're a label!"
    newForm.appendChild(formLabel)

    var inputField = document.createElement('input')
    newForm.appendChild(inputField)
    newForm.onsubmit = submitForm
    document.body.appendChild(newForm)

    var newButton = document.createElement("button");
    newButton.innerText = "STYLE THEM";
    newButton.onclick = addStyles;
    document.body.appendChild(newButton);

}

var buttonFunction = function(){
    let heading = document.querySelector('h1')
    console.log("headings are: ", heading)
    let oldSize = heading.style.fontSize
    let length = oldSize.length
    let parsed = parseInt(oldSize.slice(0, length-2))
    let newVal = (parsed + 10) + "px";
    console.log("lets make it: ", newVal);
    heading.style.fontSize = newVal
    console.log("headings are: ", heading)
}


var buttonFunctionSmaller = function(){
    let heading = document.querySelector('h1');
    let oldSize = heading.style.fontSize
    let length = oldSize.length
    let parsed = parseInt(oldSize.slice(0, length - 2))
    let newVal = (parsed - 10) + "px";
    heading.style.fontSize = newVal
}

var makeTable = function(){
    console.log("yes")
    var newTable = document.createElement('table')
    newTable.innerText("table table?")
    newTable.insertRow(0)
    document.body.appendChild(newTable)
}

var submitForm = function(){
    console.log("SUBMITTED!")
}

var addStyles = function(){
    let buttons = document.querySelectorAll('button')
    console.log("buttons are: ", buttons)
    let newDiv = document.createElement('div');
    newDiv.classList.add('buttonList')
    newDiv.style.display = 'flex'
    newDiv.style.flexDirection = 'column'
    newDiv.style.backgroundColor = 'papayawhip'
    newDiv.style.height = '100px'
    document.body.appendChild(newDiv)
    


    buttons.forEach(button =>{
        button.style.backgroundColor = 'red'
        console.log("parent is: ", button.parentNode)
        button.style.width = "500px"
        newDiv.appendChild(button)
    })


}