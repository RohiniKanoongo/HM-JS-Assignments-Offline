//body
document.body.style.backgroundColor='mistyrose'


// Creating header
let a0=document.getElementById('first1')
let create=document.createElement('h1')
create.innerHTML='<h1 id="header">All About My Assignments</h1>'
a0.prepend(create)
let a=document.getElementById('header')
a.style.textAlign="center"
a.style.fontStyle='oblique'
a.style.color='mediumorchid'
a.style.marginBottom='10px'
a.style.marginTop='20px'

//all cards
let b=document.getElementsByClassName('card')
for(let i=0;i<b.length;i++){
    b[i].style.padding='10px'
    b[i].style.backgroundColor='lavender'
}

//for heading assignment
let c=document.getElementById('first')
let d=document.getElementById('second')
let e=document.getElementById('third')
c.style.textAlign='center'
d.style.textAlign='center'
e.style.textAlign='center'
c.style.fontStyle='italic'
d.style.fontStyle='italic'
e.style.fontStyle='italic'
c.style.color='mediumvioletred'
d.style.color='mediumvioletred'
e.style.color='mediumvioletred'


// let create1=document.createElement('p')
// create1.innerHTML='<h3 id="confirm">Do you want to check out the links??</h3>'
// a0.append(create1)
// let confirm=document.getElementById('confirm')
// confirm.style.textAlign="center"
// confirm.style.fontStyle='italic bold 20px arial,serif'
// confirm.style.color='mediumorchid'
// confirm.style.marginBottom='10px'
// confirm.style.marginTop='20px'
//buttons
// let yes=document.getElementsByClassName('yes')
// for(let x=0;x<yes.length;x++){
//     yes[x].style.textAlign='center'
//     yes[x].style.backgroundColor='lightpink'
//     yes[x].style.border='1px solid darkorchid'
//     yes[x].style.color='darkorchid'
//     yes[x].style.font='italic bold 20px arial,serif'
//     yes[x].style.borderRadius='10%'
//     yes[x].style.width='100px'
// }


// let buttons=document.getElementById('buttons').style.textAlign='center'

//links
let links=document.getElementsByClassName('btn')
for(let k=0;k<links.length;k++){
    // links[k].setAttribute('hidden','true')
    // let f1=function(click){
    //     links[k].setAttribute('hidden','false')
    // }
    // let f2=function(clickNo){
    //     let conf=confirm("Are you sure you don't want to see the outputs!! Think Once again or You'll loose it!!!Press 'OK'to see the links ")
    //         if(conf==true){
    //             links[k].setAttribute('hidden','false')
    //         }
    //         else if(conf==false){
    //             alert("Its your bad Luck!!!")
    //         }
    //     }
        
    links[k].style.backgroundColor='lightpink'
    links[k].style.border='1px solid darkorchid'
    links[k].style.color='darkorchid'
    links[k].style.font='italic bold 20px arial,serif'
    links[k].style.marginLeft='30px'
   
}
// let yesbtn=document.getElementById('Yes')
// yesbtn.addEventListener('click',f1)
// let nobtn=document.getElementById('No')
// nobtn.addEventListener('click',f2)


//bold names
let bold=document.getElementsByTagName('span')
for(let l=0;l<bold.length;l++){
    bold[l].style.color='purple'
    bold[l].style.font='italic bold 20px arial,serif'
}

//paragraphs
let p=document.getElementsByClassName('card-text')
for(let m=0;m<p.length;m++){
    p[m].style.color='darkslategray'
}

//images
let img=document.getElementsByClassName('card-img-top')
img.setAttribute('alt','ASSIGNMENTS')







