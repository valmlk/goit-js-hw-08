import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOKALTIMESTORAGE = "videoplayer-current-time";

function onPlay(data) {
    localStorage.setItem(LOKALTIMESTORAGE, JSON.stringify(data.seconds));
};


const currentTime = localStorage.getItem(LOKALTIMESTORAGE);
if (currentTime !== null) {
  player.setCurrentTime(currentTime)
};

player.on('timeupdate', throttle(onPlay, 1000));