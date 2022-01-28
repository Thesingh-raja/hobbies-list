const button = document.querySelectorAll(".grid-item");
const selectedHobby= document.querySelector(".selectedHobby");
const result=document.querySelector(".result");
const resultDisp= document.querySelector(".resultDisp");

console.log(button);

button.forEach((btn)=>{ btn.addEventListener('click',()=>
{
    result.classList.remove("hidden");
    const final=findAllHobbyists(btn.value, hobbies);
    console.log(final);
    selectedHobby.innerHTML=btn.value;
    resultDisp.innerHTML=final;
})
})

const hobbies = 
{
    "Steve": ['Fashion', 'Piano', 'Reading'],
    "Patty": ['Drama', 'Magic', 'Pets'],
    "Chad": ['Puzzles', 'Pets', 'Yoga']
};

function findAllHobbyists(hobby,hobbies)
{
   let people=[];
   for(const member in hobbies)
   {
       const element= hobbies[member];
        const index = element.indexOf(hobby);
        if(index !== -1)
        {
            people.push(member);   
        }
   }
   return people; 
}
