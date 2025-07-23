import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import {
  Pencil,
  Mail,
  Phone,
  MapPin,
  Globe,
  User,
  Heart,
  ShoppingCart,
  Star,
  Clock,
  Settings,
} from "lucide-react";

const tabs = [
  { value: "overview", label: "Overview", icon: User },
  { value: "personal", label: "Personal", icon: User },
  { value: "activity", label: "Activity", icon: Clock },
  { value: "reviews", label: "Reviews", icon: Star },
  { value: "settings", label: "Settings", icon: Settings },
];

const UserProfile = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-10 bg-gray-50">
      <h1 className="pb-6 flex items-center justify-center gap-2 text-3xl sm:text-4xl font-semibold text-black mb-4">
        <User className="w-6 h-6" />
        User Profile
      </h1>
      <div className="w-full px-4 sm:px-6 lg:w-[70%] mx-auto">
        <Tabs defaultValue="overview" className="w-full space-y-6">
          <div className="overflow-x-auto">
            <TabsList className="flex w-max gap-2 px-2 sm:grid sm:grid-cols-5 sm:w-full">
              {tabs.map(({ value, label, icon: Icon }) => (
                <TabsTrigger
                  key={value}
                  value={value}
                  className="flex flex-col sm:flex-row items-center justify-center gap-1 px-3 py-2 rounded-lg border border-gray-300 bg-white font-medium text-gray-700 transition hover:bg-gray-100 data-[state=active]:bg-black data-[state=active]:text-white"
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-xs sm:inline hidden">{label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="overview">
            <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
              <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between space-y-4 md:space-y-0 md:space-x-6">
                <div className="relative">
                  <Avatar className="h-32 w-32 mx-auto md:mx-0 shadow-lg hover:scale-105 transition-transform duration-300">
                    <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" />
                    <AvatarFallback>AN</AvatarFallback>
                  </Avatar>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute -bottom-3 -right-3 w-10 h-10 rounded-full shadow-md hover:bg-gray-100 transition"
                  >
                    <Pencil className="w-5 h-5" />
                  </Button>
                </div>
                <div className=" md:text-left mt-4 md:mt-0">
                  <h2 className="text-3xl font-bold mb-2 text-gray-900">
                    Malik Waqas Bashir
                  </h2>
                  <div className="flex flex-col justify-end  items-end gap-3 flex-wrap">
                    <Badge
                      variant="secondary"
                      className="flex items-center gap-2 px-3 py-1 text-sm"
                    >
                      <Star className="w-3 h-3" /> Premium Member
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-green-500 text-green-600 px-3 py-1 text-sm"
                    >
                      Verified
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2 text-gray-700">
                    <Star className="w-5 h-5 text-yellow-500" /> Profile
                    Completion
                  </h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">
                      85%
                    </span>
                    <Progress value={85} className="h-2 rounded-full" />
                  </div>
                  <p className="text-sm text-gray-500">
                    Complete your profile to unlock all features and enjoy a
                    personalized experience.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
                {[
                  { icon: ShoppingCart, label: "Orders", value: "24" },
                  { icon: Heart, label: "Wishlist", value: "8" },
                  { icon: Star, label: "Reviews", value: "5" },
                  { icon: User, label: "Member", value: "2" },
                ].map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="bg-white shadow-sm hover:shadow-lg p-4 rounded-lg transition duration-300 ease-in-out flex flex-col items-center justify-start"
                  >
                    <div className="mb-3 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    <div className="grid grid-rows-2 gap-2 w-full text-center">
                      <div className="text-sm font-medium text-gray-700">
                        {label}
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="personal">
            <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Personal Information
                </h3>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition"
                >
                  <Pencil className="w-4 h-4" /> Edit
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  {[
                    {
                      icon: User,
                      label: "Name",
                      content: (
                        <div className="">
                          <div className="bg-gray-50 p-3 rounded-md shadow-sm">
                            <p className="font-medium text-gray-700">
                              Waqas Bashir
                            </p>
                          </div>
                        </div>
                      ),
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      content: (
                        <div className="bg-gray-50 p-3 rounded-md shadow-sm">
                          <p className="font-medium text-gray-700">
                            waqasb711@gmail.com
                          </p>
                        </div>
                      ),
                    },
                    {
                      icon: Phone,
                      label: "Phone",
                      content: (
                        <div className="bg-gray-50 p-3 rounded-md shadow-sm">
                          <p className="font-medium text-gray-700">
                            +92-308-6996619
                          </p>
                        </div>
                      ),
                    },
                  ].map(({ icon: Icon, label, content }) => (
                    <div key={label}>
                      <Label className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-600">
                        <Icon className="w-4 h-4" /> {label}
                      </Label>
                      {content}
                    </div>
                  ))}
                </div>
                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      label: "Address",
                      content: (
                        <div className="bg-gray-50 p-3 rounded-md shadow-sm">
                          <p className="font-medium text-gray-700">
                            Nawab Town Lahore , Pakistan
                          </p>
                        </div>
                      ),
                    },
                    {
                      icon: Globe,
                      label: "Country",
                      content: (
                        <div className="bg-gray-50 p-3 rounded-md shadow-sm">
                          <p className="font-medium text-gray-700">Pakistan</p>
                        </div>
                      ),
                    },
                    {
                      label: "Gender",
                      content: (
                        <div className="bg-gray-50 p-3 rounded-md shadow-sm">
                          <p className="font-medium text-gray-700">Male</p>
                        </div>
                      ),
                    },
                    {
                      label: "Language",
                      content: (
                        <div className="bg-gray-50 p-3 rounded-md shadow-sm">
                          <p className="font-medium text-gray-700">English</p>
                        </div>
                      ),
                    },
                  ].map(({ icon: Icon, label, content }) => (
                    <div key={label}>
                      <Label className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-600">
                        {Icon && <Icon className="w-4 h-4" />} {label}
                      </Label>
                      {content}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="activity">
            <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                Recent Activity
              </h3>
              {[
                {
                  icon: ShoppingCart,
                  color: "bg-blue-100 text-blue-600",
                  title: "New order placed",
                  desc: "Order #12345 - July 15, 2023",
                  status: "Completed",
                },
                {
                  icon: Star,
                  color: "bg-green-100 text-green-600",
                  title: "Review submitted",
                  desc: "5 stars for 'Premium Headphones'",
                  date: "July 10, 2023",
                },
                {
                  icon: Heart,
                  color: "bg-purple-100 text-purple-600",
                  title: "Added to wishlist",
                  desc: "Wireless Earbuds Pro",
                  date: "July 5, 2023",
                },
              ].map(({ icon: Icon, color, title, desc, status, date }, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start p-4 rounded-lg hover:bg-gray-50 transition-shadow shadow-sm border border-gray-100 gap-4"
                >
                  <div className={`p-3 rounded-full ${color} flex-shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="ml-0 sm:ml-4 flex-1">
                    <h4 className="font-semibold mb-1 text-gray-800">
                      {title}
                    </h4>
                    <p className="text-sm text-gray-600">{desc}</p>
                  </div>
                  {status ? (
                    <Badge variant="outline" className="self-start ml-auto">
                      {status}
                    </Badge>
                  ) : (
                    <div className="ml-auto text-sm text-gray-500 self-start">
                      {date}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reviews">
            <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Customer Ratings
                </h3>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition whitespace-nowrap"
                >
                  <Star className="w-4 h-4" /> See All Reviews
                </Button>
              </div>
              <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    4.8
                  </div>
                  <div className="flex justify-center md:justify-start gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i <= 4
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Based on 5 reviews
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  {
                    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
                    name: "Jane Doe",
                    rating: 5,
                    date: "June 28, 2023",
                    comment:
                      "Excellent product quality and fast delivery. Will definitely purchase again!",
                  },
                  {
                    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
                    name: "Robert Smith",
                    rating: 4,
                    date: "June 15, 2023",
                    comment:
                      "Good product overall, but shipping took longer than expected.",
                  },
                ].map(({ avatar, name, rating, date, comment }, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition"
                  >
                    <div className="flex flex-wrap items-center mb-3 gap-3">
                      <Avatar className="h-10 w-10 mr-3 shadow-sm hover:scale-105 transition-transform duration-300">
                        <AvatarImage src={avatar} />
                        <AvatarFallback>
                          {name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium text-gray-800">{name}</h4>
                        <div className="flex items-center gap-1 mt-1">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i <= rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <div className="text-sm text-gray-500">{date}</div>
                      </div>
                    </div>
                    <p className="text-gray-700">{comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="settings">
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 space-y-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Account Settings
              </h3>

              {[
                {
                  icon: Mail,
                  title: "Email Address",
                  subtitle: "waqasb711@gmail.com",
                  color: "bg-blue-100 text-blue-600",
                },
                {
                  icon: Phone,
                  title: "Phone Number",
                  subtitle: "+92-308-6996619",
                  color: "bg-green-100 text-green-600",
                },
                {
                  icon: Settings,
                  title: "Password",
                  subtitle: "Last changed 3 months ago",
                  color: "bg-purple-100 text-purple-600",
                },
              ].map(({ icon: Icon, title, subtitle, color }, idx) => (
                <div
                  key={idx}
                  className="flex items-start sm:items-center justify-between gap-4 p-4 rounded-lg hover:bg-gray-50 transition cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div
                      className={`p-3 rounded-full ${color} shadow-md flex-shrink-0`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{title}</h4>
                      <p className="text-sm text-gray-500 mt-1 sm:mt-0">
                        {subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Optional change button - uncomment if needed */}
                  {/* <Button 
        variant="outline" 
        size="sm" 
        className="hidden sm:flex"
      >
        Change
      </Button> */}
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default UserProfile;
