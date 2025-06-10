import React, { useState } from 'react';
import './FindDoctorSearch.css';
import { useNavigate, Navigate } from 'react-router-dom';

const speciality = ["Paediatrician", "OBGyn", "Family Physician", "Dentist", "ENT", "Dermatologist" ]

const searchDoc = () => {
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities, setSpecialities] = useState(initSpeciality);
    const navigate = useNavigate();
    const handleDocSelect = (speciality) => {
        setSearchDoctor(speciality);
        setDoctorResultHidden(true);
        navigate(`/instant-consultation?speciality=${speciality}`);
        window.location.reload();
}

return (
    <div className="maincontainer">
<h1>Instant Consult</h1>

<div className='searchcontainer'>
    <input type="text" className='searchbar' placeholder='Search for a doctor by speciality'
     onFocus={() => setDoctorResultHidden(false)} onBlur={() => setDoctorResultHidden(true)}
     value={searchDoctor} onChange={(e) => setSearchDoctor(e.target.value)} />
</div>

<div className='iconcontainer'></div>



<div className='optionscontainer'>
     {specialities.map (speciality=>
     <div className='docresults' key={speciality} 
     onClick={()=> handleDocSelect(speciality)}>
    <span  className='resultsbar'>{speciality}</span>
</div>

    )
</di>



    </div>
)
}