import React, {useEffect, useState} from 'react';
import Menu from '../../navigation/Menu';
import axios from 'axios';



const UserPhotos = () => {
    const [photoData, setPhotoData] = useState([]);
    const [showData, setShowData] = useState(false);
    const [vData, setVdata] = useState('');

    const getAllPhotos = () => {
        setShowData(true);
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then((photoResponse) => {
            setShowData(true);
            setPhotoData(photoResponse.data);
            //logic//
            if(photoResponse.status===200)
            {
            setPhotoData(photoResponse.data);
            setShowData(false);
            }     
        })
        .catch((error) => {
            console.log('error-->',error);
        });
    };

useEffect(() => {
    getAllPhotos();
    },[]);

const vPhoto = (show)=>{
    console.log('show-->',show);
    setVdata(show);
    setTimeout(()=> {
        setVdata('');
    }, 5000);
}

  return (
    <div><Menu/>
    <div>
        <h1 style={{color : 'red'}}>
            User Photos
        </h1>
        {vData === '' ? (<></>) : (
            <div style={{border : '1px solid rgb(0,0,0)', margin : '0 auto 0', width : '0 auto 0'}}>
                <h2>Photo Info</h2>
                <h3>{vData}</h3>
            </div>
        )}
        {showData === true ? (
        <h2 style={{color : 'blue'}}> Loding Data ... </h2>
        ) : photoData.length===0 ? (
            <h2 style={{ color: '#000' }}>No user found!!</h2>
        ) : ( <table style={{margin : 'auto', color : 'green'}}>
        <thead>
            <tr>
                <th>Sl. No</th>
                <th>Title</th>
                <th>URL</th>&nbsp;
                <th col='3'>Modify</th>
            </tr>
        </thead>
        {photoData && photoData.map((pData, index) => {
        return (
            <tbody key={pData.id}>
                <tr>
                    <td>{pData.id}</td>
                    <td>{pData.title}</td>
                    <td>{pData.url}</td>&nbsp;
                    <td>
                        <button style={{backgroundColor : 'yellowgreen', borderRadius : 10}}
                        onClick={()=> vPhoto(pData.url)}
                        >View</button>&nbsp;
                        <button style={{backgroundColor : 'yellow', borderRadius : 10}}>Edit</button>&nbsp;
                        <button style={{backgroundColor : 'red', borderRadius : 10, color : '#fff'}}>Delete</button>&nbsp;
                    </td>
                </tr>
            </tbody>
        );         
        })}
    </table>)}
       
    </div>
      
    </div>
  )
}

export default UserPhotos
