const burguer = document.getElementById("burguer-button");
const menu = document.getElementsByClassName("menu");
const sendButton = document.getElementById("send");
const table = document.getElementById("table");

burguer.addEventListener("click", () => {
   menu[0].classList.toggle("menu-visible");
});

const dialog = document.getElementById("formContent");
const buttonShow = document.getElementById("show");

buttonShow.addEventListener("click", () => {
   dialog.showModal();
   //dialog.close();
});

sendButton.addEventListener("click",()=>{
   let post = new Post(
      document.getElementsByName("titulo")[0].value,
      document.getElementsByName("autor")[0].value,
      document.getElementsByName("contenido")[0].value
   );
   console.log(post);
   var newRow = table.insertRow();
   newRow.innerHTML = `
         <td>${post.title}</td>
         <td>${post.author}</td>
         <td>${post.content}</td>
         <td><button>borrar</button></td>
   `;
   document.querySelectorAll("td button").forEach(element => {
      element.addEventListener("click",(e) => {
         e.target.parentNode.parentNode;
      });
   });
});