
let songindex=0;
let audioelement=new Audio('song1.mp3');
let audio=new Audio('song1.mp3');
let coverpath=document.getElementById('songicon');
let songname=document.getElementById('songname');
let masterplay=document.getElementById('masterplay');
let smallimg=document.getElementById('smallimg');
let songitemplay=document.getElementsByClassName('songitemplay');
let tryy=document.getElementsByClassName('try');
let myprogressbar=document.getElementById('myprogressbar');
let songitems=Array.from(document.getElementsByClassName('songitem'));
let songtrend=Array.from(document.getElementsByClassName('trendsong'));
var currentPage = window.location.pathname.split('/').pop();
let timestampelement=document.querySelectorAll(".timestamp");
let trendsongelement=document.getElementsByClassName('trendsong');
let song=[
    {songname:"tu hai kahan",
filepath:"song2.mp3",
coverpath:"cover2.jpeg"},
{songname:"tu hai kahan",
filepath:"song4.mp3",
coverpath:"cover4.jpeg"},
{songname:"tu hai kahan",
filepath:"song3.mp3",
coverpath:"cover3.jpeg"},
]
songtrend.forEach((element, i)=>{
    console.log(element,i);
   // element.getElementsByTagName("img")[0].src=song[i].coverpath;
    //element.getElementsByClassName("songname")[0].innerText=song[i].songname;
})
Array.from(document.getElementsByClassName('trendsong')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        songindex=parseInt(e.target.id);
        console.log(songindex);
audioelement.src=`song${songindex+1}.mp3`;
audioelement.play();
masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
    })
})
masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0)
    {
        audioelement.play();
        masterplay.classList.remove("fa-play");
        masterplay.classList.add("fa-pause");
    }
   else{
    audioelement.pause();
        masterplay.classList.remove("fa-pause");
        masterplay.classList.add("fa-play");
   }
})


audioelement.addEventListener('timeupdate',()=>
{
console.log('timeupdate');
progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
console.log(progress);
myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>
{
audioelement.currentTime=myprogressbar.value * audioelement.duration/100;
})
const makeallplays=()=>{
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.classList.add('fa-play');
    element.classList.remove('fa-pause');

})
}
if (currentPage === 'sadsongs.html') {
let songs = [
    {
        songname: "tu hai kahan",
        filepath: "/sad/song1.mp3",
        coverpath:"/sad/cover1.jpeg",
    },
    {
        songname: "husn",
        filepath: "/sad/song2.mp3",
        coverpath:"/sad/cover2.jpeg",
    },
    {
        songname: "time traveller",
        filepath: "/sad/song3.mp3",
        coverpath:"/sad/cover3.jpeg",
    },
    {
        songname: "Baarishein",
        filepath: "/sad/song4.mp3",
        coverpath:"/sad/cover4.jpeg",
    },
    {
        songname: "Alag asman",
        filepath: "/sad/song5.mp3",
        coverpath:"/sad/cover5.jpeg",
    },
    {
        songname: "Saudebazi",
        filepath: "/sad/song6.mp3",
        coverpath:"/sad/cover6.jpg",
        
    },
    {
        songname: "Darasal",
        filepath: "/sad/song7.mp3",
        coverpath:"/sad/cover7.jpeg",
        
    },
   
];
songitems.forEach((element, i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
})


masterplay.addEventListener('click',()=>{
        if(audioelement.paused || audioelement.currentTime<=0)
        {
            audioelement.play();
            masterplay.classList.remove("fa-play");
            masterplay.classList.add("fa-pause");
        }
       else{
        audioelement.pause();
            masterplay.classList.remove("fa-pause");
            masterplay.classList.add("fa-play");
       }
    })


audioelement.addEventListener('timeupdate',()=>
{
    console.log('timeupdate');
    progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
    console.log(progress);
    myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>
{
    audioelement.currentTime=myprogressbar.value * audioelement.duration/100;
})
const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.add('fa-play');
        element.classList.remove('fa-pause');

})
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
makeallplays();
songindex=parseInt(e.target.id);
e.target.classList.remove('fa-play');
e.target.classList.add('fa-pause');
audioelement.src= `song${songindex+1}.mp3`;
songname.innerText=songs[songindex].songname;
audioelement.currentTime=0;
audioelement.play();
coverpath.src=`cover${songindex+1}.jpeg`;
masterplay.classList.remove('fa-play');
masterplay.classList.add('fa-pause');
smallimg.src=`cover${songindex+1}.jpeg`;
    })
})
//imageelement.addEventListener('change',()=>{
    //imageelement.src=`cover${songindex+1}.jpeg`;
//})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=6)
    {
        songindex=0;
    }
    else
    songindex+=1;
    songname.innerText=songs[songindex].songname;
    audioelement.src= `song${songindex+1}.mp3`;
    coverpath.src=`cover${songindex+1}.jpeg`;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    makeallplays();
    smallimg.src=`cover${songindex+1}.jpeg`;
    
    } )
    



document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0)
    {
        songindex=0;
    }
    else
    songindex-=1;
songname.innerText=songs[songindex].songname;

    audioelement.src= `song${songindex+1}.mp3`;
    coverpath.src=`cover${songindex+1}.jpeg`;
    audioelement.currentTime=0;
    audioelement.play();
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    smallimg.src=`cover${songindex+1}.jpeg`;
   makeallplays();
  
})

let elementIds = ['0', '1', '2', '3','4','5','6'];

for (let i = 0; i < elementIds.length; i++) {
    let element = document.getElementById(elementIds[i]);
    
    if (element !== null && songindex === element.id) {
        tryy.classList.remove('fa-play');
   tryy.classList.add('fa-pause');
        console.log(`Variable matches ID: ${element.id}`);
        break; // If you only need to find one match, break the loop
    } 
}
}

if (currentPage === 'bhajan.html') {
    let audioelement=new Audio('bHAJAN1.mp3');
    let songs = [
        {
            songname: "HANUMAN CHALISA",
            filepath: "/bhajan/BHAJAN1.mp3",
            coverpath:"/bhajan/Bcover1.jpeg",
        },
        {
            songname: "NIGHALO GHEUN",
            filepath: "BHAJAN2.mp3",
            coverpath:"Bcover2.jpeg",
        },
        {
            songname: "sHRI KRISHNA GOVINDA",
            filepath: "BHAJAN3.mp3",
            coverpath:"Bcover3.jpeg",
        },
        {
            songname: "RAM AYENGE",
            filepath: "BHAJAN4.mp3",
            coverpath:"Bcover4.jpeg",
        },
        {
            songname: "BHARAT KA BACCHA BACCHA",
            filepath: "BHAJAN5.mp3",
            coverpath:"Bcover5.jpeg",
        },
        {
            songname: "RAM SIYA RAM",
            filepath: "BHAJAN6.mp3",
            coverpath:"Bcover6.jpg",
            
        },
        {
            songname: "Darasal",
            filepath: "song7.mp3",
            coverpath:"cover7.jpeg",
            
        },
       
    ];
    songitems.forEach((element, i)=>{
        console.log(element,i);
        element.getElementsByTagName("img")[0].src=songs[i].coverpath;
        element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
    })
    
    masterplay.addEventListener('click',()=>{
            if(audioelement.paused || audioelement.currentTime<=0)
            {
                audioelement.play();
                masterplay.classList.remove("fa-play");
                masterplay.classList.add("fa-pause");
            }
           else{
            audioelement.pause();
                masterplay.classList.remove("fa-pause");
                masterplay.classList.add("fa-play");
           }
        })
    
    
    audioelement.addEventListener('timeupdate',()=>
    {
        console.log('timeupdate');
        progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
        console.log(progress);
        myprogressbar.value=progress;
    })
    myprogressbar.addEventListener('change',()=>
    {
        audioelement.currentTime=myprogressbar.value * audioelement.duration/100;
    })
    const makeallplays=()=>{
        Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
            element.classList.add('fa-play');
            element.classList.remove('fa-pause');
    
    })
    }
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
    makeallplays();
    songindex=parseInt(e.target.id);
    e.target.classList.remove('fa-play');
    e.target.classList.add('fa-pause');
    audioelement.src= `BHAJAN${songindex+1}.mp3`;
    songname.innerText=songs[songindex].songname;
    audioelement.currentTime=0;
    console.log(audioelement);
    audioelement.play();
    coverpath.src=`Bcover${songindex+1}.jpeg`;
    masterplay.classList.remove('fa-play');
    masterplay.classList.add('fa-pause');
    smallimg.src=`Bcover${songindex+1}.jpeg`;
        })
    })
    //imageelement.addEventListener('change',()=>{
        //imageelement.src=`cover${songindex+1}.jpeg`;
    //})
    document.getElementById('next').addEventListener('click',()=>{
        if(songindex>=6)
        {
            songindex=0;
        }
        else
        songindex+=1;
        songname.innerText=songs[songindex].songname;
        audioelement.src= `BHAJAN${songindex+1}.mp3`;
        coverpath.src=`Bcover${songindex+1}.jpeg`;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        makeallplays();
        smallimg.src=`Bcover${songindex+1}.jpeg`;
    })
    document.getElementById('previous').addEventListener('click',()=>{
        if(songindex<=0)
        {
            songindex=0;
        }
        else
        songindex-=1;
    songname.innerText=songs[songindex].songname;
    
        audioelement.src= `BHAJAN${songindex+1}.mp3`;
        coverpath.src=`Bcover${songindex+1}.jpeg`;
        audioelement.currentTime=0;
        audioelement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        smallimg.src=`Bcover${songindex+1}.jpeg`;
       
    })
    
    let elementIds = ['0', '1', '2', '3','4','5','6'];
    
    for (let i = 0; i < elementIds.length; i++) {
        let element = document.getElementById(elementIds[i]);
        
        if (element !== null && songindex === element.id) {
            tryy.classList.remove('fa-play');
       tryy.classList.add('fa-pause');
            console.log(`Variable matches ID: ${element.id}`);
            break; // If you only need to find one match, break the loop
        } 
    }
    
    }
    if (currentPage === 'lovesongs.html') {
        let audioelement=new Audio('SSONG1.mp3');
        let songs = [
            {
                songname: "SAIYAAN",
                filepath: "/love/SSONG1.mp3",
                coverpath:"/love/scover1.jpg",
            },
            {
                songname: "PERFECT",
                filepath: "/love/SSONG2.mp3",
                coverpath:"/love/scover2.jpeg",
            },
            {
                songname: "TERA FITOOR",
                filepath: "/love/SSONG3.mp3",
                coverpath:"/love/scover3.jpeg",
            },
            {
                songname: "UNTIL I FOUND YOU",
                filepath: "/love/SSONG4.mp3",
                coverpath:"/love/scover4.jpeg",
            },
            {
                songname: "PAL PAL DIL KE PASS",
                filepath: "/love/SSONG5.mp3",
                coverpath:"/love/scover5.jpg",
            },
            {
                songname: "RAM SIYA RAM",
                filepath: "/love/BHAJAN6.mp3",
                coverpath:"/love/bcover6.jpg",
                
            },
            {
                songname: "Darasal",
                filepath: "/love/song7.mp3",
                coverpath:"/love/cover7.jpeg",
                
            },
           
        ];
        songitems.forEach((element, i)=>{
            console.log(element,i);
            element.getElementsByTagName("img")[0].src=songs[i].coverpath;
            element.getElementsByClassName("songname")[0].innerText=songs[i].songname;
        })
        
        masterplay.addEventListener('click',()=>{
                if(audioelement.paused || audioelement.currentTime<=0)
                {
                    audioelement.play();
                    masterplay.classList.remove("fa-play");
                    masterplay.classList.add("fa-pause");
                }
               else{
                audioelement.pause();
                    masterplay.classList.remove("fa-pause");
                    masterplay.classList.add("fa-play");
               }
            })
        
        
        audioelement.addEventListener('timeupdate',()=>
        {
            console.log('timeupdate');
            progress=parseInt((audioelement.currentTime/audioelement.duration)*100);
            console.log(progress);
            myprogressbar.value=progress;
        })
        myprogressbar.addEventListener('change',()=>
        {
            audioelement.currentTime=myprogressbar.value * audioelement.duration/100;
        })
        const makeallplays=()=>{
            Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
                element.classList.add('fa-play');
                element.classList.remove('fa-pause');
        
        })
        }
        Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
            element.addEventListener('click',(e)=>{
        makeallplays();
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioelement.src= `ssong${songindex+1}.mp3`;
        songname.innerText=songs[songindex].songname;
        audioelement.currentTime=0;
        console.log(audioelement);
        audioelement.play();
        coverpath.src=`scover${songindex+1}.jpeg`;
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
        smallimg.src=`scover${songindex+1}.jpeg`;
            })
        })
        //imageelement.addEventListener('change',()=>{
            //imageelement.src=`cover${songindex+1}.jpeg`;
        //})
        document.getElementById('next').addEventListener('click',()=>{
            if(songindex>=6)
            {
                songindex=0;
            }
            else
            songindex+=1;
            songname.innerText=songs[songindex].songname;
            audioelement.src= `ssong${songindex+1}.mp3`;
            coverpath.src=`scover${songindex+1}.jpeg`;
            audioelement.currentTime=0;
            audioelement.play();
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause');
            makeallplays();
            smallimg.src=`scover${songindex+1}.jpeg`;
        })
        document.getElementById('previous').addEventListener('click',()=>{
            if(songindex<=0)
            {
                songindex=0;
            }
            else
            songindex-=1;
        songname.innerText=songs[songindex].songname;
        
            audioelement.src= `ssong${songindex+1}.mp3`;
            coverpath.src=`scover${songindex+1}.jpeg`;
            audioelement.currentTime=0;
            audioelement.play();
            masterplay.classList.remove('fa-play');
            masterplay.classList.add('fa-pause');
            smallimg.src=`scover${songindex+1}.jpeg`;
           
        })
        
        let elementIds = ['0', '1', '2', '3','4','5','6'];
        
        for (let i = 0; i < elementIds.length; i++) {
            let element = document.getElementById(elementIds[i]);
            
            if (element !== null && songindex === element.id) {
                tryy.classList.remove('fa-play');
           tryy.classList.add('fa-pause');
                console.log(`Variable matches ID: ${element.id}`);
                break; // If you only need to find one match, break the loop
            } 
        }
        
        }

function redirectToLink() {
    var selectedCar = document.getElementById("cars").value;

    if (selectedCar === 'lovesong') {
      window.location.href = '/love/lovesongs.html';
    } else if (selectedCar === 'sadsong') {
      window.location.href = '/sad/sadsongs.html';
    } else if (selectedCar === 'bhajan') {
      window.location.href = '/bhajan/bhajan.html';
    } else if (selectedCar === 'audi') {
      window.location.href = 'audi.html';
    }
  }