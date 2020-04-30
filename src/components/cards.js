import React from 'react';





function Cards(props) {

return(
<div className="card" style={{width:"350px",height:"350px"}}>
                                     
<div className="card-body">
    <br></br>
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <a href={props.link}>{props.title}</a>
</div>
</div>

);

}

export default Cards;