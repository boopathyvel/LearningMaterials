import React from 'react';

const Ninjaz = ({ninjas,deleteNinja}) => {
        const ninjaList = ninjas.map(ninja =>{
            return (
                 <div className='ninja' key={ninja.id}>
                 <div>Name:{ninja.name}</div>
                 <div>Age:{ninja.age}</div>
                 <div>Belt:{ninja.belt}</div>
                 <button onClick={()=>{deleteNinja(ninja.id)}}>Delete Ninja</button>
                 </div>
            )
        });
        return(
            <div className="ninja-list">
                {ninjaList}
            </div>
        )
}

export default Ninjaz;