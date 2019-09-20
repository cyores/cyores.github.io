function toggleEle(id, expandBtnId) {
    let ele = document.getElementById(id);
    let expandBtn = document.getElementById(expandBtnId);
    if (ele.style.display === "none") {
        ele.style.display = "block";
        expandBtn.textContent = "- See Less";
    } else {
        ele.style.display = "none";
        expandBtn.textContent = "+ See More";
    }
}

function navToProjects() {
    document.getElementById("resume").style.display = "none";
    document.getElementById("projects").style.display = "block";
    document.getElementById("nav-resume").classList.remove("active");
    document.getElementById("nav-projects").classList.add("active");
}

function navToResume() {
    document.getElementById("resume").style.display = "block";
    document.getElementById("projects").style.display = "none";
    document.getElementById("nav-resume").classList.add("active");
    document.getElementById("nav-projects").classList.remove("active");
}
