import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Facts() {
  return (
    (<div
      className="bg-gray-50 border-t border-b border-gray-200 dark:border-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <img
            alt="Hero"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom lg:order-last lg:aspect-square"
            height="310"
            src="/water-pollution.png"
            width="550" />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                The Global Crisis of Water Pollution
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Every day, millions suffer from polluted water. Let's understand the problem and work towards a
                solution.
              </p>
            </div>
            <div className="grid gap-2 min-[400px]:grid-flow-col">
              <Link
                className="inline-flex items-center gap-2 text-base font-medium underline-anim hover:text-cyan-600 transition-colors"
                href="#">
                Learn More
                <ChevronRightIcon
                  className="w-4 h-4 peer-[translate-x-2] transition-transform duration-150 ease-in-out group-hover:translate-x-1 dark:text-gray-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className="grid-inset-both py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div
            className="flex flex-col items-center justify-center space-y-4 text-center lg:space-y-6 lg:gap-4 lg:flex-row lg:justify-between lg:grid lg:grid-cols-3 xl:gap-6">
            <div className="space-y-2 lg:space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl">The Facts</h2>
              <p
                className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Water pollution is a growing crisis. Here are some key statistics.
              </p>
            </div>
            <div className="grid gap-4 lg:col-start-2 lg:gap-6">
              <div className="flex items-start gap-4">
                <GlassWaterIcon className="w-8 h-8 text-cyan-500" />
                <div className="grid gap-1.5">
                  <h3 className="font-semibold">1.1 billion</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">People lack access to clean water.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FishIcon className="w-8 h-8 text-cyan-500" />
                <div className="grid gap-1.5">
                  <h3 className="font-semibold">80%</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Of global wastewater is untreated.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <TrashIcon className="w-8 h-8 text-cyan-500" />
                <div className="grid gap-1.5">
                  <h3 className="font-semibold">1 million</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Sea birds and marine animals die each year due to plastic pollution.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-4 lg:col-start-3 lg:gap-6">
              <div className="flex items-start gap-4">
                <ShellIcon className="w-8 h-8 text-cyan-500" />
                <div className="grid gap-1.5">
                  <h3 className="font-semibold">1.3 trillion</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Gallons of oil are spilled into the ocean annually.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <AtomIcon className="w-8 h-8 text-cyan-500" />
                <div className="grid gap-1.5">
                  <h3 className="font-semibold">700 million</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    People are affected by heavy metal pollution.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <SprayCanIcon className="w-8 h-8 text-cyan-500" />
                <div className="grid gap-1.5">
                  <h3 className="font-semibold">50%</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Of pesticides used end up in water bodies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="grid-inset-both py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Causes</h2>
              <p
                className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Water pollution is caused by various human activities, including industrial waste, agricultural runoff,
                and improper disposal of waste.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Effects</h2>
              <p
                className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The effects of water pollution are far-reaching. Contaminated water can lead to waterborne diseases,
                harm aquatic life, and impact ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>)
  );
}


function ChevronRightIcon(props) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>)
  );
}


function GlassWaterIcon(props) {
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
      <path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z" />
      <path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0" />
    </svg>)
  );
}


function FishIcon(props) {
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
      <path
        d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
      <path d="M18 12v.5" />
      <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
      <path
        d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" />
      <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
      <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" />
    </svg>)
  );
}


function TrashIcon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>)
  );
}


function ShellIcon(props) {
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
      <path
        d="M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44" />
    </svg>)
  );
}


function AtomIcon(props) {
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
      <circle cx="12" cy="12" r="1" />
      <path
        d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
      <path
        d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
    </svg>)
  );
}


function SprayCanIcon(props) {
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
      <path d="M3 3h.01" />
      <path d="M7 5h.01" />
      <path d="M11 7h.01" />
      <path d="M3 7h.01" />
      <path d="M7 9h.01" />
      <path d="M3 11h.01" />
      <rect width="4" height="4" x="15" y="5" />
      <path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" />
      <path d="m13 14 8-2" />
      <path d="m13 19 8-2" />
    </svg>)
  );
}
