import $ from 'jquery';

var classList = $('body').attr('class').split(/\s+/);
var pageIdClass = '';
var post_id;

$.each(classList, function(index, item) {
   if(item.includes('postid-')) {
      pageIdClass = item;
   }
});

if(pageIdClass != '') {
   var classArry = pageIdClass.split('-');
   post_id = classArry[1];
}

console.log(post_id);

if(post_id) {
   $.ajax({
      url : '/wp-content/themes/sekure/partials/landers-ajax.php',
      type : 'post',
      dataType : 'html',
      data : {
         post_id : post_id
      },
      beforeSend : function() {
         
      },
      success : function( response ) {
         //console.log(response);
         $('.landing-page-wrap').append(response);

         // Reveal content
         //$('*').removeClass('op-0');
         $('img').each(function(){
            if($(this).attr('data-src')){
               $(this).prop('src', $(this).attr('data-src'));
               $(this).removeClass('b-lazy');
            }
         });
         $('.bg-image').each(function(){
            $(this).css({
               'background-image': 'url(' + $(this).data('src') + ')',
               'opacity': '1'
            });
         });

         var loadForms = setInterval(function () {
            // Load forms
            if($('script#hubspot_load_forms').length){
               console.log('hubspot form exists');
               $('body').find('script').each(function(index){
                  if($(this).html().indexOf('hbspt.forms.create') != -1) {
                     console.log($(this).html());
                     var textArray = $(this).html().split('formId:');
                     if(textArray[1].includes(',')) {
                        textArray = textArray[1].split(',');
                     } else {
                        textArray = textArray[1].split('}');
                     }
                     var formID = textArray[0].replace(/'/g, '');
                     console.log(formID);
                     console.log($(`form[data-form-id=${formID}]`));
                     if($(`form[data-form-id=${formID}]`).length){
                        $(`form[data-form-id=${formID}]`).parent().appendTo($(this).parent());
                     }
                  }
               });
               clearInterval(loadForms);
            }
         }, 500);
         
         $('html').removeClass("init");
      },
      error: function(xhr, ajaxOptions, thrownError)
      {
         console.log(xhr);
         console.log(ajaxOptions);
         
         var httpCode = xhr.status;
         alert(httpCode + ': ' + thrownError);
      }
   });
}

