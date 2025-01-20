import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { postProps } from "../types/types";

const PostCard = (props: postProps) => {
  return (
    <div className="mt-8 w-full sm:w-[20rem] max-w-full sm:max-w-[20rem]">
      <Card>
        <CardHeader>
          <CardTitle>{props.title}</CardTitle>
          <CardDescription>{props.body}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default PostCard;
