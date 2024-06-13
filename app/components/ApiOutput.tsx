import { getShortenedLink } from "../actions/callapi";

const ApiOutput = async () => {
  const shortenedUrl = await getShortenedLink();
  return (
    <div className="mt-4 w-full max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Shortened URL</h2>
      {shortenedUrl ? (
        <p className="text-green-500">
          Shortened URL:{" "}
          <a
            href={shortenedUrl || ""}
            target="_blank"
            rel="noopener noreferrer"
          >
            {shortenedUrl}
          </a>
        </p>
      ) : (
        <p>No link created yet.</p>
      )}
    </div>
  );
};

export default ApiOutput;
