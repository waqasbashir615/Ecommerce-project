import { Card, CardContent } from "@/components/ui/card";
import IMAGES from "@/assets/images";
import { format } from "date-fns";

const LatestBlogs = () => {
  const posts = [
    {
      image: IMAGES.BANNER1,
      title: "Spring – Summer Trending 2020",
      author: "admin",
      date: new Date("2022-05-11"),
      excerpt:
        "Typography is the work of typesetters, compositors, typographers, graphic designers...",
    },
    {
      image: IMAGES.BANNER1,
      title: "Autumn – Winter Collection 2021",
      author: "admin",
      date: new Date("2021-10-15"),
      excerpt:
        "Discover the latest trends in winter fashion with our exclusive collection...",
    },
    {
      image: IMAGES.BANNER1,
      title: "Minimalist Design Essentials",
      author: "designer",
      date: new Date("2022-03-22"),
      excerpt:
        "Less is more. Explore how minimalist design can transform your space...",
    },
  ];

  return (
    <div>
      <div className="flex justify-center my-8 px-4">
        <fieldset className="w-full sm:w-2/3 md:w-1/2 lg:w-1/2 border-t-2 border-gray-800 border-b-0 border-l-0 border-r-0">
          <legend className="px-4 text-center">
            <span className="px-2 text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
              LATEST FROM BLOG
            </span>
          </legend>
          <p className="text-center text-[#928987] text-sm sm:text-base">
            The freshest and most exciting news
          </p>
        </fieldset>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {posts.map((post, index) => (
          <Card key={index} className="cursor-zoom-in shadow-none border-none">
            <div className="relative group inline-block overflow-hidden ">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full max-h-[300px] object-cover transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
                     group-hover:scale-110 group-hover:rounded-none"
              />
              <div
                className="absolute inset-0 border-2 border-transparent rounded-lg 
                   transition-all duration-300 group-hover:border-white group-hover:scale-95"
              />
            </div>

            <CardContent className=" px-0">
              <h3 className="text-lg font-semibold leading-tight mb-1 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                By {post.author} on {format(post.date, "MMMM d, yyyy")}
              </p>
              <p className="text-sm text-gray-600 line-clamp-3">
                {post.excerpt}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
