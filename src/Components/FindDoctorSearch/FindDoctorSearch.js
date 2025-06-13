import React, { useState } from 'react';
import './FindDoctorSearch.css';
import { useNavigate, Navigate } from 'react-router-dom';

const speciality = ['Dentist', 'Gynecologist/Obstetrician', 'General Physician', 'Bone',]

const SearchDoc = () => {
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities, setSpecialities] = useState(speciality);
    const navigate = useNavigate();
    const handleDocSelect = (speciality) => {
        setSearchDoctor(speciality);
        setDoctorResultHidden(true);
        navigate(`/booking-consultation?speciality=${speciality}`);
        window.location.reload();
}

return (
    <section id="maincontainer">
        <div >
<h1>Looking for a doctor? Find one easily!</h1>
</div>

<div className='imagecontainer'>
   < img className='mainimage' src='https://cdn.pixabay.com/photo/2024/05/26/19/51/nursing-8789373_960_720.png' alt='picture showing two seated patients and one male doctor'/>
</div>

<div id='searchcontainer'>
    <input type="text" className='searchbar' placeholder='Search for a doctor by speciality'
     onFocus={() => setDoctorResultHidden(false)} onBlur={() => setDoctorResultHidden(true)}
     value={searchDoctor} onChange={(e) => setSearchDoctor(e.target.value)} />

<img id='simg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyi_CVTmoL1ITHFxQkfLwvj93hcsgA1Olkhg&s' alt='search icon'/>
</div>

<div className='optionscontainer' hidden={doctorResultHidden}>
     {specialities.map (speciality=>
     <div className='docresults' key={speciality} 
     onMouseDown={()=> handleDocSelect(speciality)}>
    <span  className='resultsbar'>{speciality}</span>
</div>
    )}
</div>



    </section>
)
}

export default SearchDoc