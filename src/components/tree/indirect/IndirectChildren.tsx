"use client";
export interface IndirectChildrenProps {
  options: string[];
  onSelected: (option: string) => void;
}

export default function IndirectChildren(props: IndirectChildrenProps) {
  return (
    <div className="flex gap-3">
      {props.options.map((option, index) => {
        return (
          <button
            key={index}
            className="button tertiary"
            onClick={() => props.onSelected?.(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
