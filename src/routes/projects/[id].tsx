import { Handlers, PageProps } from "$fresh/server.ts";
import { Link } from "../../components/Link.tsx";

const projects = [{ id: 1, name: "Project 1", stars: 10 }, {
  id: 2,
  name: "Project 2",
  stars: 20,
}];

interface Project {
  name: string;
  stars: number;
  message?: string;
}

export const handler: Handlers<Project> = {
  async GET(_req, ctx) {
    const project = await projects.find((project) =>
      project.id === Number(ctx.params.id)
    );
    if (!project) {
      return ctx.renderNotFound({
        name: "",
        stars: 0,
        message: "Project does not exist",
      });
    }
    return ctx.render(project);
  },
};

export default function ProjectPage(props: PageProps<Project>) {
  if (props.data.message) {
    return <h1 class="text-4xl font-bold">{props.data.message}</h1>;
  }

  return (
    <div>
      <h1 class="text-4xl font-bold">{props.data.name}</h1>
      <p>{props.data.stars} stars</p>
      <div class="mt-4">
        <Link text="Back" href="/" color="secondary" />
      </div>
    </div>
  );
}
