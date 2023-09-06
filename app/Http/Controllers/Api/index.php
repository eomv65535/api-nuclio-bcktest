var htmlExperienciaLaboral=""
var contadorE= Number(document.getElementById('countEHidden').value)
var contadorExperienciaAcademica=(contadorE==0) ? 0 : contadorE - 1

console.log(contadorExperienciaAcademica);
var titulo=""
var file=""
var serviciosCombo =""
var experienciaHidden=""
var startDate=""
var endDate =""
var jornada=""
document.getElementById('anadirNuevaexperiencia').addEventListener('click', function() {

  /*if(contadorExperienciaAcademica==0){
    serviciosCombo = document.getElementById("serviciosA0").value;
    startDate = new Date($("#startExperiencia0").val());
    endDate = new Date($("#endExperiencia0").val());
    experienciaHidden = document.getElementById("experienciaHidden0").value;
    titulo= document.getElementById('titulo_experiencia_laboral0').value
    file = document.getElementById('fichero_experiencia_laboral0').value
    jornada=document.getElementById('jornada_experiencia_laboral0').value
  }else{
    var cont = contadorExperienciaAcademica
    console.log("Cont: "+contadorExperienciaAcademica)
    serviciosCombo = document.getElementById("serviciosA"+cont).value;
    startDate = new Date($("#startExperiencia"+cont).val());
    endDate = new Date($("#endExperiencia"+cont).val());
    experienciaHidden = document.getElementById("experienciaHidden"+cont).value;
    titulo= document.getElementById('titulo_experiencia_laboral'+cont).value
    file = document.getElementById('fichero_experiencia_laboral'+cont).value
    jornada=document.getElementById('jornada_experiencia_laboral'+cont).value
  }*/


 contadorExperienciaAcademicaLeng = $('input[name="titulo_experiencia_laboral[]"]').length


  //if(titulo != "" && file != "" && serviciosCombo !=0 && jornada!=""){
    contadorExperienciaAcademica++
    htmlExperienciaLaboral= '<div id="contenedorExperiencia'+contadorExperienciaAcademicaLeng+'" ><div class="accordion-item"><h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#AcorderonExperiencia'+contadorExperienciaAcademicaLeng+'" aria-expanded="false" aria-controls="AcorderonExperiencia'+contadorExperienciaAcademicaLeng+'">Nueva experiencia</button></h2><div id="AcorderonExperiencia'+contadorExperienciaAcademicaLeng+'" class="accordion-collapse collapse" data-bs-parent="#AcorderonExperiencia"><div class="accordion-body"> <select id="serviciosA'+contadorExperienciaAcademicaLeng+'" class="form-select w-100 mb-3" name="servicios[]"><option value="0">Selecciona el tipo de servicio</option><option value="1">Servicios prestados en la entidad en puesto de trabajo correspondiente al convocado</option><option value="2">Servicios prestados en la entidad en puesto distinto perteneciente al mismo grupo profesional</option><option value="3">Servicios prestados en otra entidad pública que desarrolle su actividad en el ámbito del desarrollo económico local, en puesto de trabajo igual o equivalente</option><option value="4">Servicios prestados en otra entidad de sector público en puesto de trabajo igual o equivalente</option></select><input type="hidden" id="experienciaHidden'+contadorExperienciaAcademicaLeng+'" name="experienciaHidden[]" value=""><input type="hidden" id="experienciaNotaHidden'+contadorExperienciaAcademicaLeng+'" name="experienciaNotaHidden[]" value=""><input type="hidden" id="experienciaTipoHidden'+contadorExperienciaAcademicaLeng+'" name="experienciaTipoHidden[]" value=""><input type="hidden" id="experienciaInicioHidden'+contadorExperienciaAcademicaLeng+'" name="experienciaInicioHidden[]" value=""><input type="hidden" id="experienciaFinHidden'+contadorExperienciaAcademicaLeng+'" name="experienciaFinHidden[]" value=""><div class="d-flex gap-3"><div class="input-group mb-3"><span class="input-group-text" id="basic-addon1">Inicio</span><input class="form-control" type="date" id="startExperiencia'+contadorExperienciaAcademicaLeng+'" name="startExperiencia[]"></div><div class="input-group mb-3"><span class="input-group-text" id="basic-addon1">Fin</span><input class="form-control" type="date" id="endExperiencia'+contadorExperienciaAcademicaLeng+'" name="endExperiencia[]"></div><div class="input-group mb-3"><input type="number" class="form-control" name="jornada_experiencia_laboral[]"  id="jornada_experiencia_laboral'+contadorExperienciaAcademicaLeng+'" placeholder="Jornada (%)" aria-label="jornada" aria-describedby="basic-addon2"><span class="input-group-text" id="basic-addon2">%</span></div></div><input type="text" class="form-control mb-3" placeholder="Título experiencia laboral" id="titulo_experiencia_laboral'+contadorExperienciaAcademicaLeng+'" name="titulo_experiencia_laboral[]" required><input type="file" accept=".pdf, .jpg, .png" max="10" class="form-control mb-3" id="fichero_experiencia_laboral'+contadorExperienciaAcademicaLeng+'" name="fichero_experiencia_laboral[]" required><div style="display: flex !important; justify-content: end !important; align-items: center !important;"><button onClick="borrarLinea(0,\'experiencia_laboral\',' + contadorExperienciaAcademicaLeng + ', \'contenedorExperiencia\',\'true\')" type="button" class="btn btn-danger mt-5 py-1 px-2"><i class="bi bi-trash"></i></button></div></div></div></div></div>'

    $('#titulo_experiencia').append (htmlExperienciaLaboral) ;



  /*}else{
    alert("Selecciona una opción o no dejes vacío el nombre del título o el fichero" )
  }*/

});

