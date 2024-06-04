const buttons=document.querySelectorAll('.btn');
const boxes=document.querySelectorAll('.box');
const searchBox=document.querySelector("#search");

/* Search Product by Textbox */
searchBox.addEventListener('keyup',(e)=>{
    searchText=e.target.value.toLowerCase().trim();
    boxes.forEach((box)=>{
        const data=box.dataset.item;
        if(data.includes(searchText)){
            box.style.display='block';
        }else{
            box.style.display='none';
        }
    });

    button.forEach((button)=>{
        button.classList.remove('btn-clicked');
    });
    button[0].classList.add('btn-click');
});

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        setActiveBtn(e);
        const filter=e.target.dataset.filter;
        
        boxes.forEach((box=>{
            if(filter=='all'){
                box.style.display="block";
            }else{
                const boxfilter=box.dataset.item;
                if(btnfilter==boxfilter){
                    box.style.display="block";
                }else{
                    box.style.display="none";
                }
            }
        }))
    });
});

function setActiveBtn(e){
    button.forEach((button)=>{
        button.classList.remove('btn-clicked');
    });
    e.target.classList.add('btn-clicked');
}