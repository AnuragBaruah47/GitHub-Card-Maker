let mainContainer=document.querySelector(".container")
let submitbutton = document.querySelector(".submit");
let userNameInput = document.querySelector("#name");
let ageInput = document.querySelector("#Age");
let dobInput = document.querySelector("#DOB");
let gmailInput = document.querySelector("#Github");
let form = document.querySelector(".form");
let allData;
const baseURL = "https://api.github.com/users/";
document.addEventListener("DOMContentLoaded", () => {
  submitbutton.addEventListener("click", async function call(e) {
    mainContainer.innerHTML=""
    e.preventDefault();
    let userName = userNameInput.value;
    let age = ageInput.value;
    let dob = dobInput.value;
    let gmail = gmailInput.value;
    let mainURL = `${baseURL}${userName}`;
    console.log(mainURL);
    try {
      const response = await fetch(mainURL);
       allData = await response.json();
    } catch (error) {
      console.log(error);
    }
    let gitHubUserName=allData.login
    console.log(gitHubUserName);
    let gitHubUserId=allData.id
    console.log(gitHubUserId);
    let gitHubName=allData.name
    console.log(gitHubName);
    let gitHubFollowers=allData.followers
    console.log(gitHubFollowers);
    let gitHubFollowing=allData.following
    console.log(gitHubFollowing)
    let gitHubPics=allData.avatar_url
    console.log(gitHubPics);
    let htmlURL=allData.html_url
    const div1=document.createElement("div")
    div1.classList.add("smaincontainer")
    mainContainer.appendChild(div1)
    const div2=document.createElement("div")
    div2.classList.add("cardcontainer")
    div1.appendChild(div2)
    const imgContainer=document.createElement("div")
    imgContainer.classList.add("imgContainer")
    div2.appendChild(imgContainer)
    const img=document.createElement("img")
    img.classList.add("img1")
     img.setAttribute("src",gitHubPics)
    imgContainer.appendChild(img)
    img.addEventListener("click",function(){
      window.open(`${htmlURL}`, "_blank");
    })
    const nameContainer=document.createElement("div")
    nameContainer.classList.add("nameContainer")
    div2.appendChild(nameContainer)
    const nameh1=document.createElement("h1")
    nameh1.classList.add("nameh1")
    nameh1.innerText=`${gitHubName}`
    nameContainer.appendChild(nameh1)
  });
});

