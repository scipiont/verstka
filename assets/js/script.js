"use strict"

document.addEventListener('DOMContentLoaded', function(){
    const form= document.getElementById('form');
    form.addEventListener('submit', formSend);
    async function formSend(e){
        e.preventDefault();
        let error = formValidate(form);
        let formData = new FormData(form);
       // formData.append('image', formImage.files[0]);
        if (error===0){
            form.classList.add('_sending');
            let response = await fetch ('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                //formPreview.innerHTML = '';
                form.reset();
                form.classList.remove('_sending');
            }else{
                alert("Ошибка");
                form.classList.remove('_sending');
            }
        }else{
            alert('Заполните обязательные поля');
        }
    }
    function formValidate(form) {
        let error = 0;
        let fromReq = document.querySelectorAll('._req');

        for (let index = 0; index < fromReq.length; index++){
            const input = fromReq[index];
            formRemoveError(input);
            if (input.classList.contains('_email')){
                if (emailTest(input)){
                    formAddError(input);
                    error++;
                }
            } else if(input.getAttribute("type")==="checkbox" && input.checked === false){
                formAddError(input);
                error++;
            } else {
                if (input.value === ''){
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }
    function formAddError(input){
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input){
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    //Функция места email
    function emailTest(input){
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
    //Получаем инпут файл в переменную для отображение фото
    // const formImage = document.getElementById('formImage');
    // const formPreview = document.getElementById('formPreview');
    // formImage.addEventListener('change',()=>{
    //     uploadFile(formImage.files[0]);
    // });
    // function uploadFile(file) {
    //     // Проверка на вид файла
    //     if (!['image/jpeg','image/png','image/gif'].includes(file.type)){
    //         alert('Разрешены только изображения');
    //         formImage.value = '';
    //         return;
    //     }
    //     //Проверка на вес файла
    //     if (file.size > 2 * 1024 * 1024){
    //         alert ('Файл должен быть менее 2 МБ');
    //         return;
    //     }
    //     var reader = new Filereader ();
    //     reader.onload = function (e) {
    //         formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
    //     };
    //     reader.onerror = function (e) {
    //         alert('Ошибка');
    //     };
    //     reader.readAsDataURL(file);
    // }

});