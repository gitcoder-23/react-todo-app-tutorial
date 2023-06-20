import React, {useEffect, useState} from 'react';
import axios from 'axios';



const UserPhotos = () => {
    const [photoData, setPhotoData] = useState([]);
    const [showData, setShowData] = useState(false);
    const [vData, setVdata] = useState();

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
console.log('vData-->',vData);

const dPhoto = (del)=>{
    console.log('del-->', del);
    if(window.confirm('Do you want to delete?')){
        const delphoto = [...photoData].filter((dData,dIndex) => dData.id !== del);
        setPhotoData(delphoto);
    }
}

  return (
    <div className='container'>
    <div style={{backgroundColor : 'azure'}}>
        <h1 style={{color : 'red'}}>
            User Photos
        </h1>
        {/* <h2>
            view data:
        </h2> */}
        {!vData ? (<></>) : (
            <div style={{border : '5px solid rgb(0,0,0)', margin : '0 auto 0', width : '40%', 
            backgroundColor : 'white', color:'blue', borderRadius:'30px'}}>
                <h3>URL Image</h3>
                <img alt={vData.id} style={{width :'10%'}} src={vData.url} />
                <h3>Photo Id : {vData.id}</h3>
                <h3>Photo Title : {vData.title}</h3>


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
                <th>Image</th>
                <th col='3'>Modify</th>
            </tr>
        </thead>
        {photoData && photoData.map((pData, index) => {
        return (
            <tbody key={index}>
                <tr>
                    <td>{pData.id}</td>
                    <td>{pData.title}</td>
                    <td><img style={{width:'10%'}} alt='' src={pData.url}/></td>
                    <td>
                        <button style={{backgroundColor : 'yellowgreen', borderRadius : 10}}
                        onClick={()=> vPhoto(pData)}>
                            View
                        </button>

                        <button style={{backgroundColor : 'yellow', borderRadius : 10}}>Edit</button>

                        <button style={{backgroundColor : 'red', borderRadius : 10, color : '#fff'}}
                        onClick={()=> dPhoto(pData.id)}>
                            Delete
                        </button>
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
