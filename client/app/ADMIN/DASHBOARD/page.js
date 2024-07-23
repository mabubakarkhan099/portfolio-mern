import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

import "../dashboard.scss";
import { Button } from "@/components/ui/button";
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
            <TabsContent value="projects" className="bg-white rounded-xl ">
              <div className="p-5 ">
                <form>
                  <div className="grid gap-5">
                    <Input type="text" className="" placeholder="Project Title (Keep it minimal)" />
                    <Textarea placeholder="Project Description..." />
                    <Input type="text" className="" placeholder="Enter Framewors (Reactjs, NextJs, Tailwind, etc)" />
                    <RadioGroup defaultValue="option-one" className="flex gap-4">
                      <p className="fw-bold">Project Type</p>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-one" id="option-one" />
                        <Label htmlFor="option-one">Real</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="option-two" id="option-two" />
                        <Label htmlFor="option-two">Practice</Label>
                      </div>
                    </RadioGroup>
                    <div className="flex gap-3 items-center">
                      <Label htmlFor="thumbnail" className="fw-bold">
                        Thumbnail
                      </Label>
                      <Input type="file" id="thumbnail" className="" accept=".jpg, .jpeg, .png, .webp, .bmp" />
                    </div>
                    <div className="flex gap-3 items-center">
                      <Label htmlFor="thumbnail" className="fw-bold">
                        Screenshots
                      </Label>
                      <Input type="file" id="thumbnail" className="" multiple accept=".jpg, .jpeg, .png, .webp, .bmp" />
                    </div>
                    <Button type="submit" >Add Project</Button>
                  </div>
                </form>
              </div>
            </TabsContent>
            <TabsContent value="password" className="bg-white rounded-xl ">
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
