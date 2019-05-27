var JoinUsButton = document.querySelector(".TopButtons .Button#JoinUs");
var JoinUsContent = document.querySelector(".Grid.basico.arreglo");
JoinUsButton.addEventListener("click",JoinUsFunction);

var AboutUsButton = document.querySelector(".TopButtons .Button#AboutUs");
var AboutUsContent = document.querySelector(".Gridas.basico.arreglo");
AboutUsButton.addEventListener("click",AboutUsFunction);

var BenefitsButton = document.querySelector(".TopButtons .Button#Benefits");
var BenefitsContent = document.querySelector(".Gridus.basico.arreglo");
BenefitsButton.addEventListener("click",BenefitsFunction);

var QAButton = document.querySelector(".TopButtons .Button#QA");
var QAContent = document.querySelector(".Grido.basico.arreglo");
QAButton.addEventListener("click",QAFunction);

var TopNewsButton = document.querySelector(".TopButtons .Button#TopNews");
var TopNewsContent = document.querySelector(".Gridis.basico.arreglo");
TopNewsButton.addEventListener("click",TopNewsFunction);

function JoinUsFunction(){
  JoinUsContent.setAttribute('class','Grid basico arreglo');
  AboutUsContent.setAttribute('class','Gridas basico arreglo invisible');
  BenefitsContent.setAttribute('class','Gridus basico arreglo invisible');
  QAContent.setAttribute('class','Grido basico arreglo invisible');
  TopNewsContent.setAttribute('class','Gridis basico arreglo invisible');
}

function AboutUsFunction(){
  JoinUsContent.setAttribute('class','Grid basico arreglo invisible');
  AboutUsContent.setAttribute('class','Gridas basico arreglo ');
  BenefitsContent.setAttribute('class','Gridus basico arreglo invisible');
  QAContent.setAttribute('class','Grido basico arreglo invisible');
  TopNewsContent.setAttribute('class','Gridis basico arreglo invisible');
}
function BenefitsFunction(){
  JoinUsContent.setAttribute('class','Grid basico arreglo invisible');
  AboutUsContent.setAttribute('class','Gridas basico arreglo invisible');
  BenefitsContent.setAttribute('class','Gridus basico arreglo ');
  QAContent.setAttribute('class','Grido basico arreglo invisible');
  TopNewsContent.setAttribute('class','Gridis basico arreglo invisible');
}
function QAFunction(){
  JoinUsContent.setAttribute('class','Grid basico arreglo invisible');
  AboutUsContent.setAttribute('class','Gridas basico arreglo invisible');
  BenefitsContent.setAttribute('class','Gridus basico arreglo invisible');
  QAContent.setAttribute('class','Grido basico arreglo');
  TopNewsContent.setAttribute('class','Gridis basico arreglo invisible');
}
function TopNewsFunction(){
  JoinUsContent.setAttribute('class','Grid basico arreglo invisible');
  AboutUsContent.setAttribute('class','Gridas basico arreglo invisible');
  BenefitsContent.setAttribute('class','Gridus basico arreglo invisible');
  QAContent.setAttribute('class','Grido basico arreglo invisible');
  TopNewsContent.setAttribute('class','Gridis basico arreglo ');
}
