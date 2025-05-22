import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function MapPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary">Interactive Tax Lien Map</CardTitle>
          <CardDescription className="text-lg text-foreground/80">
            Visualize tax lien data and identify potential opportunities. (Mock Data Displayed)
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center">
          <div className="w-full max-w-4xl aspect-video bg-muted rounded-lg shadow-inner flex items-center justify-center p-4 my-8">
            {/* Placeholder for interactive map. For MVP, a static image is used. */}
            <Image 
              src="https://picsum.photos/800/450" 
              alt="Placeholder map of a city with pins" 
              width={800} 
              height={450}
              className="rounded-md object-cover"
              data-ai-hint="map city"
            />
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Note: The map above is a placeholder. In a full version, this would be an interactive map displaying real-time or updated tax lien data.
          </p>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-primary">Using the Map</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-foreground/80">
            <li><strong>Explore Regions:</strong> Navigate and zoom to explore different areas.</li>
            <li><strong>Filter Data:</strong> Apply filters for lien amount, property type, etc. (Feature coming soon)</li>
            <li><strong>View Details:</strong> Click on pins to see detailed information about specific tax liens. (Feature coming soon)</li>
            <li><strong>Save Favorites:</strong> Mark interesting properties for later review. (Feature coming soon)</li>
          </ul>
          <p className="mt-4 text-foreground/80">
            Our goal is to provide a powerful tool for your research and investment strategy. Stay tuned for updates!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
