import React, { memo, useState } from 'react';
import '../styles/loginAndSignupForm.css'
import { eyeIcon } from '../data/icon';
import { isNull } from '../data/commonData';
import Button from '../commonElements/Button';
import InputField from '../commonElements/InputField';
import { useNavigate } from 'react-router-dom';

const LoginAndSignupForm = ({isSignupPage}) => {
    const [userDetails, setUserDetails] = useState({})
    const [errorList, setErrorList] = useState([]);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const onValueChange = (e) => {
        let errorIds=[...errorList];

        if(errorIds.includes(e.target.name)){
            let index = errorIds.indexOf(e.target.name);
            errorIds.splice(index, 1);
            setErrorList(errorIds);
        }

        if(e.target.name == "mobile"){
            if(e.target.value < 10000000000){
                setUserDetails({...userDetails, [e.target.name] : e.target.value})
            }else{
                errorIds.push("mobile");
                setErrorList(errorIds);
            }
        }else{
            setUserDetails({...userDetails, [e.target.name] : e.target.value})
        }
    };

    const onButtonClick = (e, identifier) => {
        if(identifier == "main"){
            
            // validation
            let errorList = [];

            if(!isNull(userDetails, "mobile") || userDetails.mobile.length !== 10){
                errorList.push("mobile");
            };

            if(!isNull(userDetails, "password")){
                errorList.push("password");
            };

            if(e.target.name !== "login"){
                if(!isNull(userDetails, "name")){
                    errorList.push("name");
                }
            };

            setErrorList(errorList);

            // final Submission
            if(errorList.length === 0){
                console.log(userDetails, e.target.name);

                //If API call Success
                if(isSignupPage){
                    console.log("register");
                }else{
                    console.log("login");
                };
            }

        }else{
            setUserDetails({});
            setErrorList([]);
            setShowPassword(false);
            navigate(isSignupPage ? "/login" : "/register");
        }
    };
    

    return (
            <div className="loginRightSideCon">
                {!isSignupPage && <p>Welcome back !!!</p>}
                <h2>{!isSignupPage ? "Sign In" : "Sign Up"}</h2>
            
                {isSignupPage &&
                <InputField  
                    key="fullName"
                    inputId = "name"
                    required={true}
                    inputType="text"
                    name="name"
                    placeholder="Enter Full Name"
                    labelName="Full Name"
                    labelClassName="loginInputFieldLable"
                    inputClassName={`loginInputField ${errorList.includes("name") ? "errorClass" : ""}`}
                    containerClass="loginInputContainer"
                    value={userDetails.name != undefined ? userDetails.name : ""}
                    onChange={onValueChange}
                />
                }

                <InputField
                    key="mobile"
                    inputId = "mobile"
                    name="mobile"
                    required={true}
                    inputType="number"
                    placeholder="Enter Mobile Number"
                    labelName="Mobile"
                    labelClassName="loginInputFieldLable"
                    inputClassName={`loginInputField ${errorList.includes("mobile") ? "errorClass" : ""}`}
                    containerClass="loginInputContainer"
                    value={userDetails.mobile != undefined ? userDetails.mobile : ""}
                    onChange={onValueChange}
                />

                {isSignupPage &&
                <InputField
                    key="email"
                    inputId = "email"
                    name="email"
                    required={false}
                    inputType="email"
                    placeholder="Enter Email Address"
                    labelName="Email"
                    labelClassName="loginInputFieldLable"
                    inputClassName={`loginInputField ${errorList.includes("email") ? "errorClass" : ""}`}
                    containerClass="loginInputContainer"
                    value={userDetails.email != undefined ? userDetails.email : ""}
                    onChange={onValueChange}
                />}

                <div className="groupMemeberFieldCon">
                    <InputField  
                        key="password"
                        inputId = "password"
                        name="password"
                        required={true}
                        inputType={`${showPassword ? "text" : "password"}`}
                        placeholder="Enter Password"
                        labelName="Password"
                        labelClassName="loginInputFieldLable"
                        inputClassName={`loginInputField ${errorList.includes("password") ? "errorClass" : ""}`}
                        containerClass="loginInputContainer"
                        value={userDetails.password != undefined ? userDetails.password : ""}
                        onChange={onValueChange}
                    />
                    <span className='groupMemeberCrossIcon' onClick={()=>setShowPassword(!showPassword)}>
                        {eyeIcon}
                    </span>
                </div>

                <Button
                    key="loginAndSignupBtn"
                    buttonId ="loginButton"
                    buttonConClassName="loginButtonMainCon"
                    buttonClassName="loginButtonClass"
                    onSubmit={(e)=>onButtonClick(e, "main")}
                    title={!isSignupPage ? "Login" : "Create Account"}
                    name={!isSignupPage ? "login" : "signUp"}
                    icon={""}
                />

                <p id="loginErrorMsg" style={{display:"none"}} className="errorMessage"></p>
            
            {!isSignupPage ?
            <p className="loginPageBottomText">I don’t have an account ? <span onClick={(e)=>onButtonClick(e, "switch")}>Sign up</span></p>
            :
            <p className="loginPageBottomText">Already have an account ? <span onClick={(e)=>onButtonClick(e, "switch")}>Sign in</span></p>
            }

        </div> 
    )
};

export default memo(LoginAndSignupForm);
