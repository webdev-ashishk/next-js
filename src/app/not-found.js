import Link from "next/link";
import { useRouter } from "next/navigation";

const PageNotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);
  return (
    <center className="notFound">
      <h2>page not found!</h2>
      <Link href="/" className="backtohome">
        Back to Home
      </Link>
    </center>
  );
};
export default PageNotFound;
