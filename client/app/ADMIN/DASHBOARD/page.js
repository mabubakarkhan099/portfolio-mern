import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import "../dashboard.scss";
function page() {
  return (
    <section className="admin-section min-h-screen">
      <div className="container py-7">
        <h1 className="text-center fw-bold text-5xl text-white">Admin Page</h1>

        <div className="flex justify-center items-center py-10">
          <Tabs defaultValue="account" className="mobile:w-full sm:w-1/2">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="projects" className="">
                Add New Projects
              </TabsTrigger>
              <TabsTrigger value="password" className="">
                Password
              </TabsTrigger>
            </TabsList>
            <TabsContent value="projects" className="bg-white rounded-xl">
              <div className="p-5 ">
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </TabsContent>
            <TabsContent value="password" className="bg-white rounded-xl">
              <div className="p-5 ">
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default page;

{
  /* <form>
<div className="flex flex-wrap gap-5 justify-center">
<Input type="text" className="mobile:w-full sm:w-[45%]" placeholder="Enter Project Title (Keep it minimal)" />
<Input type="text" className="mobile:w-full sm:w-[45%]" placeholder="Enter Project Type" />
</div>
</form> */
}
