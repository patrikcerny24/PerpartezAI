import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Register = () => {
    const [formData, setFormData] = useState({
        name:"",
        surname:"",
        username:"",
        email:"",
        password:"",
        birthdate:"",
    });
    const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/h2-console/login.do?jsessionid=cc265933cf2580d4540d1585c6968fc8', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to register');
      }

      const result = await response.json();
      alert('Registration successful!');
      console.log(result);
    } catch (error) {
      console.error('Error:', error.message);
      alert('Registration failed.');
    }
  };

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <h2 className="text-center">Registrovat se</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Jméno:</label>
                        <input
                            type="text" 
                            className="form-control"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Zadejte své jméno"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="surename">Příjmení:</label>
                        <input
                            type="text" 
                            className="form-control"
                            id="surename"
                            value={formData.surname}
                            onChange={handleChange}
                            placeholder="Zadejte své příjmení"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">Uživatelské jméno:</label>
                        <input
                            type="text" 
                            className="form-control"
                            id="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Zadejte své uživatelské jméno"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Zadejte svůj email"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="birthdate">Datum narození:</label>
                        <input
                            type="date" 
                            className="form-control"
                            id="birthdate"
                            value={formData.birthdate}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Heslo:</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
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