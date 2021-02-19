import Herosection from '../herosection/Herosection';
import '../../App.css';
import Cards from '../cards/Cards';
import Footer from '../footer/Footer';
import Postsection from '../postsection/Postsection';

const Home = () => {
    return (
        <>
            <Herosection/>
            <Cards/>
            <Postsection/>
            <Footer/>
        </>
    )
}

export default Home