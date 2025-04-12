import { createBrowserRouter, Link, RouterProvider } from "react-router-dom"
import { Index } from "../App"
import { Home } from "../fenetre/home"
import { About } from "../fenetre/about"
import { En_tete } from "../fenetre/en_tete"
import "./../style/en_tete.css"
import "./../style/navbar.css"
import { Room } from "../fenetre/room"
import { Service } from "../fenetre/service"
import { Staffs } from "../fenetre/staff"

function PageWrapper({ title, subtitle}) {
    return (
        <>
            <En_tete title={title} subtitle={subtitle} />
            
           
        </>
    );
}

const router = createBrowserRouter([

    {
        path :'/',
        element:  <Index />
    },
    {
        path :'/home',
        element: <Home/>
    },
    {
        path :'/room',
        element: (
            <div>
                <PageWrapper title="ROOMS" subtitle="ROOM">
                    <h1>qsf</h1>
                </PageWrapper>
                <div className="reglement">
                    <div className="abouts-home">
                        <Room />
                    </div>
                    
                </div>        
            </div>
        
        )
    },
    {
        path :'/service',
        element: (
            <div>
                <PageWrapper title="SERVICES" subtitle="SERVICE">
                    <h1>qsf</h1>
                </PageWrapper>
                <div className="reglement">
                    <div className="abouts-home">
                        <Service/>
                    </div>
                    
                </div>              
            </div>
        
        )
    },
    {
        path :'/About',
        element: (
            <div>
                <PageWrapper title="ABOUTS" subtitle="ABOUT">
                    <h1>qsf</h1>
                </PageWrapper>
                <div >
                    <div className="abouts-home">
                        <About />
                    </div>
                    
                </div>              
            </div>
        
        )
    }
    ,
    {
        path :'/contact',
        element: (
            <div>
                <PageWrapper title="CONTACTES" subtitle="CONTACTE">
                    <h1>qsf</h1>
                </PageWrapper>
                <div >
                    <div className="abouts-home">
                        <Staffs />
                    </div>
                    
                </div>              
            </div>
        
        )
    }
    
    
    
])

export function Route(){

        return  <div>

            <RouterProvider router={router} />
              
        </div> 

}

export function Button(){

    return <div>
        <button>
            <Link to="home">Affiche</Link>
         </button>
    </div>

}
export function Buttoné(){

    return <div>
        <button>
            <Link to="/">ddddddddd</Link>
         </button>
    </div>

}