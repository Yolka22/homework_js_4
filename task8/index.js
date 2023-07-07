document.addEventListener('DOMContentLoaded', function() {
    let editor = document.getElementById('editor');
    let viewer = document.getElementById('viewer');
    let text = viewer.innerText;

    document.addEventListener('keydown', function(event) {
      if (event.ctrlKey && event.key === 'e') {
        event.preventDefault();
        viewer.style.display = 'none';
        editor.style.display = 'block';
        editor.value = text;
        editor.focus();
      } else if (event.ctrlKey && event.key === 's') {
        event.preventDefault();
        viewer.innerText = editor.value;
        viewer.style.display = 'block';
        editor.style.display = 'none';
        text = editor.value;
      }
    });
  });