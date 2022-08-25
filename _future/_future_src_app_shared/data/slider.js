"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productDetailsThumbSlider = exports.productDetailsMainSlider = exports.newProductSlider = exports.productOneSlider = exports.productSlider = exports.compareSlider = exports.testimonialSlider = exports.categorySlider = exports.collectionSlider = exports.logoSlider = exports.instaSlider = exports.blogSlider = exports.homeSlider = void 0;
// Home Slider
exports.homeSlider = {
    loop: true,
    nav: true,
    dots: false,
    navContainerClass: 'owl-nav',
    navClass: ['owl-prev', 'owl-next'],
    navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        740: {
            items: 1
        },
        940: {
            items: 1
        }
    },
};
// Blog Slider
exports.blogSlider = {
    loop: true,
    dots: false,
    navSpeed: 300,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 2
        },
        740: {
            items: 2
        },
        940: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
};
// Insta Slider
exports.instaSlider = {
    loop: true,
    dots: false,
    navSpeed: 300,
    responsive: {
        740: {
            items: 3
        },
        940: {
            items: 6
        },
        1200: {
            items: 6
        }
    }
};
// Logo Slider
exports.logoSlider = {
    loop: true,
    dots: false,
    navSpeed: 300,
    responsive: {
        767: {
            items: 5
        },
        576: {
            items: 4
        },
        480: {
            items: 3
        },
        0: {
            items: 2
        }
    }
};
// Collection Slider
exports.collectionSlider = {
    loop: true,
    dots: false,
    navSpeed: 300,
    responsive: {
        991: {
            items: 4
        },
        767: {
            items: 3
        },
        586: {
            items: 2
        },
        0: {
            items: 1
        }
    }
};
// Category Slider
exports.categorySlider = {
    loop: true,
    dots: false,
    navSpeed: 300,
    responsive: {
        1024: {
            items: 6
        },
        767: {
            items: 5
        },
        576: {
            items: 5
        },
        480: {
            items: 3
        },
        0: {
            items: 2
        }
    }
};
// Testimonial Slider
exports.testimonialSlider = {
    loop: true,
    dots: false,
    navSpeed: 300,
    responsive: {
        991: {
            items: 2
        },
        0: {
            items: 1
        }
    }
};
// Compare Slider
exports.compareSlider = {
    loop: true,
    dots: false,
    navSpeed: 300,
    responsive: {
        991: {
            items: 4
        },
        767: {
            items: 3
        },
        586: {
            items: 2
        },
        0: {
            items: 1
        }
    }
};
// Product Slider
exports.productSlider = {
    loop: false,
    dots: false,
    navSpeed: 300,
    responsive: {
        991: {
            items: 4
        },
        767: {
            items: 3
        },
        420: {
            items: 2
        },
        0: {
            items: 1
        }
    }
};
// Product Slider
exports.productOneSlider = {
    items: 1,
    loop: true,
    dots: false,
    navSpeed: 300
};
// New Product Slider
exports.newProductSlider = {
    items: 1,
    loop: true,
    nav: true,
    dots: false,
    navContainerClass: 'owl-nav',
    navClass: ['owl-prev', 'owl-next'],
    navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
};
// Product Details Main Slider
exports.productDetailsMainSlider = {
    items: 1,
    nav: false,
    dots: false,
    autoplay: false,
    slideSpeed: 300,
    loop: true
};
// Product Details Thumb Slider
exports.productDetailsThumbSlider = {
    items: 3,
    loop: true,
    margin: 10,
    dots: false
};
