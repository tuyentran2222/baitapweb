import React from 'react'

class Info extends React.Component{
    render(){
        return (
            <div className="row" style={{marginTop:'40px',textAlign:'left'}}>
                <div id="addressCompany" className="col-xl-4" style={{marginLeft:'5%'}}>
                   
                    <div>Dòng thời gian</div>
                    <p>Nếu bạn định sử dụng App cần chắc chắn rằng không có bất kỳ thứ gì ẩn văn bản.</p>
                    <p><span></span>123 Giải Phóng,Hai Bà Trưng,Hà Nội,Việt Nam.</p>
                    <p><span></span><a href="mailto:tuyen.tv184012@sis.hust.edu.vn">info@sitename.com</a></p>
                    <p><span></span>0834925098</p>
                </div>
                <div id="UsefulLinks" className="col-xl-2">
                    <h6>Links hữu ích</h6>
                    <ul class="link">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Địa chỉ</a></li>
                        <li><a href="#">Liên kết</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div id="MyAccount" className="col-xl-2">
                    <h6>Tài khoản</h6>
                    <ul class="link">
                        <li><a href="#">Tài khoản của tôi</a></li>
                        <li><a href="#">Giảm giá</a></li>
                        <li><a href="#">Về trang chủ</a></li>
                        <li><a href="#">Lịch sử thanh toán</a></li>
                        <li><a href="#">Đơn hàng hiện có</a></li>
                    </ul>
                </div>
                <div id="Down_Social" className="col-xl-3">
                    <h6>Tải ứng dụng trên</h6>
                    <div>
                        <div>google play</div>
                        <div>App store</div>
                    </div>
                    <h6>mạng xã hội</h6>
                    <div>
                        <ul className="link">
                            <li><a href="#"><span>Fb</span></a></li>
                            <li><a href="#"><span>Yb</span></a></li>
                            <li><a href="#"><span>Twitter</span></a></li>
                        </ul>
                    </div>


                </div>
            </div>

        );
    }
}
export default Info;