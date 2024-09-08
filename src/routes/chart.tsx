import ChartIsland from "#src/islands/Chart.tsx";
import { ChartColors } from "$fresh_charts/utils.ts";
import { PageLayout } from "#src/components/PageLayout.tsx";

const createRandomNumber = () => {
  return Math.floor(Math.random() * 100);
};

const createChartNumberArray = () => {
  return Array.from({ length: 5 }, createRandomNumber);
};

export default function Home() {
  return (
    <PageLayout>
      <h1 class="text-4xl font-bold">Chart</h1>
      <div class="mt-4 mx-auto max-w-screen-md">
        <ChartIsland
          type="bar"
          options={{ interaction: { mode: "index", intersect: false } }}
          data={{
            labels: ["1", "2", "3", "4", "5"],
            datasets: [
              {
                label: "Data1",
                data: createChartNumberArray(),
                backgroundColor: ChartColors.Blue,
              },
              {
                label: "Data2",
                data: createChartNumberArray(),
                backgroundColor: ChartColors.Orange,
              },
              {
                label: "Data3",
                data: createChartNumberArray(),
                backgroundColor: ChartColors.Purple,
              },
            ],
          }}
        />
      </div>
    </PageLayout>
  );
}
