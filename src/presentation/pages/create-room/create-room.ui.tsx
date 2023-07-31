import { Button, Input, InputSelector } from "@presentation/components";

export const CreateRoomUI = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="absolute top-[50%] left-[50%] [transform:translate(-50%,-50%)]">
      <div className="mb-4">
        <Input placeholder="Room name" />
      </div>
      <div className="mb-8">
        <InputSelector options={options} />
      </div>
      <Button full>Create</Button>
    </div>
  );
};
