"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var state = {
    products: JSON.parse(localStorage['products'] || '[]'),
    wishlist: JSON.parse(localStorage['wishlistItems'] || '[]'),
    compare: JSON.parse(localStorage['compareItems'] || '[]'),
    cart: JSON.parse(localStorage['cartItems'] || '[]')
};
var ProductService = /** @class */ (function () {
    function ProductService(http, toastrService) {
        this.http = http;
        this.toastrService = toastrService;
        this.Currency = { name: 'Dollar', currency: 'USD', price: 1 }; // Default Currency
        this.OpenCart = false;
    }
    Object.defineProperty(ProductService.prototype, "getProducts", {
        /*
          ---------------------------------------------
          ---------------  Product  -------------------
          ---------------------------------------------
        */
        // Get Products
        get: function () {
            return this.products;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductService.prototype, "wishlistItems", {
        // Get Wishlist Items
        get: function () {
            var itemsStream = new rxjs_1.Observable(function (observer) {
                observer.next(state.wishlist);
                observer.complete();
            });
            return itemsStream;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductService.prototype, "compareItems", {
        // Get Compare Items
        get: function () {
            var itemsStream = new rxjs_1.Observable(function (observer) {
                observer.next(state.compare);
                observer.complete();
            });
            return itemsStream;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductService.prototype, "cartItems", {
        /*
          ---------------------------------------------
          ---------------  Wish List  -----------------
          ---------------------------------------------
        */
        // Get Cart Items
        get: function () {
            var itemsStream = new rxjs_1.Observable(function (observer) {
                observer.next(state.cart);
                observer.complete();
            });
            return itemsStream;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ProductService.prototype, "products", {
        // Product
        get: function () {
            this.Products = this.http.get('assets/data/products.json').pipe((0, operators_1.map)(function (data) { return data; }));
            this.Products.subscribe(function (next) {
                localStorage['products'] = JSON.stringify(next);
            });
            return this.Products = this.Products.pipe((0, operators_1.startWith)(JSON.parse(localStorage['products'] || '[]')));
        },
        enumerable: false,
        configurable: true
    });
    // Get Products By Slug
    ProductService.prototype.getProductBySlug = function (slug) {
        return this.products.pipe((0, operators_1.map)(function (items) {
            return items.find(function (item) {
                return item.title.replace(' ', '-') === slug;
            });
        }));
    };
    /*
      ---------------------------------------------
      -------------  Compare Product  -------------
      ---------------------------------------------
    */
    // Add to Wishlist
    ProductService.prototype.addToWishlist = function (product) {
        var wishlistItem = state.wishlist.find(function (item) { return item.id === product.id; });
        if (!wishlistItem) {
            state.wishlist.push(__assign({}, product));
        }
        this.toastrService.success('Product has been added in wishlist.');
        localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
        return true;
    };
    // Remove Wishlist items
    ProductService.prototype.removeWishlistItem = function (product) {
        var index = state.wishlist.indexOf(product);
        state.wishlist.splice(index, 1);
        localStorage.setItem("wishlistItems", JSON.stringify(state.wishlist));
        return true;
    };
    // Add to Compare
    ProductService.prototype.addToCompare = function (product) {
        var compareItem = state.compare.find(function (item) { return item.id === product.id; });
        if (!compareItem) {
            state.compare.push(__assign({}, product));
        }
        this.toastrService.success('Product has been added in compare.');
        localStorage.setItem("compareItems", JSON.stringify(state.compare));
        return true;
    };
    /*
      ---------------------------------------------
      -----------------  Cart  --------------------
      ---------------------------------------------
    */
    // Remove Compare items
    ProductService.prototype.removeCompareItem = function (product) {
        var index = state.compare.indexOf(product);
        state.compare.splice(index, 1);
        localStorage.setItem("compareItems", JSON.stringify(state.compare));
        return true;
    };
    // Add to Cart
    ProductService.prototype.addToCart = function (product) {
        var cartItem = state.cart.find(function (item) { return item.id === product.id; });
        var qty = product.quantity ? product.quantity : 1;
        var items = cartItem ? cartItem : product;
        var stock = this.calculateStockCounts(items, qty);
        if (!stock)
            return false;
        if (cartItem) {
            cartItem.quantity += qty;
        }
        else {
            state.cart.push(__assign(__assign({}, product), { quantity: qty }));
        }
        this.OpenCart = true; // If we use cart variation modal
        localStorage.setItem("cartItems", JSON.stringify(state.cart));
        return true;
    };
    // Update Cart Quantity
    ProductService.prototype.updateCartQuantity = function (product, quantity) {
        var _this = this;
        return state.cart.find(function (items, index) {
            if (items.id === product.id) {
                var qty = state.cart[index].quantity + quantity;
                var stock = _this.calculateStockCounts(state.cart[index], quantity);
                if (qty !== 0 && stock) {
                    state.cart[index].quantity = qty;
                }
                localStorage.setItem("cartItems", JSON.stringify(state.cart));
                return true;
            }
        });
    };
    // Calculate Stock Counts
    ProductService.prototype.calculateStockCounts = function (product, quantity) {
        var qty = product.quantity + quantity;
        var stock = product.stock;
        if (stock < qty || stock == 0) {
            this.toastrService.error('You can not add more items than available. In stock ' + stock + ' items.');
            return false;
        }
        return true;
    };
    // Remove Cart items
    ProductService.prototype.removeCartItem = function (product) {
        var index = state.cart.indexOf(product);
        state.cart.splice(index, 1);
        localStorage.setItem("cartItems", JSON.stringify(state.cart));
        return true;
    };
    // Total amount
    ProductService.prototype.cartTotalAmount = function () {
        var _this = this;
        return this.cartItems.pipe((0, operators_1.map)(function (product) {
            return product.reduce(function (prev, curr) {
                var price = curr.price;
                if (curr.discount) {
                    price = curr.price - (curr.price * curr.discount / 100);
                }
                return (prev + price * curr.quantity) * _this.Currency.price;
            }, 0);
        }));
    };
    /*
      ---------------------------------------------
      ------------  Filter Product  ---------------
      ---------------------------------------------
    */
    // Get Product Filter
    ProductService.prototype.filterProducts = function (filter) {
        return this.products.pipe((0, operators_1.map)(function (product) {
            return product.filter(function (item) {
                if (!filter.length)
                    return true;
                var Tags = filter.some(function (prev) {
                    if (item.tags) {
                        if (item.tags.includes(prev)) {
                            return prev;
                        }
                    }
                });
                return Tags;
            });
        }));
    };
    // Sorting Filter
    ProductService.prototype.sortProducts = function (products, payload) {
        if (payload === 'ascending') {
            return products.sort(function (a, b) {
                if (a.id < b.id) {
                    return -1;
                }
                else if (a.id > b.id) {
                    return 1;
                }
                return 0;
            });
        }
        else if (payload === 'a-z') {
            return products.sort(function (a, b) {
                if (a.title < b.title) {
                    return -1;
                }
                else if (a.title > b.title) {
                    return 1;
                }
                return 0;
            });
        }
        else if (payload === 'z-a') {
            return products.sort(function (a, b) {
                if (a.title > b.title) {
                    return -1;
                }
                else if (a.title < b.title) {
                    return 1;
                }
                return 0;
            });
        }
        else if (payload === 'low') {
            return products.sort(function (a, b) {
                if (a.price < b.price) {
                    return -1;
                }
                else if (a.price > b.price) {
                    return 1;
                }
                return 0;
            });
        }
        else if (payload === 'high') {
            return products.sort(function (a, b) {
                if (a.price > b.price) {
                    return -1;
                }
                else if (a.price < b.price) {
                    return 1;
                }
                return 0;
            });
        }
    };
    /*
      ---------------------------------------------
      ------------- Product Pagination  -----------
      ---------------------------------------------
    */
    ProductService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 16; }
        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        // Paginate Range
        var paginateRange = 3;
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage, endPage;
        if (totalPages <= 5) {
            startPage = 1;
            endPage = totalPages;
        }
        else if (currentPage < paginateRange - 1) {
            startPage = 1;
            endPage = startPage + paginateRange - 1;
        }
        else {
            startPage = currentPage - 1;
            endPage = currentPage + 1;
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    ProductService = __decorate([
        (0, core_1.Injectable)({
            providedIn: 'root'
        })
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
