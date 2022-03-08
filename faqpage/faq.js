// Add your code here
$(document).ready(function () {
    $('body').click(function (event) {
      $('.faqAns').hide();
      if ($(event.target).hasClass('material-icons')) {
        $(event.target).parent().parent().children('.faqAns').show();
      }
    });
  });
  