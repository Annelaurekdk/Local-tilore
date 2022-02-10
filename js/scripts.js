/*!
* Start Bootstrap - Grayscale v7.0.4 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
        jQuery(function($) {
            if (typeof _userdata.page_desktop === "undefined") {
                var m = $('.bandef'),
                    w = 0,
                    cw = m.parent().add('<span />').width(),
                    st = 'y';
                if (navigator.userAgent.match(/MSIE/) || navigator.userAgent.match(/rv:11\.0/) || navigator.userAgent.match(/maxthon/i) || (navigator.userAgent.match(/Safari/) && !navigator.userAgent.match(/Chrome/))) {
                    if (st == 'y') {
                        m.attr({
                            'onmouseover': 'this.stop();',
                            'onmouseout': 'this.start();'
                        });
                    }
                    m.attr('direction', 'left').removeAttr('class').parent().html(m.parent().html().replace(/div/g, 'marquee'));
                }
                m.css('max-width', cw + 'px').fadeIn().closest('td.row1').css('padding', '2px 0');
                $('.bandef img, .bandef span').each(function() {
                    w = w + parseInt($(this).add('<span />').width());
                });
                if ($('.bodylinewidth').length != 0) $('.bandef').each(function() {
                    if ($(this).parent().is('div.gensmall')) w = w + cw;
                });
                $('head').append('<style id="marquee_style">@-webkit-keyframes marquee { 0%  { text-indent: ' + cw + 'px } 100% { text-indent: -' + w + 'px } } @keyframes marquee { 0%  { text-indent: ' + cw + 'px } 100% { text-indent: -' + w + 'px } }</style>');
                if (st == 'n') {
                    $('#marquee_style').append('.bandef:hover{ -webkit-animation-play-state: initial !important; animation-play-state: initial !important }');
                }
            }
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});