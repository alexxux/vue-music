import { playMode } from 'common/js/config.js'
const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playList: [],
  sequenceList: [],
  playMode: playMode.sequence,
  currentIndex: -1
}

export default state