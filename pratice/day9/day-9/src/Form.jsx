import React , {useState} from 'react'

export default function Form () {
    const [ name , setName] = useState("");
    const [ email, setEmail] = useState("");
    const [ password , setPassword] = useState("");
    const [ errors , setErrors] = useState({});
    const [ submitedData , setData] = useState(null);

    const validation = () => {
        let isValid = true;
        const newErrors = {};
        
        if (!name.trim()) {
            newErrors.name = "name is required";
            isValid = false
        }  
        setErrors(newErrors);
        return isValid
    };
    const handleSubmit = (event) => {
        event.preventDefault();
         
        if (validateForm()) {
            const submitedData = {
                name,
                email,
                password
            };
            setData(submitedData);
            console.log("Form submited" , submitedData);
        }
    }
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label>NAME</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                {errors.name && <span className='error'>{errors.name}</span>}
            </div>
            <div>
                <label htmlFor="#">EMAIL</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {errors.email && <span className='error'>{errors.email}</span>}
            </div>
            <div>
                <label htmlFor="#">password</label>
                <input type="password" value={name} onChange={(e) => setPassword(e.target.value)} />
                {errors.password && <span className='error'>{errors.password}</span>}
            </div>
           <button type="button">Submit</button>
        </form>
        {submitedData && (
            <div>
                 <h2>submited data :</h2>
                 <p>Name : {submitedData.name}</p>
                 <p>Email : {submitedData.email}</p>
                 <p>Password : {submitedData.password}</p>
                 
            </div>
        )}
        </>
    )
}

