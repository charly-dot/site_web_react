const liste =  [
    {
        image: <i class="bi bi-tiktok"></i>,
        nombre: 'Rooms & Appartements',
        type:'Contrary to populaire belief, ipsum is not simply random',
        text : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate accusamus quo voluptates dolorem animi culpa ad, modi necessitatibus quae alias nisi et corporis illo dignissimos nulla impedit voluptatum ullam incidunt."
    },
    {
        image: <i class="bi bi-tiktok"></i>,
        nombre: 'Food & Restaurant',
        type:'Contrary to populaire belief, ipsum is not simply random',
        text : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate accusamus quo voluptates dolorem animi culpa ad, modi necessitatibus quae alias nisi et corporis illo dignissimos nulla impedit voluptatum ullam incidunt."
    
    },
    {
        image: <i class="bi bi-tiktok"></i>,
        nombre: 'Spa & Fitnes',
        type:'Contrary to populaire belief, ipsum is not simply random',
        text : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate accusamus quo voluptates dolorem animi culpa ad, modi necessitatibus quae alias nisi et corporis illo dignissimos nulla impedit voluptatum ullam incidunt."
    
    },
    {
        image: <i class="bi bi-tiktok"></i>,
        nombre: 'Sport & Gaming',
        type:'Contrary to populaire belief, ipsum is not simply random',
        text : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate accusamus quo voluptates dolorem animi culpa ad, modi necessitatibus quae alias nisi et corporis illo dignissimos nulla impedit voluptatum ullam incidunt."
    
    },
    {
        image: <i class="bi bi-tiktok"></i>,
        nombre: 'Sport & Gaming',
        type:'Contrary to populaire belief, ipsum is not simply random',
        text : " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate accusamus quo voluptates dolorem animi culpa ad, modi necessitatibus quae alias nisi et corporis illo dignissimos nulla impedit voluptatum ullam incidunt."
    
    }
    
]

export function Scroll(){

    return <div>

        <div className="dddd" >
            <ul >
                {liste.map(listes =>(
                    <li key={listes.nombre}>
                        <div>
                            <p >
                                <span><div className="image">{listes.image}</div></span> <br />
                                <div className="title">{listes.nombre}</div> <br />
                                <div className="sous_title">{listes.type}</div>
                            </p>
                        </div>
                    </li>
                                    
                                    
                ))}
            </ul>
        </div>

    </div>

}
