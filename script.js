let plus = document.querySelector('.plus')
plus.addEventListener('click', popshow)

let popup = document.querySelector('.popup')
let inp1 = document.querySelector('.heading-inp1')
let inp2 = document.querySelector('.heading-inp2')

function popshow() {
    popup.style.display = 'block'
    inp1.value = ''
    inp2.value = ''
    let add = document.querySelector(".add")
    add.innerHTML = `<button class="addbtn">Add</button>`
    let addbtn = add.querySelector('.addbtn')
    addbtn.addEventListener('click', addbox)
}

let cross = document.querySelector('.cross')
cross.addEventListener('click', pophide)

function pophide() {
    popup.style.display = 'none'
}


function addbox() {
    
    pophide()
    
    let middle = document.querySelector(".middle")
    let oldhtml = middle.innerHTML

    middle.innerHTML = oldhtml +
    ` 
        <div class="box">
            <div class="boxhead">
                <div class="remaining-boxhead">
                    ${inp1.value}
                </div>

                <div class="boxhead-btns">
                    <button class="box-min">-</button>
                    <i class="fa fa-edit"></i>
                    <button class="box-cross">x</button>

                </div>

            </div>
            <div class="boxbody">
                ${inp2.value}
            </div>
        </div>

    `
    closeMinEditBox()
}


function closeMinEditBox(){

    let crossBtnArr = document.querySelectorAll('.box-cross')
    // console.log(crossBtnArr)

    for(let i=0;i<crossBtnArr.length;i++)
    {
        crossBtnArr[i].addEventListener('click',hidebox)
    }

    function hidebox(e) {   
        // 'e' is a pointer event object that keeps the complete info. of the event that is 
        //  performed, in our case the 'click' event. It is passed as a parameter by JS to the function that is called
        
        // console.log(e.target)
        // 'target' is a key inside 'e' object that contains the HTML of the element on which the event is performed

        let box = e.target.closest(".box") // 'closest' is a predefined function that is used to select the HTML of the element whose class is provided
                                           //  that is nearest to the target element. P.S. the target element should be the child of the element whose class
                                           //  is provided to closest function
        box.style.display = "none"
    }

    let minBtnArr = document.querySelectorAll(".box-min")
    // console.log(minBtnArr)

    for(let i=0; i<minBtnArr.length;i++)
    {
        minBtnArr[i].addEventListener('click',boxmin) 
    }

    function boxmin(e) {

        
        let box = e.target.closest(".box")
        // console.log(box)
        let boxbody = box.querySelector(".boxbody")
        // console.log(boxbody)

        if (boxbody.style.display === 'block') {
            boxbody.style.display = 'none'
        }
        else {
            boxbody.style.display = 'block'
        }
    }

    let editIconArr = document.querySelectorAll(".boxhead-btns i")
    // console.log(editIconArr)

    for(let i=0;i<editIconArr.length;i++)
    {
        editIconArr[i].addEventListener('click',boxedit)
    }

    function boxedit(e)
    {
        popup.style.display = 'block'
        let add = document.querySelector(".add")
        add.innerHTML= `<button class="editbtn">Edit</button>`


        let box = e.target.closest(".box")
        // console.log(boxhead)

        let remBoxhead = box.querySelector(".remaining-boxhead")
        inp1.value = remBoxhead.innerText

        let boxbody = box.querySelector(".boxbody")
        inp2.value = boxbody.innerText

        let editbtn = add.querySelector(".editbtn")
        // console.log(editbtn)
        editbtn.addEventListener('click',popedit)


        function popedit(){
            pophide()
            
            remBoxhead.innerText = inp1.value
            boxbody.innerText = inp2.value
        }

    }

    

}












