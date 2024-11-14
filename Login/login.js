const loginCredential = () =>{
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    if( username === `user` && password === `root`){
        window.location.href = '../main.html';
    }else{
        alert(`Please Enter correct credentials.`);
    }
}