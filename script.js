const secondHand = document.querySelector('.second')
const minuteHand = document.querySelector('.minute')
const hourHand   = document.querySelector('.hour')
const time       = document.querySelector('.time')
const date       = document.querySelector('.date')

function setDate(){
    const now = new Date()

    let sec   = now.getSeconds()
    let min   = now.getMinutes()
    let hrs   = now.getHours()
    let day   = now.getDate()
    let month = now.getMonth() + 1
    let year  = now.getFullYear()
    let setMonth

    secondHand.style.transform = `rotate(${((sec / 60) * 360) + 90}deg)`
    minuteHand.style.transform = `rotate(${((min / 60) * 360) + ((sec / 60) * 6) + 90}deg)`
    hourHand.style.transform   = `rotate(${((hrs / 12) * 360) + ((min / 60) * 30) + 90}deg)`

    switch (month) {
        case 1:
            setMonth = 'Jan'
            break;
        case 2:
            setMonth = 'Feb'
            break;
        case 3:
            setMonth = 'Mar'
            break;
        case 4:
            setMonth = 'Apr'
            break;
        case 5:
            setMonth = 'May'
            break;
        case 6:
            setMonth = 'Jun'
            break;
        case 7:
            setMonth = 'Jul'
            break;
        case 8:
            setMonth = 'Aug'
            break;
        case 9:
            setMonth = 'Sep'
            break;
        case 10:
            setMonth = 'Oct'
            break;
        case 11:
            setMonth = 'Nov'
            break;
        case 12:
            setMonth = 'Dec'
            break;
    }

    if(hrs < 10){
        hrs = `0${hrs}`
    }
    if(min < 10){
        min = `0${min}`
    }
    if(sec < 10){
        sec = `0${sec}`
    }

    time.textContent = `${hrs}:${min}:${sec}`
    date.textContent = `${day} ${setMonth}, ${year}`    
}

setInterval(setDate, 1000)

setDate()