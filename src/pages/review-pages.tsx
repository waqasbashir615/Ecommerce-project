import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, LayoutList, Grid3X3 } from "lucide-react";
import GenBreadcrumb from "./generic-components/gen-breadcrumb";

interface Review {
  avatar: string;
  name: string;
  rating: number;
  date: string;
  comment: string;
  id: string;
}

const reviews: Review[] = [
  {
    id: "1",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Jane Doe",
    rating: 5,
    date: "June 28, 2023",
    comment:
      "Excellent product quality and fast delivery. Will definitely purchase again!",
  },
  {
    id: "2",
    avatar: "https://randomuser.me/api/portraits/women/52.jpg",
    name: "Emily Johnson",
    rating: 5,
    date: "July 10, 2023",
    comment: "Fantastic support and really easy to use. Highly recommended!",
  },
  {
    id: "3",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "Robert Smith",
    rating: 4,
    date: "June 15, 2023",
    comment: "Good product overall, but shipping took longer than expected.",
  },
  {
    id: "4",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    name: "Michael Brown",
    rating: 3,
    date: "July 1, 2023",
    comment: "Decent product but could use some improvements in build quality.",
  },
];

const ReviewPage = () => {
  const [layout, setLayout] = useState<"list" | "grid">("list");

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="px-20 py-10">
        {/* Breadcrumb */}
        <GenBreadcrumb
          items={[
            { label: "Home", to: "/main" },
            { label: "Profile", to: "/profile" },
            { label: "Customer Review" }, // current page
          ]}
        />
      </div>

      {/* Page Header */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
            Customer Reviews
          </h1>
          <p className="text-gray-500">What our customers say about us</p>
        </div>

        {/* Rating Summary */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-gray-900">
                {averageRating.toFixed(1)}
              </div>
              <div className="flex justify-center mt-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i <= Math.round(averageRating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-500 mt-1">
                Based on {reviews.length} reviews
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            All Reviews ({reviews.length})
          </h2>
          <Button
            variant="outline"
            onClick={() =>
              setLayout((prev) => (prev === "list" ? "grid" : "list"))
            }
            className="flex items-center gap-2"
          >
            {layout === "list" ? (
              <>
                <Grid3X3 className="w-4 h-4" />
                Grid View
              </>
            ) : (
              <>
                <LayoutList className="w-4 h-4" />
                List View
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Reviews */}
      <main className="max-w-6xl mx-auto pb-12 px-4">
        <div
          className={`${
            layout === "grid"
              ? "grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-6"
          }`}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-md transition-all"
            >
              <div
                className={`flex ${
                  layout === "list"
                    ? "flex-row items-start"
                    : "flex-col items-center text-center"
                } gap-4 mb-4`}
              >
                <Avatar className="h-12 w-12">
                  <AvatarImage src={review.avatar} alt={review.name} />
                  <AvatarFallback>
                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-900 truncate">
                    {review.name}
                  </h4>
                  <div
                    className={`flex items-center gap-1 mt-1 ${
                      layout === "grid" ? "justify-center" : "justify-start"
                    }`}
                  >
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i <= review.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {review.date}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mt-3">{review.comment}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ReviewPage;
