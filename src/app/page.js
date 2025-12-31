import { appConfig } from "@/config/app.config";

export default function Home() {
  return (
    <h1 className="text-primary">{appConfig.name}</h1>
  );
}
