import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Register = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h2 className="text-center">Registrovat se</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Jméno:</label>
                        <input
                            type="text" 
                            className="form-control"
                            id="name"
                            placeholder="Zadejte své jméno"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Zadejte svůj email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Heslo:</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Zadejte své heslo"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Potvrdit heslo:</label>
                        <input
                            type="password"
                            className="form-control"
                            id="confirmPassword"
                            placeholder="Potvrdit heslo"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mt-3">
                        Registrovat se
                    </button>
                    <div className="text-center mt-3">
                        <p>
                            Již máte účet? <a href="/login">Přihlásit se</a>
                        </p>    
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}
export default Register;