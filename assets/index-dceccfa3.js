(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function c(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(o){if(o.ep)return;o.ep=!0;const t=c(o);fetch(o.href,t)}})();(()=>{const n=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),l=document.querySelector("[data-burger]"),o=document.querySelectorAll("#burger"),t=()=>{const r=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!r),n.classList.toggle("is-open"),l.classList.toggle("visually-hidden");const s=r?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[s](document.body)};e.addEventListener("click",t),c.addEventListener("click",t),o.forEach(r=>{r.addEventListener("click",t)}),window.matchMedia("(min-width: 768px)").addEventListener("change",r=>{r.matches&&(n.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"},breakpoints:{1280:{slidesPerView:3},768:{slidesPerView:2},320:{slidesPerView:1}},loop:!1});(()=>{const n={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};n.openModalBtn.addEventListener("click",e),n.closeModalBtn.addEventListener("click",e);function e(){n.modal.classList.toggle("is-hidden")}})();document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".js-open-modal").forEach(n=>{n.addEventListener("click",function(){document.querySelectorAll("body").forEach(e=>e.classList.add("no-scroll"))})}),document.querySelectorAll(".modal-close-btn").forEach(n=>{n.addEventListener("click",function(){document.querySelectorAll("body").forEach(e=>e.classList.remove("no-scroll"))})}),document.querySelectorAll(".backdrop").forEach(n=>{n.addEventListener("click",function(){document.querySelectorAll("body").forEach(e=>e.classList.remove("no-scroll"))})})});
