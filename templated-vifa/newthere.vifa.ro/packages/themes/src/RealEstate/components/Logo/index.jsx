import React from "react";
import styled from "styled-components";

import { base } from "packages/common/src/utils";
import { colors } from "../../styles";

const Svg = styled.svg`
  display: block;
  ${base};
`;

const Logo = (props) => (
  <Svg
    width="153"
    height="40"
    viewBox="0 0 153 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M49.404 14.4V27H51.528V14.4H49.404ZM50.664 16.272H53.202C53.694 16.272 54.12 16.35 54.48 16.506C54.84 16.662 55.122 16.89 55.326 17.19C55.53 17.49 55.632 17.868 55.632 18.324C55.632 18.768 55.53 19.146 55.326 19.458C55.122 19.758 54.84 19.986 54.48 20.142C54.12 20.286 53.694 20.358 53.202 20.358H50.664V22.23H53.202C54.126 22.23 54.924 22.074 55.596 21.762C56.268 21.438 56.79 20.988 57.162 20.412C57.534 19.824 57.72 19.128 57.72 18.324C57.72 17.52 57.534 16.824 57.162 16.236C56.79 15.648 56.268 15.198 55.596 14.886C54.924 14.562 54.126 14.4 53.202 14.4H50.664V16.272ZM60.0566 23.76H66.7166L66.3026 21.96H60.4706L60.0566 23.76ZM63.3506 17.964L65.3486 22.644L65.4026 23.166L67.1126 27H69.5066L63.3506 13.698L57.1946 27H59.5886L61.3346 23.058L61.3706 22.59L63.3506 17.964ZM76.4214 22.212H80.2914C80.1834 22.644 80.0214 23.046 79.8054 23.418C79.6014 23.79 79.3314 24.12 78.9954 24.408C78.6714 24.684 78.2874 24.9 77.8434 25.056C77.3994 25.212 76.8954 25.29 76.3314 25.29C75.7074 25.29 75.1254 25.182 74.5854 24.966C74.0574 24.75 73.5954 24.438 73.1994 24.03C72.8034 23.622 72.4914 23.136 72.2634 22.572C72.0474 22.008 71.9394 21.384 71.9394 20.7C71.9394 20.016 72.0534 19.392 72.2814 18.828C72.5094 18.264 72.8214 17.784 73.2174 17.388C73.6134 16.992 74.0754 16.686 74.6034 16.47C75.1434 16.254 75.7194 16.146 76.3314 16.146C77.2074 16.146 77.9514 16.332 78.5634 16.704C79.1874 17.064 79.6734 17.544 80.0214 18.144L81.7494 16.974C81.3774 16.386 80.9274 15.888 80.3994 15.48C79.8714 15.06 79.2654 14.742 78.5814 14.526C77.9094 14.298 77.1594 14.184 76.3314 14.184C75.3834 14.184 74.5014 14.346 73.6854 14.67C72.8814 14.982 72.1794 15.426 71.5794 16.002C70.9914 16.578 70.5294 17.268 70.1934 18.072C69.8694 18.864 69.7074 19.74 69.7074 20.7C69.7074 21.66 69.8694 22.542 70.1934 23.346C70.5174 24.15 70.9734 24.846 71.5614 25.434C72.1614 26.022 72.8634 26.478 73.6674 26.802C74.4714 27.114 75.3474 27.27 76.2954 27.27C77.3034 27.27 78.1974 27.09 78.9774 26.73C79.7574 26.358 80.4114 25.854 80.9394 25.218C81.4674 24.582 81.8634 23.856 82.1274 23.04C82.3914 22.212 82.5114 21.336 82.4874 20.412H76.4214V22.212ZM85.9621 27H92.3161V25.128H85.9621V27ZM85.9621 16.272H92.3161V14.4H85.9621V16.272ZM85.9621 21.168H91.9561V19.332H85.9621V21.168ZM84.6481 14.4V27H86.7361V14.4H84.6481ZM97.5413 20.988L101.537 27H104.111L99.8273 20.988H97.5413ZM94.9313 14.4V27H97.0553V14.4H94.9313ZM96.1913 16.254H98.7293C99.2213 16.254 99.6473 16.338 100.007 16.506C100.367 16.662 100.649 16.896 100.853 17.208C101.057 17.52 101.159 17.904 101.159 18.36C101.159 18.804 101.057 19.188 100.853 19.512C100.649 19.824 100.367 20.064 100.007 20.232C99.6473 20.388 99.2213 20.466 98.7293 20.466H96.1913V22.23H98.8193C99.7433 22.23 100.541 22.068 101.213 21.744C101.897 21.42 102.425 20.964 102.797 20.376C103.169 19.788 103.355 19.104 103.355 18.324C103.355 17.532 103.169 16.842 102.797 16.254C102.425 15.666 101.897 15.21 101.213 14.886C100.541 14.562 99.7433 14.4 98.8193 14.4H96.1913V16.254ZM105.619 14.4V27H112.747V25.092H107.743V14.4H105.619ZM116.342 23.76H123.002L122.588 21.96H116.756L116.342 23.76ZM119.636 17.964L121.634 22.644L121.688 23.166L123.398 27H125.792L119.636 13.698L113.48 27H115.874L117.62 23.058L117.656 22.59L119.636 17.964ZM136.456 14.4V22.86L127.258 13.77V27H129.346V18.54L138.544 27.63V14.4H136.456ZM141.338 14.4V27H143.516V14.4H141.338ZM145.406 27C146.366 27 147.242 26.85 148.034 26.55C148.826 26.25 149.51 25.824 150.086 25.272C150.662 24.72 151.106 24.06 151.418 23.292C151.73 22.512 151.886 21.648 151.886 20.7C151.886 19.752 151.73 18.894 151.418 18.126C151.106 17.346 150.662 16.68 150.086 16.128C149.51 15.576 148.826 15.15 148.034 14.85C147.242 14.55 146.366 14.4 145.406 14.4H142.652V16.398H145.352C145.976 16.398 146.552 16.488 147.08 16.668C147.608 16.848 148.07 17.118 148.466 17.478C148.862 17.838 149.168 18.288 149.384 18.828C149.6 19.368 149.708 19.992 149.708 20.7C149.708 21.408 149.6 22.032 149.384 22.572C149.168 23.112 148.862 23.562 148.466 23.922C148.07 24.282 147.608 24.552 147.08 24.732C146.552 24.912 145.976 25.002 145.352 25.002H142.652V27H145.406Z"
      fill="currentColor"
    />
    <path
      d="M25.61 7.62337C25.61 11.8336 19.4636 20.4878 19.4636 20.4878C19.4636 20.4878 13.3172 11.8336 13.3172 7.62337C13.3172 3.4131 16.0691 0 19.4636 0C22.8582 0 25.61 3.4131 25.61 7.62337Z"
      fill={colors.brand}
    />
    <path
      d="M14.3416 34.1917C14.3416 30.9839 18.9514 24.3902 18.9514 24.3902C18.9514 24.3902 23.5612 30.9839 23.5612 34.1917C23.5612 37.3995 21.4974 40 18.9514 40C16.4055 40 14.3416 37.3995 14.3416 34.1917Z"
      fill={colors.brand}
    />
    <path
      d="M31.8688 21.2307C28.9875 22.815 20.7521 22.2563 20.7521 22.2563C20.7521 22.2563 24.3618 15.1846 27.2431 13.6003C30.1244 12.016 33.4957 12.4398 34.7731 14.5469C36.0504 16.654 34.7502 19.6464 31.8688 21.2307Z"
      fill={colors.brand}
    />
    <path
      d="M5.38791 25.4871C8.36357 23.8509 16.8686 24.4279 16.8686 24.4279C16.8686 24.4279 13.1407 31.7311 10.1651 33.3673C7.18941 35.0035 3.70776 34.5658 2.38858 32.3897C1.0694 30.2137 2.41225 27.1233 5.38791 25.4871Z"
      fill={colors.brand}
    />
    <path
      d="M28.4598 34.1339C25.0816 32.2764 20.8495 23.9852 20.8495 23.9852C20.8495 23.9852 30.505 23.3302 33.8832 25.1877C37.2614 27.0452 38.7859 30.5537 37.2883 33.0241C35.7907 35.4946 31.838 35.9914 28.4598 34.1339Z"
      fill={colors.brand}
    />
    <path
      d="M11.7312 14.2306C14.2657 15.6242 17.4408 21.8447 17.4408 21.8447C17.4408 21.8447 10.1968 22.3361 7.66228 20.9425C5.12779 19.5489 3.98403 16.9167 5.10763 15.0633C6.23123 13.2098 9.19669 12.837 11.7312 14.2306Z"
      fill={colors.brand}
    />
  </Svg>
);

export default Logo;
