import React, { useState } from 'react';
import './FindDoctorSearch.css';
import { useNavigate, Navigate } from 'react-router-dom';

const speciality = ['Dentist', 'ObGyn', 'General Physician', 'Dermatologist', 'Ear-Nose-Throat (ENT) Specialist']

const SearchDoc = () => {
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities, setSpecialities] = useState(speciality);
    const navigate = useNavigate();
    const handleDocSelect = (speciality) => {
        setSearchDoctor(speciality);
        setDoctorResultHidden(true);
        navigate(`/instant-consultation?speciality=${speciality}`);
        window.location.reload();
}

return (
    <div className="maincontainer">
        <div>
<h1>Book an Appointment</h1>
</div>
<div className='searchcontainer'>
    <input type="text" className='searchbar' placeholder='Search for a doctor by speciality'
     onFocus={() => setDoctorResultHidden(false)} onBlur={() => setDoctorResultHidden(true)}
     value={searchDoctor} onChange={(e) => setSearchDoctor(e.target.value)} />
</div>

<div className='iconcontainer'></div>



<div className='optionscontainer' hidden={doctorResultHidden}>
     {specialities.map (speciality=>
     <div className='docresults' key={speciality} 
     onMouseDown={()=> handleDocSelect(speciality)}>
    <span  className='resultsbar'>{speciality}</span>
</div>
    
    )
    }

</div>



    </div>
)
}

export default SearchDoc