    const audio = document.querySelector("audio");
    const img = document.getElementById("saiya")
    const play = document.getElementById("play");
    const back = document.getElementById("back");
    const forward = document.getElementById("forward");
    const title = document.getElementById("title");
    const artist = document.getElementById("artist");


    const songs = [
      {
        name :"suniyan suniyan.mp3",
        title:"suniyan suniyan" ,
        artist: "juss x MixSingh",
        } ,
        {
          name :"husna.mp3",
          title:"husna",
          artist:"Anuv Jain",
        },
        {
          name : "ishq di bajiya.mp3",
          title: "ishq di bajiya",
          artist: "Diljit Dosanjh",
        },
        {
          name :"love you.mp3",
          title:"love you",
          artist:"AP Dhillon",
        },
    ]
    let isPlaying = false;
    let currentSongIndex = 0;
    //   for play function
   const playMusic  = () => {
        isPlaying = true;
        audio.play();
        play.classList.replace("fa-play" , "fa-pause");
        img.classList.add("anime");
    }
    // for pause function
    const pauseMusic = () => {
        isPlaying = false;
        audio.pause();
        play.classList.replace( "fa-pause" , "fa-play");
        img.classList.remove("anime");
    };
      
    const loadsong = (song) => {
      title.textContent = song.title;
      artist.textContent = song.artist;
      audio.src = "music/" + song.name;
      img.src = "images/" + song.name.replace(".mp3", ".jpg");
    };
  
    play.addEventListener("click" , () => {
        if( isPlaying ) {
            pauseMusic();
        }else {
           playMusic();
        }
    });

    back.addEventListener("click", () => {
      currentSongIndex--;
      if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
      }
      loadsong(songs[currentSongIndex]);
      playMusic();
    });
  
    forward.addEventListener("click", () => {
      currentSongIndex++;
      if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
      }
      loadsong(songs[currentSongIndex]);
      playMusic();
    });
  
    // Load the first song when the page loads
    loadsong(songs[currentSongIndex]);
    playMusic();
    // changing music data

    // const loadsong = (songs) => {
    //   title.textContent = songs.title;
    //   artist.textContent = songs.artist;
    //   music.src="music/" + songs.name + ".mp3";
    //   img.src = "images.1/"+ songs.name+".jpg";

    

    // };
    // loadsong(songs[2]);
