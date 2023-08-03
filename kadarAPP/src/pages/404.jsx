import { Link, useRouteError } from "react-router-dom";
import Button from "../components/Button";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white">
          <div className="flex flex-col items-center gap-5">
            <h1 className="font-bold text-3xl text-red-500 lg:text-6xl">404</h1>
            <div>
              <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                <span className="text-red-500">Oops!</span> Page{" "}
                {error.statusText}
              </h6>

              <p className="text-center text-gray-500 md:text-lg">
                The page you’re looking for doesn’t exist.
              </p>
            </div>
            <Button style="m-5">
              <Link to="/">Go home</Link>
            </Button>
            <p>Copyright &copy; 2023 | @volemazira</p>
          </div>
        </div>
      </div>
    </>
  );
}
