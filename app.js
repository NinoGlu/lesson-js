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

  document.querySelector("tbody").style.fontStyle = "italic";
  document.querySelector("tbody").style.color = "#505050";

  const userItems = users.map((user) => {
    return `<tr> 
                <td><img src="https://i.ytimg.com/vi/VEx5hNYeZtY/hqdefault.jpg"></td>
                <td>${user.first_name}</td>
                <td>${user.last_name}</td>
                <td><button class="user-remove" type="button">Delete</button></td>
                <td><button class="user-appear" type="button">Info</button></td>
            </tr>`;
  });

  userTableBody.innerHTML = userItems.join("");
}

renderUser();
