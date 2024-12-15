import { Button, Icon } from "@cloudscape-design/components";
import useSWR from "swr";
import { HelloResponse } from "./api/hello";

export default function Home() {
  const hello = useSWR<HelloResponse>("/hello");

  return (
    <>
      <Button
        onClick={() => alert(hello.data || hello.error || hello.isLoading)}
      >
        <Icon name="support" />
      </Button>
    </>
  );
}
