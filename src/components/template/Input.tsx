export interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputProps) {
  return (
    <div>
      <label className="text-sm text-zinc-400 flex flex-col gap-1">
        {props.label}
        <input
          type={props.type ?? "text"}
          className="bg-zinc-900 px-4 py-2 rounded-md border border-zinc-700"
          value={props.value}
          onChange={props.onChange}
        />
      </label>
    </div>
  );
}
