const songs = [
    { title: 'I Want You Back', artist: 'Artist 1', src:'music/music1.mp3', cover: 'img/cover1.jpeg'},
    { title: 'As que pase', artist: 'Artist 2', src:'music/music2.mp3', cover: 'img/cover2.jpeg'},
    { title: 'Solo valientes', artist: 'Artist 3', src:'music/music3.mp3', cover: 'img/cover3.jpeg'},
    { title: 'Un dia para recordar', artist: 'Artist 4', src:'music/music4.mp3', cover: 'img/cover4.jpeg'},
    { title: 'Diferente', artist: 'Artist 5', src:'music/music5.mp3', cover: 'img/cover5.jpeg'},

]

let currentSongIndex = 0;

let isPlaying = false;

let audio;

function playCurrentSong() {
    if (audio) {
        audio.stop();
    }

    audio = new Howl({
        src: [songs[currentSongIndex].src],
        autoplay: isPlaying,
        volume: volumeSlider.value,
        onend: function () {
            playNextSong();
        }
    })

    updateSongInfo();
}

const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const volumeSlider = document.getElementById('volume');
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');
const albumCover = document.getElementById('albumCover');

playButton.addEventListener('click', () => {
    isPlaying =  true;
    playCurrentSong();
});

pauseButton.addEventListener('click', () => {
    isPlaying = false;
    audio.pause();
})

nextButton.addEventListener('click', () => {
    playNextSong();
})

prevButton.addEventListener('click', () => {
    if (audio.seek() > 5){
        audio.seek(0);
    }else {
        currentSongIndex= (currentSongIndex - 1 + songs.length) % songs.length;
        playCurrentSong();
    }
    
});

volumeSlider.addEventListener('input', ()=>{

    audio.volume(volumeSlider.value);
});

function updateSongInfo() {
    songTitle.textContent = songs[currentSongIndex].title;
    songArtist.textContent = songs[currentSongIndex].artist;
    albumCover.src = songs[currentSongIndex].cover;
}

function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playCurrentSong();
};

playCurrentSong()
