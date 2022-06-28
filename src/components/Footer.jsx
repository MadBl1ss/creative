import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__upperContainer">
          <div className="footer__upperContainer-logo">
            <svg
              width="194"
              height="48"
              viewBox="0 0 194 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M79.0389 37.5929C76.9909 37.5929 75.006 37.3021 73.0844 36.7206C71.1881 36.139 69.6837 35.3678 68.5712 34.407L70.2779 30.5765C71.3651 31.4361 72.6925 32.1441 74.2601 32.7003C75.8531 33.2313 77.446 33.4968 79.0389 33.4968C81.0111 33.4968 82.4776 33.1807 83.4384 32.5486C84.4245 31.9165 84.9175 31.0821 84.9175 30.0455C84.9175 29.287 84.6394 28.6675 84.0831 28.1871C83.5521 27.6814 82.8695 27.2895 82.0351 27.0114C81.2007 26.7332 80.0629 26.4172 78.6217 26.0632C76.5989 25.5828 74.9555 25.1024 73.6912 24.622C72.4523 24.1416 71.3777 23.3957 70.4675 22.3843C69.5825 21.3477 69.1401 19.957 69.1401 18.2124C69.1401 16.7459 69.532 15.4185 70.3158 14.2301C71.1249 13.0165 72.3259 12.0557 73.9188 11.3477C75.537 10.6397 77.5092 10.2858 79.8353 10.2858C81.4535 10.2858 83.0465 10.488 84.6141 10.8926C86.1817 11.2971 87.5344 11.8787 88.6722 12.6372L87.1172 16.4678C85.9542 15.7851 84.7405 15.2668 83.4763 14.9128C82.2121 14.5588 80.9858 14.3818 79.7974 14.3818C77.8505 14.3818 76.3967 14.7105 75.4359 15.3679C74.5003 16.0253 74.0326 16.8976 74.0326 17.9849C74.0326 18.7434 74.2981 19.3628 74.829 19.8433C75.3853 20.3237 76.0806 20.7029 76.915 20.981C77.7494 21.2592 78.8872 21.5752 80.3284 21.9292C82.3006 22.3843 83.9188 22.8647 85.183 23.3704C86.4472 23.8508 87.5218 24.5967 88.4067 25.6081C89.317 26.6195 89.7721 27.9848 89.7721 29.7042C89.7721 31.1706 89.3675 32.4981 88.5584 33.6864C87.7746 34.8748 86.5736 35.823 84.9554 36.5309C83.3372 37.2389 81.3651 37.5929 79.0389 37.5929Z"
                fill="white"
              />
              <path
                d="M105.432 16.7333C107.404 16.7333 109.162 17.1631 110.704 18.0228C112.272 18.8824 113.498 20.0961 114.383 21.6637C115.268 23.2314 115.71 25.0392 115.71 27.0872C115.71 29.1353 115.268 30.9557 114.383 32.5486C113.498 34.1163 112.272 35.3299 110.704 36.1896C109.162 37.0493 107.404 37.4791 105.432 37.4791C102.701 37.4791 100.54 36.5689 98.9468 34.7484V44.5714H94.2059V16.9608H98.7192V19.6157C99.503 18.6549 100.464 17.9343 101.602 17.4539C102.765 16.9735 104.042 16.7333 105.432 16.7333ZM104.901 33.4209C106.646 33.4209 108.074 32.8394 109.187 31.6763C110.325 30.5133 110.894 28.9835 110.894 27.0872C110.894 25.1909 110.325 23.6612 109.187 22.4981C108.074 21.335 106.646 20.7535 104.901 20.7535C103.763 20.7535 102.739 21.019 101.829 21.5499C100.919 22.0556 100.198 22.7889 99.6674 23.7497C99.1364 24.7105 98.8709 25.823 98.8709 27.0872C98.8709 28.3514 99.1364 29.4639 99.6674 30.4248C100.198 31.3856 100.919 32.1314 101.829 32.6624C102.739 33.1681 103.763 33.4209 104.901 33.4209Z"
                fill="white"
              />
              <path
                d="M127.684 16.7333C130.668 16.7333 132.943 17.4539 134.511 18.8951C136.104 20.311 136.9 22.4602 136.9 25.3426V37.2136H132.425V34.7484C131.843 35.6333 131.009 36.316 129.922 36.7964C128.86 37.2515 127.57 37.4791 126.053 37.4791C124.536 37.4791 123.209 37.2262 122.071 36.7206C120.933 36.1896 120.048 35.469 119.416 34.5587C118.809 33.6232 118.506 32.5739 118.506 31.4108C118.506 29.5904 119.176 28.1365 120.516 27.0493C121.881 25.9368 124.018 25.3805 126.926 25.3805H132.159V25.0771C132.159 23.6612 131.73 22.574 130.87 21.8154C130.036 21.0569 128.784 20.6776 127.115 20.6776C125.977 20.6776 124.852 20.8546 123.74 21.2086C122.653 21.5626 121.73 22.0556 120.971 22.6877L119.113 19.2364C120.175 18.4273 121.452 17.8079 122.943 17.378C124.435 16.9482 126.015 16.7333 127.684 16.7333ZM127.039 34.0278C128.228 34.0278 129.277 33.7623 130.187 33.2313C131.123 32.6751 131.78 31.8912 132.159 30.8799V28.5284H127.267C124.536 28.5284 123.171 29.426 123.171 31.2212C123.171 32.0809 123.512 32.7636 124.195 33.2692C124.878 33.7749 125.826 34.0278 127.039 34.0278Z"
                fill="white"
              />
              <path
                d="M152.462 37.4791C150.363 37.4791 148.479 37.0366 146.811 36.1517C145.142 35.2667 143.84 34.0404 142.904 32.4728C141.969 30.8799 141.501 29.0847 141.501 27.0872C141.501 25.0898 141.969 23.3072 142.904 21.7396C143.84 20.172 145.129 18.9457 146.773 18.0607C148.441 17.1758 150.338 16.7333 152.462 16.7333C154.459 16.7333 156.204 17.1378 157.696 17.9469C159.213 18.756 160.35 19.9191 161.109 21.4362L157.468 23.5601C156.886 22.6245 156.153 21.9292 155.268 21.4741C154.409 20.9937 153.46 20.7535 152.424 20.7535C150.654 20.7535 149.187 21.335 148.024 22.4981C146.861 23.6359 146.28 25.1656 146.28 27.0872C146.28 29.0088 146.849 30.5512 147.986 31.7143C149.149 32.8521 150.629 33.4209 152.424 33.4209C153.46 33.4209 154.409 33.1934 155.268 32.7383C156.153 32.2579 156.886 31.5499 157.468 30.6144L161.109 32.7383C160.325 34.2553 159.175 35.4311 157.658 36.2654C156.166 37.0745 154.434 37.4791 152.462 37.4791Z"
                fill="white"
              />
              <path
                d="M183.95 27.201C183.95 27.5297 183.925 27.9975 183.874 28.6043H167.983C168.261 30.0961 168.982 31.2844 170.145 32.1694C171.333 33.029 172.799 33.4589 174.544 33.4589C176.769 33.4589 178.602 32.7256 180.043 31.2591L182.585 34.1795C181.674 35.2667 180.524 36.0885 179.133 36.6447C177.743 37.201 176.175 37.4791 174.43 37.4791C172.205 37.4791 170.246 37.0366 168.552 36.1517C166.858 35.2667 165.543 34.0404 164.607 32.4728C163.697 30.8799 163.242 29.0847 163.242 27.0872C163.242 25.115 163.684 23.3451 164.569 21.7775C165.48 20.1846 166.731 18.9457 168.324 18.0607C169.917 17.1758 171.712 16.7333 173.71 16.7333C175.682 16.7333 177.439 17.1758 178.982 18.0607C180.549 18.9204 181.763 20.1467 182.622 21.7396C183.507 23.3072 183.95 25.1277 183.95 27.201ZM173.71 20.5259C172.193 20.5259 170.903 20.981 169.841 21.8913C168.805 22.7762 168.172 23.9646 167.945 25.4564H179.437C179.234 23.9899 178.615 22.8015 177.578 21.8913C176.542 20.981 175.252 20.5259 173.71 20.5259Z"
                fill="white"
              />
              <path
                d="M190.021 37.4791C189.161 37.4791 188.428 37.1883 187.821 36.6068C187.214 36 186.911 35.2414 186.911 34.3312C186.911 33.3957 187.202 32.6371 187.783 32.0556C188.39 31.4741 189.136 31.1833 190.021 31.1833C190.906 31.1833 191.639 31.4741 192.221 32.0556C192.827 32.6371 193.131 33.3957 193.131 34.3312C193.131 35.2414 192.827 36 192.221 36.6068C191.614 37.1883 190.88 37.4791 190.021 37.4791Z"
                fill="white"
              />
              <circle cx="11.0769" cy="11.077" r="11.0769" fill="white" />
              <circle cx="36.9231" cy="11.0769" r="11.0769" fill="white" />
              <circle cx="11.0769" cy="36.9231" r="11.0769" fill="white" />
              <circle cx="36.9231" cy="36.9231" r="11.0769" fill="white" />
            </svg>
          </div>
          <div className="footer__upperContainer-links">
            <ul>
              <li>Готовые решения</li>
              <li>О нас</li>
              <li>Блог</li>
              <li>Контакты</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottomContainer">
          <div className="footer__bottomContainer-copyright">
            © ООО «Лого», 2008—2022
          </div>
          <div className="footer__bottomContainer-social">
            <a href="/">
              <svg
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="100px"
                height="100px"
              >
                <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z" />
              </svg>
            </a>
            <a href="/">
              <svg
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="100px"
                height="100px"
              >
                <path d="M45.763,35.202c-1.797-3.234-6.426-7.12-8.337-8.811c-0.523-0.463-0.579-1.264-0.103-1.776 c3.647-3.919,6.564-8.422,7.568-11.143C45.334,12.27,44.417,11,43.125,11l-3.753,0c-1.237,0-1.961,0.444-2.306,1.151 c-3.031,6.211-5.631,8.899-7.451,10.47c-1.019,0.88-2.608,0.151-2.608-1.188c0-2.58,0-5.915,0-8.28 c0-1.147-0.938-2.075-2.095-2.075L18.056,11c-0.863,0-1.356,0.977-0.838,1.662l1.132,1.625c0.426,0.563,0.656,1.248,0.656,1.951 L19,23.556c0,1.273-1.543,1.895-2.459,1.003c-3.099-3.018-5.788-9.181-6.756-12.128C9.505,11.578,8.706,11.002,7.8,11l-3.697-0.009 c-1.387,0-2.401,1.315-2.024,2.639c3.378,11.857,10.309,23.137,22.661,24.36c1.217,0.12,2.267-0.86,2.267-2.073l0-3.846 c0-1.103,0.865-2.051,1.977-2.079c0.039-0.001,0.078-0.001,0.117-0.001c3.267,0,6.926,4.755,8.206,6.979 c0.368,0.64,1.056,1.03,1.8,1.03l4.973,0C45.531,38,46.462,36.461,45.763,35.202z" />
              </svg>
            </a>
            <a href="/">
              <svg
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                width="100px"
                height="100px"
              >
                {" "}
                <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
              </svg>
            </a>
            <a href="/">
              <svg
                fill="#FFFFFF"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="100px"
                height="100px"
              >
                <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
