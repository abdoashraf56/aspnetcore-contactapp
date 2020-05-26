import React from 'react'
import Landing from '../sections/Landing';


class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <Landing  title="contact application" 
                          subtitle=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam laudantium sint dolorem totam officia vero, minus odit? Incidunt eius neque dignissimos, quam tenetur nesciunt rerum tempore vitae cupiditate, exercitationem quasi." 
                          action={{text : "Start now" , path : "/home"}}
                />
            </div>
        );
    }
}

export default LandingPage