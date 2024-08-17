console.log("script running");
let songsContainer=document.querySelector(`.container ul` )
let songsAudio=document.querySelectorAll('footer audio')
const insertSong=(image,Namee,timee)=>{
    let li=document.createElement('li')
    let img=document.createElement('img')
    let Name=document.createElement('span')
    let time=document.createElement('span')
    img.src=image;
    Name.innerText=Namee;
    time.innerText=timee;
    Name.id='name';
    li.append(img);
    li.append(Name);
    li.append(time);
    songsContainer.append(li);
}
// insertSong(img,Name,time)
let songName={
    2: "Cielo - Huma-Huma" , 
    3: "DEAF KEV - Invincible [NCS Release]-320k" , 
    4: "Different Heaven & EH!DE - My Heart [NCS Release]" , 
    5: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release" , 
    6: "Rabba - Salam-e-Ishq" , 
    7: "Sakhiyaan - Salam-e-Ishq" , 
    8: "Bhula Dena - Salam-e-Ishq" ,
    9: "Tumhari Kasam - Salam-e-Ishq" ,
    10: "Na Jaana - Salam-e-Ishq" ,
    
}
for (const key in songName) {
    if (Object.prototype.hasOwnProperty.call(songName, key)) {
        const Name = songName[key];
        insertSong(`covers/${key}.jpg`,Name,'05:34')
    }
}
let songs=document.querySelectorAll(`.container ul li` )
for (const key in songs) {
    if (Object.prototype.hasOwnProperty.call(songs, key)) {
        const element = songs[key];
        element.addEventListener('click',()=>{
            // console.log(parseInt(key))
            playSong(parseInt(key))
        });
    }
}
const playSong=(index)=>{
    removeControl(index)
    console.log(songsAudio[index])
    songsAudio[index].setAttribute("controls", "controls");
    songsAudio[index].play(); 
}
const removeControl=(index)=>{
    
    songsAudio.forEach((song,i)=>{
        if(i!==index){
            song.removeAttribute("controls")
            song.pause();
            song.currentTime=0
        }
    })
}