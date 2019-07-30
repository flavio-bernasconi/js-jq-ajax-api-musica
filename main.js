$( document ).ready(function() {


    var source = "https://flynn.boolean.careers/exercises/api/array/music";
    var i = 0;
    var inc = 0;

    for (var i = 0; i < 10; i++) {


    $.ajax(
        {
           url : source,
           method: "GET",
           success: function(data){

             // var test = data.response[0];
             // console.log(test);
             inc = inc + 1;
             var img = data.response[inc].poster;
             var titolo = data.response[inc].title;
             var autore = data.response[inc].author;
             var genere = data.response[inc].genre;
             var anno = data.response[inc].year;

             var sorgenteCodice = $("#cdtemplate").html();
             console.log(sorgenteCodice);

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



           },
           error: function(richiesta,stato,errore){
              console.log("c'è un problema con il server",richiesta,stato,errore);
           }
        }
      )
    //
    //
    // var sorgenteCodice = $("#cdtemplate").html();
    // console.log(sorgenteCodice);
    //
    // var template = Handlebars.compile(sorgenteCodice);
    //
    // var daInserire = {
    //   textMessaggio: inputval,
    //   classeAggiunta:"msg-inviato"
    // };
    //
    // var html = template(daInserire);
    //
    // $(".contenitore").append(html);
    //


    }









});