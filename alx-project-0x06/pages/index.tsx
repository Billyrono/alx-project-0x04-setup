import Button from "@/components/common/Button";
import Layout from "@/components/layouts/Layout";
import { PageRouteProps } from "@/interface";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  // Imeperative routing with useRouter
  const routeToNextPage = ({ pageRoute }: PageRouteProps) => {
    router.push(pageRoute, undefined, { shallow: false });
  };

  return (
    <Layout>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center text-center
      bg-[url('https://media.istockphoto.com/id/1222609186/photo/water-splash-spills-out-of-glass-3d-action-movement-rendering-illustration.jpg?s=612x612&w=0&k=20&c=2jMYkBQSa8YtOP7SS0JQhil5E_ttwmNUrIzY_tnImPE=')]"
      >
        {/* Welcome Message */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Splash App!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your one-stop platform for everything AI you need. Start exploring by
          navigating to our features below.
        </p>

        {/* Navigation Options */}
        <div className="flex gap-6">
          <Button
            action={() => routeToNextPage({ pageRoute: "/generate-text-ai" })}
            buttonLabel="Generate Text"
            buttonBackgroundColor="blue"
          />
          <Button
            action={() => routeToNextPage({ pageRoute: "/text-to-image" })}
            buttonLabel="Text to Image"
            buttonBackgroundColor="green"
          />
          <Button
            action={() => routeToNextPage({ pageRoute: "/counter-app" })}
            buttonLabel="Counter App"
            buttonBackgroundColor="orange"
          />
        </div>
      </div>
    </Layout>
  );
}
