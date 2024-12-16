import { Button, Icon } from "@cloudscape-design/components";
import useSWR from "swr";
import { HelloResponse } from "./api/hello";
import { apiRoot } from "@/fetch/apiroot";

export default function Home() {
  const hello = useSWR<HelloResponse>(`${apiRoot}/hello`);

  return (
    <>
      <Button
        onClick={() => alert(hello.data?.message)}
        loading={hello.isLoading}
      >
        <Icon name="support" />
        {hello.data?.message}
      </Button>
    </>
  );
}
