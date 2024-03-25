import { Button } from "@repo/ui/button";
import {PrismaClient} from "@repo/db/client"

const client = new PrismaClient();
export default function Page(): JSX.Element {
  return (
    <div className="text-2xl ">
      H1 There!
    </div>
  );
}
