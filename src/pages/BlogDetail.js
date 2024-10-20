
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, ArrowLeft, Share2, Calendar, User ,Heart, Bookmark, MessageSquare} from 'lucide-react';

import img1 from '../images/blog3.jpeg'
import img2 from '../images/blog2.jpeg'

const BlogDetail = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);

  const blogDetails = [
    {
      title: "Bollywood versus Independent Artists: A Change in Preferences of the Audience",
      author: "Sarah Johnson",
      category: "Music Industry",
      image:img1,
      tags: ["Bollywood", "Independent Music", "Indian Culture", "Music Industry", "Digital Era"],
      authorRole: "Music Industry Analyst",
      authorBio: "Sarah Johnson has been covering the Indian music industry for over a decade, with a special focus on emerging independent artists and changing cultural dynamics.",
      content: `The tastes of the Indian music scene have changed dramatically in the last several years, moving from typical Bollywood songs to a wide variety of independent music. The rise of indie musicians has begun to rewrite the country's musical history as fans grow more discriminating and daring.

      Bollywood's Allure
      Bollywood music, which is known for its sweeping orchestrations and appealing songs, has long been associated with Indian movies. Film soundtracks dominated the charts for decades, ingraining themselves deeply into popular culture. Bollywood's glamor and glamour combined with the celebrity status of well-known playback singers produced a combination that struck a chord with many viewers.

      But as the digital era developed, this formula's shortcomings became apparent. A growing number of listeners began to seek out authenticity and uniqueness, which inspired them to investigate music outside of the mainstream film industry.

      The Ascent of Self-Selected Artists
      Independent musicians offer a novel viewpoint to the music industry, in contrast to Bollywood's refined production. They frequently embrace a variety of genres, play around with unusual sounds, and use their lyrics to address societal issues. Due to the democratization of music distribution brought about by websites like YouTube, Instagram, and Spotify, independent musicians can now reach a worldwide audience without the support of big record labels.

     The problems with this method became clear as the digital era progressed. As more and more listeners started looking for authenticity and individuality, they were motivated to look into music from sources other than the mainstream cinema business.

     The Rise of Independent Artists
     Compared to Bollywood's sophisticated production, independent musicians bring a fresh perspective to the music business. They routinely experiment with strange sounds, embrace a wide range of genres, and utilize their songs to speak to social issues. With the help of websites like YouTube, Instagram, and Spotify, which have democratized music distribution, independent musicians may now reach a global audience without the backing of major record labels.

    Musicians like Pratik Kuhad, Divine, and Parekh & Singh, who have catchy songs and unique approaches, have a substantial following base.

    Changing Listener Demographics
    A crucial factor driving this shift is the changing demographics of music consumers. Millennial and Gen Z, who value personal expression and connection, are more inclined to support artists who reflect their experiences and values. This generation is not just looking for a catchy tune but seeks deeper narratives and emotional resonance.

    Moreover, social media plays a vital role in shaping these preferences. Platforms like Instagram and TikTok have given indie artists a space to showcase their work, engage with fans, and build communities around their music. Viral trends and challenges have further amplified the reach of independent artists, making them household names almost overnight.

    The Blurring of Lines
    While the divide between Bollywood and indie music has historically been pronounced, the lines are increasingly blurring. Many mainstream artists are now exploring independent projects, and collaborations between Bollywood musicians and indie artists are becoming common. This fusion not only enriches the music landscape but also highlights the versatility of artists.

    For instance, collaborations like those between A.R. Rahman and indie musicians have resulted in refreshing sounds that appeal to a broader audience. As Bollywood begins to adopt elements from indie music, it opens up new avenues for creative expression.

    Conclusion
    The shift from Bollywood to independent music reflects a broader cultural change within India. Audiences are no longer passive consumers; they are active participants in the music scene, seeking out artists who resonate with their values and experiences. As the music landscape continues to evolve, it's clear that both Bollywood and independent artists will play crucial roles in shaping the future of Indian music.

    In this vibrant and ever-changing environment, one thing is certain: the love for music remains, but how it's created, shared, and consumed is being redefined. Whether you find yourself dancing to the latest Bollywood chartbuster or vibing to an indie artist's heartfelt ballad, the diversity in India's music scene is something to celebrate.`,
    },
    {
      title: "BookMyShow Warns Fans against Unauthorized Coldplay Ticket Sales: It's Illegal in India",
      image: img2,
      tags: ["Coldplay", "Concert", "BookMyShow", "Ticket Sales", "Event Safety"],
      authorRole: "Entertainment Correspondent",
      content: `Coldplay's concerts are renowned for their energetic performances, stunning visuals, and iconic set lists. Fans can expect to hear the band's biggest hits, including "Yellow," "Viva la Vida," "Paradise," and "Fix You," along with songs from their latest album. The concert will likely feature a mix of classic rock anthems and more recent pop-oriented tracks, making it a must-see event for fans of all ages.

        BookMyShow, India's leading ticketing platform, has issued a stern warning to Coldplay fans about the dangers of purchasing unauthorized tickets for the band's upcoming concerts in India. The company has emphasized that selling tickets outside of the official channels is illegal in the country and can lead to financial losses and disappointment for fans.

        The Dangers of Unauthorized Ticket Sales

        Counterfeit Tickets: Unauthorized sellers may offer counterfeit tickets that are invalid and will not grant entry to the concert.
        Price Gouging: Many unauthorized sellers charge exorbitant prices for tickets, taking advantage of the high demand for Coldplay concerts.
        No Customer Support: If you encounter problems with unauthorized tickets, you may have no recourse for refunds or replacements.
        Legal Consequences: Selling tickets without authorization can lead to legal consequences for both the seller and the buyer.
        
        BookMyShow: The Official Ticketing Partner

        BookMyShow is the official ticketing partner for Coldplay's India concerts. By purchasing tickets through BookMyShow, fans can be assured of the authenticity and validity of their tickets. Additionally, BookMyShow offers a secure and hassle-free ticketing experience.

        How to Avoid Scams?

        Purchase tickets only from official channels: BookMyShow is the only authorized ticketing platform for Coldplay concerts in India.
        Beware of suspicious deals: If the price seems too good to be true, it probably is fake
        Verify the seller's legitimacy: Do your research and ensure the seller is reputable.
        Never pay cash upfront: Always use secure payment methods.

        Protect Yourself and Other Fans

        By being aware of the risks associated with unauthorized ticket sales and purchasing tickets only from official channels, you can help protect yourself and other fans from scams and disappointment. Let's work together to ensure a safe and enjoyable experience for everyone attending Coldplay's concerts in India.

        Remember: BookMyShow is the only authorized ticketing platform for Coldplay concerts in India`,
    },
  ];

  const post = blogDetails[id];

return (
  <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    {/* Header Section */}
    <div className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-24 px-6">
      <div className="relative max-w-4xl mx-auto">
        <div className="flex items-center space-x-2 text-gray-300 text-sm mb-4">
          <Link to="/" className="flex items-center hover:text-white transition duration-300">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Home
          </Link>
          <span>/</span>
          <Link to="/blog" className="hover:text-white transition duration-300">Blog</Link>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-sm md:text-base text-gray-300">
          <span className="px-3 py-1 rounded-full bg-blue-500/20">
            {post.category}
          </span>
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </div>

    {/* Image Section */}
    <div className="w-full my-8">
      <div className="max-w-5xl mx-auto">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full rounded-xl shadow-xl object-cover"
          style={{ height: '300px' }}
        />
      </div>
    </div>

    {/* Content Section */}
    <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in">
      <div className="bg-black rounded-2xl shadow-xl p-8 md:p-12">
        <div className="prose prose-lg max-w-none leading-relaxed text-gray-800">
          <p className="text-2xl mb-4 font-serif text-white first-letter:text-6xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">
            {post.content}
          </p>
        </div>

        {/* Tags Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h4 className="text-lg font-semibold mb-4">Related Topics</h4>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <span 
                key={index} 
                className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition duration-300">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default BlogDetail;

