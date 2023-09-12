import './css/App.css';
import ProfileCard from "./components/profile_card/ProfileCard";
import React, {useState} from 'react';

const API_URL = 'https://randomuser.me/api';

function App() {
    const [fetchCount, setFetchCount] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [profileDataList, setProfileDataList] = useState([]);

    const fetchData = async () => {
        try {
            setIsLoading(true);

            const response = await fetch(`${API_URL}?results=${fetchCount}`);
            if (!response.ok) {
                alert('Unable to get a response, network problems.');
                return;
            }
            const data = await response.json();
            if (data.results && data.results.length > 0) {
                setProfileDataList((prevData) => [...prevData, ...data.results]);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleGetData = () => {
        fetchData().then(value => console.log(value));
    };

    const handleClearData = () => {
        setProfileDataList([]);
    };

    const handleChangeFetchCount = (event) => {
        setFetchCount(event.target.value);
    };

    return (
        <div className="App">
            <header className="header">
                <h1>Лабораторна робота 3</h1>
                <div className="menu">
                    <div className="fc-box">
                        <label htmlFor="fetchCount" aria-label="Fetch count">Fetch count</label>
                        <input type="number" name="fetchCount" id="fetchCount" value={fetchCount} min='1' max='1000'
                               onChange={(e) => handleChangeFetchCount(e)}/>
                    </div>
                    <button type="button" onClick={handleGetData} disabled={isLoading}
                            className="menu-button">{isLoading ? 'Loading...' : 'Load'}</button>
                    <button type="button" onClick={handleClearData} disabled={isLoading}
                            className="menu-button clear-button">Clear
                    </button>
                </div>
            </header>
            <div className="profile-cards-box">
                {profileDataList.length === 0 ? (
                    <h1>No profile data available.</h1>
                ) : (
                    profileDataList.map((profileData, index) => (
                        <ProfileCard
                            key={index}
                            picture={profileData.picture.large}
                            country={profileData.location.country}
                            email={profileData.email}
                            phone={profileData.phone}
                            lat={profileData.location.coordinates.latitude}
                            lon={profileData.location.coordinates.longitude}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default App;
