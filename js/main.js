/** ===============

.. Preloader
.. header_search
.. Fixed-header
.. Menu
.. Number rotator
.. Skillbar
.. Tab
.. Accordion
.. Isotope
.. Prettyphoto
.. share-icon_btn
.. Slick_slider
.. Back to top 

 =============== */



jQuery(function($) {

  "use strict";

/*------------------------------------------------------------------------------*/
/* Preloader
/*------------------------------------------------------------------------------*/
   // makes sure the whole site is loaded
    $(window).on("load",function(){
        $(".loader-blob").fadeOut(),$("#preloader").delay(300).fadeOut("slow",function(){$(this).remove()})
    })


/*------------------------------------------------------------------------------*/
/* header_search
/*------------------------------------------------------------------------------*/
            
    $(".header_search").each(function(){  
        $(".search_btn", this).on("click", function(e){
            e.preventDefault();
            $(".header_search_content").toggleClass("on");
        });

        $(".header_search_content_inner .close_btn").on("click", function(e){
            e.preventDefault();
            $(".header_search_content").removeClass("on");
        });  
    });


/*------------------------------------------------------------------------------*/
/* Fixed-header
/*------------------------------------------------------------------------------*/

    $(window).scroll(function(){
        

        if ( matchMedia( 'only screen and (min-width: 1200px)' ).matches ) 
        {
            if ($(window).scrollTop() >= 50 ) {
                $('.ttm-stickable-header').addClass('fixed-header');
            }
            else {
                $('.ttm-stickable-header').removeClass('fixed-header');
            }
        }
    });


var themetechmount_coverimgbox = function() {

    jQuery('.tm_coverimgbox_wrapper').each(function(){
        var parentDiv = jQuery(this);
                
                parentDiv.children('.tm_coverbox_contents').on(function () {
                    parentDiv.find('.tm_coverbox_img').removeClass('active');
                    jQuery(this).next('.tm_coverbox_img').addClass('active');
                });
    });
};

/*------------------------------------------------------------------------------*/
/* Menu
/*------------------------------------------------------------------------------*/

    var menu = {
        initialize: function() {
            this.Menuhover();
        },

        Menuhover : function(){
            var getNav = $("nav.main-menu"),
                getWindow = $(window).width(),
                getHeight = $(window).height(),
                getIn = getNav.find("ul.menu").data("in"),
                getOut = getNav.find("ul.menu").data("out");
            
            if ( matchMedia( 'only screen and (max-width: 1200px)' ).matches ) {
                                                     
                // Enable click event
                $("nav.main-menu ul.menu").each(function(){
                    
                    // Dropdown Fade Toggle
                    $("a.mega-menu-link", this).on('click', function (e) {
                        e.preventDefault();
                        var t = $(this);
                        t.toggleClass('active').next('ul').toggleClass('active');
                    });   

                    // Megamenu style
                    $(".megamenu-fw", this).each(function(){
                        $(".col-menu", this).each(function(){
                            $(".title", this).off("click");
                            $(".title", this).on("click", function(){
                                $(this).closest(".col-menu").find(".content").stop().toggleClass('active');
                                $(this).closest(".col-menu").toggleClass("active");
                                return false;
                                e.preventDefault();
                                
                            });

                        });
                    });  
                    
                }); 
            }
        },
    };
    
    $('.btn-show-menu-mobile').on('click', function(e){
        $(this).toggleClass('is-active'); 
        $('.menu-mobile').toggleClass('show'); 
        return false;
        e.preventDefault();  
    });

    // Initialize
    $(document).ready(function(){
        menu.initialize();

    });



/*------------------------------------------------------------------------------*/
/* Animation on scroll: Number rotator
/*------------------------------------------------------------------------------*/
    
    $("[data-appear-animation]").each(function() {
    var self      = $(this);
    var animation = self.data("appear-animation");
    var delay     = (self.data("appear-animation-delay") ? self.data("appear-animation-delay") : 0);
        
        if( $(window).width() > 959 ) {
            self.html('0');
            self.waypoint(function(direction) {
                if( !self.hasClass('completed') ){
                    var from     = self.data('from');
                    var to       = self.data('to');
                    var interval = self.data('interval');
                    self.numinate({
                        format: '%counter%',
                        from: from,
                        to: to,
                        runningInterval: 2000,
                        stepUnit: interval,
                        onComplete: function(elem) {
                            self.addClass('completed');
                        }
                    });
                }
            }, { offset:'85%' });
        } else {
            if( animation == 'animateWidth' ) {
                self.css('width', self.data("width"));
            }
        }
    });

 jQuery(".ttm-circle-box").each(function () {

        var circle_box = jQuery(this);
        var fill_val = circle_box.data("fill");
        var emptyFill_val = circle_box.data("emptyfill");
        var thickness_val = circle_box.data("thickness");
        var linecap_val = circle_box.data("linecap")
        var fill_gradient = circle_box.data("gradient");
        var startangle_val = (-Math.PI / 4) * 1.5;
        if (fill_gradient != "") {
            fill_gradient = fill_gradient.split("|");
            fill_val = { gradient: [fill_gradient[0], fill_gradient[1]] };
        }
        if (typeof jQuery.fn.circleProgress == "function") {
            var digit = circle_box.data("digit");
            var before = circle_box.data("before");
            var after = circle_box.data("after");
            var digit = Number(digit);
            var short_digit = digit / 100;
            var size_val = circle_box.data("size");
            jQuery(".ttm-circle", circle_box)
                .circleProgress({ value: 0, duration: 8000, size: size_val, startAngle: startangle_val, 
                    thickness: thickness_val, linecap:linecap_val, emptyFill: emptyFill_val, fill: fill_val })
                .on("circle-animation-progress", function (event, progress, stepValue) {
                    
                    circle_box.find(".ttm-fid-number").html(before + Math.round(stepValue * 100) + after);
                });
        }
        circle_box.waypoint(
            function (direction) {

                if (!circle_box.hasClass("completed")) {
                    if (typeof jQuery.fn.circleProgress == "function") {
                        jQuery(".ttm-circle", circle_box).circleProgress({ value: short_digit });
                    }
                    circle_box.addClass("completed");
                }
            },
            { offset: "90%" }
        );
    });

   
/*------------------------------------------------------------------------------*/
/* Skillbar
/*------------------------------------------------------------------------------*/
    
    $('.ttm-progress-bar').each(function() {
        $(this).find('.progress-bar').width(0);
    });

    $('.ttm-progress-bar').each(function() {

        $(this).find('.progress-bar').animate({
            width: $(this).attr('data-percent')
        }, 2000);
    });


    // Part of the code responsible for loading percentages:

    $('.progress-bar-percent[data-percentage]').each(function () {

        var progress = $(this);
        var percentage = Math.ceil($(this).attr('data-percentage'));

            $({countNum: 0}).animate({countNum: percentage}, {
                duration: 2000,
                easing:'linear',
                step: function() {
                // What todo on every count
                    var pct = '';
                    if(percentage == 0){
                        pct = Math.floor(this.countNum) + '%';
                    }else{
                        pct = Math.floor(this.countNum+1) + '%';
                    }
                    progress.text(pct);
                }
            });
    });

/*------------------------------------------------------------------------------*/
/* Tab
/*------------------------------------------------------------------------------*/ 
    $(document).ready(function() {

        $('.ttm-tabs > .tabs').children('li').on('click', function(e) {  

            var tab = $(this).closest('.ttm-tabs > .tabs > .tab'), 

            index = $(this).closest('.ttm-tabs > .tabs > li').index();

            $(this).parents('.ttm-tabs').children(' .tabs').children('li.active ').removeClass('active'); 

            $(this).addClass('active'); 
            $(this).addClass('active').parents('.ttm-tabs').children('.content-tab').find('.content-inner').not('.content-inner:eq(' + index + ')').slideUp();
            $(this).addClass('active').parents('.ttm-tabs').children('.content-tab').find('.content-inner:eq(' + index + ')').slideDown();

            e.preventDefault();
        });
    });


/*------------------------------------------------------------------------------*/
/* Accordion
/*------------------------------------------------------------------------------*/

    var allPanels = $('.accordion > .toggle').children('.toggle-content').hide();

    $('.toggle-title').on('click',function(e) {

        e.preventDefault();
        var $this = $(this);
            $this.parent().parent().find('.toggle .toggle-title a').removeClass('active');

        if ($this.next().hasClass('show')) {

            $this.next().removeClass('show');   
            $this.next().slideUp('easeInExpo');

        } else {
            $this.parent().parent().find('.toggle .toggle-content').removeClass('show');
            $this.parent().parent().find('.toggle .toggle-content').slideUp('easeInExpo');
            $this.next().toggleClass('show');
            $this.next().removeClass('show');
            $this.next().slideToggle('easeInExpo');
           $this.next().parent().children().children().addClass('active');

        }

    });


/*------------------------------------------------------------------------------*/
/* Isotope
/*------------------------------------------------------------------------------*/

   $(function () {

        if ( $().isotope ) {           
            var $container = $('.isotope-project');
            $container.imagesLoaded(function(){
                $container.isotope({
                    itemSelector: '.project_item',
                    transitionDuration: '1s',
                    layoutMode: 'fitRows'
                });
            });

            $('.portfolio-filter li').on('click',function() {                           
                var selector = $(this).find("a").attr('data-filter');
                $('.portfolio-filter li').removeClass('active');
                $(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });
        };

   });


    
/*------------------------------------------------------------------------------*/
/* Prettyphoto
/*------------------------------------------------------------------------------*/
    $(function () {

         // Normal link
        jQuery('a[href*=".jpg"], a[href*=".jpeg"], a[href*=".png"], a[href*=".gif"]').each(function(){
            if( jQuery(this).attr('target')!='_blank' && !jQuery(this).hasClass('prettyphoto') && !jQuery(this).hasClass('modula-lightbox') ){
                var attr = $(this).attr('data-gal');
                if (typeof attr !== typeof undefined && attr !== false && attr!='prettyPhoto' ) {
                    jQuery(this).attr('data-rel','prettyPhoto');
                }
            }
        });     

        jQuery('a[data-gal^="prettyPhoto"]').prettyPhoto();
        jQuery('a.ttm_prettyphoto').prettyPhoto();
        jQuery('a[data-gal^="prettyPhoto"]').prettyPhoto();
        jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({hook: 'data-gal'})

    });
    $(document).ready(function() {
    var e = '<div class="ttm_floting_customsett">'+
                '<div class="clearfix"></div>'+
            '</div>';

    $('body').append(e);
}); 

    
/*------------------------------------------------------------------------------*/
/* share-icon_btn
/*------------------------------------------------------------------------------*/
    jQuery(".ttm-blog-classic").each(function(t){
        var e=jQuery(this);
        e.find(".ttm-social-share-icon_btn").on("click",function(){
            return e.find(".social-icons").toggleClass("show"),!1
        })
    });

/*------------------------------------------------------------------------------*/
/* twentytwenty[data-orientation]
/*------------------------------------------------------------------------------*/

$(function(){
      $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({default_offset_pct: 0.5});
      $(".twentytwenty-container[data-orientation='vertical']").twentytwenty({default_offset_pct: 0.3, orientation: 'vertical'});
    });


/*------------------------------------------------------------------------------*/
/* Slick_slider
/*------------------------------------------------------------------------------*/
    $(".slick_slider").slick({
        speed: 1000,
        infinite: true,
        arrows: false,
        dots: false,                   
        autoplay: false,
        centerMode : false,

        responsive: [{

            breakpoint: 1360,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3
            }
        },
        {

            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3
            }
        },
        {

            breakpoint: 680,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });




/*------------------------------------------------------------------------------*/
/* Back to top
/*------------------------------------------------------------------------------*/
     
    // ===== Scroll to Top ==== 
    jQuery('#totop').hide();

    $(window).on("scroll",function(){
        if (jQuery(this).scrollTop() >= 500) {        // If page is scrolled more than 50px
            jQuery('#totop').fadeIn(200);    // Fade in the arrow
            jQuery('#totop').addClass('top-visible');
        } else {
            jQuery('#totop').fadeOut(200);   // Else fade out the arrow
            jQuery('#totop').removeClass('top-visible');
        }
    });

    jQuery('#totop').on("click",function() {      // When arrow is clicked
        jQuery('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
        return false;
    });

});


 jQuery(document).ready(function() {
    jQuery('.tm_coverimgbox_wrapper').each(function(){
        var parentDiv = jQuery(this);
                
                parentDiv.children('.tm_coverbox_contents').hover(function () {
                    parentDiv.find('.tm_coverbox_img').removeClass('active');
                    jQuery(this).next('.tm_coverbox_img').addClass('active');
                });
    });
 });


 document.querySelector('.btn-show-menu-mobile').addEventListener('click', function () {
    document.getElementById('menu').classList.toggle('open');
});

// Xử lý cuộn mượt và đóng menu
document.querySelectorAll('.menu-mobile .mega-menu-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Đóng menu mobile
        document.getElementById('menu').classList.remove('open');
    });
});

// Mở modal và hiển thị ảnh được click
function openModal(imgSrc) {
    document.getElementById('modalImage').src = imgSrc;
    document.getElementById('imageModal').style.display = "block";
}

// Đóng modal
function closeModal() {
    document.getElementById('imageModal').style.display = "none";
}

// Đóng modal khi nhấn phím ESC
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // Xử lý slider ảnh nhỏ cho combo
    const comboSlider = document.querySelector('.combo-thumbnail-slider');
    if (comboSlider) {
        const thumbnailsContainer = comboSlider.querySelector('.combo-thumbnails-container');
        const prevBtn = comboSlider.querySelector('.slider-nav.prev');
        const nextBtn = comboSlider.querySelector('.slider-nav.next');
        const thumbnailItems = comboSlider.querySelectorAll('.thumbnail-item');
        const mainImage = document.querySelector('.combo-main-image');

        // Xử lý click vào ảnh nhỏ
        thumbnailItems.forEach(item => {
            item.addEventListener('click', function () {
                const imageUrl = this.getAttribute('data-image');
                mainImage.src = imageUrl;

                // Cập nhật active state
                thumbnailItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            });
        });
        if (mainImage) {
            mainImage.addEventListener('click', function () {
                openModal(this.src);
            });
        }
        // Xử lý nút prev/next
        if (prevBtn && nextBtn) {
            const scrollAmount = 120;

            prevBtn.addEventListener('click', () => {
                thumbnailsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });

            nextBtn.addEventListener('click', () => {
                thumbnailsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Xử lý slider ảnh nhỏ
    const initThumbnailSlider = (container) => {
        const thumbnailsContainer = container.querySelector('.thumbnails-container');
        const prevBtn = container.querySelector('.slider-nav.prev');
        const nextBtn = container.querySelector('.slider-nav.next');
        const thumbnailItems = container.querySelectorAll('.thumbnail-item');
        const productCard = container.closest('.plastic-product-card');
        const isWardrobe = productCard.querySelector('.product-category')?.textContent.includes('Tủ Quần Áo');

        // Lấy các phần tử liên quan
        let mainImages = [];
        let mainNavPrev = null;
        let mainNavNext = null;

        if (isWardrobe) {
            mainImages = productCard.querySelectorAll('.product-thumbnail .main-image');
            mainNavPrev = productCard.querySelector('.product-thumbnail .slider-nav.prev');
            mainNavNext = productCard.querySelector('.product-thumbnail .slider-nav.next');
        } else {
            const mainImage = productCard.querySelector('.main-image') ||
                productCard.querySelector('.combo-main-image');
            if (mainImage) mainImages = [mainImage];
        }

        // Xử lý click vào ảnh nhỏ
        thumbnailItems.forEach(item => {
            item.addEventListener('click', function () {
                const imageUrl = this.getAttribute('data-image');

                // Xử lý riêng cho tủ quần áo
                if (isWardrobe && mainImages.length >= 2) {
                    const secondImageUrl = imageUrl.replace('.jpg', '-3.jpg');
                    mainImages[0].src = imageUrl;
                    mainImages[1].src = secondImageUrl;
                    showMainImage(0); // Hiển thị ảnh đầu tiên
                }
                // Xử lý chung cho các sản phẩm khác
                else if (mainImages.length > 0) {
                    mainImages[0].src = imageUrl;
                }

                // Cập nhật active state
                thumbnailItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Xử lý nút prev/next cho thumbnail slider
        if (prevBtn && nextBtn) {
            const scrollAmount = 100;
            prevBtn.addEventListener('click', () => {
                thumbnailsContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });
            nextBtn.addEventListener('click', () => {
                thumbnailsContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });
        }

        // Xử lý nút prev/next cho ảnh chính (chỉ tủ quần áo)
        if (isWardrobe && mainNavPrev && mainNavNext) {
            mainNavPrev.addEventListener('click', () => {
                const currentVisibleIndex = getCurrentVisibleImageIndex();
                const nextIndex = (currentVisibleIndex - 1 + mainImages.length) % mainImages.length;
                showMainImage(nextIndex);
            });

            mainNavNext.addEventListener('click', () => {
                const currentVisibleIndex = getCurrentVisibleImageIndex();
                const nextIndex = (currentVisibleIndex + 1) % mainImages.length;
                showMainImage(nextIndex);
            });
        }

        // Hàm hiển thị ảnh chính theo index
        function showMainImage(index) {
            mainImages.forEach((img, i) => {
                img.style.display = i === index ? 'block' : 'none';
            });
        }

        // Hàm lấy index của ảnh đang hiển thị
        function getCurrentVisibleImageIndex() {
            for (let i = 0; i < mainImages.length; i++) {
                if (mainImages[i].style.display !== 'none') {
                    return i;
                }
            }
            return 0;
        }

        // Xử lý click vào ảnh lớn để mở modal
        mainImages.forEach(img => {
            img.addEventListener('click', function () {
                openModal(this.src);
            });
        });
    };

    // Khởi tạo slider cho tất cả sản phẩm
    document.querySelectorAll('.thumbnail-slider').forEach(slider => {
        initThumbnailSlider(slider);
    });
});
 

// Danh sách sản phẩm với thông tin chi tiết
const productData = {
    'giuong_nhua': {
        name: 'Giường Nhựa GN-2025',
        colors: {
            'images/products/bed-white.jpg': 'Giường màu trắng đen',
            'images/products/bed-gray.jpg': 'Giường màu xám',
            'images/products/bed-beige.jpg': 'Giường màu Vân gỗ sồi',
            'images/products/bed-brown.jpg': 'Giường màu vân gỗ óc chó',
            'images/products/bed-black.jpg': 'Giường màu nâu',
            'images/products/bed-white-2.jpg': 'Giường màu trắng'
        }
    },
    'tu_quan_ao': {
        name: 'Tủ Nhựa TN-2025',
        colors: {
            'images/products/wardrobe-oak.jpg': 'Vân gỗ sồi',
            'images/products/wardrobe-walnut.jpg': 'Vân gỗ óc chó',
            'images/products/wardrobe-white.jpg': 'Trắng',
            'images/products/wardrobe-gray-2.jpg':'Tủ màu xám có vân',
            'images/products/wardrobe-gray.jpg':'Tủ màu xám',
            'images/products/wardrobe-white-black.jpg':'Tủ màu trắng đen',
        }
    },
    'ban_trang_diem': {
        name: 'Bàn Trang Điểm BTD-2025',
        colors: {
            'images/products/dressing-white.jpg':'Bàn trang điểm trắng',
            'images/products/dressing-white-1.jpg':'Bàn trang điểm trắng đen',
            'images/products/dressing-gold.jpg':'Bàn trang điểm vân gỗ sồi',
            'images/products/dressing-oak.jpg':'Bàn trang điểm vân gỗ óc chó',
            'images/products/dressing-grey.jpg':'Bàn trang xám',
            'images/products/dressing-grey black.jpg':'Bàn trang điểm tím',
        }
    },
    'combo_phong_ngu': {
        name: 'Combo Phòng Ngủ 3 Món',
        colors: {
            'images/products/combo-default.jpg':'Combo giường đen',
            'images/products/combo-white.jpg':'Combo màu trắng',
            'images/products/combo-gray.jpg':'Combo màu xám',
            'images/products/combo-beige.jpg':'Combo vân gỗ sồi',
            'images/products/combo-blackwhite.jpg':'Combo giường đen trắng',
            'images/products/combo-walnut.jpg':'Combo vân gỗ óc chó',
        }
    }
};

// Xử lý chọn màu sản phẩm
document.querySelectorAll('.color-thumb').forEach(thumb => {
    thumb.addEventListener('click', function () {
        // Lấy phần tử cha
        const productCard = this.closest('.quick-product-card');
        const productItem = this.closest('.quick-product-item');

        // Xóa active của tất cả các thumb cùng nhóm
        this.parentElement.querySelectorAll('.color-thumb').forEach(t => {
            t.classList.remove('active');
        });

        // Thêm active cho thumb được chọn
        this.classList.add('active');

        // Thay đổi ảnh chính
        const mainImg = productCard.querySelector('.quick-product-img');
        const newImgUrl = this.getAttribute('data-img');
        mainImg.style.backgroundImage = `url('${newImgUrl}')`;

        // Tự động chọn checkbox của sản phẩm
        const checkbox = productItem.querySelector('input[type="checkbox"]');
        checkbox.checked = true;
    });
});

// Xử lý submit form
document.querySelector('.quick-order-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Lấy thông tin sản phẩm đã chọn
    const selectedProducts = Array.from(this.querySelectorAll('input[name="quick-product"]:checked'))
        .map(input => {
            const productId = input.value;
            const productItem = input.closest('.quick-product-item');
            const selectedColor = productItem.querySelector('.color-thumb.active');
            const colorImage = selectedColor ? selectedColor.getAttribute('data-img') : '';

            return {
                id: productId,
                name: productData[productId].name,
                color: productData[productId].colors[colorImage] || 'Mặc định',
                colorImage: colorImage
            };
        });

    // Kiểm tra nếu chưa chọn sản phẩm nào
    if (selectedProducts.length === 0) {
        alert('Vui lòng chọn ít nhất một sản phẩm');
        return;
    }

    const formData = {
        name: this.querySelector('#quick-fullname').value,
        phone: this.querySelector('#quick-phone').value,
        email: this.querySelector('#quick-email').value,
        address: this.querySelector('#quick-address').value,
        products: selectedProducts.map(p => `${p.name} - Màu: ${p.color}`).join('\n'),
        // productsDetail: JSON.stringify(selectedProducts), // Gửi cả dữ liệu chi tiết
        note: this.querySelector('#quick-note').value
    };

    // Hiệu ứng loading
    const submitBtn = this.querySelector('.quick-submit-btn');
    submitBtn.innerHTML = '<span class="quick-loading"></span> ĐANG XỬ LÝ...';
    submitBtn.disabled = true;

    fetch('https://script.google.com/macros/s/AKfycbxryedzk7ZiAsWl045jD1zlDatSMwJqAh0fXf0ai7NHZW4EplAREpdjDv_UzVsyuwbO/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json'
        }
    })

        .then(() => {
            // Hiển thị popup thành công
            showSuccessPopup(selectedProducts);

            this.reset();

            // Reset tất cả checkbox và màu sắc
            document.querySelectorAll('input[name="quick-product"]').forEach(checkbox => {
                checkbox.checked = false;
            });
            document.querySelectorAll('.color-thumb').forEach(thumb => {
                thumb.classList.remove('active');
            });
            // Set lại màu mặc định
            document.querySelectorAll('.color-thumb:first-child').forEach(thumb => {
                thumb.classList.add('active');
            });
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Có lỗi xảy ra, vui lòng thử lại sau.');
        })
        .finally(() => {
            submitBtn.innerHTML = '<span>HOÀN TẤT ĐẶT HÀNG</span>';
            submitBtn.disabled = false;
        });
});

// Hiển thị popup thành công với thông tin đơn hàng
function showSuccessPopup(products) {
    const popup = document.querySelector('.quick-order-popup');
    const content = popup.querySelector('.quick-popup-content');
    // const productList = popup.querySelector('.quick-popup-products');

    // // Hiển thị danh sách sản phẩm đã đặt
    // productList.innerHTML = products.map(p => 
    //     `<div class="popup-product-item">
    //         <img src="${p.colorImage}" alt="${p.name}">
    //         <div>
    //             <h4>${p.name}</h4>
    //             <p>Màu: ${p.color}</p>
    //         </div>
    //     </div>`
    // ).join('');

    popup.style.display = 'flex';
    setTimeout(() => {
        popup.style.opacity = '1';
        content.style.transform = 'translateY(0)';
        content.style.opacity = '1';
    }, 10);
}

// Đóng popup
document.querySelector('.quick-popup-close').addEventListener('click', function () {
    const popup = document.querySelector('.quick-order-popup');
    const content = popup.querySelector('.quick-popup-content');

    popup.style.opacity = '0';
    content.style.transform = 'translateY(20px)';
    content.style.opacity = '0';

    setTimeout(() => {
        popup.style.display = 'none';
    }, 300);
});