import heroImg from '../assets/hero.png'

function Home() {
    return(
        <div>
            <div className="hero">
                <div className='Title'> 
                <h2 className='tagline'> Virat Kohli, you're not just a cricketer, <span className='taglins'>you're an emotion for millions.</span> </h2>

                <p>
                Your passion, determination, and commitment inspire us to dream big and never give up. 
                From chasing your dreams on the streets of Delhi to leading the Indian cricket team with pride, 
                your journey is a testament to hard work and perseverance. Every time you step onto the field, 
                you carry the hopes and dreams of a billion hearts.
                </p>
                </div>

                <div>

                <img src={heroImg} alt="Virat Kohli" className="heroImg" />
                </div>

                <button className='hbtn'>Get Started</button>
            </div>
        </div>
    )
}

export default Home