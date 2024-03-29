function Winner(props) {
  const { prizeType, list } = props;

  return (
    <>
      <ul role="list" className="divide-y divide-gray-100">
        {list?.map((person) => (
          <li key={person.id} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                src={
                  "data:image/png;base64,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"
                }
                alt=""
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {person.Name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {person.id}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Winner;
