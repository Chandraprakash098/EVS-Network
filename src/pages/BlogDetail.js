import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams(); // Get the blog ID from the URL

  // Static blog details for now (replace with API call or state management later)
  const blogDetails = [
    {
      title: "Bollywood versus Independent Artists: A Change in Preferences of the Audience",
      content: `
        The tastes of the Indian music scene have changed dramatically in the last several years, moving from typical Bollywood songs to a wide variety of independent music. The rise of indie musicians has begun to rewrite the country's musical history as fans grow more discriminating and daring.

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
    The shift from Bollywood to independent music reflects a broader cultural change within India. Audiences are no longer passive consumers; they are active participants in the music scene, seeking out artists who resonate with their values and experiences. As the music landscape continues to evolve, it’s clear that both Bollywood and independent artists will play crucial roles in shaping the future of Indian music.

    In this vibrant and ever-changing environment, one thing is certain: the love for music remains, but how it’s created, shared, and consumed is being redefined. Whether you find yourself dancing to the latest Bollywood chartbuster or vibing to an indie artist’s heartfelt ballad, the diversity in India’s music scene is something to celebrate.

      `,
    },
    {
      title: "BookMyShow Warns Fans against Unauthorized Coldplay Ticket Sales : It's Illegal in India",
      content: `
        Coldplay's concerts are renowned for their energetic performances, stunning visuals, and iconic set lists. Fans can expect to hear the band's biggest hits, including "Yellow," "Viva la Vida," "Paradise," and "Fix You," along with songs from their latest album. The concert will likely feature a mix of classic rock anthems and more recent pop-oriented tracks, making it a must-see event for fans of all ages.

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

        Remember: BookMyShow is the only authorized ticketing platform for Coldplay concerts in India

      `,
    },
  ];

  const post = blogDetails[id]; // Retrieve the post based on the ID

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 text-white py-24 px-9 text-center sm:py-20 md:py-24">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          {post.title}
        </h1>
        <p className="mt-4 text-base sm:text-lg">
          <Link to="/" className="hover:text-neonGreen">
            Home
          </Link>{" "}
          &gt; 
          <Link to="/blog" className='hover:text-neonGreen'>
          Blog
          </Link>
           &gt; {post.title}
        </p>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="bg-white shadow-md rounded-lg p-6 sm:p-8 lg:p-12">
          <p className="text-base sm:text-lg leading-relaxed text-gray-500 whitespace-pre-line">
            {post.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;




