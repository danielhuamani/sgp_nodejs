$(document).ready(function() {
    function obtener_ajax(){
      $.ajax({
          url: '/proyectos/ajax_iniciar_proyecto/',
          type: 'get',
          success: function(data){
           $(".form_iniciar").find("option").remove()
            $.each(data, function(ids, items){
              var html = "<option value="+items.id +">"+items.nombre+"</option>"
              $(".form_iniciar").append(html)   
              })
          }
        });
    }
    var valor = "N";
    $("label").click(function(event) {
      /* Act on the event */
      var nuevo_valor = $(this).attr('for');
      valor = $("#"+nuevo_valor).val()

       
    });

    $('#guardar_iniciar').submit(function(event) {
      event.preventDefault();

      $.ajax({
        url: url_post,
        type: 'POST',
        dataType: 'json',
        data: {
          'tipo': valor,
          'nombre': $('.form_iniciar').val()
        },
      })
      .done(function(data) {

        if (data.status == 'OK') {

              
              if ($("#pag_historial").hasClass("pag_historial")) {
                window.location.href = url_historial
              }
              else{
                var mensaje = "Mensaja enviado";
              $(".mensaje_enviado").text(mensaje)
              }
        }
        else {
          var mensaje = "Error al Enviar";
          $(".mensaje_enviado").text(mensaje) 
        }
      });

    });

    obtener_ajax()
     
  });