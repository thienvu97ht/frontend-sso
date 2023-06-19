import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div className="container home-customize">
      <div className="row">
        <div className="col-12 mt-3">
          <div className="title">
            Single Sign On (SSO) - Hệ thống đăng nhập tập trung
          </div>
          <div className="feature">Các chức năng nổi bật trong khoá học</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              1. Đăng nhập sử dụng Session với Passport.js (Node.js)
            </li>
            <li className="list-group-item">
              2. Sử dụng Access_token, Refresh_token và Cookie để đăng nhập
              (React.js)
            </li>
            <li className="list-group-item">
              3. Đăng nhập với Google/Facebook Account
            </li>
            <li className="list-group-item">
              4. Sử dụng hệ cơ sở dữ liệu quan hệ database Postgres
            </li>
            <li className="list-group-item">
              5. Xây dựng Service sử dụng Access_token
            </li>
          </ul>
          <div className="feature">
            <a href="#">Chi tiết giáo trình khoá học. Xem tại đây.</a>
          </div>
          <div className="feature">
            Video demo kết quả đạt được khi kết thúc khoá học
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
