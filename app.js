//zona segura
// nativa
/* document.addEventListener('DOMContentLoaded', function(){
    // recuperar por id
    const nombre = $('#txtNombre').val();
    const cedula = $('#txtCedula').val();

    // cambiar/ asignar
    $('#txtNombre').val('Otro fulano');
    alert($('#txtNombre').val());
    $('#txtNombre').val('Dario');
}); */

//jquery
// zona segura
$(function(){
    // Para pruebas
    // $('input').css("background-color", "yellow")
    //const nombre = $('#txtNombre').val();
    //const cedula = $('#txtCedula').val();

    // cambiar/ asignar
    //$('#txtNombre').val('Otro fulano');
    //alert($('#txtNombre').val());
    //$('#txtNombre').val('Dario');

    // añadir evento click al boton
    $('#enviar').on('click', function(){
        // cuando hiciste click, se ejecuta aquí
        //alert('Hiciste click');
        // encadenamiento de funciones
        $('#enviar').removeClass('btn-primary').addClass('btn-warning');
        // recuperar los valores del formulario
        const nombre = $('#txt_nombre').val();
        const apellido = $('#txt_apellido').val();
        const cedula = $('#txt_cedula').val();

        if(!nombre.trim()) {
            alert('Complete este!');
            $('#txt_nombre').css('border-color', 'red').focus();
            return;
        }

        if(!apellido.trim()) {
            alert('Complete este!');
            $('#txt_apellido').css('border-color', 'red').focus();
            return;
        }

        if(!cedula.trim()) {
            alert('Complete este!');
            $('#txt_cedula').css('border-color', 'red').focus();
            return;
        }
        alert('Buenísimo!!!!!');
    });
});