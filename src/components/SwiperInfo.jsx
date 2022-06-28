import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import manbg from "../images/man_bg.png";

const SwiperInfo = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class=${className}></span>`;
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="articles__container">
            <h1>
              Как бизнесу сохранять <br />
              IT-кадры на фоне кризиса
            </h1>
            <p>
              Инструменты, которые могут использовать компании <br /> для
              удержания сотрудников
            </p>
            <button className="btn">Подробнее</button>
          </div>
          <img src={manbg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="articles__container">
            <h1>
              Как бизнесу сохранять <br />
              IT-кадры на фоне кризиса
            </h1>
            <p>
              Инструменты, которые могут использовать компании <br /> для
              удержания сотрудников
            </p>
            <button className="btn">Подробнее</button>
          </div>
          <img src={manbg} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="articles__container">
            <h1>
              Как бизнесу сохранять <br />
              IT-кадры на фоне кризиса
            </h1>
            <p>
              Инструменты, которые могут использовать компании <br />
              для удержания сотрудников
            </p>
            <button className="btn">Подробнее</button>
          </div>
          <img src={manbg} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperInfo;
