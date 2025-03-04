let mainContainer=document.querySelector(".container")
let submitbutton = document.querySelector(".submit");
let userNameInput = document.querySelector("#name");
let linkedinInput = document.querySelector("#linkedinusername");
let instragramInput = document.querySelector("#instagramname");
const mediaQuery = window.matchMedia("(max-width: 550px)")


// let ageInput = document.querySelector("#Age");
// let dobInput = document.querySelector("#DOB");
let gmailInput = document.querySelector("#Github");
let form = document.querySelector(".form");
let allData;
const baseURL = "https://api.github.com/users/";
document.addEventListener("DOMContentLoaded", () => {
  submitbutton.addEventListener("click", async function call(e) {
    e.preventDefault();
    let userName = userNameInput.value;
    console.log(userName);
    // let age = ageInput.value;
    // let dob = dobInput.value;
    let gmail = gmailInput.value;
    let linkedinUsername=linkedinInput.value
    let instragramUsername=instragramInput.value
    let mainURL = `${baseURL}${userName}`;
    console.log(mainURL);
    try {
      const response = await fetch(mainURL);
      allData = await response.json();
    } catch (error) {
      console.log(error);
    }
    let githubUsername=allData.login
    let gitHubBio=allData.bio
    console.log(gitHubBio);
    let gitHubName=allData.name
    console.log(gitHubName);
    if (gitHubName===undefined) {
        mainContainer.innerHTML="<h1>Please Enter a Valid UserName</h1>"
    }else{
      mainContainer.innerHTML=""
      let gitHubFollowers=allData.followers
    console.log(gitHubFollowers);
    let gitHubFollowing=allData.following
    console.log(gitHubFollowing)
    let gitHubPics=allData.avatar_url
    console.log(gitHubPics);
    let githubcreateddate=new Date(allData.created_at)
    let githubcreatetime= githubcreateddate.toLocaleTimeString()
    let githubMainDate=githubcreateddate.toLocaleDateString("en-IN",{
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    })
    console.log(githubcreateddate);
    console.log(githubMainDate);
    let htmlURL=allData.html_url
    const div1=document.createElement("div")
    div1.classList.add("smaincontainer")
    mainContainer.appendChild(div1)
    const div2=document.createElement("div")
    div2.classList.add("cardcontainer")
    div1.appendChild(div2)
    div2.style.backgroundColor="#FFFFFF"
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
    nameh1.style.fontSize="28px"
    if (gitHubName===null) {
        nameh1.innerText=`${githubUsername}`
        nameContainer.appendChild(nameh1)
        console.log("here2");
    }else{
      nameh1.innerText=`${gitHubName}`
      nameContainer.appendChild(nameh1)
    }
    const bioContainer=document.createElement("div")
    bioContainer.classList.add("bioContainer")
    div2.appendChild(bioContainer)
    const biop=document.createElement("p")
    biop.classList.add("biop")
    if (gitHubBio===null) {
      console.log("nana");
       biop.innerText=`You Dont Have A Bio Sir,Kindly Update Your Bio At Your GitHub Profile`
    }else{
       biop.innerText=`${gitHubBio}`
    }
    biop.style.textAlign = "justify"
    biop.style.overFlow="hidden"
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
    const linkedinh1=document.createElement("h1")
    linkedinh1.classList.add("githubh1")
    linkedinh1.innerText=`${linkedinUsername}`
    linkdinsvgContainer.appendChild(linkedinh1)
    instagramsvgContainer.appendChild(instagramsvg)
    const instagramh1=document.createElement("h1")
    instagramh1.classList.add("githubh1")
    instagramh1.innerText=`${instragramUsername}`
    instagramsvgContainer.appendChild(instagramh1)
    githubsvgContainer.appendChild(githubsvg)
    const githubh1=document.createElement("h1")
    githubh1.classList.add("githubh1")
    githubh1.innerText=`${userName}`
    githubsvgContainer.appendChild(githubh1)
    const emailContainer=document.createElement("div")
    emailContainer.classList.add("emailContainer")
    div2.appendChild(emailContainer)
    const svgemailcontainer=document.createElement("div")
    svgemailcontainer.classList.add("svgemailcontainer")
    emailContainer.appendChild(svgemailcontainer)
    const svgemail=document.createElement("img")
    svgemail.setAttribute("src","icons8-gmail.svg")
    svgemail.classList.add("svgemail")
    svgemailcontainer.appendChild(svgemail)
    const emailh1=document.createElement("h1")
    emailh1.innerText=`${gmail}`
    const emailh1Container=document.createElement("div")
    emailContainer.appendChild(emailh1Container)
    emailh1.classList.add("emailh1")
    emailh1Container.appendChild(emailh1)
    const ageContainer=document.createElement("div")
    ageContainer.classList.add("ageContainer")
    div2.appendChild(ageContainer)
    const ageSvgContainer=document.createElement("div")
    ageSvgContainer.classList.add("ageSvgContainer")
    ageContainer.appendChild(ageSvgContainer)
    const svgAge=document.createElement("img")
    svgAge.setAttribute("src","icons8-calculator.svg")
    svgAge.classList.add("svgAge")
    ageSvgContainer.appendChild(svgAge)
    const ageh1=document.createElement("h1")
    ageh1.classList.add("ageh1")
    ageh1.innerText=`GitHub Creation Date:${githubMainDate}`
    ageSvgContainer.appendChild(ageh1)
    const svgTimeContainer=document.createElement("div")
    svgTimeContainer.classList.add("svgTimeContainer")
    div2.appendChild(svgTimeContainer)
    const svgTime=document.createElement("img")
    svgTime.setAttribute("src","icons8-clock.svg")
    svgTime.classList.add("svgTime")
    svgTimeContainer.appendChild(svgTime)
    const svgh1=document.createElement("h1")
    svgh1.classList.add("svgh1")
    svgh1.innerText=`CreationTime:${githubcreatetime}`
    svgTimeContainer.appendChild(svgh1)
    }
  });
});

