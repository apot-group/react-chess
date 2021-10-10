// Vua ne` =))
// ke thua trong Js la` extends nha may dua
import Piece from '../piece'


export default class King extends Piece {
    constructor(player){
      super(player, (player === 1? "https://i.imgur.com/vXqK5kf.png" : "https://i.imgur.com/cSwvjV9.png"));
    }
  
    // logic of move.
    isMovePossible(src, dest){
      return (src - 9 === dest || 
        src - 8 === dest || 
        src - 7 === dest || 
        src + 1 === dest || 
        src + 9 === dest || 
        src + 8 === dest || 
        src + 7 === dest || 
        src - 1 === dest);
    }
  
    /**
     * always returns empty array because of one step
     * @return {[]}
     */
    getSrcToDestPath(src, dest){
      return [];
    }
  }