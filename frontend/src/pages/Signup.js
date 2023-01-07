import { Link } from "react-router-dom";
import { useState } from "react";
function Signup() {
        const [email,setEmail] = useState("")
        const [password,setPassword] = useState("")
        const [firstName,setfirstName] = useState("")
        const [lastName,setLastName] = useState("")
        const onEmailChange = (e)=>{
            setEmail(e.target.value)
        }
        const onFirstNameChange = (e)=>{
            setfirstName(e.target.value)
        }
        const onLastNameChange = (e)=>{
            setLastName(e.target.value)
        }
        const onPasswordChange = (e)=>{
            setPassword(e.target.value)
        }
        const Signup=(e)=>{
            e.preventDefault();
            console.log(firstName,lastName,email,password)
        }
    return (
        <div className="login-form-box">
            <form className="login-form" onSubmit={(e)=>Signup(e)}>
                <div className="login-title">
                    <h4>Sign up</h4>
                </div>
                <div className="form-group mt-3">
                    <label for="exampleInputEmail1">First Name</label>
                    <input type="text" className="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter first name" value={firstName} onChange={(e)=>onFirstNameChange(e)}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group mt-3">
                    <label for="exampleInputEmail1">Last Name</label>
                    <input type="text" className="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter LastName" value={lastName} onChange={(e)=>onLastNameChange(e)}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group mt-3">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" value={email} onChange={(e)=>onEmailChange(e)}/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group mt-3">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control mt-1" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e)=>onPasswordChange(e)}/>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
                <div><Link>Already have an account <span className="link-color"><Link to='/Login'>Login</Link></span></Link></div>
            </form>
        </div>
    )
}

export default Signup;