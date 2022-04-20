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

		const stickySidebar = document.getElementById("sidebar");
		if (stickySidebar) {
			const sidebarAnchors = [...stickySidebar.querySelectorAll("a")];
			window.addEventListener('scroll', function() {
				let winTop = window.scrollY;
				sidebarAnchors?.forEach(link => {
					let sec = document.querySelector(link.hash);
						if (sec.offsetTop <= winTop + 20 && sec.offsetTop + sec.offsetHeight > winTop - 100) {
							link.classList.add("active");
						} else {
							link.classList.remove("active");
						}
					});

			});
		};


	document.querySelectorAll('.sub-menu').forEach(item => {
		item.addEventListener('mouseenter', e => {
			item.closest(".header").classList.add('header--hovered');
		});
		item.addEventListener('mouseleave', e => {
			item.closest(".header").classList.remove('header--hovered');
		});
	});

	// anhor
	const btnScrollDown = document.getElementById("btn-scroll-down");
	btnScrollDown?.addEventListener('click', function(e) {
		e.preventDefault();
		const parent = btnScrollDown.closest(".intro");
		const target = parent.nextElementSibling;
		target.scrollIntoView({ behavior: "smooth", block: "start" });
	});


	/**
		tabs ordinary
	**/
	const tabSwitcher = function () {
		[].forEach.call(
			document.querySelectorAll("[data-trigger-tab]"),
			function (el) {
				el.addEventListener("click", function (e) {
					let id = this.getAttribute("data-trigger-tab"),
						comingTab = document.getElementById(id),
						parent = comingTab.closest('.tabs-content'),
						currentTab = parent.querySelector('[data-tab="active"]');

					currentTab?.setAttribute("data-tab", "hidden");
					comingTab.setAttribute("data-tab", "active");

					let tabsBlock = this.closest('.tabs');
					if (tabsBlock) {
						let allTabs = tabsBlock.querySelectorAll('[data-trigger-tab]');
						[...allTabs].forEach(item => {
							item.classList.remove('active');
						});
						this.classList.add('active');
					};
				});
			}
		);
	};
	tabSwitcher();

	//slider-brands
	const swiperBrand = document.querySelector(".brand__slider");
		if (swiperBrand) {
			new Swiper(swiperBrand, {
			draggable:true,
			grabCursor: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				320: {
					slidesPerView: 3,
					pagination: {
						el: ".swiper-pagination",
						// type: "bullets",
						dynamicBullets: true,
						clickable: true,
					}
				},
				720: {
					slidesPerView: 5,
					centeredSlides:false,
				},
				1300: {
					slidesPerView: 6,
					spaceBetween: 20,
				}
			}
		});
	};

	const testimonBrand = document.querySelector(".testimon__slider");
		if (testimonBrand) {
			new Swiper(testimonBrand, {
			draggable:true,
			grabCursor: true,
			pagination: {
				el: ".swiper-pagination",
				type: "bullets",
				clickable: true,
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				720: {
					slidesPerView: 2,
					centeredSlides:false,
				},
				1300: {
					slidesPerView: 3,
					spaceBetween: 20,
				}
			}
		});
	};

	/**
		accordions
	**/
	const accordionOpen = function () {
		[].forEach.call(
			document.querySelectorAll("[data-collapse]"),
			function (el) {
				el.addEventListener("click", function (e) {
					e.preventDefault();
					let currentItem = this.closest(".accordion__item");
					currentItem.classList.toggle("expanded");
				});
			}
		);
	};
	accordionOpen();

});