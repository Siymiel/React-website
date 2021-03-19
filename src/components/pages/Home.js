import Herosection from '../herosection/Herosection';
import '../../App.css';
import Cards from '../cards/Cards';
import Footer from '../footer/Footer';
import Postsection from '../postsection/Postsection';
import Gallery from '../gallery/Gallery';

const Home = () => {
    return (
        <>
            <Herosection/>
            <Cards/>
            <Postsection/>
            <Gallery/>
            <Footer/>
        </>
    )
}

export default Home