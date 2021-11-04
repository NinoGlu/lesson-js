// // 1/
const myButton = document.querySelector('#button');

function handleButtonClick (event) {
    console.log(event);
    const myButton = document.querySelector('#button');
    myButton.remove();
}

myButton.addEventListener('click', handleButtonClick);



// // 2.
const myImg = document.createElement("img");

 myImg.setAttribute("src", "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg");
 myImg.setAttribute("alt", "okay");

 document.body.appendChild(myImg);

// 3.
const users = [
  {
      avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
      first_name: "John",
      last_name: "Doe",
      email: "John.Doe@gmail.com",
  },
  {
      avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
      first_name: "John",
      last_name: "Doe",
      email: "John.Doe@gmail.com",
  },
  {
      avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
      first_name: "John",
      last_name: "Doe",
      email: "John.Doe@gmail.com",
  },
  {
      avatar: "https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg",
      first_name: "John",
      last_name: "Doe",
      email: "John.Doe@gmail.com",
  },
];

function renderUser() {
  const userTableContainer = document.querySelector("#user-list");
  const userTableBody = userTableContainer.querySelector("tbody");

  const userItems = users.map(user => {
      return `<tr> 
              <td><img alt='${user}' src='${user.avatar}'/></td>
              <td>${user.first_name}</td>
              <td>${user.last_name}</td>
              <td><button class='user_remove' type='button'>delet</button></td>
              <td><button class='user_info' type='button'>info</button></td>
          </tr>`;
  });

  userTableBody.innerHTML = userItems.join("");
}

renderUser();

//4.
const removeBtn = document.querySelectorAll('.user_remove');
removeBtn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const tr = e.target.parentNode.parentNode;
        tr.remove();
    })
})

const addEmail = document.querySelectorAll('.user_info');
addEmail.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const tr = e.target.parentNode.parentNode;
        tr.append(users[0].email);
    })
})

//6.
//რაღას ვერ ვაკეთებ სწორად
//function birthdayCakeCandles(candles) {
  //let maxHeight = Math.max.apply(null, candles);
  //let totalTallCandles = candles.reduce((cum, cur) => {
  //  if (cur == maxHeight) {
  //    cum += 1;
  //  }
  //  return cum;
 // }, 0);
  //return totalTallCandles;
//}
//let total  =  [18, 90, 90, 13, 90, 75, 90, 8, 90, 43];
//alert(total)
