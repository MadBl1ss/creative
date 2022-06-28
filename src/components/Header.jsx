import React from "react";

const Header = () => {
  return (
    <div className="header">
      <a className="header__logo" href="/">
        <svg
          width="121"
          height="30"
          viewBox="0 0 121 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M49.3993 23.4955C48.1193 23.4955 46.8788 23.3137 45.6778 22.9503C44.4926 22.5868 43.5523 22.1048 42.857 21.5043L43.9237 19.1102C44.6032 19.6475 45.4328 20.09 46.4126 20.4376C47.4082 20.7695 48.4037 20.9354 49.3993 20.9354C50.6319 20.9354 51.5485 20.7379 52.149 20.3428C52.7653 19.9478 53.0735 19.4263 53.0735 18.7784C53.0735 18.3043 52.8996 17.9171 52.552 17.6169C52.2201 17.3008 51.7934 17.0559 51.2719 16.882C50.7505 16.7082 50.0393 16.5107 49.1386 16.2894C47.8744 15.9892 46.8472 15.6889 46.057 15.3887C45.2827 15.0884 44.6111 14.6222 44.0422 13.9901C43.4891 13.3422 43.2126 12.4731 43.2126 11.3827C43.2126 10.4661 43.4575 9.63648 43.9474 8.89375C44.4531 8.13522 45.2037 7.53472 46.1993 7.09224C47.2106 6.64977 48.4433 6.42853 49.8971 6.42853C50.9085 6.42853 51.9041 6.55495 52.8838 6.80779C53.8636 7.06064 54.709 7.4241 55.4202 7.89818L54.4483 10.2923C53.7214 9.86562 52.9628 9.54166 52.1727 9.32043C51.3826 9.09919 50.6161 8.98857 49.8734 8.98857C48.6566 8.98857 47.7479 9.194 47.1474 9.60487C46.5627 10.0157 46.2704 10.5609 46.2704 11.2405C46.2704 11.7145 46.4363 12.1017 46.7682 12.402C47.1158 12.7022 47.5504 12.9392 48.0719 13.1131C48.5934 13.2869 49.3045 13.4844 50.2053 13.7057C51.4379 13.9901 52.4492 14.2904 53.2394 14.6064C54.0295 14.9067 54.7011 15.3729 55.2542 16.005C55.8231 16.6371 56.1076 17.4904 56.1076 18.565C56.1076 19.4816 55.8547 20.3112 55.349 21.0539C54.8592 21.7967 54.1085 22.3893 53.0972 22.8318C52.0858 23.2742 50.8532 23.4955 49.3993 23.4955Z"
            fill="black"
          />
          <path
            d="M65.8951 10.4582C67.1278 10.4582 68.226 10.7269 69.19 11.2642C70.1698 11.8015 70.9362 12.56 71.4893 13.5398C72.0424 14.5195 72.3189 15.6494 72.3189 16.9294C72.3189 18.2095 72.0424 19.3473 71.4893 20.3428C70.9362 21.3226 70.1698 22.0811 69.19 22.6184C68.226 23.1557 67.1278 23.4244 65.8951 23.4244C64.1884 23.4244 62.8373 22.8555 61.8417 21.7177V27.857H58.8787V10.6004H61.6995V12.2597C62.1894 11.6592 62.7899 11.2089 63.501 10.9086C64.228 10.6083 65.026 10.4582 65.8951 10.4582ZM65.5633 20.888C66.6537 20.888 67.5465 20.5246 68.2418 19.7976C68.953 19.0707 69.3085 18.1146 69.3085 16.9294C69.3085 15.7442 68.953 14.7882 68.2418 14.0612C67.5465 13.3343 66.6537 12.9709 65.5633 12.9709C64.8522 12.9709 64.2121 13.1368 63.6433 13.4686C63.0744 13.7847 62.624 14.243 62.2921 14.8435C61.9603 15.444 61.7943 16.1393 61.7943 16.9294C61.7943 17.7196 61.9603 18.4149 62.2921 19.0154C62.624 19.6159 63.0744 20.0821 63.6433 20.4139C64.2121 20.73 64.8522 20.888 65.5633 20.888Z"
            fill="black"
          />
          <path
            d="M79.8026 10.4582C81.6673 10.4582 83.0896 10.9086 84.0693 11.8094C85.0649 12.6943 85.5627 14.0375 85.5627 15.839V23.2584H82.7656V21.7177C82.4021 22.2708 81.8806 22.6974 81.2011 22.9977C80.5374 23.2821 79.7315 23.4244 78.7833 23.4244C77.8351 23.4244 77.0055 23.2663 76.2944 22.9503C75.5833 22.6184 75.0302 22.168 74.6351 21.5991C74.2558 21.0144 74.0662 20.3586 74.0662 19.6317C74.0662 18.4939 74.485 17.5852 75.3225 16.9057C76.1759 16.2104 77.5112 15.8628 79.3285 15.8628H82.5997V15.6731C82.5997 14.7882 82.331 14.1087 81.7937 13.6346C81.2722 13.1605 80.49 12.9234 79.447 12.9234C78.7359 12.9234 78.0327 13.0341 77.3374 13.2553C76.6578 13.4765 76.081 13.7847 75.607 14.1798L74.4455 12.0227C75.1092 11.517 75.9072 11.1298 76.8396 10.8612C77.7719 10.5925 78.7596 10.4582 79.8026 10.4582ZM79.3996 21.2673C80.1423 21.2673 80.7982 21.1014 81.3671 20.7695C81.9518 20.4218 82.3626 19.932 82.5997 19.2998V17.8302H79.5418C77.8351 17.8302 76.9818 18.3912 76.9818 19.5132C76.9818 20.0505 77.1951 20.4771 77.6218 20.7932C78.0485 21.1093 78.6411 21.2673 79.3996 21.2673Z"
            fill="black"
          />
          <path
            d="M95.2886 23.4244C93.9769 23.4244 92.7996 23.1478 91.7567 22.5947C90.7137 22.0416 89.8998 21.2752 89.3151 20.2954C88.7304 19.2998 88.4381 18.1779 88.4381 16.9294C88.4381 15.681 88.7304 14.5669 89.3151 13.5872C89.8998 12.6074 90.7058 11.841 91.733 11.2879C92.7759 10.7348 93.9611 10.4582 95.2886 10.4582C96.537 10.4582 97.6274 10.7111 98.5597 11.2168C99.5079 11.7224 100.219 12.4494 100.693 13.3975L98.4175 14.725C98.054 14.1403 97.5958 13.7057 97.0427 13.4212C96.5054 13.121 95.9128 12.9709 95.2649 12.9709C94.1587 12.9709 93.2421 13.3343 92.5152 14.0612C91.7883 14.7724 91.4248 15.7284 91.4248 16.9294C91.4248 18.1304 91.7804 19.0944 92.4915 19.8213C93.2184 20.5325 94.1429 20.888 95.2649 20.888C95.9128 20.888 96.5054 20.7458 97.0427 20.4613C97.5958 20.1611 98.054 19.7186 98.4175 19.1339L100.693 20.4613C100.203 21.4095 99.4842 22.1443 98.536 22.6658C97.6037 23.1715 96.5212 23.4244 95.2886 23.4244Z"
            fill="black"
          />
          <path
            d="M114.969 17.0005C114.969 17.206 114.953 17.4983 114.921 17.8776H104.989C105.163 18.81 105.613 19.5527 106.34 20.1058C107.083 20.6431 108 20.9117 109.09 20.9117C110.481 20.9117 111.626 20.4534 112.527 19.5369L114.115 21.3621C113.546 22.0416 112.827 22.5552 111.958 22.9029C111.089 23.2505 110.109 23.4244 109.019 23.4244C107.628 23.4244 106.404 23.1478 105.345 22.5947C104.286 22.0416 103.464 21.2752 102.88 20.2954C102.311 19.2998 102.026 18.1779 102.026 16.9294C102.026 15.6968 102.303 14.5906 102.856 13.6109C103.425 12.6153 104.207 11.841 105.203 11.2879C106.198 10.7348 107.32 10.4582 108.569 10.4582C109.801 10.4582 110.899 10.7348 111.863 11.2879C112.843 11.8252 113.602 12.5916 114.139 13.5872C114.692 14.5669 114.969 15.7047 114.969 17.0005ZM108.569 12.8286C107.62 12.8286 106.814 13.1131 106.151 13.682C105.503 14.2351 105.108 14.9778 104.966 15.9102H112.148C112.021 14.9936 111.634 14.2509 110.986 13.682C110.338 13.1131 109.533 12.8286 108.569 12.8286Z"
            fill="black"
          />
          <path
            d="M118.763 23.4244C118.226 23.4244 117.767 23.2426 117.388 22.8792C117.009 22.4999 116.819 22.0258 116.819 21.4569C116.819 20.8722 117.001 20.3981 117.364 20.0347C117.744 19.6712 118.21 19.4895 118.763 19.4895C119.316 19.4895 119.774 19.6712 120.138 20.0347C120.517 20.3981 120.707 20.8722 120.707 21.4569C120.707 22.0258 120.517 22.4999 120.138 22.8792C119.759 23.2426 119.3 23.4244 118.763 23.4244Z"
            fill="black"
          />
          <circle cx="6.92305" cy="6.92305" r="6.92305" fill="#0050EF" />
          <circle cx="23.077" cy="6.92299" r="6.92305" fill="#0050EF" />
          <circle cx="6.92305" cy="23.0769" r="6.92305" fill="#0050EF" />
          <circle cx="23.077" cy="23.0769" r="6.92305" fill="#0050EF" />
        </svg>
      </a>
      <div className="header__links">
        <a href="/">8 800 000 00 00</a>
        <a href="/">sales@logo.ru</a>
      </div>
    </div>
  );
};

export default Header;
