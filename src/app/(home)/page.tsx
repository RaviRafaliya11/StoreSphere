import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function Home() {
  return (
    <div>
      <Button variant="elevated" className="m-5">
        Hello World
      </Button>
      <Progress value={50}></Progress>
    </div>
  );
}
