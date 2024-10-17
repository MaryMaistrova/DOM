var playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN"
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY"
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD"
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER"
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER"
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK"
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU"
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN"
  }
];

const ol = document.createElement('ol');

playList.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item.song;
  ol.appendChild(li);
});

document.body.appendChild(ol);










// створення кнопки та модального вікна
const modal = document.createElement('div');
const span = document.querySelector('span');
const btn = document.createElement('button');
const p = document.createElement('p');

btn.textContent = 'open';
document.body.appendChild(btn);



modal.classList.add('modal');
modal.appendChild(span);
document.querySelector('span').textContent = '&times;';

modal.appendChild(p);
document.querySelector('p').textContent = 'close';
modal.style.display = 'none';



document.querySelector('button').addEventListener('click', function () {
  modal.style.display = "block";
})

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}
