import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../assets/images";

const Navbar = () => {
  useEffect(() => {
    // Script para animar el menú
    const body = document.body;
    const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
    const menu = body.querySelector(".menu");
    const menuItems = menu.querySelectorAll(".menu__item");
    const menuBorder = menu.querySelector(".menu__border");
    let activeItem = menu.querySelector(".active");

    function clickItem(item, index) {
      menu.style.removeProperty("--timeOut");

      if (activeItem === item) return;

      if (activeItem) {
        activeItem.classList.remove("active");
      }

      item.classList.add("active");
      body.style.backgroundColor = bgColorsBody[index];
      activeItem = item;
      offsetMenuBorder(activeItem, menuBorder);
    }

    function offsetMenuBorder(element, menuBorder) {
      if (!element || !menuBorder) return; // Verifica que los elementos existan

      const offsetActiveItem = element.getBoundingClientRect();
      const left =
        Math.floor(
          offsetActiveItem.left -
            menu.offsetLeft -
            (menuBorder.offsetWidth - offsetActiveItem.width) / 2
        ) + "px";
      menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;
    }

    // Solo llama a offsetMenuBorder si activeItem existe
    if (activeItem && menuBorder) {
      offsetMenuBorder(activeItem, menuBorder);
    }

    menuItems.forEach((item, index) => {
      item.addEventListener("click", () => clickItem(item, index));
    });

    window.addEventListener("resize", () => {
      if (activeItem && menuBorder) {
        offsetMenuBorder(activeItem, menuBorder);
      }
      menu.style.setProperty("--timeOut", "none");
    });

    // Limpieza de event listeners
    return () => {
      menuItems.forEach((item, index) => {
        item.removeEventListener("click", () => clickItem(item, index));
      });
      window.removeEventListener("resize", () => {
        if (activeItem && menuBorder) {
          offsetMenuBorder(activeItem, menuBorder);
        }
        menu.style.setProperty("--timeOut", "none");
      });
    };
  }, []);

  return (
    <div style={{ position: "fixed", bottom: 0, width: "100%", zIndex: 1000 }}>
      <style>
        {`
          html {
            box-sizing: border-box;
            --bgColorMenu:rgb(9, 9, 12);
            --duration: 0.7s;
          }

          html *,
          html *::before,
          html *::after {
            box-sizing: inherit;
          }


          .menu {
            margin: 0;
            display: flex;
            width: 100%;
            max-width: 100%;
            font-size: 1.5em;
            padding: 0 1em;
            position: relative;
            align-items: center;
            justify-content: space-around;
            background-color: var(--bgColorMenu);
            border-radius: 20px 20px 0 0;
          }

          .menu__item {
            all: unset;
            flex-grow: 1;
            z-index: 100;
            display: flex;
            cursor: pointer;
            position: relative;
            border-radius: 50%;
            align-items: center;
            will-change: transform;
            justify-content: center;
            padding: 0.55em 0 0.85em;
            transition: transform var(--timeOut, var(--duration));
          }

          .menu__item::before {
            content: "";
            z-index: -1;
            width: 4.2em;
            height: 4.2em;
            border-radius: 50%;
            position: absolute;
            transform: scale(0);
            transition: background-color var(--duration), transform var(--duration);
          }

          .menu__item.active {
            transform: translate3d(0, -0.8em, 0);
          }

          .menu__item.active::before {
            transform: scale(1);
            background-color: var(--bgColorItem);
          }

          .icon {
            width: 2.6em;
            height: 2.6em;
            stroke: white;
            fill: transparent;
            stroke-width: 1pt;
            stroke-miterlimit: 10;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-dasharray: 400;
          }

          .menu__item.active .icon {
            animation: strok 1.5s reverse;
          }

          @keyframes strok {
            100% {
              stroke-dashoffset: 400;
            }
          }

          .menu__border {
            left: 0;
            bottom: 99%;
            width: 10.9em;
            height: 2.4em;
            position: absolute;
            clip-path: url(#menu);
            will-change: transform;
            background-color: var(--bgColorMenu);
            transition: transform var(--timeOut, var(--duration));
          }

          .svg-container {
            width: 0;
            height: 0;
          }

          @media screen and (max-width: 50em) {
            .menu {
              font-size: 0.8em;
            }
          }
        `}
      </style>
      <menu className="menu">
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "menu__item active" : "menu__item")}
          style={{ "--bgColorItem": "#ff8c00" }}
        >
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M3.8,6.6h16.4" />
            <path d="M20.2,12.1H3.8" />
            <path d="M3.8,17.5h16.4" />
          </svg>
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "menu__item active" : "menu__item")}
          style={{ "--bgColorItem": "#f54888" }}
        >
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M6.7,4.8h10.7c0.3,0,0.6,0.2,0.7,0.5l2.8,7.3c0,0.1,0,0.2,0,0.3v5.6c0,0.4-0.4,0.8-0.8,0.8H3.8
            C3.4,19.3,3,19,3,18.5v-5.6c0-0.1,0-0.2,0.1-0.3L6,5.3C6.1,5,6.4,4.8,6.7,4.8z" />
            <path d="M3.4,12.9H8l1.6,2.8h4.9l1.5-2.8h4.6" />
          </svg>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "menu__item active" : "menu__item")}
          style={{ "--bgColorItem": "#f54888" }}
        >
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M6.7,4.8h10.7c0.3,0,0.6,0.2,0.7,0.5l2.8,7.3c0,0.1,0,0.2,0,0.3v5.6c0,0.4-0.4,0.8-0.8,0.8H3.8
            C3.4,19.3,3,19,3,18.5v-5.6c0-0.1,0-0.2,0.1-0.3L6,5.3C6.1,5,6.4,4.8,6.7,4.8z" />
            <path d="M3.4,12.9H8l1.6,2.8h4.9l1.5-2.8h4.6" />
          </svg>
        </NavLink>

        <div className="menu__border"></div>
      </menu>
      <div className="svg-container">
        <svg viewBox="0 0 202.9 45.5">
          <clipPath id="menu" clipPathUnits="objectBoundingBox" transform="scale(0.0049285362247413 0.021978021978022)">
            <path d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
            c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
            c9.2,3.6,17.6,4.2,23.3,4H6.7z" />
          </clipPath>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;