export interface ChildrenProps {
  name: string;
  lastName: string;
}

export default function DirectChildren(props: ChildrenProps) {
  return (
    <div>
      <p className="text-sm font-semibold">
        {props.name} <strong>{props.lastName}</strong>{" "}
      </p>
    </div>
  );
}
