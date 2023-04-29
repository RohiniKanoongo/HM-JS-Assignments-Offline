function time(){
    let a=new Date()
    let hours=a.getHours()
    let minutes=a.getMinutes()
    let sec=a.getSeconds()
    am=""
    if(hours>=12 && minutes>=00){
        am="PM"
    }
    else if(hours<12){
        am="AM"
    }
    else if(hours==24){
        hours="00"
    }
    else if(hours==12 && minutes==00 && sec==00){
        am="noon"
    }
    if(hours<12){
        hours="0"+hours
    }
    if(minutes<10){
        minutes="0"+minutes
    }
    if(sec<10){
        sec="0"+sec
    }
    let time=hours +":"+minutes+":"+sec+" "+am
    document.getElementById('time').innerHTML=time
}
setInterval(time,1000)

function day(){
    let weekd=["Sunday","Monday","Tuesday","Wednesday","Thurday","Friday","Saturday"]
    let day=new Date()
    let weekday=weekd[day.getDay()]
    document.getElementById('day').innerHTML=weekday
}
setInterval(day,1000)

function date(){
    let date=new Date()
    let d=date.getDate()
    let month=date.getMonth()+1
    let year=date.getFullYear()
    let date1=d +"/"+month+"/"+year
    document.getElementById('date').innerHTML=date1
}
setInterval(date,1000)

document.body.style.backgroundColor='black'
document.body.style.fontFamily='"Orbitron", sans-serif'



let a=document.getElementById('time')
a.style.textAlign='center'
a.style.fontSize='80px'
a.style.marginLeft='300px'
a.style.color='red'
a.style.width='700px'
a.style.boxShadow='10px 10px 10px 10px rgba(0,0,0,0.3),5px 5px 5px 5px'
// a.style.border='7px solid rgb(255, 252, 252)'

let b=document.getElementById('day')
b.style.textAlign='center'
b.style.fontSize='60px'
b.style.color='red'
b.style.boxShadow='10px 10px 10px 10px rgba(0,0,0,0.3),5px 5px 5px 5px'
b.style.width='400px'
b.style.marginLeft='460px'


let c=document.getElementById('date')
c.style.textAlign='center'
c.style.fontSize='60px'
c.style.color='red'
c.style.boxShadow='10px 10px 10px 10px rgba(0,0,0,0.3),5px 5px 5px 5px'
c.style.width='450px'
c.style.marginLeft='430px'
// c.style.fontFamily='"Lucida Console", "Papyrus", "Lucida Handwriting"'


