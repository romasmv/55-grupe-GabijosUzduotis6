// const inputDOM = document.getElementById('input');

// const variantai = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','@','#','$','%','&'];
// inputDOM.value = '';
// inputDOM.focus();
// const generateBtnDOM = document.querySelector('.btn');
// const deleteBtnDOM = document.querySelector('.btnDel');
    
//         generateBtnDOM.addEventListener('click', () => {
//             let input = '';
//             for (let i = 0; i < 7; i++) {
//             input += variantai[Math.floor(Math.random() * variantai.length)];  
//             }
//             inputDOM.value = input;
//         });


//         deleteBtnDOM.addEventListener('click', () => {
//             inputDOM.value = '';
//         });
    
const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");
const copyIconEl = document.querySelector(".fa-copy");
const alertContainerEl = document.querySelector(".alert-container");

btnEl.addEventListener("click", () => {
  createPassword();
})

copyIconEl.addEventListener("click", () => {
  copyPassword();
  if(inputEl.value)
  {
    alertContainerEl.classList.remove("active")
    setTimeout(() => {
      alertContainerEl.classList.add("active");
    }, 2000)
  }
});


function createPassword()
{
  const chars="0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  let password = '';
  for(let i = 0; i < passwordLength; i++)
  {
    const randomNum = Math.floor(Math.random()*chars.length);
    password += chars.charAt(randomNum)
  }
  inputEl.value=password;
  alertContainerEl.innerText = password + " copied!";
}

function copyPassword() {
  inputEl.select();
  inputEl.setSelectionRange(0, 999)
  navigator.clipboard.writeText(inputEl.value);
}