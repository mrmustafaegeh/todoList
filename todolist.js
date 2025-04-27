const inputBox=document.getElementById("input-box");
const containerList=document.getElementById("task-area");
document.getElementById('add-btn').addEventListener('click', function(){
    if(inputBox.value === ''){
        alert(`Type task`)
    }else{
        let task = document.createElement('li');
        task.innerHTML = inputBox.value;
        containerList.appendChild(task)
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        task.appendChild(span)
    }
    inputBox.value = ""

})

containerList.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
}, false); 


function saveData(){
    
}