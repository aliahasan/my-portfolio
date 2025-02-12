import ProjectTable from "@/components/ProjectTable";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TProject } from "@/types";

const AllProjects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/project/projects`,
    {
      cache: "no-store",
      next: {
        tags: ["projects"],
      },
    }
  );
  const data = await res.json();
  const projects = data?.data;
  return (
    <div className="container mx-auto   py-6">
      <h1 className="text-2xl font-bold mb-4">All Blogs</h1>
      <div className="overflow-x-auto">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="hidden sm:table-cell">Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead className="hidden md:table-cell">Live link</TableHead>
              <TableHead className="hidden md:table-cell">
                Github link
              </TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.length > 0 ? (
              projects.map((project: TProject) => (
                <ProjectTable key={project._id} project={project} />
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} className="text-center py-4">
                  No blogs found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AllProjects;
