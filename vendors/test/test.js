tinymce.init({
  selector: "textarea.tinymce",
  height: 250,
  width: 680,
  menubar: false,
 file_picker_types: 'file image media', 
  plugins: [
    'advlist autolink lists link image charmap print preview anchor textcolor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table contextmenu paste code help wordcount'
  ],
  toolbar: 'insert| setting| media | image | undo redo |  formatselect | bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
  content_css: [
    '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i',
    '//www.tinymce.com/css/codepen.min.css'],
image_title: true,
automatic_uploads: true,
file_picker_types: 'media,image',
file_picker_callback: function(cb, value, meta) {
    var input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'media/*','image/*');
    input.onchange = function () {
        var file = this.files[0];
        var reader = new FileReader();

        reader.onload = function () {
            var id = 'blobid' + (new Date()).getTime();
            var blobCache = tinymce.activeEditor.editorUpload.blobCache;
            var base64 = reader.result.split(',')[1];
            var blobInfo = blobCache.create(id, file, base64);
            blobCache.add(blobInfo);
            cb(blobInfo.blobUri(), {title: file.name});
        };
        reader.readAsDataURL(file);
    };
    input.click();
}
});
