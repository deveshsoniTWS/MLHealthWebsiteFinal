import { useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, X } from "lucide-react";

const videos = [
  {
    title: "SCAIDA in Clinical Settings",
    thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600",
    description: "See how SCAIDA is transforming diagnostics in hospitals",
    videoId: "dQw4w9WgXcQ" // Example YouTube video ID
  },
  {
    title: "AI Model Demonstration",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600",
    description: "Watch our AI models analyze medical imaging in real-time",
    videoId: "Yes-vV_cvGA" // Example YouTube video ID
  },
  {
    title: "User Interface Walkthrough",
    thumbnail: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600",
    description: "Learn how to use the SCAIDA interface for optimal results",
    videoId: "dQw4w9WgXcQ" // Example YouTube video ID
  }
];

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(null);

  const openVideo = (videoId) => {
    setActiveVideo(videoId);
  };

  const closeVideo = () => {
    setActiveVideo(null);
  };

  return (
    <section id="videos" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            SCAIDA in Action
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See our AI-powered diagnostic solutions in real-world scenarios
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-sm overflow-hidden flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" 
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                  <button 
                    onClick={() => openVideo(video.videoId)}
                    className="bg-primary text-white px-4 py-2 rounded-full flex items-center gap-2"
                  >
                    <PlayCircle className="h-5 w-5" />
                    Watch Now
                  </button>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{video.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
            <button 
              onClick={closeVideo}
              className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-1 z-10 hover:bg-black/80"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="relative pb-9/16 h-0" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
                title="Video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}