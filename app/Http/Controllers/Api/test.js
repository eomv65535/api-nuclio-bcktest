var htmltituloAcademicoIdiomas = "";
var contadortituloAcademicoIdiomas = 0;
var titulo = "";
var file = "";
var valorComboI = "";
var valorComboN = "";
document
    .getElementById("anadirNuevoIdiomas")
    .addEventListener("click", function () {
        contadortituloAcademicoIdiomasLeng = $(
            'input[name="titulo_academico_idiomas[]"]'
        ).length;

        contadortituloAcademicoIdiomas++;
        htmltituloAcademicoIdiomas =
            '<div id="contenedorIdiomas' +
            contadortituloAcademicoIdiomasLeng +
            '"> <div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#AcorderonIdiomas' +
            contadortituloAcademicoIdiomasLeng +
            '" aria-expanded="false" aria-controls="AcorderonIdiomas' +
            contadortituloAcademicoIdiomasLeng +
            '">Añadir nuevo curso</button></h2><div id="AcorderonIdiomas' +
            contadortituloAcademicoIdiomasLeng +
            '" class="accordion-collapse collapse" data-bs-parent="#AcorderonIdiomas"><div class="accordion-body">  <div class="experiencia"> <div class="d-flex gap-3"> <select id="titulacionI' +
            contadortituloAcademicoIdiomasLeng +
            '" class="form-select w-100 mb-3" name="titulacionI[]"> <option value="0">' +
            Seleccione_un_idioma +
            '</option> <option value="1">' +
            Ingles +
            '</option><option value="2">' +
            Frances +
            '</option><option value="3">' +
            Aleman +
            '</option></select><select id="titulacionN' +
            contadortituloAcademicoIdiomasLeng +
            '" class="form-select w-100 mb-3" name="titulacionN[]"><option value="0">' +
            Seleccion_el_nivel +
            '</option><option value="1">B1</option> <option value="2">B2</option><option value="3">C1</option> <option value="4">C2</option></select> </div><input type="hidden" id="titulacionIHidden' +
            contadortituloAcademicoIdiomasLeng +
            '" name="titulacionIHidden[]" value=""><input type="hidden" id="titulacionIdiomaHidden' +
            contadortituloAcademicoIdiomasLeng +
            '" name="titulacionIdiomaHidden[]" value=""><input type="hidden" id="titulacionNivelHidden' +
            contadortituloAcademicoIdiomasLeng +
            '" name="titulacionNivelHidden[]" value=""><input type="text" class="form-control mb-3" placeholder="Título" id="titulo_academico_idiomas' +
            contadortituloAcademicoIdiomasLeng +
            '" name="titulo_academico_idiomas[]"><input type="file" accept=".pdf, .jpg, .png" max="10" class="form-control" id="fichero_academico_idiomas' +
            contadortituloAcademicoIdiomasLeng +
            '" name="fichero_academico_idiomas[]"><div style="display: flex !important; justify-content: end !important; align-items: center !important;"><button onClick="borrarLinea(0,\'titulo_academico_idioma\',' +
            contadortituloAcademicoIdiomasLeng +
            ', \'contenedorIdiomas\',\'true\')" type="button" class="btn btn-danger mt-5 py-1 px-2"><i class="bi bi-trash"></i></button></div></div></div></div></div></div>';

        $("#titulo_academico_idiomass").append(htmltituloAcademicoIdiomas);
    });
