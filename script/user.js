
    const loginForm = ducument.querySelector("form.login");
    const signupForm = ducument.querySelector("form.signup");
    const loginBtn = ducument.querySelector("label.login");
    const signupBtn = ducument.querySelector("label.signup");
   signupBtn.onclick = (()=>{
       loginForm.style.marginLeft = "-50%";
   });
