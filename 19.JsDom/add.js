const container=document.createElement("div");

const container1=document.createElement("div");
const box1=document.createElement("div");
box1.style.backgroundColor="black";
box1.innerHTML="960 x 360px";
box1.style.color="white";
box1.style.textAlign="center"
box1.style.alignContent="center";
box1.style.fontSize="40px"
box1.style.width="960px";
box1.style.height="360px";
container1.appendChild(box1);



const container2=document.createElement("div");
container2.style.width="290px"
container2.style.margin="10px"
const box2=document.createElement("div");
box2.style.backgroundColor="black";
box2.innerHTML="290 x 180px";
box2.style.color="white";
box2.style.textAlign="center"
box2.style.alignContent="center";
box2.style.fontSize="40px"
box2.style.width="290px"
box2.style.height="180px";

const text1=document.createElement("i");
text1.innerHTML=("Elton");
text1.style.fontWeight="900"
text1.style.fontSize="25px";
text1.style.marginTop="50px"
const textDetail1=document.createElement("p");
textDetail1.innerHTML="Computer Science";
textDetail1.style.fontSize="20px";
const read1=document.createElement("p");
read1.innerHTML="Read More >";
read1.style.color="red";
read1.style.textAlign="right"
read1.style.fontSize="20px";
container2.append(box2,text1,textDetail1,read1);



const container3=document.createElement("div");
container3.style.width="290px";
container3.style.margin="10px"
const box3=document.createElement("div");
box3.style.backgroundColor="black";
box3.innerHTML="290 x 180px";

box3.style.color="white";
box3.style.textAlign="center"
box3.style.alignContent="center";
box3.style.fontSize="40px"
box3.style.width="290px"
box3.style.height="180px";

const text2=document.createElement("i");
text2.innerHTML=("Elton");
text2.style.fontWeight="900"
text2.style.fontSize="25px";
text2.style.marginTop="50px"
const textDetail2=document.createElement("p");
textDetail2.innerHTML="Computer Science";
textDetail2.style.fontSize="20px";
const read2=document.createElement("p");
read2.innerHTML="Read More >";
read2.style.color="red";
read2.style.textAlign="right"
read2.style.fontSize="20px";

container3.append(box3,text2,textDetail2,read2);


const container4=document.createElement("div");
container4.style.width="290px";
container4.style.margin="10px"
const box4=document.createElement("div");
box4.style.backgroundColor="black";
box4.innerHTML="290 x 180px";

box4.style.color="white";
box4.style.textAlign="center"
box4.style.alignContent="center";
box4.style.fontSize="40px"
box4.style.width="290px"
box4.style.height="180px";

const text3=document.createElement("i");
text3.innerHTML=("Elton");
text3.style.fontWeight="900"
text3.style.fontSize="25px";
text1.style.marginTop="50px"
const textDetail3=document.createElement("p");
textDetail3.innerHTML="Computer Science";
textDetail3.style.fontSize="20px";
const read3=document.createElement("p");
read3.innerHTML="Read More >";
read3.style.color="red";
read3.style.textAlign="right"
read3.style.fontSize="20px";
container4.append(box4,text3,textDetail3,read3);

document.body.append(container1,container2,container3,container4);
