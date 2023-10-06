const names = [ "Aarav", "Sanya", "Vikram", "Neha", "Rohan", "Priya", "Amit", "Meera", "Rajiv", "Ananya"]
let finalName=document.getElementById('name')
nameCount=0
function next(){
    if(nameCount<9)
    {
        nameCount+=1
        finalName.innerText=names[nameCount]
    }
    else{
        nameCount=0
        finalName.innerText=names[nameCount]
    }
}
function prev(){
    if(nameCount>0)
    {
        nameCount-=1
        finalName.innerText=names[nameCount]
    }
    else{
        nameCount=9
        finalName.innerText=names[nameCount]
    }
}