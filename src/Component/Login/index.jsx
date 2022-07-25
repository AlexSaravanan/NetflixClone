import {Link} from "react-router-dom";

const Login = () => {
    return(
        <div style={{backgroundColor: "hsl(0, 0%, 96%)"}}>
            <div className="justify-content-center">
            <form className="shadow bg-body rounded m-5 p-5 text-center " >
                {/* <!-- Email input --> */}
                <div class="form-floating mb-4">
                    <input type="email" id="form2Example1" class="form-control" placeholder="Email" required/>
                    <label class="form-label " for="form2Example1"><b>Email address</b></label>
                </div>

                {/* <!-- Password input --> */}
                <div class="form-floating mb-4">
                    <input type="password" id="form2Example2" class="form-control"  placeholder="Password" required/>
                    <label class="form-label" for="form2Example2"><b>Password</b></label>
                </div>

                {/* <!-- 2 column grid layout for inline styling --> */}
                <div class="row mb-4">
                    <div class="col d-flex justify-content-center">
                    {/* <!-- Checkbox --> */}
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="form2Example31" />
                        <label class="form-check-label" for="form2Example31"> Remember me </label>
                    </div>
                    </div>

                    <div class="col">
                    {/* <!-- Simple link --> */}
                    <a href="#!">Forgot password?</a>
                    </div>
                </div>

                {/* <!-- Submit button --> */}
                <button type="button" className="btn btn-primary btn-block mb-4 ">Log in</button>

                {/* <!-- Register buttons --> */}
                <div class="text-center">
                    <p>Not a member? <Link to="../signup">Register</Link></p>
                </div>
            </form>
            </div>
        </div>
    )
}
export default Login;