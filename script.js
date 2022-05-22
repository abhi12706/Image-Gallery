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

var arr = new Array(data.length);
var bigimage = document.querySelector(".image");
bigimage.src = data[0].previewImage;
let ind = 0;
const buttonsContainer = document.getElementById("buttonsContainer");
const nam = document.getElementById("name");
nam.innerText = data[0].title;

function start_and_end(str) {
    if (str.length > 35) {
        return str.substr(0, 20) + '...' + str.substr(str.length - 10, str.length);
    }
    return str;
}

for (var i = 0; i < data.length; i++) {
    const button = document.createElement("button");
    const imag = document.createElement("img");
    const span = document.createElement("span");
    arr[i] = data[i].title;
    button.innerText = start_and_end(arr[i]);
    imag.src = data[i].previewImage;
    span.appendChild(imag);
    span.appendChild(button);
    (function (index) {
        button.addEventListener("click", function () {
            bigimage.src = data[index].previewImage;
            nam.innerText = arr[index];
            ind = index;
        })
        nam.addEventListener("input", function () {
            if (index == ind) {
                button.innerText = start_and_end(nam.innerText);
                arr[index] = nam.innerText
            }
        })
        document.addEventListener("keydown",function(e){
            if(e.key=="ArrowUp")
            {
                if(index==ind-1){
                    bigimage.src=data[index].previewImage;
                    nam.innerText = arr[index];
                    ind = index;
                }
            }
            else if(e.key=="ArrowDown")
            {
                if(index==ind+1){
                    bigimage.src=data[index].previewImage;
                    nam.innerText = arr[index];
                }
            }
        })

    })(i)
    buttonsContainer.appendChild(span);
}

document.addEventListener("keydown",function(e){
    if(e.key=="ArrowDown")
    {
        if(ind<data.length-1)
        {
            ind++;
        }
    }
})