let password = "appletree4"

if (password.length >= 10 && password.includes('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z')  && password.includes(4) ){
    console.log("Success")
} else {console.log('Failure')}

if (password.length <= 20  ){
    console.log("Success")
} else {console.log('Failure')}

if (password.includes(" ") ){
    console.log('Failure')
} else {console.log("Success")}


// .___  ___.   ______   .___________.  ______   .______           ______  __  .___________.____    ____ 
// |   \/   |  /  __  \  |           | /  __  \  |   _  \         /      ||  | |           |\   \  /   / 
// |  \  /  | |  |  |  | `---|  |----`|  |  |  | |  |_)  |       |  ,----'|  | `---|  |----` \   \/   /  
// |  |\/|  | |  |  |  |     |  |     |  |  |  | |      /        |  |     |  |     |  |       \_    _/   
// |  |  |  | |  `--'  |     |  |     |  `--'  | |  |\  \----.   |  `----.|  |     |  |         |  |     
// |__|  |__|  \______/      |__|      \______/  | _| `._____|    \______||__|     |__|         |__|    