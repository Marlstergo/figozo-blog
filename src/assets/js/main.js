// console.log(Alpine)
// alert('Hello from main.js!');
// import Alpine from 'alpinejs'

// window.Alpine = Alpine

// Alpine.start()

// Grab elements

document.addEventListener("alpine:init", () => {
    Alpine.store("blogStore", {
        on: false,
        age: 27,
        toggle() {
            this.on = !this.on;
        },
        breakingNews: [
            {
                id: 1,
                category: "Technology",
                title: "Is VR the future?",
                image: "./src/assets/images/featured/featured-1.jpg",
                date: "2021-09-01",
                readTime: "5 min read",

            }, {
                id: 2,
                category: "Food",
                title: "Sample article 2",
                image: "./src/assets/images/featured/featured-2.jpg",
                date: "2021-09-01",
                readTime: "3 min read",
            },
            {
                id: 3,
                category: "Health",
                title: "SNatural fat burner",
                image: "./src/assets/images/featured/featured-3.jpg",
                date: "2021-09-01",
                readTime: "3 min read",
            }
        ],
        trendingNews: [
            {
                id: 1,
                title: "Lorem ipsum dolor sit a",
                image: "./src/assets/images/trending/trending_3.jpg",
                date: "2021-09-01",
                readTime: "5 min read",
            }, {
                id: 2,
                title: "Sample article 2",
                image: "./src/assets/images/trending/trending_3.jpg",
                date: "2021-09-01",
                readTime: "3 min read",
            },
            // repeat 3 more times
            {
                id: 3,
                title: "Sample article 3",
                image: "./src/assets/images/trending/trending_3.jpg",
                date: "2021-09-01",
                readTime: "3 min read",
            },
            {
                id: 4,
                title: "Sample article 4",
                image: "./src/assets/images/trending/trending_3.jpg",
                date: "2021-09-01",
                readTime: "3 min read",
            },
            {
                id: 5,
                title: "Sample article 5",
                image: "./src/assets/images/trending/trending_3.jpg",
                date: "2021-09-01",
                readTime: "3 min read",
            },


        ],
        quickReads: [{
            id: 1,
            title: "Sample article 1",
            image: "./src/assets/images/quick_read/quick_read_1.jpg",
            date: "2021-09-01",
            readTime: "3 min read",
        }, {
            id: 2,
            title: "Sample article 2",
            image: "./src/assets/images/quick_read/quick_read_2.jpg",
            date: "2021-09-01",
            readTime: "3 min read",
        },
        {
            id: 3,
            title: "Sample article 3",
            image: "./src/assets/images/quick_read/quick_read_3.jpg",
            date: "2021-09-01",
            readTime: "3 min read",
        },
        {
            id: 4,
            title: "Sample article 4",
            image: "./src/assets/images/quick_read/quick_read_4.jpg",
            date: "2021-09-01",
            readTime: "3 min read",
        },
        {
            id: 5,
            title: "Sample article 5",
            image: "./src/assets/images/quick_read/quick_read_5.jpg",
            date: "2021-09-01",
            readTime: "3 min read",

        }
        ],
        olderPosts: [
            {
                id: 1,
                title: "Sample article 1",
                image: "./src/assets/images/older_posts/older_posts_1.jpg",
                date: "2021-09-01",
                readTime: "3 min read",
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
            }, {
                id: 2,
                title: "Sample article 2",
                image: "./src/assets/images/older_posts/older_posts_2.jpg",
                date: "2021-09-01",
                readTime: "3 min read",
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
            },
            {
                id: 3,
                title: "Sample article 3",
                image: "./src/assets/images/older_posts/older_posts_3.jpg",
                date: "2021-09-01",
                readTime: "3 min read",
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'

            },
            {
                id: 3,
                title: "Sample article 4",
                image: "./src/assets/images/older_posts/older_posts_3.jpg",
                date: "2021-09-01",
                readTime: "3 min read",
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'

            },
            {
                id: 3,
                title: "Sample article 5",
                image: "./src/assets/images/older_posts/older_posts_3.jpg",
                date: "2021-09-01",
                readTime: "3 min read",
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'

            },
            {
                id: 3,
                title: "Sample article 6",
                image: "./src/assets/images/older_posts/older_posts_6.jpg",
                date: "2021-09-01",
                readTime: "3 min read",
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'

            }
        ],
        popularTags: [
            {
                id: 1,
                title: "Travel",
                image: "./src/assets/images/tags/travel-tag.jpg",
            },
            {
                id: 2,
                title: "Food",
                image: "./src/assets/images/tags/food-tag.jpg",
            },
            {
                id: 3,
                title: "Technology",
                image: "./src/assets/images/tags/technology-tag.jpg",
            },
            {
                id: 4,
                title: "Health",
                image: "./src/assets/images/tags/health-tag.jpg",
            },
            {
                id: 5,
                title: "Nature",
                image: "./src/assets/images/tags/nature-tag.jpg",
            },
            {
                id: 6,
                title: "Fitness",
                image: "./src/assets/images/tags/fitness-tag.jpg",
            },
        ],
        footerLinks:
        {
            categories: [
                { id: 1, title: "Travel", link: "#" },
                { id: 2, title: "Food", link: "#" },
                { id: 3, title: "Technology", link: "#" },
                { id: 4, title: "Health", link: "#" },
                { id: 5, title: "Nature", link: "#" },
                { id: 6, title: "Fitness", link: "#" },
            ],
            usefulLinks: [
                { id: 1, title: "HOme", link: "#" },
                { id: 2, title: "About", link: "#" },
                { id: 3, title: "Membership", link: "#" },
                { id: 4, title: "Authors", link: "#" },
            ],
            company: [
                { id: 1, title: "Contact us", link: "#" },
                { id: 2, title: "Terms of use", link: "#" },
                { id: 3, title: "Privacy policy", link: "#" },
                { id: 4, title: "Careers", link: "#" },
            ],
        }
        , menuLinks: [
            {
                id: 1,
                title: "Home",
                link: "/",
            },
            {
                id: 2,
                title: "Categories",
                link: "#categories",
            },
            {
                id: 3,
                title: "Reviews",
                link: "#reviews",
            },
            {
                id: 4,
                title: "News",
                link: "#news",
            },
            {
                id: 5,
                title: "Membership",
                link: "#membership",
            },
            {
                id: 5,
                title: "Contact",
                link: "#contact",
            },

        ]
        ,
        onLoad() {

            const selectElement = (selector) => {
                const element = document.querySelector(selector);
                if (element) return element;
                alert(`Please add an ID of ${selector.slice(1)} to your HTML`);
            };

            //Nav styles on scroll
            const scrollHeader = () => {
                const navbarElement = selectElement('#header');
                if (this.scrollY >= 15) {
                    navbarElement.classList.add('activated');
                } else {
                    navbarElement.classList.remove('activated');
                }
            }

            window.addEventListener('scroll', scrollHeader);

            // Open menu & search pop-up
            const menuToggleIcon = selectElement('#menu-toggle-icon');
            const formOpenBtn = selectElement('#search-icon');
            const formCloseBtn = selectElement('#form-close-btn');
            const searchContainer = selectElement('#search-form-container');

            const toggleMenu = () => {
                const mobileMenu = selectElement('#menu');
                mobileMenu.classList.toggle('activated');
                menuToggleIcon.classList.toggle('activated');
            }

            menuToggleIcon?.addEventListener('click', toggleMenu);

            // Open/Close search form popup
            formOpenBtn.addEventListener('click', () => searchContainer.classList.add('activated'));
            formCloseBtn.addEventListener('click', () => searchContainer.classList.remove('activated'));
            // -- Close the search form popup on ESC keypress
            window.addEventListener('keyup', (event) => {
                if (event.key === 'Escape') searchContainer.classList.remove('activated');
            });

            // Switch theme/add to local storage
            const body = document.body;
            const themeToggleBtn = selectElement('#theme-toggle-btn');
            const currentTheme = localStorage.getItem('currentTheme');

            // Check to see if there is a theme preference in local Storage, if so add the ligt theme to the body
            if (currentTheme) {
                body.classList.add('light-theme');
            }

            themeToggleBtn.addEventListener('click', function () {
                // Add light theme on click
                body.classList.toggle('light-theme');

                // If the body has the class of light theme then add it to local Storage, if not remove it
                if (body.classList.contains('light-theme')) {
                    localStorage.setItem('currentTheme', 'themeActive');
                } else {
                    localStorage.removeItem('currentTheme');
                }
            });
        },
        swiper() {
            new Swiper(".swiper", {
                // How many slides to show
                slidesPerView: 1,
                // How much space between slides
                spaceBetween: 20,
                // Make the next and previous buttons work
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                // Make the pagination indicators work
                pagination: {
                    el: '.swiper-pagination'
                },
                //Responsive breakpoints for how many slides to show at that view
                breakpoints: {
                    // 700px and up shoes 2 slides
                    700: {
                        slidesPerView: 2
                    },
                    // 1200px and up shoes 3 slides
                    1200: {
                        slidesPerView: 3
                    }
                }
            });
        }
    });
});

// Swiper