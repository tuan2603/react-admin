import React, {Component} from 'react';
import mainLogo from '../../assets/img/logo.png';

class Login extends Component {

    render() {
        return (
            <div className="vertical-align-wrap">
                <div className="vertical-align-middle">
                    <div className="auth-box ">
                        <div className="left">
                            <div className="content">
                                <div className="header">
                                    <div className="logo text-center">
                                        <img src={mainLogo} style={{height:24}} alt="pawnvn Logo" /></div>
                                    <p className="lead">Login to your account</p>
                                </div>
                                <form className="form-auth-small" action="index.php">
                                    <div className="form-group">
                                        <label htmlFor="signin-email" className="control-label sr-only">Email</label>
                                        <input type="email" className="form-control" id="signin-email"
                                               value="samuel.gold@domain.com" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="signin-password"
                                               className="control-label sr-only">Password</label>
                                        <input type="password" className="form-control" id="signin-password"
                                               value="thisisthepassword" placeholder="Password" />
                                    </div>
                                    <div className="form-group clearfix">
                                        <label className="fancy-checkbox element-left">
                                            <input type="checkbox" />
                                                <span>Remember me</span>
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg btn-block">LOGIN</button>
                                    <div className="bottom">
                                        <span className="helper-text"><i className="fa fa-lock"></i> <a href="/page-forgot-password.html">Forgot password?</a></span>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="right">
                            <div className="overlay"></div>
                            <div className="content text">
                                <h1 className="heading">Manager</h1>
                                <p>just for admin</p>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
