var idioma = localStorage.getItem("idioma_fomento");
if (idioma === null) {
    idioma = "es";
}
if (idioma == "es") {
    var Solicitud_de_empleo = "Presentación de candidatura";
    var Titulacion_academica_oficial = "Titulación académica oficial";
    var Nivel_de_euskera = "Nivel de euskera";
    var Subir_título_acreditativo = "Subir título acreditativo";
    var Deseo_realizar_prueba_de_acreditacion_de_conocimientos_de_euskera =
        "Deseo realizar prueba de acreditación de conocimientos de euskera";
    var Experiencia = "Experiencia";
    var Formacion = "Formación";
    var Cursos_de_formacion_relacionados_con_el_puesto_minimo_6_horas =
        " Cursos de formación relacionados con el puesto (mínimo 6 horas)";
    var Idiomas = "Idiomas";
    var Conocimientos_informaticos = "Conocimientos informáticos";
    var Selecciona_el_tipo_de_servicio = "Selecciona el tipo de servicio";
    var Servicios_prestados_en_la_entidad_en_puesto_de_trabajo_correspondiente_al_convocado =
        "Servicios prestados en la entidad en puesto de trabajo correspondiente al convocado";
    var Servicios_prestados_en_la_entidad_en_puesto_distinto_perteneciente_al_mismo_grupo_profesional =
        "Servicios prestados en la entidad en puesto distinto perteneciente al mismo grupo profesional";
    var Servicios_prestados_en_otra_entidad_publica =
        "Servicios prestados en otra entidad pública que desarrolle su actividad en el ámbito del desarrollo económico local, en puesto de trabajo igual o equivalente";
    var Servicios_prestados_en_otra_entidad_de_sector_publico_en_puesto_de_trabajo_igual_o_equivalente =
        "Servicios prestados en otra entidad de sector público en puesto de trabajo igual o equivalente";
    var Titulo_experiencia_laboral = "Título experiencia laboral";
    var Seleccionar_archivo = "Seleccionar archivo";
    var Ningun_archivo_seleccionado = "Ningún archivo seleccionado";
    var Seleccione_una_opcion = "Seleccione una opción";
    var Nueva_experiencia = "Nueva experiencia";
    var Titulacion_euskera = "Titulación euskera";
    var Titulo_Euskera = "Título euskera";
    var Ingles = "Inglés";
    var Frances = "Francés";
    var Aleman = "Alemán";
    var Basico = "Básico";
    var Avanzado = "Avanzado";
    var Unico = "Único";
    var Anadir_nuevo = "Añadir nuevo";
    var Guardar = "Guardar";
    var Finalizar = "Finalizar";
    var Baremacion = "Baremación";
    var Tipo_1 = "Tipo 1";
    var Tipo_2 = "Tipo 2";
    var Tipo_3 = "Tipo 3";
    var Tipo_4 = "Tipo 4";
    var Total_de_puntos_por_experiencia = "Total de puntos por experiencia";
    var Total_de_puntos_por_apartado = "Total de puntos por apartado";
    var Total_de_puntos_de_la_solicitud = "Total de puntos de la solicitud";
    var Generar_PDF = "Generar PDF";
    var Firmar_PDF = "Firmar PDF";
    var nom_hemos_guardado = "No hemos guardado";
    var Titulaciones_academicas_oficiales_y_titulos_propios =
        "Titulaciones académicas oficiales y títulos propios";
    var Anadir_nuevo_titulo = "Añadir nuevo titulo";
    var Titulacion_academica_oficial_de_nivel_igual_o_superior_a_la_exigida_para_acceder =
        "Titulación académica oficial de nivel igual o superior a la exigida para acceder";
    var Titulo_propio_de_duracion_igual_o_superior_a_250_horas_y_hasta_300_horas =
        "Titulo propio de duración igual o superior a 250 horas y hasta 300 horas";
    var Titulo_propio_de_duracion_igual_o_superior_a_200_horas_y_hasta_250_horas =
        "Titulo propio de duración igual o superior a 200 horas y hasta 250 horas";
    var Titulo_propio_de_duracion_igual_o_superior_a_300_horas =
        "Titulo propio de duración igual o superior a 300 horas";
    var Anadir_mas_titulos = "Añadir más títulos";
    var Posee_titulo_de_euskera_o_desea_realizar_un_examen_de_nivel =
        "¿Posee título de euskera o desea realizar un examen de nivel?";
    var Poseo_titulo_de_euskera = "Poseo título de euskera";
    var Deseo_realizar_examen_de_nivel = "Deseo realizar examen de nivel";
    var Anadir_nuevo_curso = "Añadir nuevo curso";
    var Anadir_mas_cursos = "Añadir más cursos";
    var Seleccion_el_nivel = "Seleccion un nivel";
    var Seleccione_un_idioma = "Seleccione un idioma";
    var Anadir_mas_idiomas = "Añadir más idiomas";
    var Puntos = "Puntos";
    var Documento_Adjunto = "Documento Adjunto";
    var Inicio = "Inicio";
    var Fin = "Fin";
    var Anadir_mas_experiencia = "Añadir más experiencia";
    var Titulo_solicitud = "Título solicitud";
    var Tituloacademico = "Título académico";
    var Tipo_experiencia = "Tipo experiencia";
    var Inicio_y_fin_de_tu_experiencia_laboral =
        "Inicio y fin de tu experiencia laboral";
    var Numero_de_dias_trabajados = "Número de días trabajados";
    var Numero_de_dias = "Número de días";
    var Nivel = "Nivel";
    var Documento = "Documento Adjunto";
    var Idioma = "Idioma";
    var Nota_de_autobaremacion = "Nota de autobaremación";
    var declaracion_responsable =
        "Declaración responsable: Solicito ser admitido/a en la convocatoria de referencia y declaro, que cumplo todos los requisitos de participación exigidos en las bases, que son ciertos los datos declarados sobre el cumplimiento de los requisitos y sobre los méritos que alego en la convocatoria, y que me comprometo a acreditar documentalmente todos los datos declarados si así se me requiere.";
    var Titulo = "Título";
    var Jornada_porc = "Jornada (%)";
    var Titulacion_academica_requerida_que_se_presenta =
        "Titulación academica requerida que se presenta";
    var Deseo_realizar_las_pruebas_de_euskera =
        "Deseo realizar las pruebas de euskera";
    var Nivel_euskera_acreditado = "Nivel euskera acreditado";
    var Prueba_de_nivel_que_deseo_realizar =
        "Prueba de nivel que deseo realizar";
    var T_oficial = "T. oficial";
    var T_propios = "T. propios";
    var C_formacion = "C. formación";
    var Informatica = "Informática";
    var No_se_puede_dejar_vacio_el_nombre_titulo_o_fichero="No se puede dejar vacío el nombre del título o el fichero";
	var La_fecha_de_inicio_y_la_fecha_de_fin_deben_estar_rellenas="La fecha de inicio y la fecha de fin deben estar rellenas";
	var La_fecha_de_fin_no_puede_ser_menor_que_la_fecha_de_inicio="La fecha de fin no puede ser menor que la fecha de inicio.";
	var La_fecha_de_inicio_no_puede_ser_mayor_que_la_fecha_de_fin="La fecha de inicio no puede ser mayor que la fecha de fin.";
    var Debes_completar_todos_los_campos_de_todos_los_bloques_del_apartado_conocimientos_informaticos="Debes completar todos los campos de todos los bloques del apartado conocimientos informáticos";
    var Debes_completar_todos_los_campos_de_todos_los_bloques_del_apartado_idiomas="Debes completar todos los campos de todos los bloques del apartado idiomas";
    var Debes_completar_todos_los_campos_de_todos_los_bloques_del_apartado_otros_cursos_de_formacion="Debes completar todos los campos de todos los bloques del apartado otros cursos de formación";
    var Debes_completar_todos_los_campos_de_todos_los_bloques_del_apartado_Experiencia="Debes completar todos los campos de todos los bloques del apartado Experiencia";
    var Debes_completar_todos_los_campos_de_todos_los_bloques_del_apartado_Formacion="Debes completar todos los campos de todos los bloques del apartado Formación";
    var Debes_completar_todos_los_campos_de_todos_los_bloques_del_apartado_Titulacion_euskera="Debes completar todos los campos de todos los bloques del apartado Titulación euskera";
    var Debes_completar_todos_los_campos_del_apartado_Títulacion_academica_requerida_que_se_presenta="Debes completar todos los campos del apartado: Títulación académica requerida que se presenta";
} else {
    var Solicitud_de_empleo = "Enplegu eskaera";
    var Titulacion_academica_oficial = "Titulazio akademiko ofiziala";
    var Nivel_de_euskera = "Euskara maila";
    var Subir_título_acreditativo = "Ziurtagiri titulua igo";
    var Deseo_realizar_prueba_de_acreditacion_de_conocimientos_de_euskera =
        "Euskararen ezagutza egiaztatzeko proba egin nahi dut";
    var Experiencia = "Experientzia";
    var Formacion = "Formakuntza";
    var Cursos_de_formacion_relacionados_con_el_puesto_minimo_6_horas =
        "Postuarekin erlazionaturik dauden formakuntza ikastaroak (6 ordu gutxienez)";
    var Idiomas = "Hizkuntzak";
    var Conocimientos_informaticos = "Ezagutza informatikoak";
    var Selecciona_el_tipo_de_servicio = "Zerbitzu mota aukeratu";
    var Servicios_prestados_en_la_entidad_en_puesto_de_trabajo_correspondiente_al_convocado =
        "Erakundean deialdiari dagokion lanpostuan emandako zerbitzuak";
    var Servicios_prestados_en_la_entidad_en_puesto_distinto_perteneciente_al_mismo_grupo_profesional =
        "Erakundean emandako zerbitzuak, lanbide-talde bereko beste lanpostu batean";
    var Servicios_prestados_en_otra_entidad_publica =
        "Tokiko garapen ekonomikoaren eremuan lan egiten duen beste erakunde publiko batean emandako zerbitzuak, lanpostu berean edo baliokidean";
    var Servicios_prestados_en_otra_entidad_de_sector_publico_en_puesto_de_trabajo_igual_o_equivalente =
        "Sektore publikoko beste erakunde batean emandako zerbitzuak, lanpostu berean edo baliokidean";
    var Titulo_experiencia_laboral = "Lan esperientzia titulua";
    var Seleccionar_archivo = "Fitxategia aukeratu";
    var Ningun_archivo_seleccionado = "Ez da fitxategirik aukeratu";
    var Seleccione_una_opcion = "Aukera bat hautatu";
    var Nueva_experiencia = "Experientzia berria";
    var Titulacion_euskera = "Euskara titulazioa";
    var Titulo_Euskera = "Euskara titulazioa";
    var Ingles = "Ingelesa";
    var Frances = "Frantsesa";
    var Aleman = "Alemaniera";
    var Basico = "Oinarrizkoa";
    var Avanzado = "Aurreratua";
    var Unico = "Bakarra";
    var Anadir_nuevo = "Berri bat gehitu";
    var Guardar = "Gorde";
    var Finalizar = "Amaitu";
    var Baremacion = "Baremazioa";
    var Tipo_1 = "1 Mota";
    var Tipo_2 = "2 Mota";
    var Tipo_3 = "3 Mota";
    var Tipo_4 = "4 Mota";
    var Total_de_puntos_por_experiencia = "Esperientziaren araberako puntuak guztira";
    var Total_de_puntos_por_apartado = "Atal bakoitzeko puntuak guztira";
    var Total_de_puntos_de_la_solicitud = "Eskabideko puntuak guztira";
    var Generar_PDF = "PDFa sortu";
    var Firmar_PDF = "PDFa sinatu";
    var nom_hemos_guardado = "Ez dugu gorde";
    var Titulaciones_academicas_oficiales_y_titulos_propios =
        "Titulazio akademiko ofizialak eta berezko tituluak";
    var Anadir_nuevo_titulo = "Titulu berria gehitu";
    var Titulacion_academica_oficial_de_nivel_igual_o_superior_a_la_exigida_para_acceder =
        "Sartzeko eskatzen den maila bereko edo handiagoko titulazio akademiko ofiziala";
    var Titulo_propio_de_duracion_igual_o_superior_a_250_horas_y_hasta_300_horas =
        "Berezko titulua, 250 ordu edo gehiago eta 300 ordu arte irauten duena";
    var Titulo_propio_de_duracion_igual_o_superior_a_200_horas_y_hasta_250_horas =
        "Berezko titulua, 200 ordu edo gehiago eta 250 ordu arte irauten duena";
    var Titulo_propio_de_duracion_igual_o_superior_a_300_horas =
        "Berezko titulua, 300 ordu edo gehiagokoa";
    var Anadir_mas_titulos = "Titulu gehiago gehitu";
    var Posee_titulo_de_euskera_o_desea_realizar_un_examen_de_nivel =
        "Euskara titulurik baduzu edo maila azterketa bat egin nahi duzu?";
    var Poseo_titulo_de_euskera = "Euskara titulua dut";
    var Deseo_realizar_examen_de_nivel = "Maila-azterketa egin nahi dut";
    var Anadir_nuevo_curso = "Ikastaro berria gehitu";
    var Anadir_mas_cursos = "Ikastaro gehiago gehitu";
    var Seleccion_el_nivel = "Hautatu maila bat";
    var Seleccione_un_idioma = "Hautatu hizkuntza bat";
    var Anadir_mas_idiomas = "Hizkuntza gehiago gehitu";
    var Puntos = "Puntuak";
    var Documento_Adjunto = "Atxikitutako dokumentua";
    var Inicio = "Hasiera";
    var Fin = "Amaiera";
    var Anadir_mas_experiencia = "Esperientzia gehiago gehitu";
    var Titulo_solicitud = "Eskabide titulua";
    var Tituloacademico = "Akademikoa titulua";
    var Tipo_experiencia = "Esperientzia mota";
    var Inicio_y_fin_de_tu_experiencia_laboral =
        "Lan esperientziaren hasiera eta amaiera";
    var Numero_de_dias_trabajados = "Lan egindako egun kopurua";
    var Numero_de_dias = "Egun kopurua";
    var Nivel = "Maila";
    var Documento = "Atxikitutako dokumentua";
    var Idioma = "Hizkuntza";
    var Nota_de_autobaremacion = "Autobaremazio oharra";
    var declaracion_responsable =
        "Erreferentziako deialdian onartua izateko eskatzen dut, eta adierazten dut oinarrietan eskatzen diren parte hartzeko baldintza guztiak betetzen ditudala, eskakizunak betetzeari eta deialdian aipatzen ditudan merezimenduei buruz adierazitako datuak egiazkoak direla, eta aitortutako datu guztiak agiri bidez egiaztatzeko konpromisoa hartzen dudala, hala eskatzen bazait";
    var Titulo = "Izenburu";
    var Jornada_porc = "Egun (%)";
    var Titulacion_academica_requerida_que_se_presenta =
        "Aurkezu beharreko erakutsitako titulazio akademikoa";
    var Deseo_realizar_las_pruebas_de_euskera =
        "Euskara frobak egin nahi ditut";
    var Nivel_euskera_acreditado = "Egiaztatutako euskara maila";
    var Prueba_de_nivel_que_deseo_realizar =
        "Egin nahi duzun maila froga";
    var T_oficial = "T. ofiziala";
    var T_propios = "T. propioa";
    var C_formacion = "Prestakuntza";
    var Informatica = "Informatika";
    var No_se_puede_dejar_vacio_el_nombre_titulo_o_fichero="Izenburuaren edo fitxategiaren izena ezin da hutsik utzi";
	var La_fecha_de_inicio_y_la_fecha_de_fin_deben_estar_rellenas="Hasiera-datak eta amaiera-datak beteta egon behar dute";
	var La_fecha_de_fin_no_puede_ser_menor_que_la_fecha_de_inicio="Amaiera-data ezin da hasiera-data baino lehenagokoa izan.";
	var La_fecha_de_inicio_no_puede_ser_mayor_que_la_fecha_de_fin="Hasiera-data ezin da amaiera-data baino geroagokoa izan.";
    var Debes_completar_todos_los_campos_de_todos_los_bloques_del_apartado_conocimientos_informaticos="Informatika-ezagupenak ataleko bloke guztietako eremu guztiak bete behar dituzu";
    var Debes_completar_todos_los_campos_de_todos_los_bloques_del_apartado_idiomas="Hizkuntzen ataleko bloke guztietako eremu guztiak bete behar dituzu";
    var Debes_completar_todos_los_campos_de_todos_los_bloques_del_apartado_otros_cursos_de_formacion="Beste prestakuntza-ikastaro batzuk ataleko bloke guztietako eremu guztiak bete behar dituzu";
    var Debes_completar_todos_los_campos_de_todos_los_bloques_del_apartado_Experiencia="Esperientzia ataleko bloke guztietako eremuak bete behar dituzu";
    var Debes_completar_todos_los_campos_de_todos_los_bloques_del_apartado_Formacion="Prestakuntza ataleko bloke guztietako eremu guztiak bete behar dituzu";
    var Debes_completar_todos_los_campos_de_todos_los_bloques_del_apartado_Titulacion_euskera="Euskarazko titulazioa ataleko bloke guztietako eremu guztiak bete behar dituzu";
    var Debes_completar_todos_los_campos_del_apartado_Títulacion_academica_requerida_que_se_presenta="Atal honetako eremu guztiak bete behar dituzu: Eskatutako titulu akademikoa";
}
