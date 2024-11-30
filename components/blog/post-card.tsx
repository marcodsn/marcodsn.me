import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardProps {
  fileName: string;
  key: string;
  date: string;
  title: string;
  description: string;
  thumbnail: string;
  author: string;
  className?: string;
}

// Date on top
export const PostCard: React.FC<CardProps> = ({
  fileName,
  date,
  title,
  description,
  thumbnail,
  author,
  className,
}) => {
  return (
    <div>
      <a
        href={`/posts/${fileName}`}
        className="focus:outline-accent-foreground"
      >
        <Card
          className={`shadow-none md:shadow-sm border-0 md:border md:mt-4 rounded-xl ${className}`}
        >
          <CardContent className="m-0 md:m-2 p-0 pb-2 md:p-6 md:pt-0">
            {" "}
            {/* or md:p-6 md:pt-0 */}
            <div className="py-4 pt-3 flex flex-row justify-between items-center">
              <p className="text-muted-foreground text-sm md:py-2">
                {/* {formatDate(date)} */}
                {date}
              </p>
              <p className="text-muted-foreground text-sm">By {author}</p>
            </div>
            {thumbnail && (
              <Image
                src={thumbnail}
                alt={title}
                width={1920}
                height={1080}
                className="rounded-md mb-6"
                priority={true}
              />
            )}
            <CardTitle className="mb-4">{title}</CardTitle>
            <CardDescription className="mb-0">{description}</CardDescription>
          </CardContent>
        </Card>
      </a>
      <div className="h-px w-full bg-muted rounded-full mb-4 md:hidden" />{" "}
      {/* or bg-accent */}
    </div>
  );
};
