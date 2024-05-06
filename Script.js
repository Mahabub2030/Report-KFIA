document.getElementById('uploadBtn').addEventListener('click', function() {
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];

    if (file) {
        // Display uploaded PDF
        var reader = new FileReader();
        reader.onload = function(e) {
            var pdfViewer = document.getElementById('pdfViewer');
            pdfViewer.innerHTML = `<embed src="${e.target.result}" width="100%" height="600px" type="application/pdf">`;
        };
        reader.readAsDataURL(file);
    } else {
        alert('Please select a file.');
    }
});