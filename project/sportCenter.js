
//Navbar renk değişimi Değerlendirme formu 9. ister
document.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 0) {
        navbar.classList.add("bg-dark");
    } else {
        navbar.classList.remove("bg-dark");
    }
});


// BMI Calculate Değerlendirme formu 8. ister
function calculate() {
    let height = document.getElementById("height");
    let weight = document.getElementById("weight");
    let heightN = Number(height.value) / 100;
    let weightN = Number(weight.value);
    let result = weightN / (heightN * heightN);
    if(result>35){
        result=90;
    }else if(result>30){
        result=65;
    }else if(result>25){
        result=48;
    }else if(result>18){
        result=32;
    }else if(result>10){
        result=15;
    }else if(result<9){
        result=15;
    }

    console.log(result);
    updateAfterElement(result);
}

function updateAfterElement(result) {
    let styleTag = document.getElementById("after-element-style");
    if (!styleTag) {
        styleTag = document.createElement("style");
        styleTag.id = "after-element-style";
        document.head.appendChild(styleTag);
    }
    let leftValue = calculateLeftValue(result);
    styleTag.innerHTML = `
        .calculator-img:after {
            left: ${leftValue}%;
        }
    `;
}

function calculateLeftValue(result) {
    return result;
}

//Buttons onclick change background Değerlendime formu 11. ister
let btn1=document.querySelector('#btn1');
let btn2=document.querySelector('#btn2');
let btn3=document.querySelector('#btn3');
let btn4=document.querySelector('#btn4');

btn1.onclick=function(){
    document.querySelector('#features').innerHTML=`
    <div class="div-text">
    <div class="why-yoga">
         <h2> Why are your yoga </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ducimus maiores molestiae illum animi distinctio quidem unde. Recusandae, reprehenderit nam. Qui veniam ratione animi maxime hic sequi, libero explicabo expedita.
        </p>
        <br>
    </div>
   
    <div class="yoga-time">
        <h2>When comes yoga your time</h2>
        
        <p> Saturday- Sunday: 8:00am-am:00am</p>
        <p> Saturday- Sunday: 8:00am-am:00am</p>
        <p> Saturday- Sunday: 8:00am-am:00am</p>
        <p> Saturday- Sunday: 8:00am-am:00am</p>
        <br>
    </div>
</div>
<div class="div-img">
    <img src="./images/yoga.jpg" alt="">
</div>`
    this.style.background="orange";
    btn2.style.background="#325492";
    btn3.style.background="#325492";
    btn4.style.background="#325492";


}
btn2.onclick=function(){
    document.querySelector("#features").innerHTML=`
    <div class="div-text">
                <div class="why-yoga">
                     <h2>Group </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ducimus maiores molestiae illum animi distinctio quidem unde. Recusandae, reprehenderit nam. Qui veniam ratione animi maxime hic sequi, libero explicabo expedita.
                    </p>
                    <br>
                </div>
               
                <div class="yoga-time">
                    <h2>When comes group your time</h2>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ducimus maiores molestiae illum animi distinctio quidem unde. Recusandae, reprehenderit nam. Qui veniam ratione animi maxime hic sequi, libero explicabo expedita.
                    </p>
                    <br>
                </div>
            </div>
            <div class="div-img">
                <img src="./images/group.webp" alt="">
            </div>`
    this.style.background="orange";
    btn1.style.background="#325492";
    btn3.style.background="#325492";
    btn4.style.background="#325492";
}
btn3.onclick=function(){
    document.querySelector("#features").innerHTML=`
    <div class="div-text">
                <div class="why-yoga">
                     <h2>Solo</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ducimus maiores molestiae illum animi distinctio quidem unde. Recusandae, reprehenderit nam. Qui veniam ratione animi maxime hic sequi, libero explicabo expedita.
                    </p>
                    <br>
                </div>
               
                <div class="yoga-time">
                    <h2>Why choose solo?</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ducimus maiores molestiae illum animi distinctio quidem unde. Recusandae, reprehenderit nam. Qui veniam ratione animi maxime hic sequi, libero explicabo expedita.
                    </p>
                    <br>
                </div>
            </div>
            <div class="div-img">
                <img src="./images/solo.jpg" alt="">
            </div>`
    this.style.background="orange";
    btn2.style.background="#325492";
    btn1.style.background="#325492";
    btn4.style.background="#325492";
}
btn4.onclick=function(){
    document.querySelector("#features").innerHTML=`
    <div class="div-text">
                <div class="why-yoga">
                     <h2>Stretching </h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ducimus maiores molestiae illum animi distinctio quidem unde. Recusandae, reprehenderit nam. Qui veniam ratione animi maxime hic sequi, libero explicabo expedita.
                    </p>
                    <br>
                </div>
               
                <div class="yoga-time">
                    <h2>What is Srretching</h2>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat ducimus maiores molestiae illum animi distinctio quidem unde. Recusandae, reprehenderit nam. Qui veniam ratione animi maxime hic sequi, libero explicabo expedita.
                    </p>
                    <br>
                </div>
            </div>
            <div class="div-img">
                <img src="./images/stret.webp" alt="">
            </div>`
    this.style.background="orange";
    btn2.style.background="#325492";
    btn3.style.background="#325492";
    btn1.style.background="#325492";
}

