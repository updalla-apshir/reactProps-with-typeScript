import React, { useState } from "react";
import { Form } from "./ui/form";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type user = {
  name: string;
  sessionId: number;
};
const TsWithUseState = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<user | null>(null);
  const form = useForm();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setUser({
      name: username,
      sessionId: Math.random(),
    });
  };
  return (
    <div className="w-[10rem] ">
      {user ? (
        user.name + " Logged in"
      ) : (
        <Form {...form}>
          <form>
            <label>Username:</label>
            <Input
              type="text"
              name="Username"
              placeholder="Username"
              onChange={handleChange}
            />
            <Button type="submit" onClick={handleClick}>
              Submit
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
};

export default TsWithUseState;
