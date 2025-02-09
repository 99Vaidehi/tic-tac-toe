 let boxes=document.querySelectorAll(".box");
 let res=document.querySelector("#reset");

 let newgame=document.querySelector("#new");
 let msgcon=document.querySelector(".msg-con");
 let mssg=document.querySelector("#msg");


 let turnO=true;
 let arr=[
    [0,1,2],
    [0,3,6 ],
    [0,4,8],
    [1,4,7,],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
 ];





 boxes.forEach((box)=> {
    box.addEventListener("click" , ()=>{
        console.log("box was clicked");
        if(turnO)
        {
            box.innerText="O";
            turnO=false;

        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwin();
    });

 });



 checkwin =()=>{
    for( let pattern of arr)
    {  
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;

        if(p1!="" && p2!="" && p3!="")
        {
            if(p1==p2 && p2==p3)
            {
                console.log("Winner" , p1);
                showwin(p1);
            }
        }
        
    }
};


const disable =()=>
{
    for(let box of boxes){
        box.disabled=true;
    }
};


const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showwin= (winner)=>{
    mssg.innerText=`Congratulations  ${winner}`;
    msgcon.classList.remove("hide"); 
     disable();
};

const reset =()=>
{
    turnO=true;
    enable();
    msgcon.classList.add("hide");

};


newgame.addEventListener("click" ,reset );
res.addEventListener("click" , reset);
