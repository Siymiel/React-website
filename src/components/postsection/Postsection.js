import PostSectionItem from '../postsectionitem/PostSectionItem'
import './Postsection.css'

const Postsection = () => {
    return (
        <div className="container">
            <h1 className="title">From the Blog Page</h1>
        <div className="post-container">
            <PostSectionItem title="Cruising The Islands Beyond" caption="Explore beyond" body="In the year 2016, we traveled to 10 countries and attended 7 music festivals in many different countries. We had a crazy start to this year in Myanmar and Thailand. We then traveled to the Philippines and Malaysia, after which San went to Nepal and Germany for visa work. In this time, I (Sonal) went on an adventure in the Himalayas where I camped in a different location every night and eventually crossed the Hampta pass. I then traveled to Turkey where I got stranded in Istanbul during the attempted military coup.  I was lucky that I got out in time to reunite with Sandro in Germany. After this, we traveled all over Europe and attended many music festivals. After 100 days in Europe, we decided to come back to Asia got invited by the Ministry of Tourism of Indonesia for a press trip to their beautiful country. Right after this, we sat on a plane to Goa."/>
            <PostSectionItem title="7 Places you Don't Want to Miss this Summer" caption="Adventure awaiting" body="After Sri Lanka, we headed over to Chennai, Pondicherry and Auroville where we spent a few days before returning home to New Delhi. While in New Delhi, we visited Rishikesh where we bungee jumped with the famous Dangal girls. We also visited Rajasthan to experience the Maharaja life in Bikaner.
            As of mid 2017, we’ve set up our temporary base and residence in Germany, near Holland border. It is an excellent location for traveling around Europe, especially during summer months. The best part is that we’re living very close to Amsterdam.
            As of late 2018 – we have been blessed with a baby girl. We’re no longer leading a nomad lifestyle, but are traveling on our campervan in Europe with our little baby. Want a peek at how we travel with our baby? See this post."/>
        </div>
        </div>

    )
}

export default Postsection
