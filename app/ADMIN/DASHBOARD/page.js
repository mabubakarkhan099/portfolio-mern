import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
function page() {
  return (
    <section>
      <div className="container py-7">
        <h1 className="text-center fw-bold text-3xl">Admin Page</h1>

        <div className="flex justify-center items-center">
        <Tabs defaultValue="account" className="w-full">
          <TabsList>
            <TabsTrigger value="projects">Add New Projects</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="projects">
            <form>
                <div className="flex flex-wrap gap-5 justify-center">
                <Input type="text" className="mobile:w-full sm:w-[45%]" placeholder="Enter Project Title (Keep it minimal)" />
                <Input type="text" className="mobile:w-full sm:w-[45%]" placeholder="Enter Project Type" />
                </div>
            </form>
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>


        </div>
        
      </div>
    </section>
  );
}

export default page;
