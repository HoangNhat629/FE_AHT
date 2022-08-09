function getPageList(totalPages, page, maxLength) {
    function range(start, end) {
        return Array.from(Array(end - start + 1), (_, i) => i + start);
    }

    var sideWidth = maxLength < 9 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if (totalPages <= maxLength) {
        return range(1, totalPages);
    }

    if (page <= maxLength - sideWidth - 1 - rightWidth) {
        return range(1, maxLength - sideWidth - 1).concat(
            0,
            range(totalPages - sideWidth + 1, totalPages)
        );
    }

    if (page >= totalPages - sideWidth - 1 - rightWidth) {
        return range(1, sideWidth).concat(
            0,
            range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages)
        );
    }

    return range(1, sideWidth).concat(
        0,
        range(page - leftWidth, page + rightWidth),
        0,
        range(totalPages - sideWidth + 1, totalPages)
    );
}

$(document).ready(function() {
    $(".web-inf-button").click(function(e) {
        e.preventDefault();
        $(this).find(".inf-content").toggle("show");
        $(this).siblings().toggle("hide");
    });
    $(".nav-icon").click(function(e) {
        e.preventDefault();
        $(".navbar").addClass("active");
        $(".cover").addClass("active");
    });
    $(".cover").click(function(e) {
        e.preventDefault();
        $(".navbar").removeClass("active");
        $(".cover").removeClass("active");
    });
    $(".slider").slick({
        dots: false,
        responsive: [{
            breakpoint: 769,
            settings: {
                infinite: true,
                arrows: false,
            },
        }, ],
    });
    $(".slider").on("aftereChange", function() {
        $(".slider-item").each(function(index, element) {
            // element=this
            if ($(this).hasClass("slik-active")) {
                $(this).find(".slide-title").addClass("active");
                $(this).find(".slide-sumary").addClass("active");
                $(this).find(".slide-btn").addClass("active");
            } else {
                $(this).find(".slide-title").removeClass("active");
                $(this).find(".slide-sumary").removeClass("active");
                $(this).find(".slide-btn").removeClass("active");
            }
        });
    });
    var day = $('.days span').html();
    var hour = $('.hours span').html();
    var min = $('.mins span').html();
    var sec = $('.secs span').html();
    setInterval(function() {
        sec--;
        if (sec == -1) {
            sec = 59;
            min--;
            if (min == -1) {
                min = 59;
                hour--;
                if (hour == -1) {
                    hour = 23;
                    day--;

                }
            }
        }
        $('.days span').html(day);
        $('.hours span').html(hour);
        $('.mins span').html(min);
        $('.secs span').html(sec);
    }, 1000)
    var price = $(".discount-selling span").html();
    if (price != 0) {
        $(".discount-selling").addClass("active")
    };
    $(".col").click(function(e) {
        e.preventDefault();
        $(this).find(".content").toggle("show");
        $(this).siblings().toggle("hide");
    });

    $(function() {
        var numberOfItems = $(".content-selling .card-selling").length;
        var limitPerPage = 8; //How many card items visible per a page
        var totalPages = Math.ceil(numberOfItems / limitPerPage);
        var paginationSize = 7; //How many page elements visible in the pagination
        var currentPage;

        function showPage(whichPage) {
            if (whichPage < 1 || whichPage > totalPages) return false;

            currentPage = whichPage;

            $(".content-selling .card-selling")
                .hide()
                .slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
                .show();


            getPageList(totalPages, currentPage, paginationSize)

            $(".previous-page").toggleClass("disable", currentPage === 1);
            $(".next-page").toggleClass("disable", currentPage === totalPages);
            return true;
        }


        $(".content-sellingr").show();
        showPage(1);

        $(".next-page").on("click", function() {
            return showPage(currentPage + 1);
        });

        $(".previous-page").on("click", function() {
            return showPage(currentPage - 1);
        });
    });
});