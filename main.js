$( document ).ready(function() {

    var source = "https://flynn.boolean.careers/exercises/api/array/music";

    $.ajax(
        {
           url : source,
           method: "GET",
           success: function(data){

             var oggetti = data.response;
             console.log(oggetti);

             for (var i = 0; i < oggetti.length; i++) {
              console.log(oggetti[i]);

              var img = data.response[i].poster;
              var titolo = data.response[i].title;
              var autore = data.response[i].author;
              var genere = data.response[i].genre;
              var anno = data.response[i].year;

              var sorgenteCodice = $("#cdtemplate").html();

              var template = Handlebars.compile(sorgenteCodice);

              var daInserire = {
                urlImg: img,
                title:titolo,
                artist:autore,
                genre:genere,
                year:anno,

              };

              var html = template(daInserire);

              $(".cds-container").append(html);

             }

           },
           error: function(richiesta,stato,errore){
              console.log("c'è un problema con il server",richiesta,stato,errore);
           }
        }
      )


});
