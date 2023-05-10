let movies=[
{
    name:"Super 30",
    des:"Lorem ipsum",
    image: "images/super30.jpg"
},
{
    name:"Chichhore",
    des:"Lorem ipsum",
    image: "images/chichhore.jpg"
},
{
    name:"Housefull 4",
    des:"Lorem ipsum",
    image: "images/housefull 4.jpg"
},
{
    name:"Mission Mangal",
    des:"Lorem ipsum",
    image: "images/mission mangal.jpg"
},
{
    name:"Raid",
    des:"Lorem ipsum",
    image: "images/Raid.jpg"
},
{
    name:"Tanhaji",
    des:"Lorem ipsum",
    image: "images/tanhaji.jpg"
}
];
const carousel=document.querySelector('.carousel');
let slider=[];
let sliderIndex=0;//track the current slide
const createSlide=()=>{
    if(sliderIndex>=movies.length){
        sliderIndex=0;
    }

    //create DOM elements
    let slide=document.createElement('div');
    

}