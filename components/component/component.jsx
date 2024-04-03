import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Carousel from "../Slider";
import { Facts } from "./facts";

export default function Component() {
  return (
    (<div className="bg-white flex flex-col min-h-[100dvh]">
      <header className=" bg-zinc-200 px-4 lg:px-6 h-14 flex items-center sticky top-0">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6 text-blue-600" />
          <span className="sr-only">Developer World</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-blue-600 text-sm font-extrabold hover:underline underline-offset-4"
            href="#">
            Features
          </Link>
          <Link
            className=" text-blue-600 text-sm font-extrabold hover:underline underline-offset-4"
            href="#">
            Pricing
          </Link>
          <Link
            className="text-blue-600 text-sm font-extrabold hover:underline underline-offset-4"
            href="#">
            About
          </Link>
          <Link
            className=" text-blue-600 text-sm font-extrabold hover:underline underline-offset-4"
            href="#">
            Contact
          </Link>
        </nav>
      </header>

     <Carousel/> 

    

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div
            className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
            <div className="space-y-2 text-center">
              <h1 className="text-4xl font-sans text-blue-700 font-bold tracking-tighter sm:text-5xl md:text-6xl"> Dirty Water? <br />Make a Wave of Change</h1>
              <p
                className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 shadow-blue-500/50">
                Stop water pollution before it makes a splash! Let's work together to protect our water resources and ensure clean water for all.
              </p>
            </div>
            <div className="mx-auto w-full max-w-4xl space-y-4">
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                height="400"
                src="/scream.png"
                width="1200" />
            </div>
          </div>
        </section>

      <Facts/>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Causes of Water Pollution</h2>
              <p
                className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Water pollution is caused by various human activities, such as industrial discharge, agricultural
                runoff, and improper waste disposal.
              </p>
            </div>
            <div className="mx-auto max-w-5xl grid gap-6 md:gap-10">
              <Card>
                <CardHeader className="pb-0">
                  <CardTitle>Industrial Discharge</CardTitle>
                  <CardDescription>
                    Wastewater from factories and industrial facilities can contain harmful chemicals and heavy metals.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <img
                    alt="Image"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="310"
                    src="/industrial.webp"
                    width="550" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-0">
                  <CardTitle>Agricultural Runoff</CardTitle>
                  <CardDescription>
                    Excess fertilizers and pesticides from farms can seep into water bodies, leading to nutrient
                    pollution and algal blooms.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <img
                    alt="Image"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="310"
                    src="/agricultural.jpeg"
                    width="550" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-0">
                  <CardTitle>Improper Waste Disposal</CardTitle>
                  <CardDescription>
                    Trash and untreated sewage dumped into rivers and oceans can contaminate the water and harm aquatic
                    life.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <img
                    alt="Image"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="310"
                    src="/waste.jpeg"
                    width="550" />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Effects of Water Pollution
              </h2>
              <p
                className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Water pollution can have severe consequences on the environment, public health, and aquatic ecosystems.
              </p>
            </div>
            <div className="mx-auto max-w-5xl grid gap-6 md:gap-10">
              <Card>
                <CardHeader className="pb-0">
                  <CardTitle>Environmental Impact</CardTitle>
                  <CardDescription>
                    Polluted water can harm plants, animals, and marine life, leading to a loss of biodiversity.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <img
                    alt="Image"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="310"
                    src="/impact.webp"
                    width="550" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-0">
                  <CardTitle>Public Health Risks</CardTitle>
                  <CardDescription>
                    Contaminated water can spread waterborne diseases such as cholera, typhoid, and hepatitis.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <img
                    alt="Image"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="310"
                    src="/health.jpeg"
                    width="550" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-0">
                  <CardTitle>Economic Costs</CardTitle>
                  <CardDescription>
                    Water pollution can impact tourism, fisheries, and recreational activities, leading to economic
                    losses for communities.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <img
                    alt="Image"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="310"
                    src="/economic.jpeg"
                    width="550" />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Solutions to Water Pollution
              </h2>
              <p
                className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Addressing water pollution requires a multi-faceted approach that involves regulation, conservation, and
                community involvement.
              </p>
            </div>
            <div className="mx-auto max-w-5xl grid gap-6 md:gap-10">
              <Card>
                <CardHeader className="pb-0">
                  <CardTitle>Regulation</CardTitle>
                  <CardDescription>
                    Implementing and enforcing laws and regulations to control pollution from point sources such as
                    factories and wastewater treatment plants.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <img
                    alt="Image"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="310"
                    src="/regulations.png"
                    width="550" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-0">
                  <CardTitle>Conservation</CardTitle>
                  <CardDescription>
                    Protecting and restoring natural habitats such as wetlands and forests that can filter and purify
                    water.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <img
                    alt="Image"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="310"
                    src="/conservation.jpeg"
                    width="550" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-0">
                  <CardTitle>Community Involvement</CardTitle>
                  <CardDescription>
                    Educating and engaging the public to reduce pollution through responsible waste management and
                    sustainable practices.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <img
                    alt="Image"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="310"
                    src="/community.jpeg"
                    width="550" />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Take Action</h2>
              <p
                className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join the movement to protect our water resources. There are many ways to get involved and make a
                difference.
              </p>
            </div>
            <div className="mx-auto max-w-5xl grid gap-6 md:gap-10">
              <Card>
                <CardHeader className="pb-0">
                  <CardTitle>Sign the Petition</CardTitle>
                  <CardDescription>Add your voice to the call for stronger environmental protections.</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <img
                    alt="Image"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="310"
                    src="/Petition.jpg"
                    width="550" />
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Sign Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-0">
                  <CardTitle>Volunteer</CardTitle>
                  <CardDescription>
                    Join a local cleanup effort or conservation project to help protect waterways in your community.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <img
                    alt="Image"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="310"
                    src="/Volunteer.jpeg"
                    width="550" />
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Get Involved</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-0">
                  <CardTitle>Donate</CardTitle>
                  <CardDescription>
                    Support organizations working to protect and restore freshwater ecosystems.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <img
                    alt="Image"
                    className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                    height="310"
                    src="/donate.jpg"
                    width="550" />
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Contribute</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 developerworld. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>)
  );
}


function MountainIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}
