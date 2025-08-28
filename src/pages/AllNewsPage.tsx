import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Section from "@/components/Section"
import Button from "@/components/Button"
import { Calendar } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { client } from "../lib/sanity.client" // 👈 make sure you created this file as explained before

const AllNewsPage = () => {
  const [allNews, setAllNews] = useState([])

  useEffect(() => {
    client.fetch(
      `*[_type == "news"] | order(publishedAt desc) {
        title,
        content,
        publishedAt,
        "imageUrl": image.asset->url
      }`
    )
    .then(setAllNews)
    .catch(console.error)
  }, [])

  return (
    <Section id="all-news">
      <div className="container mx-auto">
        <Header />
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h1 className="heading-lg">All News</h1>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allNews.map((news, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200"
            >
              {news.imageUrl && (
                <img 
                  src={news.imageUrl} 
                  alt={news.title} 
                  className="w-full h-48 object-cover" 
                />
              )}
              <div className="p-6">
                <div className="flex items-center space-x-2 text-gray-500 text-sm mb-2">
                  <Calendar size={14} />
                  <span>
                    {news.publishedAt 
                      ? new Date(news.publishedAt).toLocaleDateString() 
                      : "No date"}
                  </span>
                </div>
                <h2 className="text-lg font-semibold mb-2">{news.title}</h2>
                <p className="text-gray-600 mb-4">{news.content}</p>
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </Section>
  )
}

export default AllNewsPage
