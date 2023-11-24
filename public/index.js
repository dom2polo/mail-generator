// mail to link 
$('input[name="senderEmail"]').on("change", function() {
    var emailAddress = $(this).val();
    // validate the address here
    $(".email-link").attr("href", "mailto:" + emailAddress);
});