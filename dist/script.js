let para = document.getElementById('upd-para').value;
document.getElementById('paragraph').innerText = para;

function updateUrl (){
  let resolution = document.getElementById('url').value;
  document.getElementById('image').setAttribute('src', `https://source.unsplash.com/random/${resolution}`);
}


function updateParagraph() {
  let updatedParagraph = document.getElementById('upd-para').value;
  document.getElementById('paragraph').innerText = updatedParagraph;
}