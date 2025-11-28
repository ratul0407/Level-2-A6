import { ArrowUp, ChevronRight, Package } from "lucide-react";

const Overview = () => {
  return (
    <div className="px-2 sm:px-4 lg:px-10">
      <h1 className="text-4xl font-bold text-custom-red">Overview</h1>
      <div className="space-y-10">
        {/* expense cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 mt-10 gap-6">
          <div className="space-y-3 bg-black text-white  rounded-xl px-8 py-6">
            <p>Current Balance</p>
            <p className="text-2xl lg:text-4xl font-bold font-open-sans">
              $4,836.00
            </p>
          </div>
          <div className="space-y-3 bg-white shadow-sm rounded-xl px-8 py-6">
            <p>Income</p>
            <p className="text-2xl lg:text-4xl font-bold font-open-sans">
              $3,814.25
            </p>
          </div>
          <div className="space-y-3 bg-white shadow-sm  rounded-xl px-8 py-6">
            <p>Expenses</p>
            <p className="text-2xl lg:text-4xl font-bold font-open-sans">
              $1,700.50
            </p>
          </div>
        </div>
        {/* parcel stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-6 content-start">
          <div className="bg-white shadow-sm px-8 py-4 rounded-xl space-y-5">
            <div className="flex items-center justify-between">
              <p className="font-bold text-xl">Parcels</p>
              <p className="flex items-center  text-custom-red">
                See Details <ChevronRight className="inline size-5" />
              </p>
            </div>

            <div className="bg-gray-100 shadow-sm rounded-xl flex items-center px-6 py-6 gap-6">
              <Package strokeWidth={"0.7"} className="size-16" />
              <div>
                <p className="font-bold text-gray-600">Parcels Delivered</p>
                <p className="font-bold text-4xl text-custom-red flex items-center gap-2">
                  319
                  <div className="bg-custom-red rounded-full w-fit text-white p-1">
                    <ArrowUp className="size-4" />
                  </div>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div className="content-end flex items-center gap-3">
                <div className="h-12 rounded-lg bg-blue-500 w-1"></div>
                <div>
                  <p className="text-gray-500 text-sm font-bold">Savings</p>
                  <p className="font-bold text-2xl">$159</p>
                </div>
              </div>

              <div className="flex items-center gap-3 place-self-end">
                <div className="h-12 rounded-lg bg-yellow-500 w-1"></div>
                <div>
                  <p className="text-gray-500 text-sm font-bold">Savings</p>
                  <p className="font-bold text-2xl">$159</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-12 rounded-lg bg-red-500 w-1"></div>
                <div>
                  <p className="text-gray-500 text-sm font-bold">Savings</p>
                  <p className="font-bold text-2xl">$159</p>
                </div>
              </div>

              <div className="flex items-center gap-3 place-self-end">
                <div className="h-12 rounded-lg bg-green-500 w-1"></div>
                <div>
                  <p className="text-gray-500 text-sm font-bold">Savings</p>
                  <p className="font-bold text-2xl">$159</p>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-sm bg-white rounded-xl px-8 py-4">
            <div className="flex items-center justify-between">
              <p className="font-bold text-xl">Revenue</p>
              <p className="flex items-center  text-custom-red">
                See Details <ChevronRight className="inline size-5" />
              </p>
            </div>
          </div>
          <div className="shadow-sm bg-white rounded-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            dolorem nesciunt inventore officiis voluptas iusto. Eos ratione
            delectus et consequatur perspiciatis eum iure doloribus esse
            voluptatibus reiciendis, facilis aperiam, labore aspernatur dolorum
            repudiandae dignissimos laborum. Recusandae, quidem ut. Illum,
            voluptatum aspernatur ea vel dolorem cumque amet eligendi id
            quisquam doloribus quod sed reiciendis quam quo voluptatem maiores
            quos velit laborum optio facere placeat provident animi natus cum.
            Rerum, dignissimos! Suscipit, est repudiandae doloribus quisquam
            sunt neque optio, atque numquam eligendi debitis aspernatur, rem
            magnam consequuntur libero facilis veritatis blanditiis voluptates
            placeat quaerat et? Hic, dolorem doloribus exercitationem odio ad
            natus et, qui eius commodi repellendus fuga laboriosam? Facere
            laboriosam rerum, laudantium tempore quasi quo eveniet provident.
            Culpa facere ex earum quos quidem voluptates repellendus tempore
          </div>
          <div className="shadow-sm bg-white rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
