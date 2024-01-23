import Image from "next/image";
// import { FaArrowRight } from "react-icons/fa";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { title } from "process";


// Format date, from YYYYMMDD to Month DD, YYYY. e.g. 20210101 to January 1, 2021
// const formatDate = (dateStr: string): string => {
//     const year = dateStr.substring(0, 4);
//     const month = dateStr.substring(4, 6);
//     const day = dateStr.substring(6, 8);

//     const date = new Date(`${year}-${month}-${day}`);
//     return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(date);
// };

// Format date, from Month DD, YYYY, to YYYY-MM-DD. e.g. January 1, 2021 to 2021-01-01
// const formatDate = (dateStr: string): string => {
//     // Split the date string into components
//     const parts = dateStr.split(' ');

//     if (parts.length !== 3) {
//         throw new Error('Invalid date format');
//     }

//     const monthNames = ["January", "February", "March", "April", "May", "June",
//                         "July", "August", "September", "October", "November", "December"];
//     const month = monthNames.indexOf(parts[0]) + 1;
//     const day = parts[1].replace(',', ''); // Remove comma
//     const year = parts[2];

//     // Convert single digit month and day to two digits
//     const monthFormatted = month < 10 ? `0${month}` : month;
//     const dayFormatted = day.length < 2 ? `0${day}` : day;

//     return `${year}-${monthFormatted}-${dayFormatted}`;
// };

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
    className
}) => {
    return (
        <div>
            {/* <div className="h-px w-full bg-accent rounded-full" /> */}
            <a href={`/posts/${fileName}`} className="focus:outline-accent-foreground">
                <Card className={`shadow-none md:shadow-sm border-0 md:border md:mt-4 ${className}`}>
                    <CardContent className="m-0 md:m-2 p-0 pb-2 md:p-6 md:pt-0">  {/* or md:p-6 md:pt-0 */}
                        <div className="py-4 pt-3 flex flex-row justify-between items-center">
                            <p className='text-muted-foreground text-sm md:py-2'>
                                {/* {formatDate(date)} */}
                                {date}
                            </p>
                            <p className='text-muted-foreground text-sm'>
                                By {author}
                            </p>
                        </div>
                        {thumbnail && (
                            <Image
                                src={thumbnail}
                                alt={title}
                                width={1920}
                                height={1080}
                                className='rounded-md mb-6'
                                priority={true}
                            />
                        )}
                        <CardTitle className='mb-4'>{title}</CardTitle>
                        <CardDescription className='mb-0'>{description}</CardDescription>
                    </CardContent>
                </Card>
            </a>
            <div className="h-px w-full bg-muted rounded-full mb-4 md:hidden" />  {/* or bg-accent */}
        </div>
    );
}

// Date on bottom
// export const PostCard: React.FC<CardProps> = ({
//     fileName,
//     date,
//     title,
//     description,
//     thumbnail,
//     author,
//     className
// }) => {
//     return (
//         <div>
//             {/* <div className="h-px w-full bg-accent rounded-full" /> */}
//             <a href={`/posts/${fileName}`} className="focus:outline-accent-foreground">
//                 <Card className={`shadow-none md:shadow-sm border-0 md:border md:mt-4 ${className}`}>
//                     <CardContent className="m-0 md:m-1 p-0 md:p-6 md:pt-0">  {/* or md:p-6 md:pt-0 */}
//                         {thumbnail && (
//                             <Image
//                                 src={thumbnail}
//                                 alt={title}
//                                 width={1920}
//                                 height={1080}
//                                 className='rounded-md mt-7'
//                                 priority={true}
//                             />
//                         )}
//                         <CardTitle className='mb-4 mt-7'>{title}</CardTitle>
//                         <CardDescription className='mb-0'>{description}</CardDescription>
//                         <div className="pt-8 flex flex-row justify-between items-center">
//                             <p className='text-muted-foreground text-sm'>
//                                 {date}
//                             </p>
//                             <p className='text-muted-foreground text-sm'>
//                                 By {author}
//                             </p>
//                         </div>
//                     </CardContent>
//                 </Card>
//             </a>
//             <div className="h-px w-full bg-muted rounded-full md:hidden" />  {/* or bg-accent */}
//         </div>
//     );
// }
