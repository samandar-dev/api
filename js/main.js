let list = document.querySelector('.data__list');
let arr = []

function dataFunc() {
  let requst = new XMLHttpRequest();
  let url = "https://reqres.in/api/users"

  requst.open("GET", url);

  requst.onload = function () {
    let outData = JSON.parse(requst.responseText);
    renderHTML(outData);
  }

  requst.send();
} dataFunc()


function renderHTML(data) {
  data.data.forEach(element => {
    let li = document.createElement('li')
    li.className = "data__item"
    li.innerHTML = `
            <div class="data__item_box itmbox">
              <div class="itmbox__img_name">
                <div class="itmbox__img-box">
                  <img class="itmbox__img" src="${element.avatar}" alt="img">
                </div>

                <div class="itmbox__name-box">
                  <p class="itmbox__name">${element.last_name}</p>
                  <p class="itmbox__name-tit">${element.first_name}</p>
                </div>
              </div>

              <div class="itmbox__content">
                <ul class="itmbox__left_list">
                  <li class="itmbox__left_item">
                    <p class="itmbox__left_tit">Company</p>
                    <p class="itmbox__right_tit">Epam</p>
                  </li>
                  <li class="itmbox__left_item">
                    <p class="itmbox__left_tit">Email</p>
                    <p class="itmbox__right_tit">${element.email}</p>
                  </li>
                  <li class="itmbox__left_item">
                    <p class="itmbox__left_tit">Phone</p>
                    <p class="itmbox__right_tit">999-876-654-321</p>
                  </li>
                  <li class="itmbox__left_item">
                    <p class="itmbox__left_tit">Website</p>
                    <p class="itmbox__right_tit">kale.biz</p>
                  </li>
                </ul>
              </div>
            </div>
            <button class="removBtn">Remove</button>`;

    list.appendChild(li)
    arr.push(element)
  });

  let items = document.querySelectorAll('.data__item');
  let btns = document.querySelectorAll('.removBtn');
  items.forEach((item, inx) => {
    btns.forEach((btn, btninx) => {
      btn.addEventListener('click', () => {
        if (btninx + 1 == inx + 1) {
          console.log(item);
          item.className = 'remov-anim';
          item.classList.add('width-anim');
          setTimeout(() => {
            item.remove();
          }, 750)
        }
      })
    })
  })
}

