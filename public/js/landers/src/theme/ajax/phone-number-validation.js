import $ from 'jquery';

var errorMessage = '';
if($('html').attr('lang') == 'fr-CA'){
  if($('body').hasClass('page-id-32709') || $('body').hasClass('page-id-9388')){
    errorMessage = 'Veuillez saisir un numéro de téléphone CA valide pour remplir le formulaire.';
  } else {
    errorMessage = 'Veuillez entrer un numéro de téléphone CA valide pour remplir le formulaire.';
  }
} else if($('html').attr('lang') == 'es-US') {
  if($('body').hasClass('page-id-30217') || $('body').hasClass('page-id-28057')) {
    errorMessage = 'Ingrese un número de teléfono de CA válido para completar el formulario.';
  } else {
    errorMessage = 'Ingrese un número de teléfono válido de US para completar el formulario.';
  }
} else {
  if($('body').hasClass('page-id-2719') || $('body').hasClass('page-id-1526')) {
    errorMessage = 'Please enter a valid CA phone number to complete the form.';
  } else {
    errorMessage = 'Please enter a valid US phone number to complete the form.';
  }
}

var error = '<div class="phone-number-error submit-error mt-1"><ul class="no-list hs-error-msgs inputs-list mb-0" role="list"><li role="listitem"><label class="hs-error-msg hs-main-font-element c-green-1">'+errorMessage+'</label></li></ul></div>';

const hubspotSubmitButtonClick = setInterval(function(){
  if($('button.hs-button[type=submit]').length && $('input[name=phone]').length){
    $('input[name=phone]').parents('.hbspt-form').addClass('phone-validate');
    $('.hbspt-form.phone-validate button.hs-button[type=submit]').attr('disabled', 'disabled');
    clearInterval(hubspotSubmitButtonClick);
  }
}, 500);

// check the input's value
$(document).on('change input blur focus', '.hbspt-form.phone-validate input[name=phone]', function(){
    var $this = $(this);
    $this.parent().append('<div class="loader white"></div>');

    // remove expected non numerical phone number characters
    var phone = $this.val().replace(/-/g, '').replace('(', '').replace(')', '');
    
    // check for test numbers
    if(phone != '5555555551' && phone != '5555555552' && phone != '5555555553' && phone != '5555555554') {
      // add country code if not entered
      if(phone.length == 10) {
          phone = '1' + phone;
      }

      // lookup full 11 digit phone number
      if(phone.length == 11) {
          $.ajax({
            url : '/wp-content/themes/sekure/partials/phone-number-check.php',
            type : 'post',
            dataType : 'html',
            data : {
                phone: phone
            },
            success : function( response ) {
                $('.loader').remove();

                //console.log(response);

                // if US or Canadian number allow submit
                if(response == 'US' || response == 'CA'){
                  $('.hbspt-form.phone-validate button.hs-button[type=submit]').removeAttr('disabled');
                  $('.phone-number-error').remove();
                } else {
                  if(response == 'failed'){
                    console.log('Phone number validation failed. Check API.');
                    $('.hbspt-form.phone-validate button.hs-button[type=submit]').removeAttr('disabled');
                    $('.phone-number-error').remove();
                  } else {
                    $('.hbspt-form.phone-validate button.hs-button[type=submit]').attr('disabled', 'disabled');
                    if(!$('.phone-number-error').length){
                        $('.phone-validate .hs_phone.hs-phone').append(error);
                    }
                  }
                }
            }
          });
      } else {
          $('.loader').remove();
          $('.hbspt-form.phone-validate button.hs-button[type=submit]').attr('disabled', 'disabled');
          if(!$('.phone-number-error').length && $this.parents('.hbspt-form').find('.hs-button[disabled]').length){
            $('.phone-validate .hs_phone.hs-phone').append(error);
          }
      }
    } else {
      $('.loader').remove();
      $('.hbspt-form.phone-validate button.hs-button[type=submit]').removeAttr('disabled');
      $('.phone-number-error').remove();
    }
});