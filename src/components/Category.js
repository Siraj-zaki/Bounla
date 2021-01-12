import React from 'react'
import '../bootstrap.min.css'
import '../index.css'
import '../smartphoto.min.css'
import '../styles.css'
import '../plyr.css'
import '../core.min.css'
import img1 from '../public/img-category/amateurs-faNEcKW7ZutN5dvj9nwd5SvP5nQdYbQo.png'
import img2 from '../public/img-category/amatrice-o1XNQ6DlO6GluWVgoU1DbshOubK2lnav.png'
import img3 from '../public/img-category/artist-By4bfBlXy75qPKK99RgC5MN9g8lUTWo8.jpg'
import img4 from '../public/img-category/designer-SP7jB58pOuQW7Wz3Tf2v32OOZrU6zgxh.jpg'
import img5 from '../public/img-category/developer-fpZjQGTE9TCtNIkE3K7XmOyoFHsrcI7Q.jpg'
import img6 from '../public/img-category/drawing-and-painting-sRKBmjTngYwmwZ5PZ2OIPr2K2MS5WT2Q.jpg'
import img7 from '../public/img-category/modeles-MUNrRYkQFk54JKnXmcWhY92lznBkBgIW.png'
import img8 from '../public/img-category/others-PplPsJxWsOu7ex6qWqWdQtMhYDufxM2k.jpg'
import img9 from '../public/img-category/photography-Q8AA4mr4v3Y7AkNEj9dU46oHjTJqAWcO.jpg'
import img10 from '../public/img-category/podcasts-ubacYB2BVCgzu79lqOXp9Zfa2jtjwgFE.jpg'
import img11 from '../public/img-category/video-and-film-F4BHush4GW0y9WzMrxWCJXEoKMcZWZeZ.jpg'
import img12 from '../public/img-category/writing-Q5b6A8vlTiE4W1pokW1sR1TGxJigTLAv.jpg'
export default class Category extends React.Component {
    render() {
        return (
            <div class="nav-scroller py-1 mb-4">
                <nav class="nav d-flex justify-content-between">
                    <a class="text-muted btn btn-sm bg-white border mr-2 e-none btn-category " href="category/amateurs.html">
                        <img src={img1} class="mr-2 rounded" width="30" /> Amateurs
</a>
                    <a class="text-muted btn btn-sm bg-white border mr-2 e-none btn-category " href="category/amatrices.html">
                        <img src={img2} class="mr-2 rounded" width="30" /> Amatrices
</a>
                    <a class="text-muted btn btn-sm bg-white border mr-2 e-none btn-category " href="category/animation.html">
                        <img src={img3} class="mr-2 rounded" width="30" /> Animation
</a>
                    <a class="text-muted btn btn-sm bg-white border mr-2 e-none btn-category " href="category/artist.html">
                        <img src={img4} class="mr-2 rounded" width="30" /> Artist
</a>
                    <a class="text-muted btn btn-sm bg-white border mr-2 e-none btn-category " href="category/others.html">
                        <img src={img5} class="mr-2 rounded" width="30" /> Autres
</a>
                    <a class="text-muted btn btn-sm bg-white border mr-2 e-none btn-category " href="category/designer.html">
                        <img src={img6} class="mr-2 rounded" width="30" /> Designer
</a>
                    <a class="text-muted btn btn-sm bg-white border mr-2 e-none btn-category " href="category/developer.html">
                        <img src={img7} class="mr-2 rounded" width="30" /> Developer
</a>
                    <a class="text-muted btn btn-sm bg-white border mr-2 e-none btn-category " href="category/drawing-and-painting.html">
                        <img src={img8} class="mr-2 rounded" width="30" /> Drawing and Painting
</a>
                    <a class="text-muted btn btn-sm bg-white border mr-2 e-none btn-category " href="category/modeles.html">
                        <img src={img9} class="mr-2 rounded" width="30" /> Modèles
</a>
                    <a class="text-muted btn btn-sm bg-white border mr-2 e-none btn-category " href="category/photography.html">
                        <img src={img10} class="mr-2 rounded" width="30" /> Photography
</a>
                    <a class="text-muted btn btn-sm bg-white border mr-2 e-none btn-category " href="category/podcasts.html">
                        <img src={img11} class="mr-2 rounded" width="30" /> Podcasts
</a>
                    <a class="text-muted btn btn-sm bg-white border mr-2 e-none btn-category " href="category/video-and-film.html">
                        <img src={img12} class="mr-2 rounded" width="30" /> Video and Film
</a>
                    <a class="text-muted btn btn-sm bg-white border mr-2 e-none btn-category " href="category/writing.html">
                        <img src={img12} class="mr-2 rounded" width="30" /> Writing
</a>
                </nav>
            </div>
        )
    }
}