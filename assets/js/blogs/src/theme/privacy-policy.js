import $ from 'jquery';

$(() => {

  // privacy policy scroll lock
  if ($('#cookie-law-info-bar').length) {
    $('.cli_settings_button').on('click', function () {
      $('html, body').css('overflow-y', 'hidden').css('height', '100%');
    });
    $('#cliModalClose, #wt-cli-privacy-save-btn').on('click', function () {
      $('html, body').css('overflow-y', 'auto').css('height', 'auto');
    });
  }

  var cookiePopupEnglishContent = setInterval(function () {
    if ($('.cli-bar-message').length && $('html').prop('lang') == 'en') {
      $('#wt-cli-privacy-save-btn').html('Save and accept');
      clearInterval(cookiePopupEnglishContent);
    }
  }, 500);

  /*
  Spanish cookie consent
  Utilizamos cookies en nuestro sitio web para brindarle la experiencia más relevante al recordar sus preferencias y visitas repetidas. Al hacer clic en "Aceptar todo", usted acepta el uso de TODAS las cookies.
  */
  var cookiePopupSpanishContent = setInterval(function () {
    if ($('.cli-bar-message').length && $('html').prop('lang') == 'es-US') {
      // Buttons
      $('.cli_settings_button').text('Configuración de cookies');
      $('#wt-cli-accept-all-btn').text('Aceptar todo');
      $('#wt-cli-privacy-save-btn').text('Guardar y aceptar');
      //$('.cli-privacy-readmore').text('Mostrar más');
      $('.cli-slider').prop('data-cli-enable', 'Habilitado');
      $('.cli-slider').prop('data-cli-disable', 'Desactivado');
      //$('.cli-switch .cli-slider').append('<span class="input-label">Desactivado</span>');

      // General text
      $('.cli-bar-message').html(
        'Utilizamos cookies en nuestro sitio web para brindarle la experiencia más relevante al recordar sus preferencias y visitas repetidas. Al hacer clic en "Aceptar todo", usted acepta el uso de TODAS las cookies.',
      );

      $('.cli-privacy-overview > h4').html('Privacidad general');

      $('.cli-privacy-content-text').html(
        'Este sitio web utiliza cookies para mejorar tu experiencia mientras navegas por el sitio. De estas cookies, las que están categorizadas como necesarias se almacenan en tu navegador ya que son esenciales para el funcionamiento de las funcionalidades básicas del sitio. También utilizamos cookies de terceros que nos ayudan a analizar y entender cómo utilizas este sitio web. Estas cookies se almacenarán en tu navegador solo con tu consentimiento. También tienes la opción de optar por no permitir estas cookies. Sin embargo, optar por no permitir algunas de estas cookies puede afectar tu experiencia de navegación.',
      );
      $('.cli-privacy-readmore').on('click', function(){
        $('.cli-privacy-content-text').html(
          'Este sitio web utiliza cookies para mejorar tu experiencia mientras navegas por el sitio. De estas cookies, las que están categorizadas como necesarias se almacenan en tu navegador ya que son esenciales para el funcionamiento de las funcionalidades básicas del sitio. También utilizamos cookies de terceros que nos ayudan a analizar y entender cómo utilizas este sitio web. Estas cookies se almacenarán en tu navegador solo con tu consentimiento. También tienes la opción de optar por no permitir estas cookies. Sin embargo, optar por no permitir algunas de estas cookies puede afectar tu experiencia de navegación.',
        );
      });

      // Necessary cookies
      $('[data-target="necessary"]').html('Necesarias');
      $('.cli-necessary-caption').html('Siempre habilitado');
      // Necessary table
      $(
        '[data-id="necessary"] .cookielawinfo-row-cat-table tbody .cookielawinfo-row:first-of-type .cookielawinfo-column-4',
      ).text(
        'Esta cookie es establecida por el plugin de Consentimiento de Cookies GDPR. La cookie se utiliza para almacenar el consentimiento del usuario para las cookies en la categoría "Analítica".',
      );
      $(
        '[data-id="necessary"] .cookielawinfo-row-cat-table tbody .cookielawinfo-row:nth-of-type(2) .cookielawinfo-column-4',
      ).text(
        'La cookie es establecida por el consentimiento de cookies GDPR para registrar el consentimiento del usuario para las cookies en la categoría "Funcional".',
      );
      $(
        '[data-id="necessary"] .cookielawinfo-row-cat-table tbody .cookielawinfo-row:nth-of-type(3) .cookielawinfo-column-4',
      ).text(
        'Esta cookie es establecida por el plugin de Consentimiento de Cookies GDPR. La cookie se utiliza para almacenar el consentimiento del usuario para las cookies en la categoría "Necesarias".',
      );
      $(
        '[data-id="necessary"] .cookielawinfo-row-cat-table tbody .cookielawinfo-row:nth-of-type(4) .cookielawinfo-column-4',
      ).text(
        'Esta cookie es establecida por el plugin de Consentimiento de Cookies GDPR. La cookie se utiliza para almacenar el consentimiento del usuario para las cookies en la categoría "Otro".',
      );
      $(
        '[data-id="necessary"] .cookielawinfo-row-cat-table tbody .cookielawinfo-row:nth-of-type(5) .cookielawinfo-column-4',
      ).text(
        'Esta cookie es establecida por el plugin de Consentimiento de Cookies GDPR. La cookie se utiliza para almacenar el consentimiento del usuario para las cookies en la categoría "Actuación".',
      );
      $(
        '[data-id="necessary"] .cookielawinfo-row-cat-table tbody .cookielawinfo-row:nth-of-type(6) .cookielawinfo-column-4',
      ).text(
        'La cookie es establecida por el plugin de Consentimiento de Cookies GDPR y se utiliza para almacenar si el usuario ha consentido o no el uso de cookies. No almacena ningún dato personal.',
      );

      var necessaryTable = $(
        '[data-id="necessary"] .cookielawinfo-row-cat-table',
      );
      $('[data-id="necessary"] .wt-cli-cookie-description')
        .text(
          'Las cookies necesarias son absolutamente esenciales para que el sitio web funcione correctamente. Estas cookies garantizan funcionalidades básicas y características de seguridad del sitio web, de forma anónima.',
        )
        .append(necessaryTable);

      // Functional cookies
      $('[data-target="functional"]').html('Funcionales');
      $('[data-id="functional"] .wt-cli-cookie-description').html(
        'Las cookies funcionales ayudan a realizar ciertas funcionalidades como compartir el contenido del sitio web en plataformas de redes sociales, recoger comentarios y otras características de terceros.',
      );

      // Performance cookies
      $('[data-target="performance"]').html('Rendimiento');
      $('[data-id="performance"] .wt-cli-cookie-description').html(
        'Las cookies de rendimiento se utilizan para entender y analizar los índices clave de rendimiento del sitio web, lo que ayuda a ofrecer una mejor experiencia al usuario para los visitantes.',
      );

      // Analytics cookies
      $('[data-target="analytics"]').html('Analíticas');
      $('[data-id="analytics"] .wt-cli-cookie-description').html(
        'Las cookies analíticas se utilizan para entender cómo interactúan los visitantes con el sitio web. Estas cookies ayudan a proporcionar información sobre métricas como el número de visitantes, la tasa de rebote, la fuente de tráfico, etc.',
      );

      // Advertisement cookies
      $('[data-target="advertisement"]').html('Publicidad');
      $('[data-id="advertisement"] .wt-cli-cookie-description').html(
        'Las cookies de publicidad se utilizan para proporcionar a los visitantes anuncios relevantes y campañas de marketing. Estas cookies rastrean a los visitantes a través de sitios web y recogen información para ofrecer anuncios personalizados.',
      );

      // Others cookies
      $('[data-target="others"]').html('Otros');
      $('[data-id="others"] .wt-cli-cookie-description').html(
        'Otras cookies no categorizadas son aquellas que están siendo analizadas y aún no se han clasificado en una categoría.',
      );

      clearInterval(cookiePopupSpanishContent);
    }
  }, 100);

  var cookiePopupFrenchContent = setInterval(function () {
    if ($('.cli-bar-message').length && $('html').prop('lang') == 'fr-CA') {
      // Buttons
      $('.cli_settings_button').text('Paramètres des cookies');
      $('#wt-cli-accept-all-btn').text('Acceptez tout');
      $('#wt-cli-privacy-save-btn').text('Enregistrer et accepter');
      //$('.cli-privacy-readmore').text('Mostrar más');
      $('.cli-slider').prop('data-cli-enable', 'Activés');
      $('.cli-slider').prop('data-cli-disable', 'Désactivés');
      $('.cookielawinfo-row-cat-table thead tr .cookielawinfo-column-3').html('Durée');
      //$('.cli-switch .cli-slider').append('<span class="input-label">Desactivado</span>');

      // General text
      $('.cli-bar-message').html(
        "Nous utilisons des cookies sur notre site Web pour vous offrir l'expérience la plus pertinente en mémorisant vos préférences et vos visites répétées. En cliquant sur « Tout accepter », vous consentez à l'utilisation de TOUS les cookies. Cependant, vous pouvez visiter « Paramètres des cookies » pour fournir un consentement contrôlé.",
      );

      $('.cli-privacy-overview > h4').html('Aperçu de confidentialité');

      $('.cli-privacy-content-text').html(
        "Ce site Web utilise des cookies pour améliorer votre expérience. Parmi ceux-ci, les cookies classés comme « nécessaires » sont stockés sur votre navigateur car ils sont essentiels aux fonctionnalités de base du site Web. Nous utilisons également des cookies tiers qui nous aident à analyser et à comprendre comment vous utilisez ce site Web. Ces cookies ne seront stockés dans votre navigateur qu'avec votre consentement. Vous avez également la possibilité de désactiver ces cookies, mais cela peut affecter votre expérience de navigation."
      );
      $('.cli-privacy-readmore').on('click', function(){
        $('.cli-privacy-content-text').html(
          "Ce site Web utilise des cookies pour améliorer votre expérience. Parmi ceux-ci, les cookies classés comme « nécessaires » sont stockés sur votre navigateur car ils sont essentiels aux fonctionnalités de base du site Web. Nous utilisons également des cookies tiers qui nous aident à analyser et à comprendre comment vous utilisez ce site Web. Ces cookies ne seront stockés dans votre navigateur qu'avec votre consentement. Vous avez également la possibilité de désactiver ces cookies, mais cela peut affecter votre expérience de navigation."
        );
      });

      // Necessary cookies
      $('[data-target="necessary"]').html('Nécessaire');
      $('.cli-necessary-caption').html('Toujours activés');
      // Necessary table
      $(
        '[data-id="necessary"] .cookielawinfo-row-cat-table tbody .cookielawinfo-row:first-of-type .cookielawinfo-column-4',
      ).text(
        "Ce cookie est défini par le plugin GDPR Cookie Consent, et est utilisé pour stocker le consentement de l'utilisateur pour les cookies dans la catégorie « Analyse »."
      );
      $(
        '[data-id="necessary"] .cookielawinfo-row-cat-table tbody .cookielawinfo-row:nth-of-type(2) .cookielawinfo-column-4',
      ).text(
        "Le cookie est défini par le consentement des cookies GDPR pour enregistrer le consentement de l'utilisateur pour les cookies dans la catégorie « Fonctionnel ».",
      );
      $(
        '[data-id="necessary"] .cookielawinfo-row-cat-table tbody .cookielawinfo-row:nth-of-type(3) .cookielawinfo-column-4',
      ).text(
        "Ce cookie est défini par le plugin GDPR Cookie Consent, et est utilisé pour stocker le consentement de l'utilisateur pour les cookies dans la catégorie « Nécessaire ».",
      );
      $(
        '[data-id="necessary"] .cookielawinfo-row-cat-table tbody .cookielawinfo-row:nth-of-type(4) .cookielawinfo-column-4',
      ).text(
        "Ce cookie est défini par le plugin GDPR Cookie Consent, et est utilisé pour stocker le consentement de l'utilisateur pour les cookies dans la catégorie « Autres ».",
      );
      $(
        '[data-id="necessary"] .cookielawinfo-row-cat-table tbody .cookielawinfo-row:nth-of-type(5) .cookielawinfo-column-4',
      ).text(
        "Ce cookie est défini par le plugin GDPR Cookie Consent, et est utilisé pour stocker le consentement de l'utilisateur pour les cookies dans la catégorie « Performance » .",
      );
      $(
        '[data-id="necessary"] .cookielawinfo-row-cat-table tbody .cookielawinfo-row:nth-of-type(6) .cookielawinfo-column-4',
      ).text(
        "Le cookie est défini par le plugin GDPR Cookie Consent et est utilisé pour enregistrer le consentement de l'utilisateur à l'utilisation de cookies. Il ne stocke aucune donnée personnelle.",
      );

      var necessaryTable = $(
        '[data-id="necessary"] .cookielawinfo-row-cat-table',
      );
      $('[data-id="necessary"] .wt-cli-cookie-description')
        .text(
          'Les cookies nécessaires sont absolument essentiels au bon fonctionnement du site Web. Ces cookies assurent les fonctionnalités de base et de sécurité du site Web, de manière anonyme.',
        )
        .append(necessaryTable);

      // Functional cookies
      $('[data-target="functional"]').html('Fonctionnel');
      $('[data-id="functional"] .wt-cli-cookie-description').html(
        "Les cookies fonctionnels aident à exécuter certaines fonctionnalités telles que le partage du contenu du site Web sur les plateformes de médias sociaux, la collecte de commentaires et d'autres fonctionnalités tierces.",
      );

      // Performance cookies
      $('[data-target="performance"]').html('Performance');
      $('[data-id="performance"] .wt-cli-cookie-description').html(
        "Les cookies de performance sont utilisés pour comprendre et analyser les indices de performance clés du site Web, ce qui contribue à améliorer l'expérience utilisateur.",
      );

      // Analytics cookies
      $('[data-target="analytics"]').html('Analyse');
      $('[data-id="analytics"] .wt-cli-cookie-description').html(
        'Les cookies analytiques sont utilisés pour comprendre comment les visiteurs interagissent avec le site Web. Ces cookies aident à fournir des informations sur le nombre de visiteurs, le taux de rebond, la source du trafic, etc.',
      );

      // Advertisement cookies
      $('[data-target="advertisement"]').html('Publicité');
      $('[data-id="advertisement"] .wt-cli-cookie-description').html(
        'Les cookies publicitaires sont utilisés pour fournir des publicités et des campagnes marketing pertinente aux visiteurs. Ces cookies suivent les visiteurs sur les sites Web et collectent des informations pour fournir des publicités personnalisées.',
      );

      // Others cookies
      $('[data-target="others"]').html('Autres');
      $('[data-id="others"] .wt-cli-cookie-description').html(
        "Les autres cookies non catégorisés sont ceux qui sont en cours d'analyse et n'ont pas encore été classés dans une catégorie.",
      );

      clearInterval(cookiePopupFrenchContent);
    }
  }, 100);

});
