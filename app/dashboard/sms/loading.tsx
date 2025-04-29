import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <Skeleton className="h-8 w-[250px]" />
          <Skeleton className="h-4 w-[350px] mt-2" />
        </div>
        <Skeleton className="h-10 w-[150px]" />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <Skeleton className="h-5 w-[120px]" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-[80px]" />
                <Skeleton className="h-4 w-[100px] mt-2" />
              </CardContent>
            </Card>
          ))}
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-10 w-[250px]" />
          <Skeleton className="h-10 w-[100px]" />
        </div>

        <div className="rounded-md border">
          <div className="p-4">
            <div className="grid grid-cols-[1fr_150px_150px_100px_80px] gap-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-4 w-full" />
                ))}
            </div>
          </div>

          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="p-4 border-t">
                <div className="grid grid-cols-[1fr_150px_150px_100px_80px] gap-2">
                  <div>
                    <Skeleton className="h-5 w-[200px]" />
                    <Skeleton className="h-4 w-[150px] mt-2" />
                  </div>
                  <Skeleton className="h-6 w-[80px]" />
                  <div>
                    <Skeleton className="h-4 w-[100px]" />
                    <Skeleton className="h-2 w-full mt-2" />
                  </div>
                  <Skeleton className="h-4 w-[50px]" />
                  <Skeleton className="h-8 w-8 rounded-full" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
