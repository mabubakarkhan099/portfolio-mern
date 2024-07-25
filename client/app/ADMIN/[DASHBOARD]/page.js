'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import "../dashboard.scss";
import ProjectForm from "@/components/PageSections/Admin/ProjectForm";
import { useRouter } from "next/navigation";
function page() {
  const router = useRouter()
  console.log(router);
  return (
    <section className="admin-section min-h-screen">
      <div className="container py-7">
        <h1 className="text-center fw-bold text-5xl text-orange-400">Admin Page</h1>

        <div className="flex justify-center items-center py-10">
          <Tabs defaultValue="projects" className="mobile:w-full sm:w-1/2">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="projects" className="">
                Add New Projects
              </TabsTrigger>
              <TabsTrigger value="password" className="">
                Password
              </TabsTrigger>
            </TabsList>
            <TabsContent value="projects" className="bg-white rounded-xl  p-4">
              <ProjectForm />
            </TabsContent>
            <TabsContent value="password" className="bg-white rounded-xl ">
              <div className="p-5  ">
                <div className="container  ">
                <p>Lorem ipsum dolor sit amet.</p>

                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default page;
