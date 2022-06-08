type InputProps = {
  id: string
  label: string
  value: string
  handler: (e: string) => void
}

export default function Input({ id, value, label, handler }: InputProps): JSX.Element {
  return (
    <div className="pb-4">
      <label className="text-xs" htmlFor={id}>
        {label}
      </label>
      <input
        onChange={(e) => handler(e.target.value)}
        value={value}
        id={id}
        className="border-1 w-full rounded-md border border-gray-300 p-2"
        type="text"
      ></input>
    </div>
  )
}
