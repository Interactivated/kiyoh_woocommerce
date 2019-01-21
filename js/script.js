(function () {
    jQuery(document).ready(function () {
        toogleStatus(300);
        toogleSendMethod(300);
        toogleKiyohServer(500);
        jQuery('select[name="kiyoh_option_event"]').change(function (event) {
            toogleStatus(300);
        });

        jQuery('select[name="kiyoh_option_send_method"]').change(function (event) {
            toogleSendMethod(300);
        });

        jQuery('select[name="kiyoh_option_server"]').change(function (event) {
            toogleKiyohServer(300);
        });
    });
    function toogleStatus(speed) {
        if (jQuery('select[name="kiyoh_option_event"]').length) {
            var my_event = jQuery('select[name="kiyoh_option_event"]').val();
            if (my_event == 'Orderstatus') {
                jQuery('#status').show(speed);
            } else {
                jQuery('#status').hide(speed);
            }
        }
    }

    function toogleSendMethod(speed) {
        if (jQuery('select[name="kiyoh_option_send_method"]').length) {


            var my_event = jQuery('select[name="kiyoh_option_send_method"]').val();
            if (my_event == 'my') {
                jQuery('.myserver').show(speed);
                jQuery('.kiyohserver').hide(speed);
            } else {
                jQuery('.myserver input').each(function () {
                    jQuery(this).val('');
                });
                jQuery('.myserver').hide(speed);
                jQuery('.kiyohserver').show(speed);
            }
        }
    }

    function toogleKiyohServer(speed) {
        if (jQuery('select[name="kiyoh_option_server"]').length) {
            var my_event = jQuery('select[name="kiyoh_option_server"]').val();
            if (my_event == 'kiyoh.nl') {
                jQuery('.dependsonkiyohserver').hide(speed);
            } else {
                jQuery('.dependsonkiyohserver').show(speed);
            }
        }
    }
})();