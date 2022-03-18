"use strict";

	/**
		 active menu point
	**/
	function setActiveMenuItem() {
		let current = location.pathname.split('/').reverse()[0];
		if (current === "") current = 'index.html';
		else {
			current = current.split('-')[0];
		}
		// console.log(current);
		let menuItems = document.querySelectorAll('.menu__link');
		for (let i = 0, len = menuItems.length; i < len; i++) {
			if (menuItems[i].getAttribute("href").split('-')[0].indexOf(current) !== -1 && current.length > 3) {
				menuItems[i].className += " active";
				return
			}
		};
	};

	const menuTrigger = document.querySelector(".btn--menu");
	const subMenus = document.querySelectorAll(".sub-menu");
	const header = menuTrigger.closest(".header");

	document.addEventListener('DOMContentLoaded', function(){
		setActiveMenuItem();
		//user menu

		menuTrigger?.addEventListener("click", function() {
			header.classList.toggle("header--open");
			header.querySelector(".menu").classList.toggle("menu--open");
			[...subMenus].forEach(function(el){
				el.classList.remove("open");
			});
		});

		if (subMenus){
			[...subMenus].forEach(function(el){
				el.addEventListener("click",function(){
					this.classList.toggle("open");
				})
			})
		};

		//close dialogs
		window.addEventListener('click', function(e) {
			if (!e.target.closest(".header")) {
				header.classList.remove("header--open");
				header.querySelector(".menu").classList.remove("menu--open");
			}
		});

		const stickyHeader = document.getElementById("subheader");
		if (stickyHeader) {
			const mainNavLinks = [...stickyHeader.querySelectorAll("a")].filter(item => !item.classList.contains("subheader__link"));
			window.addEventListener('scroll', function() {
				let winTop = window.scrollY;
				winTop >= 220 ?
				stickyHeader.classList.add("subheader--sticky") :
				stickyHeader.classList.remove("subheader--sticky");

				mainNavLinks?.forEach(link => {
					let sec = document.querySelector(link.hash);
						if (sec.offsetTop <= winTop + 10 && sec.offsetTop + sec.offsetHeight > winTop + 10) {
							link.classList.add("current");
						} else {
							link.classList.remove("current");
						}
					});

			});
		};


	document.querySelectorAll('.sub-menu').forEach(item => {
		item.addEventListener('mouseenter', event => {
			item.closest(".menu").classList.add('menu--hovered');
		});
		item.addEventListener('mouseleave', event => {
			item.closest(".menu").classList.remove('menu--hovered');
		});
	})


});