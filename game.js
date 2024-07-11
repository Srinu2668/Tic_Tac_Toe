const btn = document.querySelectorAll(".box");
let win_p=document.querySelector(".winer");
let terns=true;

let term_fun= (bou)=>
{
  if(terns)
  {
    bou.innerText="O";
    terns=false;
    bou.disabled=true;
  }
  else
  {
    bou.innerText="X";
    terns=true;
    bou.disabled=true;
  }
  return shift();
};


btn.forEach((bou)=>
{
  bou.addEventListener("click",()=>
    {
        return term_fun(bou);
    });
});

let winningArry=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];


let count=0;
let shift=()=>{
    for(pattern of winningArry)
    {
      let fir=btn[pattern[0]].innerText;
      let sec=btn[pattern[1]].innerText;
      let the=btn[pattern[2]].innerText;
      console.log(fir+" "+sec+" "+the);
      console.log(pattern[0],pattern[1],pattern[2])
      console.log(count);

      if(fir!='' && sec!='' && the!='')
      {
        if(fir==sec && sec==the)
        {
          disAlldut();
          console.log("won the game");
          return wiiin(fir);
        }
      }
    }
    count++;
    if(count>=9)
    {
      win_p.innerText=`Match was Draw`;
      
    }
};

let wiiin=(fir)=>
{
    win_p.innerText=`Mr."${fir}" Won the Game`;

}

let disAlldut=()=>
{
  btn.forEach((bt)=>
  {
    if(bt.innerText=='')
    {
      bt.disabled=true;
    }
  });
}

let resart=document.querySelector(".restrat");

resart.addEventListener("click",()=>
{
  console.log("hello");
  btn.forEach((nt)=>
  {
    nt.disabled=false;
    nt.innerText='';
  }); 
  terns=true;
  count=0;
  win_p.innerText=`Start the Game`;
});