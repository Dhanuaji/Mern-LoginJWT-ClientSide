import React from "react";
import './login.css';

const LoginPage = () => {
    return (
        <div className="container">
            <div className="content" style={{ marginTop: "10%" }}>
                <div className="text-center">
                    <h4>Login</h4>
                </div>
                <div className="card mx-auto" style={{ maxWidth: "25rem" }}>
                    <form>
                        <div className="card-body">
                            <div className="card-text">
                                <div className="form-group">
                                    <input className="form-control" type="email" placeholder="yourmail@example.com" required />
                                </div>
                                <br />
                                <div className="form-group">
                                    <input className="form-control" type="password" placeholder="password" required />
                                </div>
                                <div className="row">
                                    <div className="form-group col">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">Remember Me</label>
                                        </div>
                                    </div>
                                    <div className="form-group col">
                                        <a href="/password-reset" className="form-label" style={{ marginLeft: "5%", textDecoration: "none" }}>forgot password?</a>
                                    </div>
                                </div>
                                <br />
                                <div className="row text-center">
                                    <div className="col">
                                        <button className="btn btn-success" style={{ marginRight: "2%", width: "10em" }} type="submit">Login</button>
                                    </div>
                                    <div className="col">
                                        <a href='/sign-up' className="btn btn-primary" style={{ marginLeft: "2%", width: "10em" }} type="link">Sign Up</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <p>Copyright <a href="https://profile-ksh.herokuapp.com/" style={{ textDecoration: "none" }}>@Kickout Software House</a> 2022</p>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default LoginPage;