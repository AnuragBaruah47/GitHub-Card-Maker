let mainContainer=document.querySelector(".container")
let submitbutton = document.querySelector(".submit");
let userNameInput = document.querySelector("#name");
// let ageInput = document.querySelector("#Age");
// let dobInput = document.querySelector("#DOB");
let gmailInput = document.querySelector("#Github");
let form = document.querySelector(".form");
let allData;
const baseURL = "https://api.github.com/users/";
document.addEventListener("DOMContentLoaded", () => {
  submitbutton.addEventListener("click", async function call(e) {
    mainContainer.innerHTML=""
    e.preventDefault();
    let userName = userNameInput.value;
    // let age = ageInput.value;
    // let dob = dobInput.value;
    let gmail = gmailInput.value;
    let mainURL = `${baseURL}${userName}`;
    console.log(mainURL);
    try {
      const response = await fetch(mainURL);
       allData = await response.json();
    } catch (error) {
      console.log(error);
    }
    let gitHubUserId=allData.id
    console.log(gitHubUserId);
    let gitHubBio=allData.bio
    console.log(gitHubBio);
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
    const bioContainer=document.createElement("div")
    bioContainer.classList.add("bioContainer")
    div2.appendChild(bioContainer)
    const biop=document.createElement("textarea")
    biop.readOnly="true"
    biop.style.resize="none";
    biop.maxLength="156"
    biop.classList.add("biop")
    biop.innerText=`${gitHubBio}`
    bioContainer.appendChild(biop)
    const follower_followingcontainer=document.createElement("div")
    follower_followingcontainer.classList.add("follower_followingcontainer")
    div2.appendChild(follower_followingcontainer)
    const followersContainer=document.createElement("div")
    followersContainer.classList.add("followersContainer")
    follower_followingcontainer.appendChild(followersContainer)
    const followersh1=document.createElement("h1")
    followersh1.classList.add("followersh1")
    followersh1.innerText=`Followers:${gitHubFollowers}`
    followersContainer.appendChild(followersh1)
    const followingsContainer=document.createElement("div")
    followingsContainer.classList.add("followingsContainer")
    follower_followingcontainer.appendChild(followingsContainer)
    const followingsh1=document.createElement("h1")
    followingsh1.classList.add("followingsh1")
    followingsh1.innerText=`Followings:${gitHubFollowing}`
    followingsContainer.appendChild(followingsh1)
    const svgContainer=document.createElement("div")
    svgContainer.classList.add("svgContainer")
    div2.appendChild(svgContainer)
    const linkdinsvgContainer=document.createElement("div")
    linkdinsvgContainer.classList.add("linkdinsvgContainer")
    const instagramsvgContainer=document.createElement("div")
    instagramsvgContainer.classList.add("instagramsvgContainer")
    const githubsvgContainer=document.createElement("div")
    githubsvgContainer.classList.add("githubsvgContainer")
    svgContainer.appendChild(linkdinsvgContainer)
    svgContainer.appendChild(instagramsvgContainer)
    svgContainer.appendChild(githubsvgContainer)
    const linkdinsvg=document.createElement("img")
    linkdinsvg.setAttribute("src","icons8-linkedin.svg")
    const instagramsvg=document.createElement("img")
    instagramsvg.setAttribute("src","icons8-instagram.svg")
    const githubsvg=document.createElement("img")
    githubsvg.setAttribute("src","icons8-github.svg")
    linkdinsvgContainer.appendChild(linkdinsvg)
    instagramsvgContainer.appendChild(instagramsvg)
    githubsvgContainer.appendChild(githubsvg)
  });
});

