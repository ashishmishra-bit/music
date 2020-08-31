const music = document.querySelector('audio'); 
const img = document.querySelector('img'); 
const play = document.getElementById('play');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const songs = [{
    name: "meri ashiqui",
    title:"meri ashiqui",
    artist: "Jubin Nautiyal",
},
{
    name: "tum hi aana",
    title: "tum hi aana",
    artist: "Jubin Nautiyal",
},
    {
        name: "Lo Safar",
        title: "Lo Safar",
        artist: "Jubin Nautiyal",
    },
    {
        name: "Rozana",
        title: "Rozana",
        artist: "Sunidhi Chauhan",
    },
    {
        name: "senorita",
        title: "senorita",
        artist: "Shawn Mendes, Camila Cabello",
    },
    {
        name: "Iridescent",
        title: "Iridescent",
        artist: "Linkin Park",
    },
    {
        name: "cheap thrills",
        title: "cheap thrills",
        artist: "Linkin Park",
    },
    {
        name: "Lokkhiti",
        title: "Lokkhiti",
        artist: "Paloma Majumder",
    },
    {
        name: "Shanto Hou",
        title: "Shanto Hou",
        artist: "Anupam Roy",
    },
    {
        name: "trampolin",
        title: "trampolin",
        artist: "Shaed",
    },

]



 let isPlaying =false;

// For play
const playMusic= ()=>{
// play.addEventListener('click',() => {
    isPlaying = true;
    music.play();

    play.classList.replace('fa-play',"fa-pause");
    img.classList.add("anime");
};

// For pause
const pauseMusic = () =>{
// play.addEventListener('click', () => {
    isPlaying = false;
    music.pause();

    play.classList.replace('fa-pause', "fa-play");
    img.classList.add("anime");
};

play.addEventListener('click',() =>{
    // if(isPlaying){
    //     pauseMusic();
    // }else{
    //     playMusic();
    // }
    
    isPlaying ? pauseMusic() : playMusic();
});

// Change music data
const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "song/"+songs.name+".mp3";
    img.src = "img/"+songs.name+".jpg";
};

songIndex = 0;
// loadSong(songs[1]);

const nextSong =  () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

next.addEventListener("click" , nextSong);
prev.addEventListener("click", prevSong);