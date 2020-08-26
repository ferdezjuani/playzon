import React from 'react'
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <img className="home__image"src="https://i.imgur.com/qFktQuB.png" alt="" />

            {/* Product id, title, price, image */}
            <div className="home__title__recomend">
                <h1>Recomended For You</h1>
            </div>
            <div className="home__row">
                <Product 
                    id="1"
                    title="Spotify Lite"
                    price={0}
                    image="https://lh3.googleusercontent.com/dwyqtk9CgAaoXUcYB8pUHXRErF5A2Shd0UrZdBLkpAFx_e630aZahwN31HRZWNksIQ=s180-rw"
                />
                <Product 
                    id="2"
                    title="Boom Beach"
                    price={0.99}
                    image="https://lh3.googleusercontent.com/y_Dr51TrM3NfJO-bFECbGVXsjfFYo-6YjiJfIQwyNBX6VdBW8H8eSEZzpCXcGKKByyw=s180-rw"
                />
                <Product 
                    id="3"
                    title="Pokémon GO"
                    price={0}
                    image="https://lh3.googleusercontent.com/wPfLmWBJwsPdBhsFXc8X4QZOOvePWjoOBLFXXCwyegjRwYOuabmG5cynthlW0HDgy9s=s180-rw"
                />
                <Product 
                    id="4"
                    title="English For All!"
                    price={0.49}
                    image="https://lh3.googleusercontent.com/oFi7dKxZ5ZA3tdVMLLQxZDVZQtdlPny2QHqN0VRzvozo6gt-MUBXyme5sHis6FC7mh8=s180-rw"
                />
                <Product 
                    id="5"
                    title="Clipboard Pro"
                    price={2.82}
                    image="https://lh3.googleusercontent.com/2BnSZVSvaMTa3zd1EHFbNhHqO3O-QrEK-F17ssqfAjWxTEJrbf5gphVII_62cFGgbRx1=s180-rw"
                />
                <Product 
                    id="6"
                    title="SafeInCloud Pro"
                    price={7.99}
                    image="https://lh3.googleusercontent.com/701ZtPqagBgasQuodBJe92fvqzAHl9NCzqMZPd27tnHJehKRi7u4DHe_0kb1f_rWgDkP=s180-rw"
                />
            </div>
            {/* Product */}

        </div>
    )
}

export default Home
