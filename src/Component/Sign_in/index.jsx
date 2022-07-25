

const Signup = () =>{
    return(
        <div>
            <section class="">
            <div class="px-4 py-5 px-md-5 text-center text-lg-start" style={{backgroundColor: "hsl(0, 0%, 96%)"}}>
                <div class="container">
                <div class="row gx-lg-5 align-items-center">
                    <div class="col-lg-6 mb-3 mb-lg-0">
                    <h1 class="my-5 display-3 fw-bold ls-tight">
                        The best offer <br />
                        <span class="text-primary">NEW Subscriber</span>
                    </h1>
                    <p style={{color: "hsl(217, 10%, 50.8%)"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                        quibusdam tempora at cupiditate quis eum maiores libero
                        veritatis? Dicta facilis sint aliquid ipsum atque?
                    </p>
                    </div>

                    <div class="col-lg-6 mb-3 mb-lg-0">
                    <div class="card">
                        <div class="card-body py-5 px-md-5">
                        <form>
                            {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                            <div class="row">
                            <div class="col-md-6 mb-2">
                                <div class="form-outline">
                                <label class="form-label" for="form3Example1">First name</label>
                                <input type="text" id="form3Example1" class="form-control"  required/>
                                </div>
                            </div>
                            <div class="col-md-6 mb-2">
                                <div class="form-outline">
                                <label class="form-label" for="form3Example2">Last name</label>
                                <input type="text" id="form3Example2" class="form-control" required/>
                                </div>
                            </div>
                            </div>

                            {/* <!-- Email input --> */}
                            <div class="form-outline mb-2">
                            <label class="form-label" for="form3Example3">Email address (or) Phone </label>
                            <input type="email" id="form3Example3" class="form-control" required/>
                            </div>

                            {/* <!-- Password input --> */}
                            <div class="form-outline mb-2">
                            <label class="form-label" for="form3Example4">Password</label>
                            <input type="password" id="form3Example4" class="form-control" required/>
                            </div>
                            {/* Re-enter password input */}
                            <div class="form-outline mb-2">
                            <label class="form-label" for="form3Example4">Re-Enter your Password</label>
                            <input type="password" id="form3Example4" class="form-control" required/>
                            </div>

                            {/* <!-- Checkbox --> */}
                            <div class="form-check d-flex justify-content-center mb-4">
                            <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" />
                            <label class="form-check-label" for="form2Example33">
                            Subscribe to our newsletter
                            </label>
                            </div>

                            {/* <!-- Submit button --> */}
                            <button type="submit" class="btn btn-primary btn-block mb-4">
                            Sign up
                            </button>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    </div>
    )
}
export default Signup;