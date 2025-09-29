import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js'
import {getDatabase,ref,push,set,get, query, onValue, orderByChild, equalTo, orderByKey, update} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-database.js"
const firebaseConfig = {
    apiKey: "AIzaSyC1Rz1VvpbvpQY2jTZQQbArkU6gSb6V-eY",
    authDomain: "tiluxos.firebaseapp.com",
    databaseURL: "https://tiluxos-default-rtdb.firebaseio.com",
    projectId: "tiluxos",
    storageBucket: "tiluxos.firebasestorage.app",
    messagingSenderId: "929761784223",
    appId: "1:929761784223:web:ac6fafb4e2fe5aafa98daa"
};
const appSettings = {
    databaseURL: "https://tiluxos-default-rtdb.firebaseio.com/"
}

const databaseApp = initializeApp(firebaseConfig);
const db = getDatabase(databaseApp)


const usernameGet = window.userPath || undefined;
const getUser = JSON.parse(localStorage.getItem("userCredential")) || undefined
const path = window.location.pathname
const username = path.split('/')[1]

if(usernameGet){
    get(ref(db, `Users/obj/${usernameGet}/userCredentials/obj/signUserName`))
    .then((output)=>{
        if(output.exists()){
        }
        else{
            window.location.href = "https://tilux-os-93lt.vercel.app/"
        }
    })
}
if (getUser != undefined) {
    if (usernameGet == undefined && getUser.signUserName) {
        get(ref(db, `Users/obj/${getUser.signUserName}/userCredentials/obj/signUserName`))
        .then((output)=>{
            if(output.exists()){
                get(ref(db, `Users/obj/${getUser.signUserName}/userCredentials/obj/uniqueId`))
                .then((outputUnique)=>{
                    if(output.exists()){
                        if (outputUnique.val() == getUser.uniqueId) {
                        window.location.href = window.location.href+getUser.signUserName
                        }
                        else{
                            localStorage.removeItem("userCredential")
                            window.location.href = "https://tilux-os-93lt.vercel.app/"
                        }
                    }
                    else{
                        localStorage.removeItem("userCredential")
                        window.location.href = "https://tilux-os-93lt.vercel.app/"
                    }
                })
            }
            else{
                localStorage.removeItem("userCredential")
            }
        })
    }
    else if (usernameGet && getUser.signUserName && usernameGet == getUser.signUserName) {
        get(ref(db, `Users/obj/${getUser.signUserName}/userCredentials/obj/signUserName`))
        .then((output)=>{
            if(output.exists()){
                get(ref(db, `Users/obj/${getUser.signUserName}/userCredentials/obj/uniqueId`))
                .then((outputUnique)=>{
                    if(output.exists()){
                        if (outputUnique.val() == getUser.uniqueId) {}
                        else{
                            localStorage.removeItem("userCredential")
                            window.location.href = "https://tilux-os-93lt.vercel.app/"
                        }
                    }
                    else{
                        localStorage.removeItem("userCredential")
                        window.location.href = "https://tilux-os-93lt.vercel.app/"
                    }
                })
            }
            else{
                localStorage.removeItem("userCredential")
            }
        })
    }
}

const welcomeImg = document.getElementById("welcomeImg")
get(ref(db, `Users/obj/${usernameGet}/userCredentials/obj/signImage`))
.then((output)=>{
    if(output.exists()){
        welcomeImg.src = output.val()
    }
})


const menu1 = document.getElementById("menu1")  
const body = document.querySelector("body")
const buttons = document.querySelectorAll(".sideMenu img")
const time = document.getElementById("time")
const bluetooth = document.getElementById("bluetooth")
const edge = document.getElementById("edge")
const places = document.getElementById("places")
const app = document.getElementById("apps")
let ram = document.getElementById("ram")
let cpu = document.getElementById("cpu")
let swap = document.getElementById("swap")
let upload = document.getElementById("upload")
let download = document.getElementById("download")


setInterval(() => {
    if ("getBattery" in navigator){
        navigator.getBattery()
        .then((battery)=>{
            document.querySelectorAll(".batteryStatus").forEach((batteryContent)=>{
                batteryContent.textContent = (battery.level * 100).toFixed(0) +"%" 
            })
        })
    }
}, 3000);




setInterval(() => {
    const UsedRam = (performance.memory.usedJSHeapSize / 1048576).toFixed(2)
    const totalUsedRam = ((navigator.deviceMemory * 1000 - UsedRam) / (100 * navigator.deviceMemory)).toFixed(2)
    ram.textContent = totalUsedRam + "%"
}, 1000);

const loadPage = async() =>{
    window.reduceImageQuality = (file, quality = 0.7, maxWidth = 800, maxHeight = 800) => {
        return new Promise((resolve, reject) => {
        const reader = new FileReader();
        const img = new Image();
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        reader.onload = (event) => {
            img.onload = () => {
            let width = img.width;
            let height = img.height;
            
            if (width > maxWidth || height > maxHeight) {
                const ratio = Math.min(maxWidth / width, maxHeight / height);
                width *= ratio;
                height *= ratio;
            }
            
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
            const base64 = canvas.toDataURL('image/jpeg', quality);
            resolve(base64);
            };
            
            img.onerror = reject;
            img.src = event.target.result;
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
        });
    }
    let interval;
    const content = document.querySelector(".loadContent")
    setTimeout(() => {
        content.textContent = "Getting Started"
        setTimeout(() => {
            content.textContent += "."
        }, 200);
        setTimeout(() => {
            interval = content.textContent += "."
        }, 400);
        setTimeout(() => {
            interval = content.textContent += "."
        }, 600);
        setTimeout(() => {
            content.textContent = "Setting Up for you"
        }, 700);
        setTimeout(() => {
            content.textContent = "Getting Everything Ready"
        }, 1000);
        setTimeout(() => {
            content.textContent = "Loading Resources"
        }, 1000);
        setTimeout(() => {
            content.textContent += "."
        }, 1400);
        setTimeout(() => {
            content.textContent += "."
        }, 1800);
        setTimeout(() => {
            content.textContent += "."
        }, 2200);
        setTimeout(() => {
            content.textContent = "Adjusting Settings"
        }, 2300);
        setTimeout(() => {
            content.textContent = "Applying Settings"
        }, 2600);
        setTimeout(() => {
            content.textContent = "Pls wait..."
        }, 3000);
        setTimeout(() => {
            if(getUser){
                if (usernameGet && getUser.signUserName && usernameGet == getUser.signUserName) {
                    content.textContent = "Welcome "+ getUser.signUserName
                }
            }
            else if ((usernameGet != undefined && getUser == undefined) || (usernameGet != undefined && getUser.signUserName != usernameGet)) {
                content.textContent = `Welcome To ${usernameGet} Os` 
            }
        }, 4000);
        setTimeout(() => {
            document.querySelector(".boot").style.animation = "fade 0.5s 1"
        }, 5000);
        setTimeout(() => {
            document.querySelector(".boot").remove()
        }, 5400);
        if(!getUser && usernameGet == undefined){
            document.querySelector(".loginPage").style.display = "none"
            let awaitUseCredentials;
            let localStorageSet;
            const form = document.querySelector(".form")
            window.signUpNav = () =>{
                form.innerHTML = `
                    <label for="signImage">
                        <img src="images/user.png" alt="" id="signImagePreview">
                    </label>
                    <input type="file" id="signImage" style="display: none;" accept="images/*" onchange="signImage()">
                    <input type="text" placeholder="Full Name" id="signFullName">
                    <input type="text" placeholder="UserName" id="signUserName">
                    <input type="email" placeholder="Email" id="signEmail">
                    <input type="text" placeholder="profession" id="signProfession">
                    <input type="password" name="" placeholder="password" id="signPassword">
                    <input type="password" placeholder="Confirm Password" id="signConfirmPassword">
                    <small onclick="logInNav()">Already have an account? Login</small>
                    <button onclick="signUp()">Next</button>
                `
                return
            }
            window.logInNav = ()=>{
                form.innerHTML = `
                    <div class="loginDialogue">
                        <input type="text" placeholder=Username" id="logUserName">
                        <input type="password" placeholder="password" id="logPassword">
                        <small onclick="signUpNav()">Already have an account? Login</small>
                        <button onclick="logInAcc()">Next</button> 
                    </div>
                `
                return
            }
            window.logInAcc = () =>{
                const logUserName = document.getElementById("logUserName").value
                const logPassword = document.getElementById("logPassword").value
                if (!logUserName) {
                    alert("username is required")
                }
                else if (!logPassword){
                    alert("password is required")
                }
                else{
                    alert("welcome")
                }
            }
            window.signImage = async()=>{
                const signImage = document.getElementById("signImage")
                const signImagePreview = document.getElementById("signImagePreview")
                const file = signImage.files[0]
                signImagePreview.src = await reduceImageQuality(file, 0.5, 1024, 1024)
            }
            window.signUp = ()=>{
                const signFullName = document.getElementById("signFullName")
                const signUserName = document.getElementById("signUserName")
                const signEmail = document.getElementById("signEmail")
                const signProfession = document.getElementById("signProfession")
                const signPassword = document.getElementById("signPassword")
                const signConfirmPassword = document.getElementById("signConfirmPassword")
                if(!signFullName.value){
                    alert("Pls input your full name")
                }
                else if (!signUserName.value) {
                    alert("Pls input username")
                }
                else if (signUserName.value.match(/\s/)) {
                    alert("No spacing allowed in username")
                }
                else if (!(signEmail.value.match(/^[A-Za-z0-9_-]{3,}@[A-Za-z]{2,}(\.[A-Za-z]{2,})+$/))) {
                    alert("Pls use a valid email")
                }
                else if (!signProfession.value) {
                    alert("Pls enter your profession")
                }
                else if (!(signPassword.value.match(/^[A-Za-z0-9!@#$%^&*_\-=":]{8,}$/))) {
                    alert("Pls use a strong password")
                }
                else if (signPassword.value != signConfirmPassword.value) {
                    alert("Password does not match")
                }
                
                else{
                    get(ref(db, `Users/obj/${signUserName.value.toLowerCase()}/userCredentials/obj/signUserName`))
                    .then((output)=>{
                        if(output.exists()){
                            alert("Username is already taken")
                        }
                        else{
                            const id = "abcdefghijklmnopqrstuvwxyz1234567890"
                            let uniqueId = "";
                            for (let index = 0; index < 8; index++) {
                                const unique = id[Math.floor(Math.random()*id.length)]
                                uniqueId += unique
                            }
                            awaitUseCredentials = {
                                signImage: signImagePreview.src,
                                signFullName: signFullName.value,
                                signUserName: signUserName.value.toLowerCase(),
                                signEmail: signEmail.value.toLowerCase(),
                                signProfession: signProfession.value,
                                signPassword: signPassword.value,
                                uniqueId
                            }
                            localStorageSet = {
                                uniqueId,
                                signUserName: signUserName.value.toLowerCase()
                            }
                            form.innerHTML = `
                                <img src="backgroundImages/loader.png" alt="" class="loader">
                                <h2>Welcome,&nbsp;${awaitUseCredentials.signUserName}</h2>
                                <button id="proceed">Proceed</button>
                            `
                            const proceed = document.getElementById("proceed")
                            proceed.addEventListener("click",()=>{
                                form.innerHTML = `
                                <div class="showProf">
                                        <img src="${awaitUseCredentials.signImage}" alt="">
                                </div>
                                    <h3>Term's & Privacy</h3>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae ipsum obcaecati facilis, repudiandae minima quisquam explicabo corrupti mollitia eum aperiam laborum delectus sunt? Temporibus facere aspernatur modi officia! Illo quae debitis dolorum aliquid delectus molestias id impedit repellendus. Voluptatem sapiente, ipsam quos aliquam dolor tempora quia cupiditate enim ad impedit.</p>
                                <button id="next">Next</button>
                                `
                                const next = document.getElementById("next")
                                next.addEventListener("click", async() =>{
                                    const TiluxOsObj = {
                                        fontSize: "14px",
                                        fontWeight: "600",
                                        prefferedFont: "sans-serif",
                                        theme: "#e9e1e1d7",
                                        iconSize: "60px",
                                        taskbarPosition: "left",
                                        taskbarSize: "1",
                                        theme: "#e9e1e1d7",
                                        iconSize: "60px",
                                        wallPaper: "backgroundImages/background.png",
                                        wallPaperFit: "cover"
                                    }
                                    const desktop = `
                                    <div class="sideMenu showSide" id="sideBarParent">
                                        <img src="appImages/application.png" alt="" class="explore" id="menu" onclick="menu()">
                                        <img src="appImages/optimization.png" alt="" id="settings" onclick="settings()">
                                    </div>
                                    <div class="allApp" id="allApp" >
                                        <div class="search flexItem blurItem">
                                            <input type="text" placeholder="Type to search">
                                        </div>
                                        <div class="monitor flexItem oneRem blurItem" id="monitor">
                                            <div><img src="backgroundImages/background.png" alt=""></div>
                                            <div><img src="backgroundImages/background.png" alt=""></div>
                                        </div>
                                        <div class="edit-parent">
                                            <img src="images/edit.png" alt="" id="editApps" onclick="editApps()">
                                            <img src="images/add.png" alt="" id="addApps" onclick="addApp()">
                                        </div>
                                        <div class="apps" id="appArrayParent">
                                        </div>
                                    </div>
                                    `
                                    const newAppArray = [
                                        {name:"Calculator",icon:"appImages/calculator.png",DeveloperName:"Tilux",category:"Productivity",Attributes:[{openLink:"https://calculator2-theta-lac.vercel.app/",editApp:false,addToBar:true,gitHubLink:"",showUrl:false, appDetails:"Calculator application"}]},
                                        {name:"Typing Game",icon:"appImages/keyboard.png",DeveloperName:"Tilux",category:"Game",Attributes:[{openLink:"https://tilux-beacon.vercel.app/",editApp:false,addToBar:true,gitHubLink:"",showUrl:false, appDetails:"Typing practice game"}]},
                                        {name:"Keep",icon:"appImages/keep.png",DeveloperName:"Tilux",category:"Utilities",Attributes:[{openLink:"https://tilux-keep.vercel.app/",editApp:false,addToBar:true,gitHubLink:"",showUrl:false, appDetails:"Note keeping application"}]},
                                        {name:"Weather Forecast",icon:"appImages/weather-forecast.png",DeveloperName:"Tilux",category:"Productivity",Attributes:[{openLink:"https://weather-forecast-nine-beryl.vercel.app/",editApp:false,addToBar:true,gitHubLink:"",showUrl:false, appDetails:"Weather checking application"}]},
                                        {name:"qr code",icon:"appImages/qr-scanner.png",DeveloperName:"Tilux",category:"Utilities",Attributes:[{openLink:"https://qr-code-generator-m7z8.vercel.app/",editApp:false,addToBar:true,gitHubLink:"",showUrl:false, appDetails:"Qr code generator"}]},
                                        {name:"Music Stream",icon:"appImages/music-player.png",DeveloperName:"Tilux",category:"Utilities",Attributes:[{openLink:"https://tilux-stream.vercel.app/",editApp:false,addToBar:true,gitHubLink:"",showUrl:false, appDetails:"Music streaming Application"}]},
                                        {name:"Ageing Calculator",icon:"appImages/population.png",DeveloperName:"Tilux",category:"Productivity",Attributes:[{openLink:"https://aging-calculator.vercel.app/",editApp:true,addToBar:true,gitHubLink:"",showUrl:false, appDetails:"Age calculator"}]},
                                        {name:"quote generator",icon:"appImages/quote.png",DeveloperName:"Tilux",category:"Productivity",Attributes:[{openLink:"https://quote-generator-w5k8.vercel.app/",editApp:true,addToBar:true,gitHubLink:"",showUrl:false, appDetails:"Quote generator application"}]},
                                        {name:"RGB generator",icon:"appImages/rgb.png",DeveloperName:"Tilux",category:"Productivity",Attributes:[{openLink:"https://password-linear-rgb-generator.vercel.app/",editApp:true,addToBar:true,gitHubLink:"",showUrl:false, appDetails:"RGB and strong password generator"}]},
                                        {name:"stop-watch",icon:"appImages/stop-watch.png",DeveloperName:"Tilux",category:"Productivity",Attributes:[{openLink:"https://stop-watch-ruddy-three.vercel.app/",editApp:true,addToBar:true,gitHubLink:"",showUrl:false, appDetails:"Stop-watch application"}]},
                                        {name:"To-do-list",icon:"appImages/to-do-list.jpg",DeveloperName:"Tilux",category:"Productivity",Attributes:[{openLink:"https://to-do-list-azure-eight-63.vercel.app/",editApp:true,addToBar:true,gitHubLink:"",showUrl:false, appDetails:"To-do-list Application"}]},
                                        {name:"Football Lineup",icon:"appImages/football.png",DeveloperName:"Tilux",category:"Productivity",Attributes:[{openLink:"https://football-squad.vercel.app/",editApp:true,addToBar:true,gitHubLink:"",showUrl:false, appDetails:"Football lineup application"}]},
                                        {name:"TilChat",icon:"appImages/chat.png",DeveloperName:"Tilux",category:"Social-Media",Attributes:[{openLink:"",editApp:true,addToBar:true,gitHubLink:"",showUrl:false, appDetails:"Chatting system application"}]},
                                        {name:"Card-game.png",icon:"appImages/card-game.png",DeveloperName:"Tilux",category:"Game",Attributes:[{openLink:"https://card-game-sigma-ashy.vercel.app/",editApp:true,addToBar:true,gitHubLink:"",showUrl:false, appDetails:"Card game Application"}]},
                                    ]
        
                                    const newOsWallpaper = [
                                        "backgroundImages/background.png",
                                        "backgroundImages/background1.jpg",
                                        "backgroundImages/background2.jpg",
                                        "backgroundImages/background3.jpg",
                                        "backgroundImages/background4.png",
                                        "backgroundImages/background5.jpg",
                                        "backgroundImages/background6.png",
                                        "backgroundImages/background7.jpg",
                                        "backgroundImages/background8.jpg",
                                        "backgroundImages/background9.png",
                                        "backgroundImages/background10.png",
                                        "backgroundImages/background11.jpg",
                                        "backgroundImages/background12.jpg",
                                        "backgroundImages/background13.jpg",
                                        "backgroundImages/background14.png"
                                    ]
                                    const uploadedWallpaperArray = [
                                        
                                    ]
                                    await set(ref(db, `Users/obj/${awaitUseCredentials.signUserName}`),{
                                        userCredentials : {obj:awaitUseCredentials},
                                        TiluxOsObj:{obj:TiluxOsObj},
                                        TiluxDesktop : {obj:desktop},
                                        appArray : {obj:newAppArray},
                                        osDefaultWallpaper: {obj:newOsWallpaper},
                                        userUploadWallpaper: {obj:[]}
                                    })
                                    localStorage.setItem("userCredential",JSON.stringify(localStorageSet))
                                    document.querySelector("#header").remove()
                                    document.querySelector("#deselect").remove()
                                    document.querySelector(".createAcc").style.animation = "slide 1s 1"
                                    setTimeout(() => {
                                        document.querySelector(".createAcc").remove()
                                        window.location.href = window.location.href + awaitUseCredentials.signUserName
                                    }, 1000);
                                })
                            })
                        }
                    })
                }
            }
        }
        else{
            document.querySelector(".createAcc").remove()
        }
    }, 3000);
}


let userDashBoard
await get(ref(db, `Users/obj/${window.userPath}/TiluxDesktop/obj`))
.then((output)=>{
    if (output.exists()) {
        userDashBoard = output.val()
    }
})
let userCred;
await get(ref(db, `Users/obj/${window.userPath}/userCredentials/obj`))
.then((output)=>{
    if (output.exists()) {
        userCred = output.val()
    }
    const UserWelcomeDisplayName = document.getElementById("UserWelcomeDisplayName")
    UserWelcomeDisplayName.innerHTML = userCred.signUserName
})
window.useUser = async() =>{
    if ((usernameGet != undefined && getUser == undefined) || (usernameGet != undefined && getUser.signUserName != usernameGet)) {
        document.querySelector(".loginPage").remove()
        document.getElementById("deselect").innerHTML = userDashBoard
        let getItem;
        await get(ref(db, `Users/obj/${window.userPath}/TiluxOsObj/obj`))
        .then((output)=>{
            if (output.exists()) {
                getItem = output.val()
            }
        })
        sideBarMap()
        allAppParentMap()
        fontSizeApply(getItem.fontSize)
        fontWeightApply(getItem.fontWeight)
        fontApply(getItem.prefferedFont)
        themeApply(getItem.theme)
        iconSizeApply(getItem.iconSize)
        setWallpaper(getItem.wallPaper)
        setWallpaperFitApply(getItem.wallPaperFit)
        document.querySelector('.settings').remove()
        document.querySelector(".dialogue").remove()
        document.querySelector("#editApps").remove()
        document.querySelector("#addApps").remove()
        document.querySelectorAll(".removeItem").forEach((removeItem)=>{
            removeItem.remove()
        })
    }
    else{
        const loginPage = document.querySelector(".loginPage")
        loginPage.innerHTML = `
            <div class="passPage">
                <img src="backgroundImages/distributor-logo-kali-linux.svg" class="logo">
                <h2>${userCred.signUserName}</h2>
                <input placeholder="password" autofocus id="passwordInput" type="password">
            </div>
        `
        document.addEventListener("keypress", async(e)=>{
            if (e.key == "Enter") {
                const passwordInput = document.getElementById("passwordInput")
                if(passwordInput.value == userCred.signPassword){
                    document.querySelector(".loginPage").style.display = "none"
                    document.getElementById("deselect").innerHTML = userDashBoard
                    let getItem;
                    await get(ref(db, `Users/obj/${window.userPath}/TiluxOsObj/obj`))
                    .then((output)=>{
                        if (output.exists()) {
                            getItem = output.val()
                        }
                    })
                    sideBarMap()
                    allAppParentMap()
                    fontSizeApply(getItem.fontSize)
                    fontWeightApply(getItem.fontWeight)
                    fontApply(getItem.prefferedFont)
                    themeApply(getItem.theme)
                    iconSizeApply(getItem.iconSize)
                    setWallpaper(getItem.wallPaper)
                    setWallpaperFitApply(getItem.wallPaperFit)
                }
                else{
                    const passwordInput = document.getElementById("passwordInput")
                    passwordInput.style.border = "2px solid red"
                    passwordInput.style.animation = "shake 0.1s linear 4"
                    setTimeout(() => {
                        passwordInput.style.border = "2px solid rgba(255, 255, 255, 0.226)"
                        passwordInput.style.animation = "s"
                    }, 400);
                }
            }
        })
    }
}



let header = document.getElementById("header")
let bluetoothOption = document.getElementById("bluetoothOption")
let edgeOption = document.getElementById("edgeOption")
let deselectList = document.querySelectorAll("#deselect")
let placesOption = document.getElementById("placesOption")
let appsOption = document.getElementById("appsOptions")
let showAppsOption = document.getElementById("showAppsOption")

// All apsOption innerHTML
let informationGathering = `
                                    <p>amass</p>
                                    <p>dmitry</p>
                                    <p>ike-scan</p>
                                    <p>legion</p>
                                    <p>maltego (installer)</p>
                                    <p>netdiscover</p>
                                    <p>nmap</p>
                                    <p>recon-ng</p>
                                    <p>spiderfoot</p>
                                    <p>zenmap</p>
                                    <p>zenmap (root)</p>`

let vulnerabiltyAnalysis = `<p>legion</p>
                            <p>nkito</p>
                            <p>nmap</p>
                            <p>unix-prevesc-check</p>
                            <p>zenmap</p>
                            <p>zenmap (root)</p>`

let webApplicationAnalysis = `<p>burpsuite</p>
                                <p>commix</p>
                                <p>skipfish</p>
                                <p>sqlmap</p>
                                <p>webshells</p>
                                <p>wpscan</p>`

let dataBaseAssessment = `<p>sqllitebrowser</p>
                        <p>sqlmap</p>`

let passwordAttacks = `<p>cewl</p>
                        <p>crunch</p>
                        <p>hashcatch</p>
                        <p>hydra</p>
                        <p>jobh</p>
                        <p>mudesa</p>
                        <p>ncrack</p>
                        <p>offcrack</p>
                        <p>wordlists</p>`

let wirelessAttacks = `
                        <p>aircrack-ng</p>
                        <p>fern-wifi-cracker</p>
                        <p>fismet</p>
                        <p>pixiewps</p>
                        <p>weafer</p>
                        <p>wifilite</p>`

let reverseEngineering =   `<p>clang</p>
                            <p>clang++</p>
                            <p>msf-nasm_shell</p>
                            <p>radare2</p>`

let explotationTools = `<p>crackmapexec</p>
                        <p>metasploit-framework</p>
                        <p>msfpc</p>
                        <p>natexec</p>
                        <p>searchsploit</p>
                        <p>setoolkit</p>
                        <p>sqlmap</p>`

let sniffingSpoofing = `<p>ettercap-pekexec</p>
                        <p>macchanger</p>
                        <p>minicom</p>
                        <p>mitmproxy</p>
                        <p>netssnif-ng</p>
                        <p>responder</p>
                        <p>scapy</p>
                        <p>tcpdump</p>
                        <p>wireshark</p>`

let postExploitation = `<p>evil-winrm</p>
                        <p>exec2hex</p>
                        <p>mimikats</p>
                        <p>netcat</p>
                        <p>powershell-empire</p>
                        <p>powersploit</p>
                        <p>proxychains4</p>
                        <p>starkiller</p>
                        <p>wiveely</p>`

let forensisc = `
                <p>autospy</p>
                <p>binwalk</p>
                <p>bulk_extractor</p>
                <p>hashdeep</p>`

let reportingTools = `<p>cherrytree</p>
                    <p>cutycapt</p>
                    <p>faraday</p>
                    <p>maltego (installer)</p>
                    <p>pipal</p>
                    <p>recordmydesktop</p>`

function dropList(params) {
    showAppsOption.innerHTML = params
}
window.closeAllOption = (parameter) =>{
    parameter.classList.remove("show")
}
setInterval(() => {
    let realTime = new Date()
    let h = realTime.getHours() < 10? "0"+realTime.getHours():realTime.getHours()
    let m = realTime.getMinutes() < 10? "0"+realTime.getMinutes():realTime.getMinutes() 
    time.innerText = `${h}:${m}`
}, 1000);

window.menu = ()=>{
    const allApp = document.getElementById("allApp")
    allApp.classList.toggle("show")
    document.querySelector(".sideMenu").classList.toggle("showSide")
    document.querySelector(".toggleBar").classList.remove("show-bar")
    closeAllOption(bluetoothOption)
    closeAllOption(placesOption)
    closeAllOption(appsOption)
    closeAllOption(edgeOption)
}

window.places = ()=>{
    closeAllOption(edgeOption)
    closeAllOption(bluetoothOption)
    closeAllOption(appsOption)
    placesOption.classList.toggle("show")
    document.querySelector(".toggleBar").classList.remove("show-bar")
}
window.bluetooth = ()=>{
    closeAllOption(edgeOption)
    closeAllOption(placesOption)
    closeAllOption(appsOption)
    bluetoothOption.classList.toggle("show")
    document.querySelector(".toggleBar").classList.remove("show-bar")
}
window.edge = ()=>{
    closeAllOption(bluetoothOption)
    closeAllOption(placesOption)
    closeAllOption(appsOption)
    edgeOption.classList.toggle("show")
    document.querySelector(".toggleBar").classList.remove("show-bar")
}
window.app = ()=>{
    closeAllOption(bluetoothOption)
    closeAllOption(placesOption)
    closeAllOption(edgeOption)
    appsOption.classList.toggle("show")
    document.querySelector(".toggleBar").classList.remove("show-bar")
}

let applicationsArray;
get(ref(db, `Users/obj/${window.userPath}/appArray/obj`))
.then((output)=>{
    if (output.exists()) {
        applicationsArray = output.val()
    }
})

let OsDefaultWallpaperArray;
get(ref(db, `Users/obj/${window.userPath}/osDefaultWallpaper/obj`))
.then((output)=>{
    if (output.exists()) {
        OsDefaultWallpaperArray = output.val()
    }
})

let uploadedWallpaperArray;
get(ref(db, `Users/obj/${window.userPath}/userUploadWallpaper/obj`))
.then((output)=>{
    if (output.exists()) {
        uploadedWallpaperArray = output.val()
    }
})

window.OsDefaultWallpaperMap = () =>{
    const OsParent = document.getElementById("os-wallpaper")
    OsParent.innerHTML = ""
    OsDefaultWallpaperArray.map((output,index)=>{
        OsParent.innerHTML += `
            <img src="${output}" onclick="setWallpaper('${output}')">
        `
    })
    OsParent.innerHTML +=`
        <label for="wallPaperUploadId"><img src="images/add.png" alt="" class="addImg"></label>
        <input type="file" id="wallPaperUploadId" style="display:none;" accept="images/*" onchange="wallPaperUpload()"/>
    `
}

window.uploadedWallpaperMap = () =>{
    const uploadWallpaperParent = document.getElementById("uploadWallpaper")
    uploadWallpaperParent.innerHTML = ""
    uploadedWallpaperArray.map((output,index)=>{
        uploadWallpaperParent.innerHTML += `
            <img src="${output}" onclick="setWallpaper('${output}')">
        `
    })
    if (uploadedWallpaperArray.length > 0) {
        document.getElementById("uploadContent").style.display = "block"
    }
}

window.sideBarMap = () =>{
    const sideBarParent = document.getElementById("sideBarParent")
    sideBarParent.innerHTML = ""
    sideBarParent.innerHTML +=`
        <img src="appImages/application.png" alt="" class="explore" onclick="menu()">
        <img src="appImages/optimization.png" alt="" id="settings" onclick="settings()">
        <img src="appImages/camera.png" id="camera">
    `
    applicationsArray.map((output,index)=>{
        if (output.Attributes[0].addToBar == true) {
            sideBarParent.innerHTML +=`
            <div>
            <section class="edit-icon-parent">
                <img class="removeItem" src="images/edit.png" style='display:none;'>
                <img class="removeItem" src="images/icon-close.svg" onclick='deleteBarApp(${index},"${output.name}")'>
            </section>
                <img src='${output.icon}' onclick='openApp("${output.Attributes[0].openLink}")'>
            </div>
        `
        }
    })
    document.querySelector(".sideMenu").style.width = "70px"
    const sideMenu = document.querySelector(".sideMenu")
    if (sideMenu.style.top == "calc(100% - 35px)") {
        document.querySelectorAll(".sideMenu img").forEach((img)=>{
            img.style.transform = "rotate(-90deg)"
        })
    }
    setTimeout(() => {
        document.querySelector(".sideMenu").style.width = "0.2px"
    }, 500);
}

window.allAppParentMap = () =>{
    const appsFunction = document.querySelector(".apps")
    appsFunction.style.display = "flex"
    appsFunction.style.flexWrap = "nowrap"
    appsFunction.style.overflow = "scroll"
    const allAppParent = document.getElementById("appArrayParent")
    allAppParent.innerHTML = ""
    applicationsArray.map((output,index)=>{
        allAppParent.innerHTML += `
            <div tabindex="0" id="app${index}" class="blurItem app" onclick="selectOpt('app${index}')">
                <img src="${output.icon}" alt="">
                <p>${output.name}</p>
                <div style="display:none;" class="edit-icon-parent">
                    <img src="images/edit.png" class="editIcon" onclick="editApp(${index})">
                    <img src="images/icon-close.svg" onclick='deleteApp(${index},"${output.name}")' class="closeIcon">
                </div>
                <div class="select" style="display:none;">
                    <button onclick='openApp("${output.Attributes[0].openLink}")'>Open App</button>
                    <button class="removeItem" onclick="editApp(${index})">Edit App</button>
                    <button class="removeItem" onclick="addToBar(${index})">Add to bar</button>
                    <button onClick="gitHubLink('${output.Attributes[0].gitHubLink}')">GitHub Link</button>
                    <button>App Details</button>
                </div>
            </div>
        `
    })
}
document.addEventListener("click",(e)=>{
    if(e.target.id == "allApp" || e.target.id == "monitor" || e.target.id == "appArrayParent"){
        document.querySelectorAll(".sideMenu div").forEach((sideDiv)=>{
            sideDiv.style.animation = ""
        })
        document.querySelector(".sideMenu").style.width = "0.2px"
        document.querySelectorAll(".edit-icon-parent").forEach((edit)=>{
            edit.style.display = "none"
        })
        document.querySelectorAll("section .allApp .apps > div").forEach((tilt)=>{
            tilt.style.animation = ""
        })
        document.querySelectorAll(".blurItem").forEach((blurItem)=>{
            blurItem.style.filter = "blur(0px)"
        })
        
        document.querySelectorAll(".app").forEach((app)=>{
            app.style.scale = "1"
            app.style.pointerEvents = ""
        })
        document.querySelectorAll(".app .select").forEach((app)=>{
            app.style.display = "none"
        })
        document.querySelector(".sideMenu").style.width = "0px"
        document.querySelector(".sideMenu").style.padding = "5px"
    }
    
})
window.editApps = ()=>{
    document.querySelectorAll(".blurItem").forEach((blurItem)=>{
        blurItem.style.filter = "blur(0px)"
    })
    document.querySelectorAll(".app").forEach((app)=>{
        app.style.scale = "1"
        app.style.pointerEvents = ""
    })
    document.querySelector(".sideMenu").style.width = "70px"
    document.querySelector(".sideMenu").style.padding = "5px"
    document.querySelectorAll(".app .select").forEach((app)=>{
        app.style.display = "none"
    })
    document.querySelectorAll(".sideMenu div").forEach((sideDiv)=>{
        sideDiv.style.animation = "tilt 0.2s linear infinite"
    })
    document.querySelector(".sideMenu").style.width = "70px"
    document.querySelectorAll(".edit-icon-parent").forEach((edit)=>{
        edit.style.display = "block"
    })
    document.querySelectorAll("section .allApp .apps > div").forEach((tilt)=>{
        tilt.style.animation = "tilt 0.2s linear infinite"
    })
}

window.addApp = ()=>{
    dialogue.style.display = "block"
    const section = document.getElementById("deselect")
    document.getElementById("menu1").style.pointerEvents = "none"
    section.style.pointerEvents = "none"
    section.style.filter = "blur(10px)"
}



window.deleteApp = (i,appName) =>{
    const query = confirm(`Do you want to delete ${appName}?`)
    if(query){
        applicationsArray.splice(i,1)
        set(ref(db, `Users/obj/${window.userPath}/appArray`),{
            obj: applicationsArray
        })
        allAppParentMap()
    }
};
window.deleteBarApp = (index,appName) =>{
    const query = confirm(`Do you want to remove ${appName} from side bar?`)
    if(query){
        applicationsArray[index].Attributes[0].addToBar = false
        set(ref(db, `Users/obj/${window.userPath}/appArray`),{
            obj: applicationsArray
        })
        sideBarMap()
    }
};

window.selectOpt = (e) =>{
    const parent = document.getElementById(e)
    const editIcon = document.querySelector(`#${e} .edit-icon-parent`)
    if(editIcon.style.display == "none" ){
        if(parent.style.filter == "blur(10px)"){
            document.querySelectorAll(".blurItem").forEach((blurItem)=>{
                blurItem.style.filter = "blur(0px)"
            })
            document.querySelectorAll(".app").forEach((app)=>{
                app.style.scale = "1"
                app.style.pointerEvents = ""
            })
            document.querySelectorAll(".app .select").forEach((app)=>{
                app.style.display = "none"
            })
            document.querySelector(".sideMenu").style.width = "70px"
            document.querySelector(".sideMenu").style.padding = "5px"
        }
        else{
            document.querySelectorAll(".blurItem").forEach((blurItem)=>{
                blurItem.style.filter = "blur(10px)"
            })
            document.querySelectorAll(".app").forEach((app)=>{
                app.style.pointerEvents = "none"
            })
            parent.style.pointerEvents = ""
            parent.style.scale = "1.21"
            parent.style.filter = "blur(0px)"
            document.querySelector(".sideMenu").style.width = "0px"
            document.querySelector(".sideMenu").style.padding = "0px"
            document.querySelector(`#${e} .select`).style.display = "block"
        }
    }
}

window.openApp = (param) => {
    const section = document.querySelector("#deselect")
    const header = document.querySelector(".headerOverall")
    section.style.filter = "brightness(.4)"
    section.style.pointerEvents = "none"
    header.style.filter = "brightness(.4)"
    header.style.pointerEvents = "none"
    document.querySelector("body").innerHTML += `
    <div class="browserApp">
        <div class="header">
            <img src="images/icon-close.svg" onclick="closeApp()">
        </div>
        <div class="iframe-parent">
            <div class='loader'>
                <img src="backgroundImages/loader.png">
            </div>
            <iframe src="${param}" frameborder="0" sandbox="allow-scripts allow-modals allow-same-origin"></iframe>
        </div>
    </div>
    `
    document.querySelector("iframe").addEventListener("load", (e)=>{
        e.target.style.background = "black"
    })
    return;
}

window.closeApp = () =>{
    document.querySelector("iframe").style.background = ""
    document.querySelector(".browserApp").remove()
    const section = document.querySelector("#deselect")
    const header = document.querySelector(".headerOverall")
    section.style.filter = "brightness(1)"
    section.style.pointerEvents = ""
    header.style.filter = "brightness(1)"
    header.style.pointerEvents = ""
    return;
}

window.gitHubLink = (param) =>{
    window.open(param)
}


// Dialogue Section

let appImg = document.getElementById("appImg")
let appImageUpload = document.getElementById("appImgUpload")
let appName = document.getElementById("appName")
let appDeveloperName = document.getElementById("appDeveloperName")
let appCategory = document.getElementById("appCategory")
let appLink = document.getElementById("appLink")
let appGitHubLink = document.getElementById("appGitHubLink")
let appDescription = document.getElementById("appDescription")
const addDoneBtn = document.getElementById("addDone") 
const addCancelBtn = document.getElementById("addCancel")
const editDoneBtn = document.getElementById("editDone")


window.appCategory = ()=>{
    let appImg = document.getElementById("appImg")
    appImg.src = `appImages/${appCategory.value}.png`
}

window.appImageUpload = ()=>{
    let appImg = document.getElementById("appImg")
    let appImageUpload = document.getElementById("appImgUpload")
    const file = appImageUpload.files[0]
    const reader = new FileReader
    reader.addEventListener("load",(e)=>{
        const imgBase64 = e.target.result
        appImg.src = imgBase64
    })
    reader.readAsDataURL(file)
}

window.appName = ()=>{
    let appName = document.getElementById("appName")
    if (!appName.value) {
        appName.style.border = "2px solid red"
        appName.style.animation = "shake 0.1s linear 4"
    }
    else{
        appName.style.border = "0"
        appName.style.animation = "s"
    }
}
window.appDeveloperName = ()=>{
    let appDeveloperName = document.getElementById("appDeveloperName")
    if (!appDeveloperName.value) {
        appDeveloperName.style.border = "2px solid red"
        appDeveloperName.style.animation = "shake 0.1s linear 4"
    }
    else{
        appDeveloperName.style.border = "0"
        appDeveloperName.style.animation = "s"
    }
}
window.appLink = ()=>{
    let appLink = document.getElementById("appLink")
    if (!appLink.value) {
        appLink.style.border = "2px solid red"
        appLink.style.animation = "shake 0.1s linear 4"
    }
    else{
        appLink.style.border = "0"
        appLink.style.animation = "s"
    }
}
window.appDescription = ()=>{
    let appDescription = document.getElementById("appDescription")
    if (!appDescription.value) {
        appDescription.style.border = "2px solid red"
        appDescription.style.animation = "shake 0.1s linear 4"
    }
    else{
        appDescription.style.border = "0"
        appDescription.style.animation = "s"
    }
}


window.addDoneBtn = ()=>{
    let appImg = document.getElementById("appImg")
    let appName = document.getElementById("appName")
    let appDeveloperName = document.getElementById("appDeveloperName")
    let appCategory = document.getElementById("appCategory")
    let appLink = document.getElementById("appLink")
    let appGitHubLink = document.getElementById("appGitHubLink")
    let appDescription = document.getElementById("appDescription")
    if (!appName.value) {
        appName.style.border = "2px solid red"
        appName.style.animation = "shake 0.1s linear 4"
    }
    if (!appDeveloperName.value) {
        appDeveloperName.style.border = "2px solid red"
        appDeveloperName.style.animation = "shake 0.1s linear 4"
    }
    if (!appLink.value) {
        appLink.style.border = "2px solid red"
        appLink.style.animation = "shake 0.1s linear 4"
    }
    if (!appDescription.value) {
        appDescription.style.border = "2px solid red"
        appDescription.style.animation = "shake 0.1s linear 4"
    }
    else{
        applicationsArray.push({name:appName.value,icon:appImg.src,DeveloperName:appDeveloperName.value,category:appCategory.value,Attributes:[{openLink:appLink.value,editApp:false,addToBar:false,gitHubLink:appGitHubLink.value,showUrl:false,appDetails:appDescription.value}]})
        set(ref(db, `Users/obj/${window.userPath}/appArray`),{
            obj: applicationsArray
        })
        appName.value = ""
        appDeveloperName.value = ""
        appLink.value = ""
        appGitHubLink.value = ""
        appDescription.value =""
        dialogue.style.display = "none"
        const section = document.getElementById("deselect")
        document.getElementById("menu1").style.pointerEvents = ""
        section.style.pointerEvents = ""
        section.style.filter = "blur(0px)"
        allAppParentMap()
    }
}
let useIndex;
window.editDoneBtn = ()=>{
    if (!appName.value) {
        appName.style.border = "2px solid red"
        appName.style.animation = "shake 0.1s linear 4"
    }
    if (!appDeveloperName.value) {
        appDeveloperName.style.border = "2px solid red"
        appDeveloperName.style.animation = "shake 0.1s linear 4"
    }
    if (!appLink.value) {
        appLink.style.border = "2px solid red"
        appLink.style.animation = "shake 0.1s linear 4"
    }
    if (!appDescription.value) {
        appDescription.style.border = "2px solid red"
        appDescription.style.animation = "shake 0.1s linear 4"
    }
    else{
        applicationsArray[useIndex] = {name:appName.value,icon:appImg.src,DeveloperName:appDeveloperName.value,category:appCategory.value,Attributes:[{openLink:appLink.value,editApp:false,addToBar:false,gitHubLink:appGitHubLink.value,showUrl:false,appDetails:appDescription.value}]}
        set(ref(db, `Users/obj/${window.userPath}/appArray`),{
            obj: applicationsArray
        })
        appName.value = ""
        appDeveloperName.value = ""
        appLink.value = ""
        appGitHubLink.value = ""
        appDescription.value =""
        dialogue.style.display = "none"
        const section = document.getElementById("deselect")
        document.getElementById("menu1").style.pointerEvents = ""
        section.style.pointerEvents = ""
        section.style.filter = "blur(0px)"
        addDoneBtn.style.display = "block"
        editDoneBtn.style.display = "none"
        allAppParentMap()
    }
}
window.addCancelBtn = ()=>{
    let appName = document.getElementById("appName")
    let appDeveloperName = document.getElementById("appDeveloperName")
    let appLink = document.getElementById("appLink")
    let appGitHubLink = document.getElementById("appGitHubLink")
    let appDescription = document.getElementById("appDescription")
    const addDoneBtn = document.getElementById("addDone") 
    const editDoneBtn = document.getElementById("editDone")
    appName.value = ""
    appDeveloperName.value = ""
    appLink.value = ""
    appGitHubLink.value = ""
    appDescription.value =""
    dialogue.style.display = "none"
    const section = document.getElementById("deselect")
    document.getElementById("menu1").style.pointerEvents = ""
    section.style.pointerEvents = ""
    section.style.filter = "blur(0px)"
    addDoneBtn.style.display = "block"
    editDoneBtn.style.display = "none"
}

// select function

window.addToBar = (index) =>{
    applicationsArray[index].Attributes[0].addToBar = true
    set(ref(db, `Users/obj/${window.userPath}/appArray`),{
        obj: applicationsArray
    })
    sideBarMap()
}
window.editApp = (index) =>{
    let appImg = document.getElementById("appImg")
    let appName = document.getElementById("appName")
    let appDeveloperName = document.getElementById("appDeveloperName")
    let appLink = document.getElementById("appLink")
    let appGitHubLink = document.getElementById("appGitHubLink")
    let appDescription = document.getElementById("appDescription")
    const addDoneBtn = document.getElementById("addDone") 
    const editDoneBtn = document.getElementById("editDone")
    const app = applicationsArray[index]
    dialogue.style.display = "block"
    const section = document.getElementById("deselect")
    document.getElementById("menu1").style.pointerEvents = "none"
    section.style.pointerEvents = "none"
    section.style.filter = "blur(10px)"
    appName.value = app.name
    appDeveloperName.value = app.DeveloperName
    appImg.src = app.icon
    appLink.value = app.Attributes[0].openLink
    appGitHubLink.value = app.Attributes[0].gitHubLink
    appDescription.value = app.Attributes[0].appDetails
    useIndex = index
    addDoneBtn.style.display = "none"
    editDoneBtn.style.display = "block"
}


// Home Settings
window.settings = ()=>{
    const settingsApp = document.getElementById("settingsApp")
    const menu = document.getElementById("menu1")
    settingsApp.style.display = "flex"
    menu.style.pointerEvents = "none"
    menu1.style.pointerEvents = "none"
    document.querySelector("#deselect").style.pointerEvents = "none"
    document.querySelector(".explore").style.pointerEvents = "none"
    const allApp = document.getElementById("allApp")
    allApp.classList.remove("show")
    document.querySelector(".sideMenu").classList.add("showSide")
}
window.closeSettings = ()=>{
    const settingsApp = document.getElementById("settingsApp")
    const menu = document.getElementById("menu1")
    settingsApp.style.display = "none"
    menu.style.pointerEvents = ""
    menu1.style.pointerEvents = ""
    document.querySelector("#deselect").style.pointerEvents = ""
    document.querySelector(".explore").style.pointerEvents = ""
}

window.fontsSection = ()=>{
    const fontsSection = document.getElementById("fontsSection")
    const settingsContent = document.getElementById("settingsContent")
    document.querySelectorAll(".settingsSection").forEach((section)=>{
        section.style.background = "transparent"
    })
    fontsSection.style.background = "#acaeca38"
    settingsContent.innerHTML = `
        <h2 style="margin-top: 25px;">Font Size</h2>
        <select id="fontSizeId" onchange="fontSize()">
            <option value="12px">small</option>
            <option value="14px" selected>medium</option>
            <option value="17px">large</option>
        </select>
        <h2>Font Weight</h2>
        <select id="fontWeightId" onchange="fontWeight()">
            <option value="lighter">lighter</option>
            <option value="normal" selected>normal</option>
            <option value="bold">bold</option>
            <option value="bolder">bolder</option>
        </select>
        <h2>Preffered Font</h2>
        <select id="fontId" onchange="font()">
            <option value="Arial">Arial</option>
            <option value="monospace">Monospace</option>
            <option value="sans-serif" selected>Sans-serif</option>
            <option value="serif">Serif</option>
            <option value="Georgia">Georgia</option>
        </select>
    `
    
}



window.appearanceSection = ()=>{
    const appearanceSection = document.getElementById("appearanceSection")
    const settingsContent = document.getElementById("settingsContent")
    document.querySelectorAll(".settingsSection").forEach((section)=>{
        section.style.background = "transparent"
    })
    appearanceSection.style.background = "#acaeca38"
    settingsContent.innerHTML = `
        <h2>Theme</h2>
        <select id="themeId" onchange="theme()">
            <option value="#e9e1e1d7">Light</option>
            <option value="#303241d7">Dark</option>
        </select>
        <h2>Icon Size</h2>
        <select name="" id="iconSizeId" onchange="iconSize()">
            <option value="40px">Small</option>
            <option value="60px" selected>Normal</option>
            <option value="80px">Large</option>
        </select>
        <h2>Taskbar Position</h2>
        <select name="" id="taskbarPositionId" onchange="taskbarPosition()">
            <option value="left" selected>Left</option>
            <option value="right">Right</option>
            <option value="bottom">Bottom</option>
        </select>
        <h2>Taskbar Size</h2>
        <select name="" id="taskbarSizeId" onchange="taskbarSize()">
            <option value="0.95">Small</option>
            <option value="1" selected>Normal</option>
            <option value="1.05" selected>Large</option>
        </select>
    `
}

window.wallpaperSection = ()=>{
    const wallpaperSection = document.getElementById("wallpaperSection")
    const settingsContent = document.getElementById("settingsContent")
    document.querySelectorAll(".settingsSection").forEach((section)=>{
        section.style.background = "transparent"
    })
    wallpaperSection.style.background = "#acaeca38"
    settingsContent.innerHTML = `
        <h2 style="margin-top: 25px;">Wallpaper Fit</h2>
        <select name="" id="setWallpaperFitId" onchange="setWallpaperFit()">
            <option value="auto">Auto</option>
            <option value="Contain">Contain</option>
            <option value="cover">Cover</option>
        </select>
        <h2 style="margin-top: 30px;">Wallpaper</h2>
        <div class="os-wallpaper" id="os-wallpaper">
            
        </div>
        <h2 style="margin-top: 50px;display:none;" id="uploadContent">Your Wallpaper</h2>
        <div class="os-wallpaper" id="uploadWallpaper">
        </div>
    `
    OsDefaultWallpaperMap()
}

window.fontSize = async() =>{
    const fontSizeId = document.getElementById("fontSizeId")
    document.querySelectorAll("p").forEach((p)=>{
        p.style.fontSize = fontSizeId.value
    })
    let getItems;
    await get(ref(db, `Users/obj/${window.userPath}/TiluxOsObj/obj`))
        .then((output)=>{
            if (output.exists()) {
                getItems = output.val()
            }
        })
    getItems.fontSize = fontSizeId.value
    await set(ref(db, `Users/obj/${window.userPath}/TiluxOsObj`),{
        obj: getItems
    })
}

window.fontSizeApply = (param) =>{
    document.querySelectorAll("p").forEach((p)=>{
        p.style.fontSize = param
    })
}

window.fontWeight = async() =>{
    const fontWeightId = document.getElementById("fontWeightId")
    document.querySelectorAll("p").forEach((p)=>{
        p.style.fontWeight = fontWeightId.value
    })
    let getItems;
    await get(ref(db, `Users/obj/${window.userPath}/TiluxOsObj/obj`))
        .then((output)=>{
            if (output.exists()) {
                getItems = output.val()
            }
        })
    getItems.fontWeight = fontWeightId.value
    await set(ref(db, `Users/obj/${window.userPath}/TiluxOsObj`),{
        obj: getItems
    })
}

window.fontWeightApply = (param) =>{
    document.querySelectorAll("p").forEach((p)=>{
        p.style.fontWeight = param
    })
}

window.font = async() =>{
    const fontId = document.getElementById("fontId")
    document.querySelectorAll("*").forEach((p)=>{
        p.style.fontFamily = fontId.value
    })
    let getItems;
    await get(ref(db, `Users/obj/${window.userPath}/TiluxOsObj/obj`))
        .then((output)=>{
            if (output.exists()) {
                getItems = output.val()
            }
        })
    getItems.prefferedFont = fontId.value
    await set(ref(db, `Users/obj/${window.userPath}/TiluxOsObj`),{
        obj: getItems
    })
}

window.fontApply = (param) =>{
    document.querySelectorAll("*").forEach((p)=>{
        p.style.fontFamily = param
    })
}

window.theme = async() =>{
    const themeId = document.getElementById("themeId")
    document.querySelector("header").style.background = themeId.value
    const darkStyle = document.getElementById("darkStyle")
    if (themeId.value == "#303241d7") {
        darkStyle.classList.add("bg-change")
        document.querySelector("header").style.color = "whitesmoke"
        document.querySelectorAll(".themeItem img").forEach((themeDark)=>{
            themeDark.style.filter = "invert(1) opacity(.9)"
        })
        document.querySelectorAll(".themeItemButton div").forEach((themeDark)=>{
            themeDark.style.filter = "opacity(.9)"
            themeDark.style.background = "white"
        })
        document.querySelector(".settings .header").style.background = "#303241d7"
        await set(ref(db, `Users/obj/${window.userPath}/TiluxDesktop`),{
            obj: document.getElementById("deselect").innerHTML
        })
    }
    else{
        darkStyle.classList.remove("bg-change")
        document.querySelector("header").style.color = "black"
        document.querySelectorAll(".themeItem img").forEach((themeDark)=>{
            themeDark.style.filter = "invert(0) opacity(1)"
        })
        document.querySelectorAll(".themeItemButton div").forEach((themeDark)=>{
            themeDark.style.filter = "opacity(1)"
            themeDark.style.background = "black"
        })
        document.querySelector(".settings .header").style.background = "#e9e1e1d7"
    }
    let getItems;
    await get(ref(db, `Users/obj/${window.userPath}/TiluxOsObj/obj`))
        .then((output)=>{
            if (output.exists()) {
                getItems = output.val()
            }
        })
    getItems.theme = themeId.value
    await set(ref(db, `Users/obj/${window.userPath}/TiluxOsObj`),{
        obj: getItems
    })
}

window.themeApply = async(param) =>{
    document.querySelector("header").style.background = param
    if (param == "#303241d7") {
        document.querySelector("header").style.color = "whitesmoke"
        document.querySelectorAll(".themeItem img").forEach((themeDark)=>{
            themeDark.style.filter = "invert(1) opacity(.9)"
        })
        document.querySelectorAll(".themeItemButton div").forEach((themeDark)=>{
            themeDark.style.filter = "opacity(.9)"
            themeDark.style.background = "white"
        })
        document.querySelector(".settings .header").style.background = "#303241d7"
        await set(ref(db, `Users/obj/${window.userPath}/TiluxDesktop`),{
            obj: document.getElementById("deselect").innerHTML
        })
    }
    else{
        document.querySelector("header").style.color = "black"
        document.querySelectorAll(".themeItem img").forEach((themeDark)=>{
            themeDark.style.filter = "invert(0) opacity(1)"
        })
        document.querySelectorAll(".themeItemButton div").forEach((themeDark)=>{
            themeDark.style.filter = "opacity(1)"
            themeDark.style.background = "black"
        })
        document.querySelector(".settings .header").style.background = "#e9e1e1d7"
        
        await set(ref(db, `Users/obj/${window.userPath}/TiluxDesktop`),{
            obj: document.getElementById("deselect").innerHTML
        })
    }
}

window.iconSize = async() =>{
    const iconSizeId = document.getElementById("iconSizeId")
    document.querySelectorAll("section .allApp .apps  div img:nth-child(1)").forEach((image)=>{
        image.style.width = iconSizeId.value
        image.style.height = iconSizeId.value
    })
    let getItems;
    await get(ref(db, `Users/obj/${window.userPath}/TiluxOsObj/obj`))
        .then((output)=>{
            if (output.exists()) {
                getItems = output.val()
            }
        })
    getItems.iconSize = iconSizeId.value
    await set(ref(db, `Users/obj/${window.userPath}/TiluxOsObj`),{
        obj: getItems
    })
}

window.iconSizeApply = (param) =>{
    document.querySelectorAll("section .allApp .apps  div img:nth-child(1)").forEach((image)=>{
        image.style.width = param
        image.style.height = param
    })
}

window.taskbarPosition = async() =>{
    const taskbarPositionId = document.getElementById("taskbarPositionId")
    if (taskbarPositionId.value == "right") {
        document.querySelector(".sideMenu").style.right = "0"
        document.querySelector(".sideMenu").style.width = "0.2px"
        document.querySelector(".sideMenu").style.padding = "5px"
        document.querySelector(".sideMenu").style.left = ""
        document.querySelector(".sideMenu").style.top = ""
        document.querySelector(".sideMenu").style.transform = ""
        document.querySelectorAll(".sideMenu img").forEach((img)=>{
            img.style.transform = ""
        })
    }
    else if (taskbarPositionId.value == "bottom") {
        document.querySelector(".sideMenu").style.width = "0px"
        document.querySelector(".sideMenu").style.padding = "5px"
        document.querySelector(".sideMenu").style.left = "50%"
        document.querySelector(".sideMenu").style.top = "calc(100% - 35px)"
        document.querySelector(".sideMenu").style.transform = "translate(-50%,-50%) rotate(90deg)"
        document.querySelectorAll(".sideMenu img").forEach((img)=>{
            img.style.transform = "rotate(-90deg)"
        })
    }
    else{
        document.querySelector(".sideMenu").style.right = ""
        document.querySelector(".sideMenu").style.width = "0.2px"
        document.querySelector(".sideMenu").style.padding = "5px"
        document.querySelector(".sideMenu").style.left = "0"
        document.querySelector(".sideMenu").style.top = ""
        document.querySelector(".sideMenu").style.transform = ""
        document.querySelectorAll(".sideMenu img").forEach((img)=>{
            img.style.transform = ""
        })
    }
    await set(ref(db, `Users/obj/${window.userPath}/TiluxDesktop`),{
        obj: document.getElementById("deselect").innerHTML
    })
}

window.taskbarSize = async() =>{
    const taskbarSizeId = document.getElementById("taskbarSizeId")
    document.querySelector(".sideMenu").style.scale = taskbarSizeId.value
    await set(ref(db, `Users/obj/${window.userPath}/TiluxDesktop`),{
        obj: document.getElementById("deselect").innerHTML
    })
}

window.setWallpaper = async(params) =>{
    document.querySelector("body").style.background = `url(${params})`
    document.querySelector("body").style.backgroundSize = "cover"
    let getItems;
    await get(ref(db, `Users/obj/${window.userPath}/TiluxOsObj/obj`))
        .then((output)=>{
            if (output.exists()) {
                getItems = output.val()
            }
        })
    getItems.wallPaper = params
    await set(ref(db, `Users/obj/${window.userPath}/TiluxOsObj`),{
        obj: getItems
    })
}

window.setWallpaperFit = async() =>{
    const setWallpaperFitId = document.getElementById("setWallpaperFitId")
    document.querySelector("body").style.backgroundSize = setWallpaperFitId.value
    let getItems;
    await get(ref(db, `Users/obj/${window.userPath}/TiluxOsObj/obj`))
        .then((output)=>{
            if (output.exists()) {
                getItems = output.val()
            }
        })
    getItems.wallPaperFit = setWallpaperFitId.value
    await set(ref(db, `Users/obj/${window.userPath}/TiluxOsObj`),{
        obj: getItems
    })
}

window.setWallpaperFitApply = (params) =>{
    document.querySelector("body").style.backgroundSize = params
}

window.wallPaperUpload = () =>{
    const wallPaperUploadId = document.getElementById("wallPaperUploadId")
    const file = wallPaperUploadId.files[0]
    const reader = new FileReader
    reader.addEventListener("load",(e)=>{
        const imgBase64 = e.target.result
        uploadedWallpaperArray.push(imgBase64)
        uploadedWallpaperMap()
    })
    reader.readAsDataURL(file)
    
}

window.toggleBarEvent = () =>{
    const toggleBar = document.querySelector(".toggleBar")
    toggleBar.classList.toggle("show-bar")
    closeAllOption(bluetoothOption)
    closeAllOption(placesOption)
    closeAllOption(appsOption)
    closeAllOption(edgeOption)
}

window.settingsBar = ()=>{
    document.querySelector(".toggleBar").classList.remove("show-bar")
    settings()
}

window.lock = ()=>{
    const lock = document.getElementById("lock")
    document.querySelector(".loginPage").style.display = "flex"
    useUser()
}
window.powerOption = () =>{
    document.querySelector(".toggleBar .powerSelect").classList.toggle("showPower")
}

window.brightness = ()=>{
    const rate = document.getElementById("brightness").value
    if (rate == 100) {
        document.querySelector("body").style.filter = `brightness(1)`
    }
    else {
        document.querySelector("body").style.filter = `brightness(.${rate + 50})`
    }
}
window.deselect = ()=>{
    document.querySelector(".toggleBar").classList.remove("show-bar")
    closeAllOption(bluetoothOption)
    closeAllOption(placesOption)
    closeAllOption(appsOption)
    closeAllOption(edgeOption)
}
window.night = (e)=>{
    const nightLight  = document.getElementById("nightLight")
    nightLight.classList.toggle("bg-change")
    if (nightLight.classList.contains("bg-change")) {
        document.querySelector("#deselect").style.filter = `saturate(3) sepia(.6)`
    }
    else{
        document.querySelector("#deselect").style.filter = ``
    }
}

window.darkStyle = ()=>{
    const darkStyle = document.getElementById("darkStyle")
    if (darkStyle.classList.contains("bg-change")) {
        themeApply("#e9e1e1d7")
        darkStyle.classList.remove("bg-change")
    }
    else{
        themeApply("#303241d7")
        darkStyle.classList.add("bg-change")
    }
}
window.powerSaver = ()=>{
    const powerSaver = document.getElementById("powerSaver")
    powerSaver.classList.toggle("bg-change")
    if(powerSaver.classList.contains("bg-change")){
        brightness.value = 60
        document.querySelector("body").style.filter = `brightness(.6)`
    }
    else{
        brightness.value = 90
        document.querySelector("body").style.filter = `brightness(.9)`
    }
}
window.wifiMenu = ()=>{
    const wifiMenu = document.getElementById("wifiMenu")
    wifiMenu.classList.toggle("bg-change")
}
window.bluetoothMenu = ()=>{
    const bluetoothMenu = document.getElementById("bluetoothMenu")
    bluetoothMenu.classList.toggle("bg-change")
}
window.ethernet = ()=>{
    const ethernet = document.getElementById("ethernet")
    ethernet.classList.toggle("bg-change")
}

window.powerOff = () =>{
    body.innerHTML = `
        <div class="boot">
            <img src="backgroundImages/distributor-logo-kali-linux.svg" alt="" class="bootLogo">
            <div>
                <h1 class="loadContent">Tilux Developer Os</h1>
                <img src="backgroundImages/loader.png" alt="" class="loader">
            </div>
        </div>
    `
    setTimeout(() => {
        document.querySelector(".loadContent").textContent = "Saving Settings"
        setTimeout(() => {
            document.querySelector(".loadContent").textContent = "Saving Configuration"
            setTimeout(() => {
                document.querySelector(".loadContent").textContent = "Shutting Down"
            }, 1000);
        }, 500);
    }, 1000);
    setTimeout(() => {
        window.location.href = "about:blank"
    }, 3000);
}

window.restart = () =>{
    const currentLocation = window.location.href
    body.innerHTML = `
        <div class="boot">
            <img src="backgroundImages/distributor-logo-kali-linux.svg" alt="" class="bootLogo">
            <div>
                <h1 class="loadContent">Tilux Developer Os</h1>
                <img src="backgroundImages/loader.png" alt="" class="loader">
            </div>
        </div>
    `
    setTimeout(() => {
        document.querySelector(".loadContent").textContent = "Saving Settings"
        setTimeout(() => {
            document.querySelector(".loadContent").textContent = "Saving configuration"
            setTimeout(() => {
                document.querySelector(".loadContent").textContent = "Restarting Os"
                setTimeout(() => {
                    document.querySelector("body").innerHTML = ""
                }, 500);
            }, 1000);
        }, 500);
    }, 1000);
    setTimeout(() => {
        window.location.href = currentLocation
    }, 4000);
}

if(window.innerWidth < 1174){
    document.querySelector("body").innerHTML = `<div class="overall">
                            <h1>Os is not available for mobile</h>
                        </div>`
}
else{
    loadPage()
}

