import React from "react";
import "./AboutusLayout.css";
import fotodiv1 from "../../assets/cat1.jpg";
import fotodiv2 from "../../assets/cat2.jpg"


function AboutusLayout() {
    return (
        <>
            <h1 className="h1-abt">
                Como surgimos<span>?</span>
            </h1>
            <hr />
            <div className="about-top">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maiores provident quod vero pariatur a incidunt id accusantium labore reiciendis. Molestiae facere fuga sint corporis, a optio voluptas vel minima!</p>

                <img className="abt-top-img" src={fotodiv1} alt="" />

            </div>

            <h2 className="h2-abt">
                O que fazemos<span>?</span>
            </h2>
            <hr />

            <div className="middle-abt">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut corporis tenetur earum nulla odit fugit eligendi. Dolor enim voluptates veniam voluptatum vero minima mollitia, ab vitae consequuntur aperiam, officia magni!</p>
                <img className="middle-img" src={fotodiv2} alt="" />
            </div>

            <h3 className="h3-abt">Equipe<span>.</span></h3>
            <div className="bottom-abt">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi qui cumque ex aut sint nisi aspernatur, sapiente facilis perferendis culpa id, reprehenderit dolor repellendus enim necessitatibus? Eaque modi nesciunt provident?</p>

                <img className="bottom-img" src={fotodiv2} alt="" />
            </div>
        </>
    );
}
export default AboutusLayout;