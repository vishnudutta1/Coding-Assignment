

function convertTime(ms) {
    if(ms >= 1000) {
    
      if(ms < 60000) {
        let s = Math.floor(ms / 1000)
        if(s == 1) {
          return s + " second"
        }else {
        return s + " seconds"
        }
      }
    
    
      else if(ms >= 60000 && ms < 3600000) {
        let tempsec = Math.floor(ms / 1000)
        let mi = Math.floor(tempsec / 60)
        let sec = tempsec % 60
    
        if(mi === 1) {
          pmi = mi + " minute"
        }else {
          pmi = mi + " minutes"
        }
    
        if(sec == 0) {
          psec = ""
        }else if(sec == 1) {
          psec = sec + " second"
        }else {
          psec = sec + " seconds"
        }
    
        return pmi + " " + psec
      }
    
    
    
      else if(ms >= 3600000) {
        let sec1 = Math.floor(ms / 1000) // 3600
        let min = Math.floor(sec1 / 60) // 60
        let hour = Math.floor(min / 60) // 1
      
        let minute = min % 60
        let second = min % 60
       // console.log(minute, hour,min)
    
        if(hour > 1) {
          phour = hour + " hours"
        }else {
          phour = hour + " hour"
        }
    
        if(minute == 0) {
          pmin = ""
        }else if(minute ==1) {
          pmin = minute + " minute"
        }else {
          pmin = minute + " minutes"
        }
    
        
        if(second == 0) {
          psec = ""
        }else if(second ==1) {
          psec = second + " second"
        }else {
          psec = second + " seconds"
        }
        
      return phour +" "+ pmin +" "+ psec
    
      }
    }else {
      return console.log(ms)
    }
    }

module.exports = {convertTime}