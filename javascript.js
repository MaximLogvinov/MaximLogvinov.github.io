function openNav() {
    document.getElementById("SideNavMenu").style.marginLeft = "0";
    document.getElementById("SideNavMenu").style.width = "100vw";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)t";
    console.log("open");
}

function closeNav() {
    document.getElementById("SideNavMenu").style.marginLeft = "-100vw";
    document.body.style.backgroundColor = "white";
}

function playPause(btn,vid){
    var vid = document.getElementById(vid);
    if(vid.paused){
        vid.play();
        btn.innerHTML = "<i class=\"fas fa-pause\"></i>";
    } else {
        vid.pause();
        btn.innerHTML = "<i class=\"fas fa-play\"></i>";
    }
}
function showContentExchanger() {
    document.getElementById("descriptionHeatExchangerNext").style.display = "block";
    document.getElementById("expandDataLinkExchanger").style.display = "none";
}
function hideContentExchanger() {
    document.getElementById("descriptionHeatExchangerNext").style.display = "none";
    document.getElementById("expandDataLinkExchanger").style.display = "inline";
}

function showContent() {
    document.getElementById("descriptionHeatExchanger").style.display = "block";
    document.getElementById("expandDataLink").style.display = "none";
}
function hideContent() {
    document.getElementById("descriptionHeatExchanger").style.display = "none";
    document.getElementById("expandDataLink").style.display = "inline";
}
