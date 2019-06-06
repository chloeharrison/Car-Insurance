///responsive nav
$(document).ready(function () {
    $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
    });
});


///Date and Time
function date_time() {
    var date = new Date();
    var year = date.getFullYear(); ///get the year
    var month = date.getMonth(); ///get the month
    var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'); ///All the months listed
    var d = date.getDate();
    var day = date.getDay();
    var days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'); ///All the days listed
    var h = date.getHours();
    if (h < 10) {
        h = "0" + h;
    }
    var m = date.getMinutes();
    if (m < 10) {
        m = "0" + m;
    }
    var result = '' + days[day] + ' ' + d + ' ' + months[month] + ' ' + year + ' <b>|</b> ' + h + ':' + m;


    $("#date").html(result); ///Display result
}


//scrolling
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600); ///How fast it should scroll to the top
        return false;
    });
});


//Cookies-Local Storage
$(document).ready(function () { //when the document is ready
    $(".storage").hide(); //hide the storage div

    if (!localStorage.getItem("storage")) { // function to add data to local storage
        $(".storage").fadeIn(); // if there is no local storage data then the storage div will fade in
    };

    $(".stor_btn").click(function (e) { //when the stor_btn is clicked the following event will happen
        event.preventDefault(); // prevent the defult action
        localStorage.setItem("storage", true); // set the local storage item under storage
        $(this).parent().hide(); // once this is done it will be hidden
    });

});
// Validation

//When there is an error in the forname textbox
$('input#name').focusout(function () {
    if ($('#name').val().length <= 3) {
        $('#name').addClass("error").effect("shake");
        $('.valid-name').addClass("show-tip");
    } else {
        $('#name').removeClass("error");
        $('.valid-name').removeClass("show-tip");
    }
})
//When there is an error in the surname textbox
$('input#surName').focusout(function () {
    if ($('#surName').val().length <= 3) {
        $('#surName').addClass("error").effect("shake");
        $('.valid-surName').addClass("show-tip");
    } else {
        $('#surName').removeClass("error");
        $('.valid-surName').removeClass("show-tip");
    }
})
//When there is an error in the email textbox
$('input#email').focusout(function () {
    if ($('#email').val().length >= 1 || $('#email').val().indexOf('@') > -1) {
        $('#email').removeClass("error").effect("shake");
        $('.valid-email').removeClass("show-tip");
    } else {
        $('#email').addClass("error");
        $('.valid-email').addClass("show-tip");
    }
})
//When there is an error in the address textbox
$('input#address').focusout(function () {
    if ($('#address').val().length < 8) {
        $('#address').addClass("error").effect("shake");
        $('.valid-address').addClass("show-tip");
    } else {
        $('#address').removeClass("error");
        $('.valid-address').removeClass("show-tip");
    }
})
//When there is an error in the postcode textbox
$('input#postcode').focusout(function () {
    if ($('#postcode').val().length < 6 || $('#postcode').val().length >= 8) {
        $('#postcode').addClass("error").effect("shake");
        $('.valid-postcode').addClass("show-tip");
    } else {
        $('#postcode').removeClass("error");
        $('.valid-postcode').removeClass("show-tip");
    }
})
//When there is an error in the vehicle model textbox
$('input#vehicle').focusout(function () {
    if ($('#vehicle').val().length < 1) {
        $('#vehicle').addClass("error").effect("shake");
        $('.valid-vehicle').addClass("show-tip");
    } else {
        $('#vehicle').removeClass("error");
        $('.valid-vehicle').removeClass("show-tip");
    }
})
//When there is an registeration number in the name textbox
$('input#regNumber').focusout(function () {
    if ($('#regNumber').val().length > 8) {
        $('#regNumber').addClass("error").effect("shake");
        $('.valid-reg').addClass("show-tip");
    } else {
        $('#regNumber').removeClass("error");
        $('.valid-reg').removeClass("show-tip");
    }
})
//When there is an error in the date picker textbox
$('input#datepicker').focusout(function () {
    if ($('#datepicker').val().length < 1) {
        $('#datepicker').addClass("error").effect("shake");
        $('.valid-date').addClass("show-tip");
    } else {
        $('#datepicker').removeClass("error");
        $('.valid-date').removeClass("show-tip");
    }
})


//Clear data in form when the selected dropdown changes
$('#profiles').change(function () {
    $('.clearType').val('');
});


//Toggle forms
$(document).ready(function () {
    $("#formButton").click(function () {
        $("#form1").toggle("slow"); //What way it should toggle
    });
});

//date_picker
$(function () {
    $("#datepicker").datepicker();
});


//Tabs
$(function () {
    $("#tabs").tabs();
});


//accordion
$(function () {
    $("#accordion").accordion({
        event: "click",
        active: false,
        collapsible: true, ///To keep all the accordion closed when website is first opened
        autoHeight: false
    });
});













   