import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Login = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h2 className="text-center">Přihlásit se</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                className="form-control"    
                                id="email"
                                required
                            />
                        </div>
                        <div className="form-group">    
                            <label htmlFor="password">Heslo:</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mt-3">
                            Přihlásit se
                        </button>
                        <div className="text-center mt-3">
                            <p>
                                Nemáte účet? <a href="/register">Registrovat se</a>
                            </p>    
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Login;