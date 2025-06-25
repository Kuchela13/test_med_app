import FindDoctorSearch from "./FindDoctorSearch/FindDoctorSearch";
import DoctorCard from './DoctorCard/DoctorCard';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const BookingConsultation= ({onBooked}) => {
    const [searchParams] = useSearchParams();
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [isSearched, setIsSearched] = useState(false);

    const getDoctorsDetails = () => {
        fetch('https://api.npoint.io/9a5543d36f1460da2f63')
        .then(res => res.json())
        .then(data => {
            if (searchParams.get('speciality')) {
                const filtered = data.filter(doctor => 
                doctor.speciality.toLowerCase() === searchParams.get('speciality').toLowerCase());

                setFilteredDoctors(filtered);
                setIsSearched(true);
                window.reload()
            } else {
                setFilteredDoctors([]);
                setIsSearched(false);
            }
            setDoctors(data);
        })
        .catch(err => console.log(err));
    }
    const handleSearch = (searchText) => {

        if (searchText === '') {
            setFilteredDoctors([]);
            setIsSearched(false);
            } else {
                
            const filtered = doctors.filter(
                (doctor) =>
                // 
                doctor.speciality.toLowerCase().includes(searchText.toLowerCase())
                
            );
                
            setFilteredDoctors(filtered);
            setIsSearched(true);
            window.location.reload()
        }
    };
    const navigate = useNavigate();
    useEffect(() => {
        getDoctorsDetails();
     
    }, [searchParams])
    return (
    <center>
<div className="search-container" style={{width: 900 }}>
        <FindDoctorSearch onSearch={handleSearch}/>
    <div className="search-results">
 {isSearched ? (
    <center>
        <h2>{filteredDoctors.length} doctors are available {searchParams.get('location')} </h2>
        <h3>Book an appointment now for minimum wait time</h3>

        {filteredDoctors.length >0 ? (
            filteredDoctors.map(doctor => <DoctorCard className="doctor-card" {...doctor} key={doctor.name} />)
        ) : ( 
                <p>No doctors with available slots at this time. Please try again later.</p>
        )}
        
    </center>
    ) : (
    ''
 )}




    </div>
</div>
    </center>
    )}

export default BookingConsultation





