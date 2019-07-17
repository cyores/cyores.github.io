function toggleEle(id, expandBtnId) {
    let ele = document.getElementById(id);
    let expandBtn = document.getElementById(expandBtnId);
    if(ele.style.display === 'none') {
        ele.style.display = 'block';
        expandBtn.textContent = '- See Less';
    }
    else {
        ele.style.display = 'none';
        expandBtn.textContent = '+ See More';
    }
}