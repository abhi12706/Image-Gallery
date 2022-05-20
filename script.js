var data = [
    {
        "previewImage": "https://images.unsplash.com/photo-1561948955-570b270e7c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "cat.jpeg"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "a man and a woman trying to cook a meal together in a modern kitchen.jpg"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "bali-kelingking-beach-plastic-removal-drive.key"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1623206837956-07dab21608f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "title": "NextByk Investor Pitch 2022.ppt"
    },
    {
        "previewImage": "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        "title": "interns-performance-report-may-2022.key"
    }
]

var bigimage=document.querySelector(".image");
// function setSrc(){

//     bigimage.src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/streams/2013/March/130326/1C6639340-google-logo.jpg"
// }
// function changeImage(key){
//     bigimage.src=data[key-1].previewImage;
//     console.log("haha")
// }
var button1=document.querySelector("#button1");
var button2=document.querySelector("#button2");
var button3=document.querySelector("#button3");
var button4=document.querySelector("#button4");
var button5=document.querySelector("#button5");
button1.innerHTML=data[0].title
button2.innerHTML=data[1].title
button3.innerHTML=data[2].title
button4.innerHTML=data[3].title
button5.innerHTML=data[4].title

button1.addEventListener('click',()=>{
    bigimage.src=data[0].previewImage;
})
button2.addEventListener('click',()=>{
    bigimage.src=data[1].previewImage;
})
button3.addEventListener('click',()=>{
    bigimage.src=data[2].previewImage;
})
button4.addEventListener('click',()=>{
    bigimage.src=data[3].previewImage;
})
button5.addEventListener('click',()=>{
    bigimage.src=data[4].previewImage;
})