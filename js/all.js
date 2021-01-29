$(document).ready(function () {
    $(window).on("load", function (e) {
        // remove loading effect
        setTimeout(function () {
            $('#loading').css({ 'opacity': 0, 'z-index': '-666' })
            setTimeout(function () {
                $('#loading').remove()
            }, 1000)
            // navbar effect
            let topDistance = $('html ,body').scrollTop()
            if (topDistance > 100) {
                $('#main-nav').css({ 'background-color': 'black' })
            } else {
                $('#main-nav').css({ 'background-color': 'transparent' })
            }
            $(document).scroll(function () {
                let topDistance = $('html ,body').scrollTop()
                if (topDistance > 100) {
                    $('#main-nav').css({ 'background-color': 'black' })
                } else {
                    $('#main-nav').css({ 'background-color': 'transparent' })
                }
            })

            // burger effect
            $('#burger').click(function () {
                $(this).toggleClass('burger-open');
                $('#navbar-nav').toggleClass('nav-open');
            })

            // lightbox effect
            lightbox.option({
                'resizeDuration': 200,
                'wrapAround': true,
                'fadeDuration': 200,
                'maxWidth': 960,
                'positionFromTop': 30
            })

            // banner word fade in effect
            $('.home-content-word-lg').fadeIn(2000);

            // type effect
            var i = 0;
            var txt = '';
            setTimeout(typeEffect, 500);
            function typeEffect() {
                let contentSm = 'A Front-End Engineer / Guitarist';
                if (i < contentSm.length) {
                    txt += contentSm.charAt(i);
                    $('.home-content-word-sm').html(txt)
                    $('.home-content-word-sm').css({ 'animation': 'typeEffect 0.6s infinite' })
                    i++;
                    setTimeout(typeEffect, 80)
                }
            }

            // scroll to anchor effect
            $(".navbar-nav a[href = '#home']").click(function (e) {
                e.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: $('#home').offset().top
                }, 0);
                $('#burger').removeClass('burger-open')
                $('#navbar-nav').removeClass('nav-open');
            });

            $(".navbar-nav a[href = '#profile']").click(function (e) {
                e.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: $('#profile').offset().top - 59
                }, 0);
                $('#burger').removeClass('burger-open')
                $('#navbar-nav').removeClass('nav-open');
            });

            $(".navbar-nav a[href = '#skill']").click(function (e) {
                e.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: $('#skill').offset().top - 59
                }, 0);
                $('#burger').removeClass('burger-open')
                $('#navbar-nav').removeClass('nav-open');
            });

            $(".navbar-nav a[href = '#portfolio']").click(function (e) {
                e.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: $('#portfolio').offset().top - 59
                }, 0);
                $('#burger').removeClass('burger-open')
                $('#navbar-nav').removeClass('nav-open');
            });

            $(".home-content a[href = '#profile']").click(function (e) {
                e.preventDefault();
                $('html, body').stop().animate({
                    scrollTop: $('#profile').offset().top - 59
                }, 0);
            });
            // pages select
            var currentPage = 1;
            var itemsPerPage = 5;
            var pages = Math.ceil($('.img-frontend-wrap a img').length / itemsPerPage);
            // 
            eachImg();
            // 
            $('#pages-wrap').html('');
            for (let i = 1; i <= pages; i++) {
                let node = $('<a href="#" class="mx-3 p-2 page-select">' + i + '</>')
                $('#pages-wrap').append(node);
                function pageDisabled() {
                    $('#pages-wrap .page-select').each(function () {
                        if ($(this).text() == currentPage) {
                            $(this).css({ 'pointer-events': 'none', 'color': 'gray' })
                        } else {
                            $(this).css({ 'pointer-events': 'auto', 'color': 'black' })
                        }
                    })
                }
                pageDisabled()
            };
            $('.page-select').click(function (e) {
                e.preventDefault()
                currentPage = $(this).text();
                eachImg()
                pageDisabled()
            })

            // 
            function pageSelectChange() {
                $('#pages-wrap').html('');
                for (let i = 1; i <= pages; i++) {
                    let node = $('<a href="#" class="mx-3 p-2 page-select">' + i + '</>')
                    $('#pages-wrap').append(node);
                    function pageDisabled() {
                        $('#pages-wrap .page-select').each(function () {
                            if ($(this).text() == currentPage) {
                                $(this).css({ 'pointer-events': 'none', 'color': 'gray' })
                            } else {
                                $(this).css({ 'pointer-events': 'auto', 'color': 'black' })
                            }
                        })
                    }
                    pageDisabled()
                };
                $('.page-select').click(function (e) {
                    e.preventDefault()
                    currentPage = $(this).text();
                    eachImg()
                    pageDisabled()
                })
            }

            // 

            // 
            function eachImg() {
                $('.img-backend-wrap .show-content').each(function (i, v) {
                    if (i < itemsPerPage * currentPage && i > itemsPerPage * currentPage - (itemsPerPage + 1)) {
                        $(this).show()
                    } else {
                        $(this).hide()
                    }
                })
                $('.img-frontend-wrap a').each(function (i, v) {
                    if (i < itemsPerPage * currentPage && i > itemsPerPage * currentPage - (itemsPerPage + 1)) {
                        $(this).show()
                    } else {
                        $(this).hide()
                    }
                })
            }

            // category choose
            $('#frontend-list').click(function (e) {
                e.preventDefault();
                $('.img-frontend-wrap').addClass('show')
                $('.img-backend-wrap').removeClass('show')
                $('#frontend-list').addClass('actived');
                $('#backend-list').removeClass('actived');
                currentPage = 1;
                eachImg()
                pageDisabled()
                pages = Math.ceil($('.img-frontend-wrap a img').length / itemsPerPage);
                console.log(pages)
                pageSelectChange()
            })

            $('#backend-list').click(function (e) {
                e.preventDefault();
                $('.img-backend-wrap').addClass('show')
                $('.img-frontend-wrap').removeClass('show')
                $('#backend-list').addClass('actived');
                $('#frontend-list').removeClass('actived');
                currentPage = 1;
                eachImg()
                pageDisabled()
                pages = Math.ceil($('.img-backend-wrap a img').length / itemsPerPage);
                console.log(pages)
                pageSelectChange()
            })

            // skill bar animate
            let skillTopDistance = $('html ,body').scrollTop() + $(window).height();
            if (skillTopDistance > $('.lightbox-wrap').offset().top) {
                $('.skill-bar').each(function () {
                    $(this).find('div').css({ 'color': 'white' }).animate({
                        width: $(this).find('div').attr('data-percent')
                    }, 2500);
                });
            }

            $(document).scroll(function () {
                let skillTopDistance = $('html ,body').scrollTop() + $(window).height();
                if (skillTopDistance > $('.lightbox-wrap').offset().top) {
                    $('.skill-bar').each(function () {
                        $(this).find('div').css({ 'color': 'white' }).animate({
                            width: $(this).find('div').attr('data-percent')
                        }, 2500);
                    });
                }
            })
        }, 1000);
    })
})
