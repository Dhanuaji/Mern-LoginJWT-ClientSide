import React from "react";

const RegisterUser = () => {
    return (
        <div className="container">
            <div className="content" style={{ marginTop: "10%" }}>
                <div className="text-center">
                    <h4>Sign Up</h4>
                </div>
            </div>
            <div className="card mx-auto" style={{ maxWidth: "40rem" }}>
                <div className="card-body">
                    <div className="card-text">
                        <form>
                            <div className="row">
                                <div className="col">
                                    <div className="row">
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="bx bxs-envelope bx-md"></i>
                                            <div className="form-group flex-fill mb-0">
                                                <input type="email" className="form-control" placeholder="yourmail@example.com" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="bx bxs-user bx-md"></i>
                                            <div className="form-group flex-fill mb-0">
                                                <input type="text" className="form-control" placeholder="username" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row">
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="bx bxs-key bx-md"></i>
                                            <div className="form-group flex-fill mb-0">
                                                <input type="password" className="form-control" placeholder="password" required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="bx bxs-key bx-md"></i>
                                            <div className="form-group flex-fill mb-0">
                                                <input type="password" className="form-control" placeholder="Re-type password" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">I agree all statements in <a href="https://profile-ksh.herokuapp.com/" style={{ textDecoration: "none" }}>Terms of service</a></label>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="text-center">
                                <button className="btn btn-primary" type="submit">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <p>Copyright <a href="https://profile-ksh.herokuapp.com/" style={{ textDecoration: "none" }}>@Kickout Software House</a> 2022</p>
                </div>
            </div>
        </div>
    )
}

export default RegisterUser;