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
              <td><button class='user_remove' type='button'>remove</button></td>
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