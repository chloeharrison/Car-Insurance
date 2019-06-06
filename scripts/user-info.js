var $select = $('#profiles'); // Selecting the select input from the html

$.getJSON('users.JSON', function (info) { //Get JSON From this file path

    for (var i = 0; i < info['profiles'].length; i++) { // For loop to check how many people will be in the select box and output them within an option tag
        $select.append('<option id="' + info['profiles'][i]['id'] + '">' + info['profiles'][i]['foreName'] + ' ' + info['profiles'][i]['surName'] + '</option>');
    }

    $select.change(function () {

        var id;
        $('select option:selected').each(function () {
            id = $(this).attr('id');
        });


        // Outputting the JSON data variables into the input boxes

        $('#name').val(info['profiles'][id]['foreName']);
        $('#surName').val(info['profiles'][id]['surName']);
        $('#email').val(info['profiles'][id]['email']);
        $('#address').val(info['profiles'][id]['address']);
        $('#postcode').val(info['profiles'][id]['postcode']);
        $('#county').val(info['profiles'][id]['county']);
        $('#vehicle').val(info['profiles'][id]['vehicle']);
        $('#regNumber').val(info['profiles'][id]['regNumber']);
        $('#currentInsurance').val(info['profiles'][id]['currentInsurance']);
        $('#datepicker').val(info['profiles'][id]['datepicker']);

    });

});