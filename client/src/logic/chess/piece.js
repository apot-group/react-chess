/** 
    Vì React chính thức không khuyến khích kế thừa các thành phần và chúng ta cần chính xác điều đó (cộng với tính đa hình) cho các mảnh, 
    lớp JavaScript là cấu trúc dữ liệu tốt nhất cho Piece. Trong Piece, chúng tôi giữ thông tin người chơi (1 hoặc 2) và liên kết hình ảnh biểu tượng (quân đen, quân trắng), 
    cả hai đều đến từ các lớp con chuyên biệt như Rook, Pawn, v.v.
 **/

export default class Piece {
    constructor(player, iconUrl) {
        this.player = player;
        this.style = { backgroundImage: "url('" + iconUrl + "')"};
    }
    
    getPlayer() {
        return this.player
    }
}