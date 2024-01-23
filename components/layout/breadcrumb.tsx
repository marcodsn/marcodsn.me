import { useRouter } from 'next/router';
import Link from 'next/link';


const Breadcrumb: React.FC = () => {
    const router = useRouter();
    const pathSegments = router.asPath.split('/').filter(Boolean);

    // Exclude the last segment if you don't want to show the current page
    const breadcrumbSegments = pathSegments.slice(0, -1);

    const createBreadcrumb = (segment: string, index: number) => {
        const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
        const segmentFormatted = segment.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());  // .toUpperCase();  // Only up the first letter

        return (
            <span key={path}>
                {/* {index > 0 && <span> / </span>} */}
                <Link href={path} className='hover:underline'>{segmentFormatted}</Link>
                <span className='px-1'> / </span>
            </span>
        );
    };

    return (
        <nav aria-label="breadcrumbs" className='text-sm py-4'>
            <Link href="/" className='hover:underline'>Home</Link>
            {/* {breadcrumbSegments.length > 0 && <span> / </span>} */}
            <span className='px-1'> / </span>
            {breadcrumbSegments.map(createBreadcrumb)}
        </nav>
    );
};

export default Breadcrumb;