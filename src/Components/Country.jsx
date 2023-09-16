import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleSaves, selectSaves } from '../store/slices/SavesSlice';



function Country({ info }) {
    if (info !== null && info !== undefined) {

        const [isPopupOpen, setPopupOpen] = useState(false);
        const [isSaved, setIsSaved] = useState(false);
        const saves = useSelector(selectSaves)

        const dispatch = useDispatch()

        function handleSave() {

            setIsSaved(prev => !prev)
            const updatedSaves = isSaved
                ? saves.filter(save => save.url !== info.url)
                : [...saves, info];

            dispatch(handleSaves({ elem: updatedSaves }));
        }
        const openPopup = () => {
            setPopupOpen(true);
        };

        const closePopup = () => {
            setPopupOpen(false);
        };
        const forExample = () => {
            return 1;
        };
        ///
        return (
            <div onClick={isPopupOpen == true ? closePopup : forExample} className='flex flex-col border border-white p-[20px] w-[400px] bg-red-600 rounded-xl text-white' >

                <div onClick={isPopupOpen == true ? closePopup : openPopup} className='w-full flex justify-center items-center'>
                    <img src={info.flags.png == null ? "/noImage.png" : info.flags.png} />
                </div>
                <div onClick={isPopupOpen == true ? closePopup : openPopup}>

                    <p> Name : {info.name.official}</p>
                    <p> Area : {info.area} km</p>
                    <p> Capital : {info.capital}</p>
                    <p> Population : {info.population}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <a className='text-[13px] opacity-50' target='_blank' href={info.maps.googleMaps}>Map</a>
                    </div>
                    <div className='flex gap-4'>

                        <div className={`w-[45px] cursor-pointer flex justify-center  `}>
                            {isSaved == true ? (

                                <img onClick={handleSave} src="BlackImage.png" className='' />
                            ) : (
                                <img onClick={handleSave} src="/WhiteSave.png" className='p-[5px]' />
                            )}
                        </div>
                    </div>
                </div>
                {isPopupOpen && (
                    <div onClick={isPopupOpen == true ? closePopup : openPopup} className='text-white fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 p-9 rounded shadow-lg '>
                        <div className='w-full'>
                            <img src={info.flags.png == null ? "/noImage.png" : info.flags.png} alt="/noimage.png" />
                        </div>
                        <div onClick={isPopupOpen == true ? closePopup : openPopup}>

                            <p> Name : {info.altSpellings[1]}</p>
                            <p> Area : {info.area} km</p>
                            <p> Capital : {info.capital[0]}</p>
                            <p> Population : {info.population}</p>
                            <p> Continent : {info.continents[0]}</p>
                            <p>Region : {info.region}</p>


                        </div>
                        <div className='flex justify-between items-center'>
                            <div>
                                <a className='text-[13px] opacity-50' target='_blank' href={info.maps.googleMaps}>Map</a>
                            </div>
                            <div className='flex gap-4'>
                                <div className={`w-[45px] cursor-pointer flex justify-center  `}>
                                    {isSaved == true ? (

                                        <img onClick={handleSave} src="BlackImage.png" className='' />
                                    ) : (
                                        <img onClick={handleSave} src="/WhiteSave.png" className='p-[5px]' />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {isPopupOpen && (
                    <div className='fixed top-0 left-0 w-full h-full bg-black opacity-50' >

                    </div>
                )}
            </div>
        );
    }
}

export default Country;
