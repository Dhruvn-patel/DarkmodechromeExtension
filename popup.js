if (document.querySelector(".popup")) {
    const button = document.querySelector(".button");
    const circleanime = document.querySelector(".circle");
    let buttonON = false;


    button.addEventListener("click", async () => {


        if (!buttonON) {
            buttonON = true;
            
            button.style.animation = "tranformToBlue 0.3s ease-in-out 0s forwards"
            circleanime.style.animation = "moveCircleRight 0.3s ease-in-out 0s forwards"
            
            
            let [tab]=await chrome.tabs.query({active:true,currentWindow:true});
            chrome.scripting.executeScript({
                target: { tabId: tab.id, allFrames: true },
                files: ['OnApp.js'],
            })
        }
        else {
            buttonON = false;
            
            button.style.animation = "tranformToYellow 0.3s ease-in-out 0s forwards"
            circleanime.style.animation = "moveCircleLeft 0.3s ease-in-out 0s forwards"
            
            
            
            let [tab]=await chrome.tabs.query({active:true,currentWindow:true});
            chrome.scripting.executeScript(
                {
                    target: { tabId: tab.id, allFrames: true },
                    files: ['OffApp.js'],
                }
            )
        }
    })
}