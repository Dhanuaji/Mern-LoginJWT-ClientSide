import React from "react";

const ResetPassword = () => {
    return (
        <div className="container">
            <div className="content" style={{ marginTop: "10%" }}>
                <div className="text-center">
                    <h4>Reset Your Password</h4>
                </div>
                <div className="card mx-auto" style={{ maxWidth: "30rem" }}>
                    <div className="card-body">
                        <form>
                            <div className="card-text">
                                <label>
                                    Enter your user account's verified email address and we will send you a password reset link.
                                </label>
                                <div className="form-group">
                                    <input className="form-control" type="email" placeholder="" required/>
                                </div>
                                <br />
                                <div className="text-center" style={{ maxWidth: "auto" }}>
                                    <button className="btn btn-success" type="submit">Send password reset email</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword;