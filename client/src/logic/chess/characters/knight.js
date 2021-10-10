// Hiep si? bong' dem ~~ ngua. chu' loz gi` ghe^
import Piece from '../piece.js';
// import { isSameRow } from '../helpers'

export default class Knight extends Piece {
  constructor(player) {
    super(player, (player === 1? "https://i.imgur.com/xthPp5w.png" : "https://i.imgur.com/xSIq9Je.png"));
  }

  isMovePossible(src, dest) {
    // return ((src - 17 === dest && !isSameRow(src, dest)) ||
    //   (src - 10 === dest && !isSameRow(src, dest)) ||
    //   (src + 6 === dest && !isSameRow(src, dest)) ||
    //   (src + 15 === dest && !isSameRow(src, dest)) ||
    //   (src - 15 === dest && !isSameRow(src, dest)) ||
    //   (src - 6 === dest && !isSameRow(src, dest)) ||
    //   (src + 10 === dest && !isSameRow(src, dest)) ||
    //   (src + 17 === dest && !isSameRow(src, dest)))
  }

  /**
   * always returns empty array because of jumping
   * @return {[]}
   */
  getSrcToDestPath() {
    return [];
  }
}