import AddFriendButton from "@/components/AddFriendButton";
import { FC } from "react";

interface AddPageProps {}

const AddPage: FC = () => {
  return (
    <main className="pt-8">
      <h1 className="font-bold text-5xl mb-8">
        <AddFriendButton />
      </h1>
    </main>
  );
};

export default AddPage;
