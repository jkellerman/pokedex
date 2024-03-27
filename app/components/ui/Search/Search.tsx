import Icon from "./icon";

export default function Search() {
  return (
    <form className="flex gap-1 py-4 px-6 rounded-lg items-center border-2 border-background drop-shadow-lg bg-background m-[-2rem] w-full mb-8">
      <Icon />
      <input
        placeholder="Search for a pokèmon"
        type="text"
        className="rounded-md px-2 outline-none w-full"
      />
    </form>
  );
}
