import React from 'react';





function Cards(props) {

return(
<div class="card">
                                        
<div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.description}</p>
    <a href={props.link}>{props.title}</a>
</div>
</div>

);

}

export default Cards;